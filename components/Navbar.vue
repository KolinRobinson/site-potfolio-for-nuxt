<template>
    <header :class="{header__active: burger}">
        <div class="nav__top">
            <div class="container">
                <div class="nav__top--wrapper">
                    <div class="logo" @click="burger = false">
                      <nuxt-link to='/' class="logo__link">
                        TS
                        </nuxt-link>
                    </div>
                    <div class="burger" @click="burger = !burger">
                        <div class="burger__icon">
                        </div>
                        <span class="burger__name">
            </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav__main">
            <div class="container">
                <div class="menu__wrapper">
                    <nav class="menu__main">
                        <ul class="menu__nav">
                            <li class="menu__nav--link" @click="burger = false">
                                <nuxt-link to='/'>
                                    <span class="small-number">01.</span> HOME
                                </nuxt-link>
                            </li>
                            <li class="menu__nav--link" @click="burger = false">
                                <nuxt-link to='/portfolio'>
                                    <span class="small-number">02.</span> PORTFOLIO
                                </nuxt-link>
                            </li>
                            <li class="menu__nav--link" @click="burger = false">
                                <nuxt-link to='/contact'>
                                    <span class="small-number">03.</span> CONTACT
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>
                    <div class="menu__social">
                        <div class="menu__social--item">
                            <h6>EMAIL:</h6>
                            <a href="mailto:info@tarassenko.dev">info@tarassenko.dev</a>
                        </div>
                        <div class="menu__social--item">
                            <h6>INSTAGRAM:</h6>
                            <a href="https://www.instagram.com/tarassenko.dev/">tarassenko.dev</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      burger: false,
    };
  },
}
</script>

<!--<style lang="scss">-->
<!--header.header__active a {-->
<!--    text-decoration: none;-->
<!--    color: white;-->
<!--}-->

<!--header {-->
<!--    position: absolute;-->
<!--    top: 0;-->
<!--    width: 100%;-->
<!--    z-index: 100;-->
<!--}-->

