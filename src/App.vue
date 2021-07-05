<template>
  <v-app>
    <v-main>
      <MainPage/>
    </v-main>
  </v-app>
</template>

<script>
import MainPage from './views/MainPage'

export default {
  name: 'App',

  components: {
    MainPage
  }
}
</script>

<style lang="scss" src="./style.scss"/>
