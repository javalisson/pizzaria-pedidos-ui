<template>
  <div class="pedido row py-5">
    <div class="col-12">
      <h1>Seu pedido</h1>
      <p class="mt-3">Uma pizza de {{ sabor.nome }}. <small class="text-muted">Ou volte para a <router-link to="/sabores">lista de sabores</router-link>.</small></p>
      <form v-on:submit.prevent="finalizarPedido">
        <h4>Sobre você</h4>
        <div class="form-group">
          <label for="nome">Nome</label>
          <input type="text" class="form-control" id="nome" name="nome"  v-model="form.nome">
        </div>
        <div class="form-group">
          <label for="telefone">Telefone</label>
          <input type="text" class="form-control" id="telefone" name="telefone"  v-model="form.telefone">
        </div>
        <h4 class="mt-4">Entrega <small class="text-muted">entregamos em toda a cidade</small></h4>
        <div class="form-group">
          <label for="cep">CEP</label>
          <input type="text" class="form-control" id="cep" name="cep" v-model="form.cep">
        </div>
        <div class="form-group">
          <label for="endereco">Endereço</label>
          <input type="text" class="form-control" id="endereco" name="endereco"  v-model="form.endereco">
        </div>
        <h4 class="mt-4">Valor do pedido</h4>
        <table class="table table-sm mt-3">
          <tbody>
            <tr>
              <td>Pizza</td><td class="text-right">R$ {{ sabor.preco.toFixed(2) }}</td>
            </tr>
            <tr>
              <td>Entrega</td><td class="text-right">R$ {{ custoEntrega.toFixed(2) }}</td>
            </tr>
            <tr class="font-weight-bold">
              <td>Total</td><td class="text-right">R$ {{ totalPedido.toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>

        <input type="hidden" id="sabor" name="sabor" v-model="form.sabor">
        <input type="hidden" id="preco_pizza" name="preco_pizza" v-model="form.preco_pizza">
        <input type="hidden" id="custo_entrega" name="custo_entrega" v-model="form.custo_entrega">
        <input type="hidden" id="total_pedido" name="total_pedido" v-model="form.total_pedido">
        <div class="pedido__forma-pagamento mt-4 mb-5">
          <h4>Forma de pagamento</h4>
          <div class="form-check">
            <input class="form-check-input" id="dinheiro" name="forma_pagamento"  type="radio" value="dinheiro" v-model="form.forma_pagamento">
            <label class="form-check-label" for="dinheiro">
              Dinheiro
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" id="debito" name="forma_pagamento"  type="radio" value="debito" v-model="form.forma_pagamento">
            <label class="form-check-label" for="debito">
              Cartão de débito
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" id="credito" name="forma_pagamento"  type="radio" value="credito" v-model="form.forma_pagamento">
            <label class="form-check-label" for="credito">
              Cartão de crédito
            </label>
          </div>
        </div>
        <div>
          <div v-if="erro" class="alert alert-danger d-inline-block" role="alert">
            Houve um problema ao realizar seu pedido. Por favor tente novamente.
          </div>
        </div>
        <button class="btn btn-primary btn-lg text-uppercase">Finalizar meu pedido</button>
      </form>
    </div>
  </div>
</template>

<script>
import pizzas from '@/assets/data/pizzas'

import axios from 'axios'

export default {
  name: 'pedido',
  data: () => {
    return {
      pizzas,
      sabor: null,
      custoEntrega: 8.00,
      form: {
        nome: '',
        telefone: '',
        cep: '',
        endereco: '',
        sabor: '',
        preco_pizza: 0,
        custo_entrega: 0,
        total_pedido: 0,
        forma_pagamento: 'dinheiro'
      },
      erro: false
    }
  },
  computed: {
    totalPedido () {
      return this.sabor.preco + this.custoEntrega
    },

    novoPedidoUrl () {
      return 'http://' + process.env.VUE_APP_PEDIDOS_API_HOST + ':' + process.env.VUE_APP_PEDIDOS_API_PORT + '/api/pedido'
    }
  },

  methods: {
    finalizarPedido () {
      this.erro = false
      axios
        .post(this.novoPedidoUrl, this.form)
        .then(response => response.data)
        .then(data => {
          this.$router.push(`/status-pedido/${data.pedido_id}`)
        })
        .catch(error => {
          console.error(error)
          this.erro = true
        })
    }
  },

  created () {
    this.sabor = this.pizzas.find(pizza => pizza.id === this.$route.params.sabor)

    this.form.sabor = this.sabor.id
    this.form.preco_pizza = this.sabor.preco
    this.form.custo_entrega = this.custoEntrega
    this.form.total_pedido = this.totalPedido
  }
}
</script>

<style lang="scss">
  h4 {
    text-transform: uppercase;

    small {
      text-transform: none;
      font-size: 0.8rem;
    }
  }
</style>
