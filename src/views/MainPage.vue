<template>
  <v-app>
    <v-main>
      <SearchField/>
      <PackageTable/>
    </v-main>
  </v-app>
</template>

<script>
import SearchField from '../components/SearchField';
import PackageTable from '../components/PackageTable/PackageTable';

export default {
  name: 'MainPage',

  components: {
    SearchField,
    PackageTable
  },

  data: () => ({
    //
  }),
};
</script>
