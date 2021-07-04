<template>
  <div>
    <v-data-table
        :headers="tableHeaders"
        :items="packages"
        item-key="name"
        class="elevation-1"
        @click:row="onRowClick"
    >
      <template #top>
        <v-text-field v-model="searchPackageName" label="Search" class="mx-4"/>
      </template>

      <template #item.homepage="{ value }">
        <TableLink :url="value"/>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import TableLink from './TableLink'

import API from '../../api'

import { tableHeaders } from './table-utils'

import { mapMutations } from 'vuex'

export default {
  name: 'PackageTable',

  components: {
    TableLink
  },

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
    }),

    onRowClick: function (row) {
      console.log(row)
    }
  },
  watch   : {
    searchPackageName: async function (packageName) {
      //add debounce
      this.packages = await API.findPackages(packageName)
    }
  }
}
</script>