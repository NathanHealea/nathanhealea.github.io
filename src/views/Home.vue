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
import landing from '@/views/home/Landing'
import about from '@/views/home/About'

export default {
  name: 'home',
  components: {
    navbar,
    landing,
    about
  }
}
</script>
