<template>
<div id="maintenance">
	<div id="maintenance-wrapper" class="text-center d-flex align-items-center flex-column justify-content-center h-100">
		<img src='@/assets/alternitive-nathan-healea-portfilio-logo.svg' atl="nathan healea alternitive portfolio logo" />
		<header>
				<h1>Hello World, I'm Nathan Healea</h1>
				<p class="h4"><span class="rotate">Programmer Analyst | Full Stack Engineer | Web Developer | Software Engineer</span></p>
		</header>
		<section class="text-secondary">
			<h3 class="text-uppercase"><strong>Website Under Maintenance</strong></h3>
		</section>
		<footer>
			<p class="h4">Get In Touch</p>
			<div class="row my-3">
				<div class="col">
					<a href="mailto:nate.healea@gmail.com.edu">
						<p class="h4"><i class="far fa-envelope"></i> nate.healea@gmail.com</p>
					</a>
				</div>
			</div>
			<div id="social-media" class="row my-3">
				<!-- GitHub !-->
				<div class="col">
					<a href="https://github.com/NathanHealea"><span class="icon-github fa-2x"></span></a>
				</div>
				<!-- Codepen !-->
				<div class="col">
					<a href="https://codepen.io/NathanHealea"><span class="icon-codepen fa-2x"></span></a>
				</div>
				<!-- Facebook !-->
				<div class="col">
					<a href="https://www.facebook.com/nathan.healea"><span class="icon-facebook fa-2x"></span></a>
				</div>
				<!-- LinkedIn !-->
				<div class="col">
					<a href="https://www.linkedin.com/in/nathanhealea"><span class="icon-linkedin fa-2x"></span></a>
				</div>
				<!-- Pintrest !-->
				<div class="col">
					<a href="https://www.pinterest.com/nathanhealea"><span class="icon-pinterest fa-2x"></span></a>
				</div>
				<!-- Instagram !-->
				<div class="col">
					<a href="https://www.instagram.com/nathanhealea"><span class="icon-instagram fa-2x"></span></a>
				</div>
				<!-- Twitter !-->
				<div class="col">
					<a href="https://twitter.com/nathanhealea"><span class="icon-twitter fa-2x"></span></a>
				</div>
				<!-- <div class="col"><a href="https://www.behance.net/nathanhealea"><i class="fas fa-behance fa-2x circle-icon" title="Behance"></i></a></div> --></div>
		</footer>
	</div>
</div>
</template>

<script>
export default {
  name: 'maintenance'
}
</script>

<style lang="scss" scoped>
#maintenance {
				height: 100vh;
    background-image: url("../assets/paul-gilmore-211347-unsplash.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#maintenance #maintenance-wrapper {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
}
</style>
