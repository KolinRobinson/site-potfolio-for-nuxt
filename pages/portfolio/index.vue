<template>
  <section>
    <h1>My work</h1>
    <!-- render work -->
    <div v-for="work in works" :key="work.id">
      <a href="#" :work="work" @click.prevent="openWork(work)">{{work.fields.titleWork}}</a>
    </div>
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
    openWork(work) {
      this.$router.push('/portfolio/' + work.fields.titleWork)
    }
  }

}
</script>

