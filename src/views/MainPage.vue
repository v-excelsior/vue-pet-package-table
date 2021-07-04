<template>
  <v-app>
    <v-main>
      <PackageTable/>
    </v-main>
  </v-app>
</template>

<script>
import PackageTable from '../components/PackageTable/PackageTable';

export default {
  name: 'MainPage',

  components: {
    PackageTable
  },

  data: () => ({
    //
  }),
};
</script>
