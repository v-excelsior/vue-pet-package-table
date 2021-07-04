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
        <v-text-field v-model.lazy="searchPackageName" label="Search" class="mx-4"/>
      </template>

      <template #item.homepage="{ value }">
        <TableLink :url="value" :iconName="'link'" />
      </template>
    </v-data-table>
  </div>
</template>

<script>
import TableLink from './TableLink'
import { tableHeaders } from './table-utils'

import API from "@/api";
import { _debounce } from '@/utils/common'

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
      packages         : [],
    }
  },
  computed: {},
  methods : {
    ...mapMutations({
      setCurrentPackageName: 'packages/setCurrentPackageName',
      toggleModalVisibility: 'toggleModalVisibility'
    }),

    onRowClick: function (row) {
      this.setCurrentPackageName(row.name)
      this.toggleModalVisibility()
    }
  },
  watch   : {
    searchPackageName: _debounce(async function (packageName) {
      this.packages = await API.findPackages(packageName)
    }, 300)
  }
}
</script>