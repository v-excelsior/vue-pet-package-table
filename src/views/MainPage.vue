<template>
  <v-app>
    <v-main>
      <SearchField/>
    </v-main>
  </v-app>
</template>

<script>
import SearchField from '../components/SearchField';

export default {
  name: 'MainPage',

  components: {
    SearchField,
  },

  data: () => ({
    //
  }),
};
</script>
