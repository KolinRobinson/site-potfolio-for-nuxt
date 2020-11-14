<template>
  <main class="container">
    <h1 class="contact__title">Contact Me</h1>
    <div class="contact__wrapper">
      <div class="contact__wrapper--info">
        <nav class="social_link">
          <a href="https://github.com/SenkoTaras" target="_blank">
            <svg width="48" height="48" viewBox="0 0 48 48" class="social_svg" fill="none" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 0C37.1906 0 48 10.9032 48 24.0938C48 37.2078 37.2891 48 24 48C10.7274 48 0 37.2239 0 24.0938C0 10.9032 10.8094 0 24 0ZM19.7812 44.7656C21.1311 45.0469 22.5656 45.1875 24 45.1875C25.4344 45.1875 26.8689 45.0469 28.2188 44.7656V38.1844C28.2188 36.6094 27.7969 36.0469 27.2344 35.2874C26.948 34.96 26.7751 34.6663 25.4908 32.7283L27.6562 32.3906C33.2252 31.5751 35.4188 28.678 36.2908 26.428C37.4158 23.4188 36.8251 19.6498 34.7999 17.2595C34.4905 16.8937 34.2374 16.2748 34.4623 15.6281C34.8845 14.3342 34.8281 12.2812 34.5469 11.4935C33.0557 11.7067 31.5223 12.7749 30.2435 13.5469C29.6543 13.8907 29.3452 13.7999 29.0625 13.8281C28.0349 13.6143 26.432 13.0968 23.9718 13.0968C22.4531 13.0968 20.8499 13.3217 19.2748 13.7717C18.9932 13.7651 18.5405 14.0046 17.7561 13.5469C16.4194 12.7324 14.9381 11.7008 13.4531 11.4935C13.1719 12.2812 13.1155 14.3342 13.5374 15.6281C13.7626 16.2748 13.5095 16.8937 13.1997 17.2595C11.1749 19.6501 10.5842 23.4188 11.7092 26.428C12.5812 28.678 14.7748 31.5751 20.3438 32.3906L22.5092 32.7283C21.1816 34.7314 21.0417 34.9717 20.7653 35.2874C20.2031 36.0469 19.7812 36.6094 19.7812 38.1844V44.7656ZM16.9688 43.9501V38.1844C16.9688 36.5812 17.3064 35.5126 17.7565 34.7249C13.4813 33.572 10.4436 31.0404 9.09375 27.4124C7.6593 23.5876 8.30603 19.0312 10.697 15.8811C10.2748 13.9969 10.2748 10.9874 11.2874 9.58118C11.7374 8.96265 12.3563 8.625 13.1437 8.625C13.1719 8.625 13.1719 8.625 13.1719 8.625C15.3527 8.74292 17.0691 9.84119 18.9093 10.9592C20.5968 10.5092 22.3125 10.2843 24.0282 10.2843C25.7717 10.2843 27.5156 10.5374 29.0621 10.9592C30.9994 9.79102 32.6993 8.73999 34.9406 8.625C35.6437 8.625 36.2626 8.96265 36.7126 9.58118C37.7249 10.9874 37.7249 13.9969 37.303 15.8811C39.694 19.0312 40.3407 23.6155 38.9062 27.4124C37.5564 31.0404 34.5187 33.572 30.2435 34.7249C30.5925 35.3353 30.8687 36.123 30.9774 37.1891C31.8409 37.4868 32.5898 37.5839 33.2864 37.3792C34.021 37.162 34.5934 36.6716 35.0907 35.8352C36.2076 33.9587 38.1101 32.4269 40.2762 32.6261L40.0291 35.4276C39.026 35.3357 38.0277 36.397 37.5092 37.2719C36.6537 38.7125 35.5012 39.6573 34.0829 40.0763C33.03 40.3865 32.0676 40.3792 31.0312 40.158V43.9501C39.2157 41.0812 45.1875 33.2626 45.1875 24.0938C45.1875 12.4501 35.6437 2.8125 24 2.8125C12.3563 2.8125 2.8125 12.4501 2.8125 24.0938C2.8125 33.2626 8.7843 41.0812 16.9688 43.9501Z" fill="black"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/tarassenko.dev/" target="_blank">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" class="social_svg" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.03125 48H40.9688C44.8458 48 48 44.8458 48 40.9688V7.03125C48 3.15417 44.8458 0 40.9688 0H7.03125C3.15417 0 0 3.15417 0 7.03125V40.9688C0 44.8458 3.15417 48 7.03125 48ZM2.8125 7.03125C2.8125 4.70508 4.70508 2.8125 7.03125 2.8125H40.9688C43.2949 2.8125 45.1875 4.70508 45.1875 7.03125V40.9688C45.1875 43.2949 43.2949 45.1875 40.9688 45.1875H7.03125C4.70508 45.1875 2.8125 43.2949 2.8125 40.9688V7.03125Z" fill="black"/>
              <path d="M24 36.6562C30.9785 36.6562 36.6562 30.9785 36.6562 24C36.6562 17.0215 30.9785 11.3438 24 11.3438C17.0215 11.3438 11.3438 17.0215 11.3438 24C11.3438 30.9785 17.0215 36.6562 24 36.6562ZM24 14.1562C29.428 14.1562 33.8438 18.572 33.8438 24C33.8438 29.428 29.428 33.8438 24 33.8438C18.572 33.8438 14.1562 29.428 14.1562 24C14.1562 18.572 18.572 14.1562 24 14.1562Z" fill="black"/>
              <path d="M38.0625 14.1562C40.3887 14.1562 42.2812 12.2637 42.2812 9.9375C42.2812 7.61133 40.3887 5.71875 38.0625 5.71875C35.7363 5.71875 33.8438 7.61133 33.8438 9.9375C33.8438 12.2637 35.7363 14.1562 38.0625 14.1562ZM38.0625 8.53125C38.8378 8.53125 39.4688 9.16223 39.4688 9.9375C39.4688 10.7128 38.8378 11.3438 38.0625 11.3438C37.2872 11.3438 36.6562 10.7128 36.6562 9.9375C36.6562 9.16223 37.2872 8.53125 38.0625 8.53125Z" fill="black"/>
            </svg>
          </a>
          <a href="https://t.me/tarassenko_dev" target="_blank">
            <svg width="48" height="42" viewBox="0 0 48 42" fill="none" class="social_svg" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3862 23.688L17.3445 38.5836L25.1023 30.8254L38.3712 41.3727L48 0L0 19.2638L11.3862 23.688ZM7.64246 19.2217L30.5219 10.0393L12.3274 21.0421L7.64246 19.2217ZM34.5989 10.8545L19.4132 24.7471L17.5865 31.6307L14.2083 23.1852L34.5989 10.8545ZM20.5503 31.4073L21.4706 27.939L22.8904 29.0673L20.5503 31.4073ZM36.6431 36.4131L22.8256 25.4301L43.6289 6.39807L36.6431 36.4131Z" fill="black"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/taras-senko/" target="_blank">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" class="social_svg" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.9688 0H7.03125C3.15417 0 0 3.15417 0 7.03125V40.9688C0 44.8458 3.15417 48 7.03125 48H40.9688C44.8458 48 48 44.8458 48 40.9688V7.03125C48 3.15417 44.8458 0 40.9688 0ZM45.1875 40.9688C45.1875 43.2949 43.2949 45.1875 40.9688 45.1875H7.03125C4.70508 45.1875 2.8125 43.2949 2.8125 40.9688V7.03125C2.8125 4.70508 4.70508 2.8125 7.03125 2.8125H40.9688C43.2949 2.8125 45.1875 4.70508 45.1875 7.03125V40.9688Z" fill="black"/>
              <path d="M8.53125 39.5625H16.9688V19.6875H8.53125V39.5625ZM11.3438 22.5H14.1562V36.75H11.3438V22.5Z" fill="black"/>
              <path d="M31.0393 19.6875C31.0367 19.6875 31.0338 19.6875 31.0312 19.6875C30.059 19.6875 29.1119 19.8501 28.2188 20.1658V19.6875H19.7812V39.5625H28.2188V29.5312C28.2188 28.756 28.8497 28.125 29.625 28.125C30.4003 28.125 31.0312 28.756 31.0312 29.5312V39.5625H39.4688V28.5645C39.4688 24.0132 35.7766 19.6919 31.0393 19.6875ZM36.6562 36.75H33.8438V29.5312C33.8438 27.2051 31.9512 25.3125 29.625 25.3125C27.2988 25.3125 25.4066 27.2051 25.4062 29.5309V36.75H22.5938V22.5H25.4062V25.3143L27.657 23.6239C28.6359 22.8885 29.8026 22.5 31.0312 22.5H31.0367C34.0302 22.5029 36.6562 25.3367 36.6562 28.5645V36.75Z" fill="black"/>
              <path d="M8.53125 16.875H16.9688V8.4375H8.53125V16.875ZM11.3438 11.25H14.1562V14.0625H11.3438V11.25Z" fill="black"/>
            </svg>
          </a>
        </nav>
        <div class="contact_link">
          <div class="contact_link-block">
            <h2>Почта</h2>
            <a href="mailto:info@tarassenko.dev">info@tarassenko.dev</a>
          </div>
          <div class="contact_link-block">
            <h2>Телефон</h2>
            <a href="tel:380935935533">+380935935533</a>
          </div>
          <div class="contact_link-block">
            <h2>Сайт</h2>
            <a href="tarassenko.dev">tarassenko.dev</a>
          </div>
        </div>
      </div>
      <form class="contact__wrapper--form">
        <h2 class="form_title">
          Форма для связи
        </h2>
        <input type="text" placeholder="Укажите Ваше имя" required v-model="formName" class="form_input">
        <input type="email" placeholder="Укажите почту" required v-model="formEmail" class="form_input">
        <input type="text" placeholder="Укажите тему письма" v-model="formTitle" required class="form_input">
        <input type="text" placeholder="Введите сообщение" required v-model="formText" class="form_input">
        <input type="text" placeholder="Дополнительный способ связи(Telegram, instagram)" v-model="formOther" class="form_input">
        <label><input type="checkbox" v-model="formLegacy" id="legacy">Я прочитал и принимаю <a href="">политику конфиденциальности</a>.</label>
        <button class="form_submit" :disabled='isDisabled' @click.prevent="submitButton">Отправить</button>
      </form>
    </div>
    <politic-popup @close="modalClosed" :text-popup="textPopup" v-if="!politicOpen"/>
  </main>
