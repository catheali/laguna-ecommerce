<template>
	<div>
		<header>
			<nav>
				<NuxtLink to="/products">Laguna Products</NuxtLink>
			</nav>
		</header>
		<div>
			<slot />
		</div>
		<footer>
			<ul>
				<li><NuxtLink to="/">Home</NuxtLink></li>
				<li><NuxtLink to="/about">About</NuxtLink></li>
				<li><NuxtLink to="/products">Products</NuxtLink></li>
			</ul>
	    </footer>
	</div>
</template>

<script setup>

</script>

<style scoped>

	.router-link-exact-active {
		color: #333;
	}

</style>