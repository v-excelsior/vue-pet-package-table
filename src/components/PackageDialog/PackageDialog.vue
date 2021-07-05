<template>
  <v-dialog v-model="show" content-class="package-dialog">
    <ul id="example-1">
      <li v-for="key in Object.keys(packageInfo)" :key="key">
        <span>{{ transformToReadableText(key) }}: </span>

        <a v-if="isLink(packageInfo[key])"
           class="package-dialog__link"
           target="_blank"
           :href="packageInfo[key]"
        >
          {{ packageInfo[key] }}
        </a>
        <span v-else>{{ packageInfo[key] }}</span>
      </li>
    </ul>
  </v-dialog>
</template>

<script>
import { transformToReadableText, isLink } from '@/utils/string'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'PackageDialog',

  components: {},

  data () {
    return {}
  },

  methods: {
    ...mapMutations({
      toggleModalVisibility: 'toggleModalVisibility'
    }),

    transformToReadableText: text => transformToReadableText(text),
    isLink: s => isLink(s)
  },

  computed: {
    ...mapState({
      isModalVisible: state => state.isModalVisible,
      packageInfo: state => state.packages.packageInfo
    }),

    show: {
      get () {
        return this.isModalVisible
      },
      set (show) {
        this.toggleModalVisibility(show)
        return this.isModalVisible
      }
    }
  }
}
</script>

<style lang="scss" src="./style.scss"/>
