<template functional>
  <a target="_blank" :href="props.url" v-if="props.url" @click.stop>
    link
  </a>
</template>
