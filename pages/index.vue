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
      <a href="https://www.instagram.com/tarassenko.dev/" data-type="instagram" class="error_link">tarassenko.dev</a>
    </div>
    <div class="error_telegram error_block">
      <h2 class="error_title">
        Telegram:
      </h2>
      <a href="https://t.me/tarassenko_dev" data-type="telegram" class="error_link">t.me/tarassenko_dev</a>
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

<style lang="scss" scoped>

/* error start*/

.error {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "error_portfolio error_info" "error_telegram error_instagram";
    width: 100vw;
    height: 100vh;
    position: relative;
    @media screen and (max-width: 450px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas: "error_portfolio" "error_info" "error_telegram" "error_instagram";
    }
    &_portfolio {
        transition: all .5s ease-in;
        grid-area: error_portfolio;
        background: #FFFFFF;
        color: #000;
        a {
            color: #000;
            position: relative;
            transition: all .5s ease-in;
            &:before {
                position: absolute;
                content: '';
                width: 0;
                height: 1px;
                left: 0;
                bottom: 0;
                background: #000;
                transition: all .5s ease-in;
            }
            &:hover:before {
                width: 100%;
                transition: all .5s ease-in;
            }
        }
        &-active {
            .error {
                &_instagram,
                &_telegram,
                &_info,
                &_portfolio {
                    transition: all .5s ease-in;
                    background: #FFFFFF;
                    color: #000;
                    a {
                        color: #000;
                        transition: all .5s ease-in;
                    }
                }
                &_top {
                    color: #000;
                    transition: all .5s ease-in;
                }
            }
        }
    }
    &_info {
        transition: all .5s ease-in;
        grid-area: error_info;
        background: #800009;
        color: #FFFFFF;
        a {
            color: #FFFFFF;
            position: relative;
            transition: all .5s ease-in;
            &:before {
                position: absolute;
                content: '';
                width: 0;
                height: 1px;
                left: 0;
                bottom: 0;
                background: #FFFFFF;
                transition: all .5s ease-in;
            }
            &:hover:before {
                width: 100%;
                transition: all .5s ease-in;
            }
        }
        &-active {
            .error {
                &_instagram,
                &_telegram,
                &_info,
                &_portfolio {
                    transition: all .5s ease-in;
                    background: #800009;
                    color: #FFFFFF;
                    a {
                        color: #FFFFFF;
                        transition: all .5s ease-in;
                    }
                }
                &_top {
                    color: #FFFFFF;
                    transition: all .5s ease-in;
                }
            }
        }
    }
    &_instagram {
        transition: all .5s ease-in;
        grid-area: error_instagram;
        background: #B73030;
        color: #000;
        a {
            color: #000;
            position: relative;
            transition: all .5s ease-in;
            &:before {
                position: absolute;
                content: '';
                width: 0;
                height: 1px;
                left: 0;
                bottom: 0;
                background: #000;
                transition: all .5s ease-in;
            }
            &:hover:before {
                width: 100%;
                transition: all .5s ease-in;
            }
        }
        &-active {
            .error {
                &_instagram,
                &_telegram,
                &_info,
                &_portfolio {
                    transition: all .5s ease-in;
                    background: #B73030;
                    color: #000;
                    a {
                        color: #000;
                        transition: all .5s ease-in;
                    }
                }
                &_top {
                    color: #000;
                    transition: all .5s ease-in;
                }
            }
        }
    }
    &_telegram {
        transition: all .5s ease-in;
        grid-area: error_telegram;
        background: #EF635A;
        color: #FFFFFF;
        a {
            color: #FFFFFF;
            position: relative;
            transition: all .5s ease-in;
            &:before {
                position: absolute;
                content: '';
                width: 0;
                height: 1px;
                left: 0;
                bottom: 0;
                background: #FFFFFF;
                transition: all .5s ease-in;
            }
            &:hover:before {
                width: 100%;
                transition: all .5s ease-in;
            }
        }
        &-active {
            .error {
                &_instagram,
                &_telegram,
                &_info,
                &_portfolio {
                    transition: all .5s ease-in;
                    background: #EF635A;
                    color: #FFFFFF;
                    a {
                        color: #FFFFFF;
                        transition: all .5s ease-in;
                    }
                }
                &_top {
                    color: #FFFFFF;
                    transition: all .5s ease-in;
                }
            }
        }
    }
    &_block {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        >a {
            margin-top: 10px;
            ;
        }
    }
    &_top {
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 97vw;
        height: 97vh;
        font-size: 5rem;
        font-family: 'Pioneer';
        flex-direction: column;
        transition: all .5s ease-in;
        @media screen and (max-width: 1000px) {
            width: 98vw;
            height: 97vh;
            top: 1vh;
            letter-spacing: -1.3px;
            font-size: 4rem;
        }
        @media screen and (max-width: 640px) {
            width: 98vw;
            height: 97vh;
            top: 1vh;
            letter-spacing: -1.3px;
            font-size: 3rem;
        }
        @media screen and (max-width: 450px) {
            width: 98vw;
            height: 97vh;
            top: 1vh;
            letter-spacing: -1.3px;
            font-size: 1.3em;
        }
    }
}


/* error end*/

</style>
