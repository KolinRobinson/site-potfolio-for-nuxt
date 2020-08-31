<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :active="false" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="end" class="menu">
          <b-navbar-item tag="router-link" exact no-prefetch active-class="active" :to="{ path: '/' }">
            Home
          </b-navbar-item>
          <b-navbar-item tag="router-link" active-class="active" :to="{ path: '/about' }">
            About
          </b-navbar-item>
          <b-navbar-item tag="router-link" active-class="active" :to="{ path: '/portfolio' }">
            Portfolio
          </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {}
</script>

<style>
.active{
  color: red;
}


</style>