<template>
	<div>
		<p>Product details for {{id}}</p>
		<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, eligendi doloribus aliquid quod mollitia illo ex accusantium similique debitis commodi dolorem odio sint nam molestias deserunt sit reiciendis illum? Natus!</p>
	</div>
</template>

<script setup>

const { id } = useRoute().params

</script>

<style scoped>

</style>