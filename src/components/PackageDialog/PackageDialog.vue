<template>
  <v-dialog
      v-model="show"
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
    return {}
  },

  computed: {
    ...mapState({
      isModalVisible: state => state.isModalVisible,
      packageInfo   : state => state.packages.packageInfo
    }),

    show: {
      get() {
        return this.isModalVisible
      },
      set(payload) {
        this.toggleModalVisibility(payload)
        return this.isModalVisible
      }
    }
  },
  methods : {
    ...mapMutations({
      toggleModalVisibility: 'toggleModalVisibility'
    }),
  },
}
</script>