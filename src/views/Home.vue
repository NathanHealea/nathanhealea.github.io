<template>
<div id="home-app-wapper">
  <navbar></navbar>
  <landing></landing>
  <about></about>
</div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/Navbar'
import landing from '@/views/Landing'
import about from '@/views/About'

export default {
  name: 'home',
  components: {
    navbar,
    landing,
    about
  }
}
</script>
