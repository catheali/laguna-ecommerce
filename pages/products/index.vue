<template>
	<div>
		<div class="grid grid-cols gap-5">
			<div v-for="p in products" class="container p-3">
				<NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
				<img :src="p.image" >
			</div>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		layout:'products'
	})

	const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style  scoped>

</style>