<template>
  <main class="error">
    <h1 class="error_top">Taras Senko <span>Web Developer</span></h1>
    <div class="error_portfolio error_block" >
      <h2 class="error_title">
        Portfolio:
      </h2>
      <nuxt-link to='/portfolio' class="error_link" data-type="portfolio">tarassenko.dev/portfolio</nuxt-link>
    </div>
    <div class="error_info error_block">
      <h2 class="error_title">
        Сontact:
      </h2>
      <nuxt-link to='/contact' class="error_link" data-type="info">tarassenko.dev/contact</nuxt-link>
    </div>
    <div class="error_instagram error_block">
      <h2 class="error_title">
        Instagram:
      </h2>
      <a href="https://www.instagram.com/senyassharagi/" data-type="instagram" class="error_link">senyassharagi</a>
    </div>
    <div class="error_telegram error_block">
      <h2 class="error_title">
        Telegram:
      </h2>
      <a href="https://t.me/senyassharagi" data-type="telegram" class="error_link">t.me/senyassharagi</a>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    const errorLink = document.querySelectorAll('.error_link');

    for (let i = 0; i < errorLink.length; i++) {
      let dataType = errorLink[i].getAttribute('data-type'),
        error = document.querySelector('.error'),
        errorHead = document.querySelector('.error_top');
      errorLink[i].addEventListener('mouseleave', e => {
        errorHead.innerHTML = 'Taras Senko<span>Web Developer</span>';
        error.classList = 'error';
      });
      errorLink[i].addEventListener('mouseenter', e => {
        let dataType = errorLink[i].getAttribute('data-type'),
          error = document.querySelector('.error');
        switch (dataType) {
          case 'telegram':
            error.classList.add('error_telegram-active');
            break;
          case 'info':
            error.classList.add('error_info-active');
            break;
          case 'portfolio':
            error.classList.add('error_portfolio-active');
            break;
          case 'instagram':
            error.classList.add('error_instagram-active');
            break;
        }
      });
    }
  },
}
</script>

<style>

</style>
