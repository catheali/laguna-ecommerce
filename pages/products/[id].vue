<template>
	<div >
		<Head>
			<Title>Laguna | {{ product.title }}</Title>
			<Meta name="description" :content="product.description" />
		</Head>
		<ProductDetails :product="product"/>
	</div>
</template>

<script setup>

definePageMeta({
	layout:'products'
})

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/'+ id

const { data: product } = await useFetch(uri, {key: id})

if (!product.value) {
  throw createError({
    statusCode: 404,
    message: "Product not found",
  });
}

</script>

<style scoped>

</style>