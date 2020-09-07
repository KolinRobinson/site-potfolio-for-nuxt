<template>
  <main class="error">
        <h1 class="error_top font-plaster">Taras Senko <span>Web Developer</span></h1>
        <div class="error_portfolio error_block">
            <h2 class="error_title">
                Portfolio:
            </h2>
          <nuxt-link to='/portfolio' class="error_link" data-type="info">
            tarassenko.dev/portfolio
          </nuxt-link>
        </div>
        <div class="error_info error_block">
            <h2 class="error_title">
                Site:
            </h2>
          <nuxt-link to='/' class="error_link" data-type="info">
            tarassenko.dev
          </nuxt-link>
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
            <a href="https://www.t.me/senyassharagi" data-type="telegram" class="error_link">senyassharagi</a>
        </div>
    </main>
</template>

<style lang="scss">
	.error {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "error_portfolio error_info" "error_telegram error_instagram";
    width: 100vw;
    height: 100vh;
    position: relative;
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
        width: 98vw;
        height: 98vh;
        flex-direction: column;
        transition: all .5s ease-in;
    }
}
</style>
