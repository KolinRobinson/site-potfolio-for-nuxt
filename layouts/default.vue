<template>
  <div>
    <Navbar />
    <transition :name="transition" mode="out-in" appear>
      <Nuxt />
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      transition: 'slide-up'
    }
  },
  watch: {}
}
</script>

<style>

  /* Slide Up */

  .slide-up-enter-active, .slide-up-leave-active {
    transition: transform .50s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-up-enter {
    transform: translateY(100%);
    opacity: 1;
  }

  .slide-up-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }

</style>