<!--.header__active {-->
<!--    .nav__top {-->
<!--        background: rgba(0, 0, 0, 1);-->
<!--        transition: all 1s ease-in-out;-->
<!--        .burger {-->
<!--            cursor: pointer;-->
<!--            display: flex;-->
<!--            z-index: 101;-->
<!--            align-items: center;-->
<!--            &__icon {-->
<!--                position: relative;-->
<!--                width: 26px;-->
<!--                height: 20px;-->
<!--                margin-right: 10px;-->
<!--                &:after,-->
<!--                &:before {-->
<!--                  background: white;-->
<!--                }-->
<!--                &:after {-->
<!--                    top: 12px;-->
<!--                    left: 0;-->
<!--                    animation: after2 1s forwards;-->
<!--                    @keyframes after2 {-->
<!--                        0% {-->
<!--                            top: 5px;-->
<!--                            left: 0;-->
<!--                            transform: scale(1);-->
<!--                        }-->
<!--                        50% {-->
<!--                            top: 9px;-->
<!--                            transform: scale(0.2);-->
<!--                        }-->
<!--                        100% {-->
<!--                            top: 12px;-->
<!--                            left: 0;-->
<!--                            transform: scale(1);-->
<!--                        }-->
<!--                    }-->
<!--                }-->
<!--                &:before {-->
<!--                    top: 5px;-->
<!--                    left: 6px;-->
<!--                    animation: before2 1s forwards;-->
<!--                    @keyframes before2 {-->
<!--                        0% {-->
<!--                            top: 12px;-->
<!--                            left: 6px;-->
<!--                            transform: scale(1);-->
<!--                        }-->
<!--                        50% {-->
<!--                            top: 9px;-->
<!--                            transform: scale(0.2);-->
<!--                        }-->
<!--                        100% {-->
<!--                            top: 5px;-->
<!--                            left: 6px;-->
<!--                            transform: scale(1);-->
<!--                        }-->
<!--                    }-->
<!--                }-->
<!--            }-->
<!--            &__name {-->
<!--                display: flex;-->
<!--                align-items: center;-->
<!--                justify-content: center;-->
<!--                position: relative;-->
<!--                color: white;-->
<!--                &:before {-->
<!--                    content: 'menu';-->
<!--                    left: 0;-->
<!--                    width: 65px;-->
<!--                    animation: burgerName2 1s ease-in-out forwards;-->
<!--                    @keyframes burgerName2 {-->
<!--                        0% {-->
<!--                            content: 'menu';-->
<!--                            transform: scale(1);-->
<!--                        }-->
<!--                        10% {-->
<!--                            content: 'menu|';-->
<!--                            transform: scale(1);-->
<!--                        }-->
<!--                        20% {-->
<!--                            content: 'men|';-->
<!--                        }-->
<!--                        30% {-->
<!--                            content: 'me|';-->
<!--                        }-->
<!--                        40% {-->
<!--                            content: 'm|';-->
<!--                        }-->
<!--                        50% {-->
<!--                            content: '|';-->
<!--                        }-->
<!--                        60% {-->
<!--                            content: 'c|';-->
<!--                        }-->
<!--                        70% {-->
<!--                            content: 'cl|';-->
<!--                        }-->
<!--                        80% {-->
<!--                            content: 'clo|';-->
<!--                        }-->
<!--                        90% {-->
<!--                            content: 'clos|';-->
<!--                        }-->
<!--                        95% {-->
<!--                            content: 'close|';-->
<!--                        }-->
<!--                        100% {-->
<!--                            content: 'close';-->
<!--                        }-->
<!--                    }-->
<!--                }-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--    .nav__main {-->
<!--        top: 0;-->
<!--        transition: all 1s ease-in-out;-->
<!--        .menu__wrapper {-->
<!--            display: flex;-->
<!--            justify-content: space-between;-->
<!--            margin-top: 15vh;-->
<!--            @media screen and (max-width: 500px) {-->
<!--                margin-top: 0;-->
<!--                width: 100%;-->
<!--                height: 100%;-->
<!--                align-items: center;-->
<!--                justify-content: center;-->
<!--            }-->
<!--            .menu__main {-->
<!--                .menu__nav {-->
<!--                    display: flex;-->
<!--                    flex-direction: column;-->
<!--                    &&#45;&#45;link {-->
<!--                        padding: 5px;-->
<!--                        opacity: 1;-->
<!--                        transition: all 1s ease;-->
<!--                        transition-delay: 1s;-->
<!--                        a {-->
<!--                            display: flex;-->
<!--                            cursor: pointer;-->
<!--                            align-items: baseline;-->
<!--                            position: relative;-->
<!--                            .small-number {-->
<!--                                font-size: 12px;-->
<!--                                margin-right: 10px;-->
<!--                            }-->
<!--                            &:before {-->
<!--                                content: 'ERROR';-->
<!--                                position: absolute;-->
<!--                                width: 100%;-->
<!--                                left: 22px;-->
<!--                                color: black;-->
<!--                                background: #000;-->
<!--                                animation: errors 2s ease-in-out .5s forwards;-->
<!--                                @keyframes errors {-->
<!--                                    0% {-->
<!--                                        color: black;-->
<!--                                        opacity: 1;-->
<!--                                    }-->
<!--                                    10% {-->
<!--                                        color: red;-->
<!--                                    }-->
<!--                                    20% {-->
<!--                                        color: black;-->
<!--                                    }-->
<!--                                    30% {-->
<!--                                        color: red;-->
<!--                                    }-->
<!--                                    40% {-->
<!--                                        color: black;-->
<!--                                    }-->
<!--                                    50% {-->
<!--                                        color: red;-->
<!--                                    }-->
<!--                                    60% {-->
<!--                                        color: black;-->
<!--                                    }-->
<!--                                    70% {-->
<!--                                        color: red;-->
<!--                                    }-->
<!--                                    80% {-->
<!--                                        color: black;-->
<!--                                    }-->
<!--                                    90% {-->
<!--                                        color: red;-->
<!--                                    }-->
<!--                                    99% {-->
<!--                                        color: black;-->
<!--                                        z-index: 1000;-->
<!--                                        opacity: 1;-->
<!--                                        background: #000;-->
<!--                                    }-->
<!--                                    100% {-->
<!--                                        z-index: -1000;-->
<!--                                        opacity: 0;-->
<!--                                    }-->
<!--                                }-->
<!--                            }-->
<!--                        }-->
<!--                    }-->
<!--                }-->
<!--            }-->
<!--            .menu__social {-->
<!--                @media screen and (max-width: 500px) {-->
<!--                    display: none;-->
<!--                }-->
<!--                &&#45;&#45;item {-->
<!--                    min-width: 15vw;-->
<!--                    margin-bottom: 30px;-->
<!--                    opacity: 1;-->
<!--                    transition: all 1s ease-in-out;-->
<!--                    transition-delay: 1.2s;-->
<!--                    h6 {-->
<!--                        color: white;-->
<!--                        margin-bottom: 5px;-->
<!--                    }-->
<!--                    &:before {-->
<!--                        content: '';-->
<!--                        height: 100vh;-->
<!--                        width: 1px;-->
<!--                        background-color: white;-->
<!--                        position: absolute;-->
<!--                        left: calc(50% + 13vw);-->
<!--                        top: 0;-->
<!--                        transition: all 1s ease;-->
<!--                        transition-delay: 1s;-->
<!--                        opacity: 1;-->
<!--                    }-->
<!--                }-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--}-->

<!--.nav__top {-->
<!--    background: rgba(7, 5, 5, 0);-->
<!--    transition: all 1s ease-in-out;-->
<!--    &&#45;&#45;wrapper {-->
<!--        padding: 15px 0;-->
<!--        display: flex;-->
<!--        align-items: center;-->
<!--        justify-content: space-between;-->
<!--        .logo {-->
<!--            z-index: 101;-->
<!--            &__link {-->
<!--                display: flex;-->
<!--                font-family: "Playfair Display", sans-serif;-->
<!--                font-weight: 700;-->
<!--                font-size: 32px;-->
<!--                img {-->
<!--                    width: 100px;-->
<!--                }-->
<!--            }-->
<!--        }-->
<!--        .burger {-->
<!--            cursor: pointer;-->
<!--            display: flex;-->
<!--            z-index: 101;-->
<!--            align-items: center;-->
<!--            &__icon {-->
<!--                position: relative;-->
<!--                width: 26px;-->
<!--                height: 20px;-->
<!--                margin-right: 10px;-->
<!--                &:after,-->
<!--                &:before {-->
<!--                    content: '';-->
<!--                    position: absolute;-->
<!--                    width: 20px;-->
<!--                    height: 3px;-->
<!--                    background-color: black;-->
<!--                }-->
<!--                &:after {-->
<!--                    top: 5px;-->
<!--                    left: 0px;-->
<!--                    animation: after1 1s forwards;-->
<!--                    @keyframes after1 {-->
<!--                        0% {-->
<!--                            top: 12px;-->
<!--                            left: 0;-->
<!--                            transform: scale(1);-->
<!--                        }-->
<!--                        50% {-->
<!--                            top: 8px;-->
<!--                            transform: scale(0.2);-->
<!--                        }-->
<!--                        100% {-->
<!--                            top: 5px;-->
<!--                            left: 0;-->
<!--                            transform: scale(1);-->
<!--                        }-->
<!--                    }-->
<!--                }-->
<!--                &:before {-->
<!--                    top: 12px;-->
<!--                    left: 6px;-->
<!--                    animation: before1 1s forwards;-->
<!--                    @keyframes before1 {-->
<!--                        0% {-->
<!--                            top: 5px;-->
<!--                            left: 6px;-->
<!--                            transform: scale(1);-->
<!--                        }-->
<!--                        50% {-->
<!--                            top: 8px;-->
<!--                            transform: scale(0.2);-->
<!--                        }-->
<!--                        100% {-->
<!--                            top: 12px;-->
<!--                            left: 6px;-->
<!--                            transform: scale(1);-->
<!--                        }-->
<!--                    }-->
<!--                }-->
<!--            }-->
<!--            &__name {-->
<!--                display: flex;-->
<!--                align-items: center;-->
<!--                justify-content: center;-->
<!--                position: relative;-->
<!--                &:before {-->
<!--                    content: 'menu';-->
<!--                    left: 0;-->
<!--                    width: 65px;-->
<!--                    animation: burgerName1 1s ease-in-out forwards;-->
<!--                    @keyframes burgerName1 {-->
<!--                        0% {-->
<!--                            content: 'close';-->
<!--                        }-->
<!--                        5% {-->
<!--                            left: 0;-->
<!--                            content: 'close|';-->
<!--                        }-->
<!--                        10% {-->
<!--                            content: 'clos|';-->
<!--                        }-->
<!--                        20% {-->
<!--                            content: 'clo|';-->
<!--                        }-->
<!--                        30% {-->
<!--                            content: 'cl|';-->
<!--                        }-->
<!--                        40% {-->
<!--                            content: 'c|';-->
<!--                        }-->
<!--                        50% {-->
<!--                            content: '|';-->
<!--                        }-->
<!--                        60% {-->
<!--                            content: 'm|';-->
<!--                        }-->
<!--                        70% {-->
<!--                            content: 'me|';-->
<!--                        }-->
<!--                        80% {-->
<!--                            content: 'men|';-->
<!--                        }-->
<!--                        90% {-->
<!--                            left: 0;-->
<!--                            content: 'menu|';-->
<!--                        }-->
<!--                        100% {-->
<!--                            left: 0;-->
<!--                            content: 'menu';-->
<!--                        }-->
<!--                    }-->
<!--                }-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--}-->

<!--.nav__main {-->
<!--    display: flex;-->
<!--    width: 100%;-->
<!--    height: 100vh;-->
<!--    position: fixed;-->
<!--    z-index: 100;-->
<!--    top: -120%;-->
<!--    transition: all 1s ease-in-out;-->
<!--    transition-delay: 1s;-->
<!--    background: black;-->
<!--    justify-content: center;-->
<!--    .menu__wrapper {-->
<!--        display: flex;-->
<!--        justify-content: space-between;-->
<!--        margin-top: 15vh;-->
<!--        @media screen and (max-width: 500px) {-->
<!--            margin-top: 0;-->
<!--            width: 100%;-->
<!--            height: 100%;-->
<!--            align-items: center;-->
<!--            justify-content: center;-->
<!--        }-->
<!--        .menu__main {-->
<!--            .menu__nav {-->
<!--                display: flex;-->
<!--                flex-direction: column;-->
<!--                &&#45;&#45;link {-->
<!--                    padding: 5px;-->
<!--                    opacity: 0;-->
<!--                    transition: all 1s ease;-->
<!--                    a {-->
<!--                        display: flex;-->
<!--                        cursor: pointer;-->
<!--                        align-items: baseline;-->
<!--                        position: relative;-->
<!--                        .small-number {-->
<!--                            font-size: 12px;-->
<!--                            margin-right: 3px;-->
<!--                        }-->
<!--                    }-->
<!--                }-->
<!--            }-->
<!--        }-->
<!--        .menu__social {-->
<!--            @media screen and (max-width: 500px) {-->
<!--                display: none;-->
<!--            }-->
<!--            &&#45;&#45;item {-->
<!--                min-width: 15vw;-->
<!--                margin-bottom: 30px;-->
<!--                opacity: 0;-->
<!--                transition: all 1s ease-in-out;-->
<!--                h6 {-->
<!--                    color: white;-->
<!--                    margin-bottom: 5px;-->
<!--                }-->
<!--                &:before {-->
<!--                    content: '';-->
<!--                    height: 100vh;-->
<!--                    width: 1px;-->
<!--                    background-color: white;-->
<!--                    position: absolute;-->
<!--                    left: calc(50% + 13vw);-->
<!--                    opacity: 0;-->
<!--                    top: 100%;-->
<!--                    transition: all 1s ease;-->
<!--                }-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--}-->


<!--</style>-->
