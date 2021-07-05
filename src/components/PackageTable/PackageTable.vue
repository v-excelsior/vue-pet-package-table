<template>
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
      <TableLink :url="value" :iconName="'link'"/>
    </template>
  </v-data-table>
</template>

<script>
import TableLink from './TableLink'
import { tableHeaders } from './table-utils'

import API from "@/api";
import { _debounce } from '@/utils/common'

import { mapActions,mapMutations } from 'vuex'

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

  methods: {
    ...mapMutations({
      toggleModalVisibility: 'toggleModalVisibility'
    }),

    ...mapActions({
      loadPackageInfo: 'packages/loadPackageInfo',
    }),

    onRowClick: function (row) {
      this.loadPackageInfo(row.name)
      this.toggleModalVisibility()
    }
  },

  watch: {
    searchPackageName: _debounce(async function (packageName) {
      this.packages = await API.findPackages(packageName)
    }, 300)
  }
}
</script>