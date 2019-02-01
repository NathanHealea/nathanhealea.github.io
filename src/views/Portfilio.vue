<template>
<section id="portfolio-section-wrapper" class="container">
    <div>
        <h1>Portfilio</h1>
    </div>
    <div class="row flex">
        <libnav></libnav>
        <libnav></libnav>
        <libnav></libnav>
        <libnav></libnav>
        <libnav></libnav>
        <div id="project-space-holder" class="d-flex align-items-stretch col my-3">
            <div  class="project-preview text-center">
                <span><h2>Comming Soon...</h2></span>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import libnav from '@/views/portfolio/Libnav'
export default {
  components: {
    libnav
  }

}
</script>

<style>

</style>
