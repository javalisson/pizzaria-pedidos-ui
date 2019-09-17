<template>
  <div class="status-pedido row py-5">
    <div class="col-12">
      <div class="mb-5">{{ (pedido ? pedido.nome : 'Anônimo') }}, após receber sua pizza {{ (pedido ? pedido.sabor : '') }}, por favor deixe sua avaliação.</div>
      O status do seu pedido é "{{ status }}".
    </div>
    <div class="mt-5">
      <button v-if="pedido" class="btn btn-secondary btn-sm ml-3" v-on:click="carregaPedido(pedido.id)">
        <font-awesome-icon icon="sync-alt" /> Atualizar
      </button>
    </div>
    <div class="col-12 mt-5">
      <button class="btn btn-primary btn-lg" :disabled="status !== 'entregue'" >
        Avalie nosso serviço!
      </button>
    </div>
    <div class="col-12 mt-5">
      <router-link to="/sabores">
        Faça um novo pedido
      </router-link>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'

library.add(faSyncAlt)

export default {
  name: 'status-pedido',
  data: () => {
    return {
      pedido_id: 0,
      pedido: null
    }
  },

  computed: {
    status () {
      return this.pedido ? this.pedido.status : 'carregando dados'
    },

    carregaPedidoUrl () {
      return 'http://' + process.env.VUE_APP_PEDIDOS_API_HOST + ':' + process.env.VUE_APP_PEDIDOS_API_PORT + '/api/pedido/' + this.pedido_id
    }
  },

  watch: {
    '$route' (to, from) {
      this.carregaPedido(this.$route.params.id)
    }
  },

  created () {
    this.carregaPedido(this.$route.params.id)
  },

  methods: {
    carregaPedido (id) {
      this.pedido_id = id
      axios
        .get(this.carregaPedidoUrl)
        .then(response => response.data)
        .then(data => {
          this.pedido = data
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
