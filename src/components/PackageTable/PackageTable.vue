<template>
  <v-data-table
      :headers="tableHeaders"
      :items="packages"
      item-key="name"
      class="elevation-1"
      @click:row="onRowClick"
      hide-default-footer
      disable-sort
  >
    <template #top>
      <v-text-field v-model.lazy="searchPackageName" label="Search" class="mx-4"/>
    </template>

    <template #item.homepage="{ value }">
      <TableLink :url="value"/>
    </template>

    <template #footer>
      <div class="pagination">
        <v-btn @click="getPrevPage" :disabled="page === 1">Prev</v-btn>
        <span>{{ page }}</span>
        <v-btn @click="getNextPage" :disabled="packages.length < 10">Next</v-btn>
      </div>
    </template>
  </v-data-table>
</template>

<script>
import TableLink from './TableLink'
import { tableHeaders } from './table-utils'

import API from "@/api";
import { _debounce } from '@/utils/common'

import { mapActions, mapMutations } from 'vuex'

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
      page: 1
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
    },

    getPrevPage: function () {
      this.page--
    },

    getNextPage: function () {
      this.page++
    }
  },

  watch: {
    searchPackageName: _debounce(async function (packageName) {
      this.page = 1
      this.packages = await API.findPackages(packageName)
    }, 300),

    page: async function () {
      this.packages = await API.findPackages(this.searchPackageName, this.page)
    }
  }
}
</script>

<style lang="scss" src="./style.scss"/>