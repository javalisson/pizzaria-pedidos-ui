<template>
  <div class="border p-2 text-center">
    <span class="text-uppercase">Pizza {{ sabor.nome }}</span>
    <img class="img-fluid" :src="sabor.img_sabor" :alt="'Foto de uma pizza sabor' + sabor.nome" />
      <div class="d-flex flex-row">
        <router-link class="btn btn-primary btn-lg flex-grow-1 font-italic" :to="'/pedido/' + sabor.id">Peça já!</router-link>
        <router-link class="btn btn-secondary btn-lg ml-2" :to="'/sabor/' + sabor.id" role="button">
          <font-awesome-icon icon="info-circle" />
        </router-link>
      </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faInfoCircle)

export default {
  name: 'pizza',
  props: {
    sabor: {
      required: true,
      type: Object
    }
  }
}
</script>
