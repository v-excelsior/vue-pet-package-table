<template>
  <v-dialog
      v-model="isModalVisible"
      @click:outside="toggleModalVisibility"
  >
    {{ JSON.stringify(packageInfo) }}
  </v-dialog>
</template>

<script>
// import API from "@/api";
// import { _debounce } from '@/utils/common'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'PackageDialog',

  components: {},

  data() {
    return { }
  },
  computed: {
    ...mapState({
      isModalVisible: state => state.isModalVisible,
      packageInfo: state => state.packages.packageInfo
    }),
  },
  methods : {
    ...mapMutations({
      toggleModalVisibility: 'toggleModalVisibility'
    }),


  },
  // watch   : {
  //   searchPackageName: _debounce(async function (packageName) {
  //     this.packages = await API.findPackages(packageName)
  //   }, 300)
  // }
}
</script>