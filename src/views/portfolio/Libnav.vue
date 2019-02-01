<template>
    <section id="libnav-project-wrapper" class="col-3 my-3">
        <div class="project-preview" data-toggle="modal" data-target="#libnav-modal">
            <img src="@/assets/libnav/libnav-preview.png"  class="img-fluid"/>
            <div class="overlay">
                <span><h2>LibNav</h2></span>
            </div>
        </div>

        <div class="modal modal-project fade" id="libnav-modal" tabindex="-1" role="dialog" aria-labelledby="libnav-modal-label" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <!-- <img src="@/assets/libnav/libnav-preview.png" class="img-fluid"/> -->

                    <div class="overlay">
                        <span><h3>LibNav</h3></span>
                    </div>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>

                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scopped>
.modal-header {
    background: url(../../assets/libnav/libnav-preview.png) no-repeat 50% 0px fixed;
   -webkit-background-size: 100% 75%;
   -moz-background-size: 100% 75%;
   -o-background-size: 100% 75%;
   background-size: 100% 75%;

    // background-attachment: fixed;
    // background-position: center;
    // background-size: cover;
}
</style>
