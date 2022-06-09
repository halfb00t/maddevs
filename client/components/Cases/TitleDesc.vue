<template>
  <div class="container">
    <section class="title-desc">
      <h1>Case studies</h1>
      <p>We help world-class brands and startups engineer their growth and reach desired outcomes with efficacy and creativity.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TitleDesc',
}
</script>

<style lang="scss" scoped>
.title-desc {
  margin-top: 180px;
  margin-bottom: 54px;

  @media screen and (max-width: 970px) {
    margin-top: 120px;
    margin-bottom: 47px;
  }

  @media screen and (max-width: 430px) {
    margin-top: 116px;
    margin-bottom: 2px;
  }

  h1 {
    @include font('Poppins', 100px, 800);
    line-height: 96px;
    color: $text-color--white-primary;
    margin-bottom: 32px;

    @media screen and (max-width: 1140px) {
      font-size: 90px;
    }

    @media screen and (max-width: 970px) {
      font-size: 76px;
      line-height: 100%;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 15px;
    }

    @media screen and (max-width: 576px) {
      font-size: 60px;
    }

    @media screen and (max-width: 430px) {
      font-size: 28px;
      line-height: 32px;
      letter-spacing: -0.05em;
      margin-bottom: 0;
    }
  }

  p {
    @include font('Inter', 28px, 400);
    max-width: 820px;
    line-height: 34px;
    letter-spacing: -0.013em;
    color: $text-color--white-primary;

    @media screen and (max-width: 1140px) {
      font-size: 26px;
    }

    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 28px;
    }

    @media screen and (max-width: 576px) {
      font-size: 18px;
      line-height: 23px;
    }

    @media screen and (max-width: 430px) {
      display: none;
    }
  }
}
</style>
