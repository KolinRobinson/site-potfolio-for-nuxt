<template>
  <section>
    <main class="container">
        <h1 class="periodic__title">My Periodic Portfolio Table</h1>
        <div class="periodic-table">
            <div class="empty-spacer-1"></div>
            <div class="empty-spacer-2"></div>
            <div class="empty-spacer-3"></div>
            <div class="empty-spacer-4"></div>
            <div class="empty-spacer-5"></div>
    <!-- render work -->
          <a  v-for="work in works"
                      :key="work.id"
                      class="periodic-element" :class="[work.fields.classPrew]"
                      :data-description="work.fields.descrPrew"
                      :href="work.fields.linkSite"
                      target="_blank"
          >

        <div class="periodic-element-inner">
            <div class="title">{{work.fields.titlePrew}}</div>
            <div class="description">{{work.fields.titleWork}}</div>
        </div>
    </a>
    <div v-for="item in (49 - works.length)" :key="item" class="periodic-element non-active" data-description="Для данной ячейки сайт еще не разработан 🤷">
              <div class="periodic-element-inner">
                  <div class="title">Na</div>
                  <div class="description">Non active</div>
              </div>
    </div>
    </div>
        <div class="legend-table">
            <div class="legend-table__wrapper">
                <span class="legend-table__marker develop"></span>
                <span class="legend-table__text">Разработка</span>
                <span class="legend-table__marker develop-design"></span>
                <span class="legend-table__text">Разработка и Дизайн</span>
                <span class="legend-table__marker design"></span>
                <span class="legend-table__text">Дизайн</span>
                <span class="legend-table__marker non-active"></span>
                <span class="legend-table__text">Работа отсуствует</span>
            </div>
        </div>
    </main>

  </section>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const singleWork = createClient()


export default {
  asyncData ({ env, params }) {
    return singleWork.getEntries({
      'content_type': env.CTF_SINGLE_WORK_TYPE_ID,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        works: entries.items
      }
    })
  },
  mounted() {
  },
  methods: {
    // openWork(work) {
    //   this.$router.push('/portfolio/' + work.fields.titleWork)
    // }
  }

}
</script>

<style lang="scss" scoped>

//   aside.context {
//     text-align: center;
//     color: #fff;
//     line-height: 1.7;
//     a {
//         text-decoration: none;
//         color: #fff;
//         padding: 3px 0;
//         border-bottom: 1px dashed;
//     }
//     .explanation {
//         max-width: 700px;
//         margin: 4em auto 0;
//     }
// }

// .periodic__title {
//     font-size: 5rem;
//     width: 100%;
//     text-align: center;
//     margin: 1.5rem 0 2rem 0;
// }

// @mixin background-gradient($color1,
// $color2) {
//     background: linear-gradient(to bottom right, $color1 0%, $color2 100%);
// }

// @mixin text-gradient($color1,
// $color2) {
//     background: -webkit-linear-gradient($color1, $color2);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
// }

// .periodic-table {
//     display: grid;
//     grid-template-columns: repeat(9, 100px);
//     grid-template-rows: repeat(4, 100px);
//     grid-gap: 10px;
//     margin: auto;
//     max-width: 1200px;
//     justify-content: center;
// }

// .periodic-element {
//     padding: 4px;
//     position: relative;
//     z-index: 1;
//     cursor: default;
//     transition: all 0.3s ease;
//     .periodic-element-inner {
//         background: rgba($color: #200a31, $alpha: 1);
//         padding: 10px 15px;
//         width: 100%;
//         height: 100%;
//         transition: inherit;
//     }
//     .title {
//         font: 700 34px/1.3 "Pioneer", sans-serif;
//         margin: 0.3em 0 0;
//         transition: 0.8s ease 600ms;
//     }
//     .description {
//         font: 600 12px "Assistant", sans-serif;
//         margin-top: -0.2em;
//     }
//     &:after {
//         z-index: 10;
//         content: attr(data-description);
//         background: #f9f8f7;
//         color: #333;
//         width: 180px;
//         position: absolute;
//         top: 80%;
//         opacity: 0;
//         transition: opacity 0.3s ease 0.3s, top 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
//         height: auto;
//         font-size: 12px;
//         line-height: 1.4;
//         padding: 10px;
//         margin: 0 0 0 -50px;
//         border-radius: 6px;
//         text-align: center;
//     }
//     &:hover {
//         transform: scale(1.12);
//         z-index: 10;
//         .periodic-element-inner {
//             background: transparent;
//         }
//         .title,
//         .description {
//             -webkit-text-fill-color: #222;
//         }
//         &:after {
//             top: 105%;
//             opacity: 1;
//         }
//     }
// }

