<template>
	<div>
		<header>
			<nav>
				<NuxtLink to="/">Laguna</NuxtLink>
				<ul>
					<li><NuxtLink to="/">Home</NuxtLink></li>
					<li><NuxtLink to="/about">About</NuxtLink></li>
					<li><NuxtLink to="/products">Products</NuxtLink></li>
				</ul>
			</nav>
	    </header>
		<div>
			<slot />
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>

	.router-link-exact-active {
		color: #333;
	}

</style>