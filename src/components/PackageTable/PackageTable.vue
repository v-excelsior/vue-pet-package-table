<template>
  <div>
    <v-data-table
        :headers="tableHeaders"
        :items="packages"
        item-key="name"
        class="elevation-1"
        @click:row="onRowClick"
    >
      <template v-slot:top>
        <v-text-field v-model="searchPackageName" label="Search" class="mx-4"/>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { search } from '../../api/instance'

import { tableHeaders } from './table-utils'

import { mapActions, mapMutations } from 'vuex'

export default {

  data() {
    return {
      tableHeaders,
      searchPackageName: '',
      calories         : '',
      packages         : [],
    }
  },
  computed: {},
  methods : {
    ...mapMutations({
      setCurrentPackageName: 'packages/setCurrentPackageName',
      changeLoadingState: 'changeLoadingState',
    }),

    onRowClick: function (row) {

    }
  },
  watch   : {
    searchPackageName: async function (packageName) {
      //add debounce
      this.packages = await search(packageName)
    }
  }
}
</script>