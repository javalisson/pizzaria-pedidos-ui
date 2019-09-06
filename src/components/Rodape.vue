<template>
  <div class="container">
    <div class="rodape row px-3 pt-5 pb-3 bg-dark text-light">
      <div class="rodape__autor col-12 col-md-4 text-center text-md-left">
        JavAlisson <span class="copyleft" title="copyleft"></span> 2019
      </div>
      <div class="rodape__marca col-12 col-md-4 text-center">
        Pizzaria do Leonardo
      </div>
      <div class="rodape__creative-commons col-12 col-md-4 text-center text-md-right">
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          <img class="mb-2" alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

library.add(faCopyright)

export default {
  name: 'rodape'
}
</script>

<style lang="scss">
  .rodape {
    font-size: 0.8rem;

    .copyleft {
      display:inline-block;
      transform: scale(-1,1);

      &::after {
        content: "\00a9";
      }
    }
  }
</style>
