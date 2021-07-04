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
    onRowClick: function (row) {
      console.log(row)
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