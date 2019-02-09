<template>
  <div v-if="!isMaintenance">
    <!-- main app components!-->
  </div>
  <div v-else>
    <maintenance></maintenance>
  </div>
</template>

<script>
import maintenance from '@/views/Maintenance';
export default {
	components: {
		maintenance
	},
	data() {
		return {
			isMaintenance: process.env.VUE_APP_MAINTENANCE
		};
	}
};
</script>

<style lang="scss">
@import 'styles/main.scss';
</style>
