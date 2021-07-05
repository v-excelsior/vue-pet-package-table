<template>
  <v-app>
    <v-main>
      <PackageTable/>

      <PackageDialog/>
    </v-main>
  </v-app>
</template>

<script>
import PackageTable from '@/components/PackageTable/PackageTable'
import PackageDialog from '@/components/PackageDialog/PackageDialog'

export default {
  name: 'MainPage',

  components: {
    PackageTable,
    PackageDialog
  },
}
</script>


