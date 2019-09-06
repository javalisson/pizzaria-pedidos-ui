<template>
  <nav class="container navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">Pizzaria do Leonardo</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Alterna navigação"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li :class="{ 'nav-item': true, 'active': $route.fullPath === '/' }">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li  :class="{ 'nav-item': true, 'active': $route.fullPath === '/sabores' }">
          <router-link class="nav-link" to="/sabores">Sabores</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navegacao',
  watch: {
    '$route' (to, from) {
      console.log(this.$route.fullPath)
    }
  }
}
</script>
