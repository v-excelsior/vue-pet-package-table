<template>
  <div class="package-table">
    Here be a table
  </div>
</template>

<script>
export default {
  name      : 'PackageTable',
  components: {  },
  data() {
    return {
      searchPackageName: '',
    }
  },
  // props  : {
  //   recipe: {
  //     type    : Object,
  //     required: true,
  //   },
  // },
  methods: {
    changeHandler(value) {
      console.log(value)
    }
  },
  watch: {
    searchPackageName: function (val) {

      //add debounce
      console.log(val)
    }
  }
}
</script>
