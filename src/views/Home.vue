<template>
  <div class="home pt-5">
    <HomeHero />
    <ListaSabores class="mt-5 pb-5" />
  </div>
</template>

<script>
import HomeHero from '@/components/HomeHero'
import ListaSabores from '@/components/ListaSabores'

export default {
  name: 'home',
  components: {
    HomeHero,
    ListaSabores
  }
}
</script>
