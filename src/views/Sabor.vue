<template>
  <div class="sabor pt-5">
    <div class="sabor__hero row">
      <div class="sabor__imagem col-12 col-md-8 text-center text-md-left">
        <h1 class="mb-3 text-uppercase text-center">Pizza {{ sabor.nome }}</h1>
        <img class="img-fluid" :src="sabor.img_hero" :alt="'Foto de uma pizza sabor ' + sabor.nome" />
      </div>
      <div class="sabor__info-e-cta col-12 col-md-4">
        <div class="sabor__ingredientes mt-5 mt-md-0 mb-4 text-center">
          <h3>Ingredientes</h3>
          <div class="font-weight-light font-italic">
            <span v-for="(ingrediente, i) in sabor.ingredientes" :key="sabor.id + '_' + ingrediente">
              <span v-if="i !== 0">&bull;</span>
              {{ ingrediente }}
            </span>
          </div>
        </div>
        <div class="sabor__preco mb-4 text-right">
          <span class="texto text-uppercase text-left">Apenas</span> <span class="moeda">R$</span> <span class="preco">{{ sabor.preco.toFixed(2) }}</span>
        </div>
        <div class="sabor__cta">
          <router-link class="btn btn-primary btn-lg text-uppercase w-100" :to="'/pedido/' + sabor.id">
            Peça agora!
          </router-link>
        </div>
      </div>
    </div>
    <div class="sabor__outros-sabores row mt-5">
      <h3 class="col-12">Outros sabores</h3>
      <div v-for="pizza in outrosSabores" :key="pizza.id" class="col-12 col-md-6 my-3">
        <Pizza :sabor="pizza" />
      </div>
    </div>
  </div>
</template>

<script>
import pizzas from '@/assets/data/pizzas'

import Pizza from '@/components/Pizza'

export default {
  name: 'sabor',
  components: {
    Pizza
  },

  data: () => {
    return {
      pizzas,
      sabor: null
    }
  },

  computed: {
    outrosSabores () {
      return this.pizzas.filter(pizza => pizza.id !== this.$route.params.id)
    }
  },

  watch: {
    '$route' (to, from) {
      this.trocaSabor()
    }
  },

  created () {
    this.trocaSabor()
  },

  methods: {
    trocaSabor () {
      this.sabor = this.pizzas.find(pizza => pizza.id === this.$route.params.id)
      this.$scrollTo('body')
    }
  }
}
</script>

<style lang="scss">
  .sabor {

    &__preco {
      width: 50%;
      margin-left: 50%;

      .texto {
        margin-left: 1rem;
        display: block;
        font-size: 1.5rem;
        text-transform: uppercase;
      }

      .moeda {
        position: relative;
        top: -20px;
        font-size: 1.25rem;
        margin-right: 0.3rem;
      }

      .preco {
        font-size: 3rem;
        line-height: 64%;
      }
    }
  }
</style>
