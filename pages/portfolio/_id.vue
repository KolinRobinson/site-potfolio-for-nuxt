<template>
  <main>
    <style type="text/css">
         :root {
            --main-bg-color: #B70021;
        }
    </style>

    <section class="work-intro">
        <h1 class="font-plaster">{{work.titleWork}}</h1>
        <a href="#workHistory" class="work-intro__arrow">
            <img src="@/assets/svg/Vector.svg" alt="arrow">
        </a>
    </section>

    <section id="workHistory" class="work-history">
        <div class="container">
            <div class="work-history__wrapper">
                <h2 class="work-history__sub-title sub-title">{{work.historyTitle}}</h2>
                <div class="work-history__info">
                    <p class="work-history__info--text">{{work.historyInfo}}</p>
                </div>
                <div class="work-history__link">
                    <a :href="work.linkSite" class="visit-link-right">visit website</a>
                </div>
            </div>
        </div>
    </section>

    <section class="work-view">
        <div class="container">
            <figure class="work-view__wrapper">
                <img :src="work.viewImg[0].fields.file.url" :alt="work.viewImg[0].fields.title" class="work-view__img">
                <figcaption class="work-view__text">{{work.viewImgText}}</figcaption>
            </figure>
        </div>
    </section>

    <section class="work-color">
        <div class="container">
            <div class="work-color__wrapper">
                <h2 class="work-color__sub-title sub-title">{{work.colorTitle}}</h2>
                <div class="work-color__blocks">
                    <div class="work-color__single" :style="{backgroundColor: color1, color: color3}">
                        <p>Color: {{work.color1}}</p>
                    </div>
                    <div class="work-color__single" :style="{backgroundColor: color2, color: color1}">
                        <p>Color: {{work.color2}}</p>
                    </div>
                    <div class="work-color__single" :style="{backgroundColor: color3, color: color2}">
                        <p>Color: {{work.color3}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- <section class="work-mobile">
        <div class="container">
            <div class="work-mobile__wrapper">
                <h2 class="work-color__sub-title sub-title">Адаптив и контакт с<br>пользователем</h2>
                <div class="work-mobile__content">
                    <div class="work-mobile__adaptive">
                        <div class="mobile-markup">
                            <div class="mobile-markup__inner">
                                <img src="./assets/img/work-adaptive.png" alt="adaptive">
                            </div>
                        </div>
                    </div>
                    <div class="work-mobile__users">
                        <p class="work-mobile__users--info">
                            Мобильная версия сайта в 2020 году очень важна. Половина всех посетителей веб-сайтов заходят именно с мобильных устройств. Сейчас важно делать все для удобства ознакомления читателя с контентом.На данном примере вы можете рассмотреть отображение сайта
                            на iphone 6S.
                        </p>
                        <div class="work-mobile__experience-block">
                            <h3>Взаимодействие с читателем</h3>
                            <div class="experience__wrapper">
                                <div class="experience__wrapper--menu">
                                    <video src="./assets/video/menu.MOV" autoplay loop></video>
                                </div>
                                <div class="experience__wrapper--btn">
                                    <video src="./assets/video/btn.MP4" autoplay loop></video>
                                    <figure class="experience__content">
                                        <img src="./assets/img/button-red.png" alt="button-red" class="experience__content--img">
                                        <img src="./assets/img/button-black.png" alt="button-black" class="experience__content--img">
                                        <figcaption class="work-view__text">Примеры анимаций на сайте</figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="work-typography">
        <div class="container">
            <div class="work-typography__wrapper">
                <h2 class="work-typography__sub-title sub-title">Типографика сайта</h2>
                <div class="work-typography__blocks">
                    <figure class="work-typography__img">
                        <img src="./assets/svg/artspire-typo-01.svg" alt="Tesla-site" class="work-view__img">
                        <figcaption class="work-view__text">HEADLINE - PLAYFAIR DISPLAY BOLD</figcaption>
                    </figure>
                    <figure class="work-typography__img">
                        <img src="./assets/svg/artspire-typo-02.svg" alt="Tesla-site" class="work-view__img">
                        <figcaption class="work-view__text">BODYTEXT - ASSISTANT REGULAR</figcaption>
                    </figure>

                </div>
            </div>
        </div>
    </section>

    <footer class="work-footer">
        <div class="container">
            <div class="work-footer__wrapper">
                <h2 class="work-footer__sub-title font-annabelle">made with love</h2>
                <nav class="work-footer__navigation">
                    <div class="work-footer__link">
                        <a href="" class="visit-link-left">prew work</a>
                    </div>
                    <div class="work-footer__link">
                        <a href="" class="visit-link">portfolio</a>
                    </div>
                    <div class="work-footer__link">
                        <a href="" class="visit-link-right">next work</a>
                    </div>

                </nav>
            </div>
        </div>
    </footer> -->
  </main>
</template>

<script>

import {createClient} from '~/plugins/contentful.js'

const singleWork = createClient()

export default {
  asyncData ({ env, params }) {
    return singleWork.getEntries({
      'content_type': env.CTF_SINGLE_WORK_TYPE_ID,
      'fields.titleWork': params.id
    }).then(entries => {
      console.log(entries.items[0].fields)
      return {
        work: entries.items[0].fields,
        color1: entries.items[0].fields.color1,
        color2: entries.items[0].fields.color2,
        color3: entries.items[0].fields.color3
      }
    })
    .catch(console.error)
  },
  data() {
    return {

    
    };
  },
    
  mounted(){
    console.log(this.work)
  }

}
</script>

<style lang="scss">

.work {
    &-intro {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--main-bg-color);
        position: relative;
        &__arrow {
            position: absolute;
            bottom: 60px;
            width: 35px;
            height: 22px;
            left: calc(50% - 17.5px);
        }
    }
    &-history {
        background-color: #F4F4F4;
        padding: 90px 0 60px;
        &__wrapper {
            display: flex;
            flex-direction: column;
        }
        &__info {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 60px;
            &--text {
                max-width: 1000px;
            }
        }
        &__link {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
    }
    &-view {
        padding: 90px 0 60px;
        &__wrapper {
            max-width: 1000px;
            width: 100%;
            margin: 0 auto;
        }
        &__img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
    &-color {
        background-color: #F4F4F4;
        padding: 90px 0 60px;
        &__wrapper {
            display: flex;
            flex-direction: column;
        }
        &__blocks {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        &__single {
            width: 250px;
            height: 250px;
            box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
            display: flex;
            align-items: flex-end;
            justify-content: center;
            p {
                margin-bottom: 15px;
            }
        }
    }
    &-mobile {
        padding: 90px 0 60px;
        &__wrapper {
            display: flex;
            flex-direction: column;
        }
        &__content {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        &__adaptive {
            display: flex;
            flex: 0 0 50%;
            align-items: center;
            justify-content: center;
            .mobile-markup {
                width: 382px;
                height: 775px;
                position: relative;
                background: url('/assets/img/iPhone6SPlus.png');
                z-index: 5;
                background-size: cover;
                &__inner {
                    overflow-y: scroll;
                    position: absolute;
                    max-width: 337px;
                    max-height: 598px;
                    top: 90px;
                    left: 23px;
                    z-index: -3;
                    &::-webkit-scrollbar {
                        display: none;
                    }
                }
            }
        }
        &__users {
            display: flex;
            flex: 0 0 50%;
            flex-direction: column;
            &--info {
                max-width: 555px;
            }
        }
        &__experience-block {
            padding-top: 60px;
            align-items: center;
            justify-content: center;
            .experience {
                &__wrapper {
                    display: flex;
                    padding-top: 30px;
                    max-width: 555px;
                    justify-content: space-between;
                    &--menu {
                        max-width: 260px;
                        height: auto;
                    }
                    &--btn {
                        max-width: 265px;
                    }
                }
                &__content {
                    &--img {
                        padding-top: 30px;
                    }
                }
            }
        }
    }
    &-typography {
        background-color: #F4F4F4;
        padding: 90px 0 60px;
        &__wrapper {
            display: flex;
            flex-direction: column;
        }
        &__blocks {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        &__img {
            max-width: 440px;
        }
    }
    &-footer {
        padding: 90px 0 0;
        color: white;
        background: #000;
        &__wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &__navigation {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            padding: 90px 0 45px;
            a {
                color: white;
            }
        }
        &__img {
            max-width: 440px;
        }
    }
}


</style>