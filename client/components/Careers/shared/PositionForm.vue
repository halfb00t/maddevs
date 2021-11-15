<template>
  <div>
    <form
      class="position-form"
      @submit.prevent="submitForm"
    >
      <div class="position-form__message">
        <label class="position-form__field">
          {{ $t('careers.detailPage.form.name') }}
          <FormInput
            ref="nameInput"
            v-model="name"
            type="text"
            :placeholder="$t('careers.detailPage.form.yourname')"
            class="position-form__input position-form__input-name"
            @input="$v.name.$touch"
          />.
          <br> {{ $t('careers.detailPage.form.description') }}
          <!-- Erros -->
          <div v-if="$v.name.$dirty">
            <span
              v-if="!$v.name.required"
              class="position-form__error error-text"
            >{{ $t('form.errors.required') }}</span>
            <span
              v-if="!$v.name.maxLength"
              class="position-form__error error-text"
            >
              {{ $t('form.errors.max') }}
            </span>
          </div>
          <!-- End Erros -->
        </label>
        <p class="position-form__field position-form__field-positions">
          <span class="position-form__field-description">
            {{ $t('careers.detailPage.form.position.description') }}
          </span>
          <UIRadioButtons
            ref="radioButtons"
            v-model="grade"
            class="position-form__positions-list"
            :options="grades"
            @change="$v.grade.$touch"
          />
          <span class="position-form__field-roles">
            {{ $t('careers.detailPage.form.position.roles') }}
          </span>
          <!-- Erros -->
          <span class="position-form__field-error">
            <div v-if="$v.grade.$dirty">
              <span
                v-if="!$v.grade.required"
                class="position-form__error error-text"
              >
                {{ $t('form.errors.required') }}
              </span>
            </div>
          </span>
          <!-- End Erros -->
        </p>
        <label class="position-form__field">
          {{ $t('careers.detailPage.form.email') }}
          <FormInput
            v-model="email"
            type="email"
            placeholder="your@mail.com"
            class="position-form__input position-form__input-email"
            @input="$v.email.$touch"
          />
          <!-- Erros -->
          <div v-if="$v.email.$dirty">
            <span
              v-if="!$v.email.required"
              class="position-form__error error-text"
            >{{ $t('form.errors.required') }}</span>
            <span
              v-if="!$v.email.email"
              class="position-form__error error-text"
            >
              {{ $t('form.errors.email') }}
            </span>
          </div>
          <!-- End Erros -->
        </label>
        <p class="position-form__field position-form__skills">
          {{ $t('careers.detailPage.form.skills.description') }}
          <ul class="position-form__skills-list">
            <li>
              <label>
                {{ $t('careers.detailPage.form.skills.checkout') }}
                <FormInput
                  v-model="linkedin"
                  type="text"
                  :placeholder="$t('careers.detailPage.form.skills.placeholderLinkedin')"
                  class="position-form__input position-form__input-linkedin"
                />
              </label>
              {{ $t('careers.detailPage.form.skills.and') }}
            </li>
            <li>
              <label>
                <FileInput
                  ref="fileInput"
                  v-model="cvFile"
                  :placeholder="$t('careers.detailPage.form.skills.placeholderCV')"
                  @input="handleFileSelect"
                />
                <!-- Errors -->
                <div v-if="$v.cvFile.$dirty">
                  <span
                    v-if="!$v.cvFile.required"
                    class="position-form__error position-form__error--file-attach error-text"
                  >
                    {{ $t('form.errors.required') }}
                  </span>
                  <span
                    v-if="!$v.cvFile.fileExt"
                    class="position-form__error position-form__error--file-attach error-text"
                  >
                    {{ $t('form.errors.upload') }}
                  </span>
                  <span
                    v-if="!$v.cvFile.fileSizeValidation"
                    class="position-form__error position-form__error--file-attach error-text"
                  >
                    {{ $t('form.errors.uploadMax') }}
                  </span>
                </div>
                <!-- End Errors -->
              </label>
            </li>
          </ul>
        </p>
      </div>
      <UIButton
        type="submit"
        :disabled="$v.validationGroup.$invalid"
      >
        {{ $t('careers.detailPage.form.btn') }}
      </UIButton>
    </form>
    <!-- this id should be unique, because it used for google analytics -->
    <ModalSuccess
      id="career-modal"
      ref="successModal"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, email, maxLength } from 'vuelidate/lib/validators'
import UIRadioButtons from '@/components/shared/UIRadioButtons'
import UIButton from '@/components/shared/UIButton'
import FormInput from '@/components/Careers/shared/FormInput'
import FileInput from '@/components/Careers/shared/FileInput'
import ModalSuccess from '@/components/core/modals/ModalSuccess'

import { fileSizeValidation, fileExt } from '@/helpers/validators'
import parseUserAgentForLeads from '@/helpers/parseUserAgentForLeads'