// a.periodic-element {
//     cursor: pointer;
// }

// .develop {
//     @include background-gradient(#f3f9a6,
//     #cbc634);
//     .title,
//     .description {
//         @include text-gradient(#f3f9a6,
//         #cbc634);
//     }
// }

// .non-active {
//     @include background-gradient(#e4e3e3,
//     #d1d1d1);
//     .title,
//     .description {
//         @include text-gradient(#e4e3e3,
//         #d1d1d1);
//     }
// }

// .design {
//     @include background-gradient(#ff616d,
//     #ffc171);
//     .title,
//     .description {
//         @include text-gradient(#ff616d,
//         #ffc171);
//     }
// }

// .develop-design {
//     @include background-gradient(#37cfdc,
//     #5a88e5);
//     .title,
//     .description {
//         @include text-gradient(#37cfdc,
//         #5a88e5);
//     }
// }

// .intense-work {
//     @include background-gradient(#58ac30,
//     #a7df62);
//     .title,
//     .description {
//         @include text-gradient(#58ac30,
//         #a7df62);
//     }
// }

// .empty-spacer {
//     &-1 {
//         grid-column: 2 / span 3;
//         grid-row: 2;
//     }
//     &-2 {
//         grid-column: 6;
//         grid-row: 3 / span 4;
//     }
//     &-3 {
//         grid-column: 3;
//         grid-row: 3 / span 3;
//     }
//     &-4 {
//         grid-column: 7/ span 2;
//         grid-row: 3;
//     }
//     &-5 {
//         grid-column: 7/ span 2;
//         grid-row: 6;
//     }
// }

// .legend-table {
//     padding: 15px;
//     text-align: center;
//     font-size: 16px;
//     margin: 1em auto 0;
//     &__marker {
//         width: 25px;
//         height: 25px;
//         margin: 5px 5px 10px;
//         display: inline-block;
//         vertical-align: middle;
//         box-shadow: 0.5px 1px rgba(0, 0, 0, 0.15);
//         border: 1px solid rgba(0, 0, 0, .5);
//     }
//     &__text {
//         display: inline-block;
//         vertical-align: middle;
//         color: #000000;
//         font-weight: 500;
//         font-family: Assistant;
//     }
// }

/*portfolio start*/

aside.context {
    text-align: center;
    color: #fff;
    line-height: 1.7;
    a {
        text-decoration: none;
        color: #fff;
        padding: 3px 0;
        border-bottom: 1px dashed;
    }
    .explanation {
        max-width: 700px;
        margin: 4em auto 0;
    }
}

.periodic__title {
    font-size: 5rem;
    width: 100%;
    text-align: center;
    margin: 4rem 0 3rem 0;
    @media screen and (max-width: 500px) {
        font-size: 3rem;
    }
}

@mixin background-gradient($color1,
$color2) {
    background: linear-gradient(to bottom right, $color1 0%, $color2 100%);
}

