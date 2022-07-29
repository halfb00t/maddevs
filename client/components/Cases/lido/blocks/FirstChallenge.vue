<template>
  <section class="case-lido__first-challenge m-96_bottom media-m-48_bottom">
    <div class="container_regular">
      <h4 class="case_title_h4 m-12_bottom">
        First Challenge: Integration with the liquidity pool
      </h4>
      <TextParagraph
        class="case-lido__first-challenge-subtitle m-24_bottom"
      >
        Liquidity pool - a contract that stores tokenized liquidity attracted from users, in tokens.
        In exchange, users receive liquidity pool tokens and rewards.
      </TextParagraph>
      <TextParagraph class="m-24_bottom">
        After conducting analysis and research, we determined that 1inch has a an integrated rewards manager
        to which we could connect the rewards contract. But we had to adapt it.
      </TextParagraph>
      <TextParagraph>
        The user provides Ether via
        <a
          href="https://stake.lido.fi/"
          class="case_link-in-text"
          target="_blank"
        >
          stake.lido.fi
        </a> to the Ethereum 2.0 pool, receiving an equivalent amount of stETH tokens in return.
      </TextParagraph>
    </div>
    <div class="container_middle m-48_top media-m-24_top">
      <div class="case_image-wrapper case_box-shadow">
        <Picture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-white"
          extension="jpg"
          alt="Project visibility"
        />
        <div class="case_image-main-image">
          <Picture
            :shadow="false"
            :lazy="false"
            :radius="false"
            :width="1028"
            :height="595.81"
            folder="lido"
            file="stake-ether"
            extension="png"
            alt="Stake Ether"
          />
        </div>
      </div>
    </div>
    <div class="container_regular m-72_top media-m-48_top">
      <TextParagraph>
        The user buys some amount of DAI on stocks or from exchangers (Metamask allows to do this).
        Liquidity provider selects liquidity pool for 1inch. In our case, it will be a pair of DAI-stETH.
      </TextParagraph>
    </div>
    <div class="container_middle m-48_top media-m-24_top">
      <div class="case_image-wrapper case_box-shadow">
        <Picture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-white"
          extension="jpg"
          alt="Project visibility"
        />
        <div class="case_image-main-image">
          <Picture
            :shadow="false"
            :lazy="false"
            :radius="false"
            :width="1028"
            :height="416"
            folder="lido"
            file="1inch"
            extension="png"
            alt="1inch"
          />
        </div>
      </div>
    </div>
    <div class="container_regular m-72_top media-m-48_top">
      <TextParagraph>
        It then gives access to its stETH tokens. A liquid staked Ether 2.0 (stETH) contact is made through DelegateProxy.
        This allows the liquidity pool contract (Mooniswap, it is unique for each pair, it will be new) to use
        the entire balance of stETH tokens belonging to the user.
      </TextParagraph>
    </div>
    <div class="container_middle m-48_top media-m-24_top">
      <div class="case_image-wrapper case_box-shadow">
        <Picture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-white"
          extension="jpg"
          alt="Project visibility"
        />
        <div class="case_image-main-image">
          <Picture
            :shadow="false"
            :lazy="false"
            :radius="false"
            :width="1028"
            :height="416"
            folder="lido"
            file="provide"
            extension="png"
            alt="1inch"
          />
        </div>
      </div>
    </div>
    <div class="container_regular m-72_top media-m-48_top">
      <TextParagraph class="m-24_bottom">
        The user then transfers tokens into the liquidity pool. Mooniswap is the deposit method of the liquidity
        pool contract. This operation transfers stETH tokens from the user's balance to the liquidity pool
        contract's balance. In exchange, the liquidity pool transfers LP tokens to the user. The LP tokens contract for each liquidity pool is unique.
      </TextParagraph>
      <TextParagraph class="m-24_bottom">
        The user then loads his LP tokens into the
        <a
          href="https://app.1inch.io/#/1/swap/ETH/stETH"
          target="_blank"
          class="case_link-in-text"
        >
          farming.
        </a>
      </TextParagraph>
      <TextParagraph>
        The user can withdraw his reward for farming stETH and DAI, withdraw all uploaded tokens (Withdraw), or exit farming entirely (Exit).
      </TextParagraph>
    </div>
    <div class="container_middle m-48_top media-m-24_top">
      <div class="case_image-wrapper case_box-shadow">
        <Picture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-white"
          extension="jpg"
          alt="Project visibility"
        />
        <div class="case_image-main-image">
          <Picture
            :shadow="false"
            :lazy="false"
            :radius="false"
            :width="1028"
            :height="595.81"
            folder="lido"
            file="deposit"
            extension="png"
            alt="1inch"
          />
        </div>
      </div>
    </div>
    <div class="container_regular m-48_top media-m-24_top">
      <TextParagraph class="m-48_bottom">
        In Withdraw method, all tokens loaded into the pool are transferred back to the user.<br>
        During co-investment, when users request a reward, LDO and 1INCH tokens are also transferred to them.
      </TextParagraph>
      <EmbedCard
        v-bind="liquidityPoolData"
      />
    </div>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'
import EmbedCard from '@/components/Cases/shared/EmbedCard'
import { liquidityPoolData } from '@/data/caseLido'

export default {
  name: 'FirstChallenge',

  components: { EmbedCard, Picture, TextParagraph },

  data() {
    return {
      liquidityPoolData,
    }
  },
}
</script>
<style scoped lang="scss">
.case-lido__first-challenge {
  &-subtitle {
    font-weight: bold;
  }

  & .case_image-wrapper {
    border-radius: 3px;
    overflow: hidden;
  }

  & .case_image-main-image {
    border-top: 1px solid $border-color--grey-20-percent;
  }
}
</style>
