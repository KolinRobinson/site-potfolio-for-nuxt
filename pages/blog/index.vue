<template>

    <main class="container">
        <h1 class="periodic__title">Мои заметочки</h1>
        <section class="blog__wrapper">
            <article class="single__blog">
                <div class="single__blog--number">
                    <h2>1</h2>
                </div>
                <div class="single__blog--content">
                    <div class="single__blog--info">
                        <h2 class="single__blog--title">hellow world</h2>
                        <p class="single__blog--descr">Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sed temporibus nobis vel nisi rerum!</p>
                    </div>
                    <a href="#" @click.prevent="openWork(work)" class="single__blog--link">Читать Дальше</a>
                </div>
            </article>
            <article class="single__blog">
                <div class="single__blog--number">
                    <h2>1</h2>
                </div>
                <div class="single__blog--content">
                    <div class="single__blog--info">
                        <h2 class="single__blog--title">hellow world</h2>
                        <p class="single__blog--descr">Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sed temporibus nobis vel nisi rerum!</p>
                    </div>
                </div>
                <a href="#" @click.prevent="openWork(work)" class="single__blog--link">Читать Дальше</a>
            </article>
        </section>
    </main>
</template>

<script>
// import {createClient} from '~/plugins/contentful.js'

// const singleBlog = createClient()

export default {
  // asyncData ({ env, params }) {

  //   return singleWork.getEntries({
  //     'content_type': env.CTF_SINGLE_BLOG_TYPE_ID,
  //     order: '-sys.createdAt'
  //   }).then(entries => {
  //     return {
  //       blogs: entries.items
  //     }
  //   })
  // },
  mounted() {

  },
  methods: {
    openBlog(blog) {
      this.$router.push('/portfolio/' + blog.fields.titleWork)
    }
  }

}
</script>

<style lang="scss">
  .blog{
    &__wrapper{
        display: flex;
        flex-direction: column;
        .single{
            &__blog{
                display: flex;
                align-items: center;
                height: 12vh;
                margin-bottom: 2em;
                flex-direction: row;
                &:nth-child(2n){
                    flex-direction: row-reverse;
                    .single__blog--info{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;                 
                    }
                    p.single__blog--descr{
                        text-align: right;
                        } 

                }
                &--number{                
                    width: 8vw;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid black;
                    margin: 0;
                }
                &--content{
                    display: flex;
                    height: 100%;
                    width: 82vw;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid black;
                    margin: 0;
                }
                &--link{
                    width: 8vw;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid black;
                    color: black;
                    text-align: center;
                    background: white;
                    margin: 0;
                    &:hover{
                        color: white;
                        background: black;
                    }
                }
                &--title{
                    line-height: .7;
                    padding: 7px;

                }
                &--descr{
                    line-height: 1;
                    padding: 7px;
                    font-weight: 300;
                }
            }
        }
    }
  }
  
</style>
