<template>
	<div>
		<header class="shadow-sm bg-white">
			<nav class="container mx-auto p-4 ">
				<NuxtLink to="/products" class="font-bold">Laguna Products</NuxtLink>
			</nav>
		</header>
		<div class="container mx-auto p-4">
			<slot />
		</div>
		<footer class="container mx-auto p-4 justify-betwwen border-t-2">
			<ul class="flex mx-auto gap-4">
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