export default {
  name: 'PositionForm',
  components: {
    FormInput,
    UIRadioButtons,
    FileInput,
    UIButton,
    ModalSuccess,
  },

  validations: {
    name: {
      required,
      maxLength: maxLength(50),
    },

    grade: {
      required,
    },

    email: {
      required,
      email,
    },

    cvFile: {
      required,
      fileExt,
      fileSizeValidation,
    },

    validationGroup: ['name', 'email', 'grade', 'cvFile'],
  },

  props: {
    position: {
      type: String,
      default: '',
    },

    huntflowVacancyId: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      name: null,
      grade: null,
      email: null,
      cvFile: null,
      linkedin: null,
      form: '',
    }
  },

  computed: {
    grades() {
      return [
        {
          value: 'senior',
          label: this.$t('careers.detailPage.form.position.role1'),
        },
        {
          value: 'middle',
          label: this.$t('careers.detailPage.form.position.role2'),
        },
        {
          value: 'junior',
          label: this.$t('careers.detailPage.form.position.role3'),
        },
        {
          value: 'intern',
          label: this.$t('careers.detailPage.form.position.role4'),
        },
      ]
    },
  },

  methods: {
    ...mapActions(['sendVacancy']),

    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },

    async buildApplicantData() {
      const splitedName = this.name.split(' ')
      const base64File = await this.toBase64(this.cvFile)
      const { userBrowser, userOS, userPlatform } = parseUserAgentForLeads()

      return {
        body: {
          huntflow: {
            vacancyId: this.huntflowVacancyId,
            firstName: splitedName[0],
            middleName: splitedName.length > 2 ? splitedName[1] : '',
            lastName:
              splitedName.length > 1 ? splitedName[splitedName.length - 1] : '',

            email: this.email,
            positionTitle: this.position,
            positionValue: this.grade.value,
            linkedinProfile: this.linkedin,
          },

          email: {
            templateId: 305491, // Required
            variables: {
              fullName: this.name,
              email: this.email,
              emailTo: process.env.emailCV,
              linkedinProfile: this.linkedin,
              positionTitle: this.position,
              positionValue: this.grade.value,
              subject: `Job Candidate Application for ${this.position}`,
              modalTitle: 'Mad Devs Website Careers Form',
              pageUrl: (window && window.location.href) || 'Unknown',
              userBrowser,
              userOS,
              userPlatform,
              formLocation:
                '\'I want to work for Mad Devs\' button, vacancy page',
            },

            attachment: {
              base64: base64File.replace(/^data:(.*,)?/, ''),
              name: this.cvFile.name,
            },
          },
        },

        cvFile: this.cvFile,
      }
    },

    handleFileSelect() {
      if (this.$v && this.$v.cvFile) this.$v.cvFile.$touch()
    },

    resetForm() {
      this.$v.$reset() // Reset validation form
      this.$refs.fileInput.reset()
      this.$refs.radioButtons.reset()
      this.name = null
      this.grade = null
      this.email = null
      this.cvFile = null
      this.linkedin = null
    },

    async submitForm() {
      if (this.$v.validationGroup.$invalid) return

      const applicantData = await this.buildApplicantData()
      this.sendVacancy(applicantData)
      this.$refs.successModal.show()
      this.resetForm()
    },

  },
}
</script>

<style lang="scss" scoped>
/deep/ .ui-button {
  width: 255px;
  height: 48px;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: -0.1px;
  border-radius: 6px;
  margin-top: 32px;
  font-weight: normal;
}

.position-form {
  background-color: $bgcolor--silver;
  color: $text-color--black-oil;
  padding: 40px;
  padding-bottom: 45px;
  border-radius: 8px;
  overflow: hidden;
  /deep/ br {
    display: none;
    @media screen and (max-width: 400px) {
      display: block;
    }
  }

  &__field-positions {
    display: flex;
    flex-wrap: wrap;
  }

  &__field-description {
    margin-right: 11px;
  }

  &__field-error {
    width: 100%;
    display: block;
  }

  /deep/ .ui-radio-buttons {
    display: flex;
    flex-flow: row wrap;
    grid-row-gap: initial;

    &_item {
      &:last-child {
        margin-right: 11px;
      }
      &-circle {
        width: 18px;
        height: 18px;
      }
    }
  }
  &__message,
  /deep/ .ui-radio-buttons_item-label {
    font-size: 20px;
    line-height: 34px;
    letter-spacing: -0.1px;
  }
  &__input {
    max-width: 45%;
  }
  &__error {
    position: relative;
    top: -6px;
    font-size: 14px;
    margin-top: 0;
    line-height: normal;
  }
  &__skills {
    margin-top: 32px;
    &-list {
      padding-left: 25px;
      list-style: disc;
    }
  }

  @media screen and (max-width: 768px) {
    &__message,
    /deep/ .ui-radio-buttons_item-label {
      font-size: 18px;
      line-height: 29px;
    }
    &__error {
      top: -4px;
      font-size: 12px;
      line-height: 15px;
    }
  }

  @media screen and (max-width: 576px) {
    padding: 24px;
    padding-bottom: 29px;
    &__message,
    /deep/ .ui-radio-buttons_item-label {
      font-size: 17px;
      line-height: 27px;
    }
    &__error {
      top: -4px;
      font-size: 12px;
      line-height: 15px;
    }
  }
}
</style>