</template>

<script>
import politicPopup from '~/components/politicPopup.vue';
const SECURITY = '1074223510:AAEe-0iWEyHHKiTfqAM_mhrPOuObLuC9DRs';
const LETTER = '-333712879';

import {createClient} from '~/plugins/contentful.js'

const popup = createClient()

export default {
  components: { politicPopup },
  asyncData ({ env, params }) {
    return popup.getEntries({
      'content_type': env.CTF_POPUP_TYPE_ID,
      order: '-sys.createdAt'
    }).then(entries => {
      for(let item in entries.items){
        if(entries.items[item].sys.id == '5grI44WrS00uGiPW0LTi4r'){
          return {
            textPopup: entries.items[item].fields.popupContent
          }
        }
      }
    })
  },
  data() {
    return {
      formName: '',
      formEmail: '',
      formTitle: '',
      formText: '',
      formOther: '',
      politicOpen: true,
      formLegacy: false
    };
  },
  computed: {
    isDisabled: function () {
      if (this.formEmail == '' || this.formName == '' || this.formTitle == '' || this.formText == '' ){
        return true;
      } else if (this.formEmail !== '' && this.formLegacy){
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(String(this.formEmail).toLowerCase());
      }
      return !this.formLegacy;
    }
  },
  methods: {
    submitButton(){
      console.log("work");
      var url = 'https://api.telegram.org/bot' + SECURITY + '/sendMessage'; // токен бота
      var body = JSON.stringify({ // склеиваем объект в JSON строку
        chat_id: LETTER,
        parse_mode: 'Markdown', // разметка сообщений вкл (чтобы использовать *жирный текст*)
        text: '*Новый лид*\n'  + '\n\n*Имя:* ' + this.formName + '\n*Почта:* ' + this.formEmail + '\n\n*Тема:* ' + this.formTitle + '\n*Текст:* ' + this.formText + '\n*Доп контакт:* ' + this.formOther
      });

      var xhr = new XMLHttpRequest(); // инициализируем AJAX запрос
      xhr.open('POST', url, true); // отправляем наше сообщение методом POST на сервак телеги
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // на всякий случай, оповестим телеграм, что отправили JSON
      xhr.send(body);

      alert('сообщение отправлено!');
      this.formEmail = this.formName = this.formTitle = this.formText = this.formOther = '';
      this.formLegacy = false;
    },
    popupOpen(){
        this.politicOpen = false
      },
      modalClosed(){
        this.politicOpen = true
      },

  }
}
</script>

