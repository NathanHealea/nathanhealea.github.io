<template>
<div v-if="isMaintenance == true">
  {{isMaintenance}}
  <maintenance></maintenance>
</div>
<div v-else>
  <!-- main app components!-->
  <home></home>
</div>
</template>

<script>
import maintenance from '@/views/Maintenance'
import home from '@/views/Home'
export default {
  components: {
    maintenance,
    home
  },
  data() {
    return {
      isMaintenance: process.env.VUE_APP_MAINTENANCE
    }
  }
}
</script>


<style lang="scss">
@import "styles/main.scss";
</style>