@mixin text-gradient($color1,
$color2) {
    background: -webkit-linear-gradient($color1, $color2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.periodic-table {
    display: grid;
    grid-template-columns: repeat(9, 100px);
    grid-template-rows: repeat(4, 100px);
    grid-gap: 10px;
    margin: auto;
    max-width: 1200px;
    justify-content: center;
    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(6, 100px);
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(3, 100px);
    }
    @media screen and (max-width: 350px) {
        grid-template-columns: repeat(3, 90px);
        grid-template-rows: repeat(4, 90px);
        grid-gap: 5px;
    }
}

.periodic-element {
    padding: 4px;
    position: relative;
    z-index: 1;
    cursor: default;
    transition: all 0.3s ease;
    .periodic-element-inner {
        background: rgba($color: #200a31, $alpha: 1);
        padding: 10px 15px;
        width: 100%;
        height: 100%;
        transition: inherit;
        @media screen and (max-width: 350px) {
            padding: 4px 6px;
        }
    }
    .title {
        font: 700 34px/1.3 "Pioneer", sans-serif;
        margin: 0.3em 0 0;
        transition: 0.8s ease 600ms;
    }
    .description {
        font: 600 12px "TT2020Base", sans-serif;
        margin-top: -0.2em;
    }
    &:after {
        z-index: 10;
        content: attr(data-description);
        background: #f9f8f7;
        color: #333;
        width: 180px;
        position: absolute;
        top: 80%;
        opacity: 0;
        transition: opacity 0.3s ease 0.3s, top 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
        height: auto;
        font-size: 12px;
        line-height: 1.4;
        padding: 10px;
        margin: 0 0 0 -50px;
        border-radius: 6px;
        text-align: center;
        @media screen and (max-width: 350px) {
            content: none;
        }
    }
    &:hover {
        transform: scale(1.12);
        z-index: 10;
        @media screen and (max-width: 350px) {
            transform: scale(1);
        }
        .periodic-element-inner {
            background: transparent;
        }
        .title,
        .description {
            -webkit-text-fill-color: #222;
        }
        &:after {
            top: 105%;
            opacity: 1;
        }
    }
}

a.periodic-element {
    cursor: pointer;
}

.develop {
    @include background-gradient(#f3f9a6,
    #cbc634);
    .title,
    .description {
        @include text-gradient(#f3f9a6,
        #cbc634);
    }
}



.non-active {
    @include background-gradient(#e4e3e3,
    #d1d1d1);
    .title,
    .description {
        @include text-gradient(#e4e3e3,
        #d1d1d1);
    }
}

.design {
    @include background-gradient(#ff616d,
    #ffc171);
    .title,
    .description {
        @include text-gradient(#ff616d,
        #ffc171);
    }
}

.develop-design {
    @include background-gradient(#37cfdc,
    #5a88e5);
    .title,
    .description {
        @include text-gradient(#37cfdc,
        #5a88e5);
    }
}

.intense-work {
    @include background-gradient(#58ac30,
    #a7df62);
    .title,
    .description {
        @include text-gradient(#58ac30,
        #a7df62);
    }
}

.empty-spacer {
    &-1 {
        grid-column: 2 / span 3;
        grid-row: 2;
        @media screen and (max-width: 800px) {
            display: none;
        }
    }
    &-2 {
        grid-column: 6;
        grid-row: 3 / span 4;
        @media screen and (max-width: 800px) {
            display: none;
        }
    }
    &-3 {
        grid-column: 3;
        grid-row: 3 / span 3;
        @media screen and (max-width: 800px) {
            display: none;
        }
    }
    &-4 {
        grid-column: 7/ span 2;
        grid-row: 3;
        @media screen and (max-width: 800px) {
            display: none;
        }
    }
    &-5 {
        grid-column: 7/ span 2;
        grid-row: 6;
        @media screen and (max-width: 800px) {
            display: none;
        }
    }
}

.legend-table {
    padding: 15px;
    text-align: center;
    font-size: 15px;
    margin: 2em auto 0;
    &__marker {
        width: 25px;
        height: 25px;
        margin: 5px 5px 10px;
        display: inline-block;
        vertical-align: middle;
        box-shadow: 0.5px 1px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(0, 0, 0, .5);
    }
    &__text {
        display: inline-block;
        vertical-align: middle;
        margin: 0 25px 5px 5px;
        @include text-gradient(rgb(26,
        26,
        26),
        rgb(53,
        53,
        53));
        font-weight: bold;
    }
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 500px) {
            flex-direction: column;
        }
    }
}


/*portfolio end*/
</style>
