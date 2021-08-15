<template>
  <v-app>
    <v-main>
      <PackageTable/>

      <PackageDialog/>

      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import { PackageTable, PackageDialog, Footer } from '@/components'

export default {
  name: 'MainPage',

  components: {
    PackageTable,
    PackageDialog,
    Footer
  }
}
</script>