<style lang="scss" scoped>

/* contact */

.contact {
    &__title {
        font-size: 5rem;
        width: 100%;
        text-align: center;
        margin: 5rem 0 7rem 0;
        @media screen and (max-width: 500px) {
            font-size: 3rem;
        }
    }
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: 750px) {
            flex-direction: column;
        }
        &--info {
            display: flex;
            flex: 1 1;
            align-items: center;
            justify-content: space-between;
            @media screen and (max-width: 450px) {
                flex-direction: column-reverse;
            }
            .social {
                &_link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    @media screen and (max-width: 450px) {
                        flex-direction: row;
                        width: 100%;
                        justify-content: space-between;
                    }
                    a {
                        margin-bottom: 2rem;
                        cursor: pointer;
                        z-index: 100;
                    }
                }
                &_svg {
                    transform: scale(1);
                    cursor: pointer !important;
                    transition: .5s all ease-in-out;
                    &:hover {
                        transform: scale(1.2);
                    }
                    svg {
                        cursor: pointer;
                    }
                }
            }
            .contact {
                &_link {
                    display: flex;
                    align-items: start;
                    width: 70%;
                    flex-direction: column;
                    @media screen and (max-width: 450px) {
                        width: 100%;
                    }
                    &-block {
                        margin-bottom: 3rem;
                        h2 {
                            font-size: 3rem;
                            margin-bottom: 2rem;
                            @media screen and (max-width: 1000px) {
                                font-size: 2rem;
                            }
                        }
                    }
                }
            }
        }
        &--form {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            @media screen and (max-width: 1000px) {
                max-width: 320px;
            }
            input,
            label {
                margin-bottom: 1.5rem;
                font-family: 'TT2020Base';
                #legacy {
                    margin-right: 1rem;
                    margin-bottom: 0;
                    background-color: black;
                }
                a {
                    text-decoration: underline;
                }
                @media screen and (max-width: 750px) {
                    margin-bottom: 2rem;
                }
            }
            label {
                @media screen and (max-width: 450px) {
                    font-size: 1rem;
                }
            }
            .form {
                &_title {
                    font-size: 3rem;
                    margin-bottom: 3rem;
                    @media screen and (max-width: 1000px) {
                        font-size: 2rem;
                    }
                }
                &_input {
                    width: 100%;
                    max-width: 420px;
                    border: none;
                    border-bottom: 1px solid black;
                    &:focus {
                        background: lightgray;
                    }
                    &:valid {
                        border-bottom: 1px solid greenyellow;
                    }
                    &:invalid {
                        border: none;
                        background: none;
                        border-bottom: 1px solid red;
                    }
                }
                &_submit {
                    cursor: pointer;
                    background-color: black;
                    color: white;
                    border-radius: 20px;
                    width: 210px;
                    height: 40px;
                    font-family: "TT2020Base";
                    font-size: 1.2rem;
                    border: none;
                    margin-left: auto;
                    margin-right: 19%;
                    opacity: 1;
                    transition: all .5s ease-in-out;
                    @media screen and (max-width: 1000px) {
                        margin-right: 0;
                    }
                    &[disabled] {
                        cursor: not-allowed;
                        opacity: .8;
                    }
                }
            }
        }
    }
}

</style>
