<template>
  <div class="hello">
    <b-button variant="success" @click="increment">+</b-button>
    <h1>{{ $store.state.count }}</h1>
    <b-button variant="danger" @click="decrement">-</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Number',
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>