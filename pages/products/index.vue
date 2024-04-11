<template>
	<div>
		<div class="grid grid-cols-4 gap-5">
			<div v-for="p in products" class="container p-3">
				<ProductCard :product="p"/>
			</div>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		layout:'products'
	})

	const { data: products } = await useFetch('https://fakestoreapi.com/products')

	useHead({
		title: 'Laguna | Products',
		meta:[
			{name:'description', content: 'Nuxt 3 ecommerce'}
		]
	})
</script>

<style  scoped>

</style>