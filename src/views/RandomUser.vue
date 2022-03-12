<template>
  <div class="hello">
    <b-card
    v-bind:title="profil.name.first + ' ' + profil.name.last"
    v-bind:img-src="profil.picture.large"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{ profil.email }}
    </b-card-text>
  </b-card>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
export default {
  name: 'RandomUser',
  computed: mapState([
        'profil'
    ]), 
    mounted () {
      setInterval(() => {
        this.$store.dispatch('fetchData')
      }, 2000)  
    },

}
</script>

<style type="text/css">
  .hello {
    display: inline-grid;
  }
</style>