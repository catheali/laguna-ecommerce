<template>
	<div>
	  <h2>About</h2>
	   <div>  {{ data }}</div>
	</div>
  </template>
  
  <script setup>
		const {data} = await useFetch('api/products?name=Aldair_Playboy',{
			method: 'POST',
			body: {
				age: 25
			}
		})
  </script>
  
  <style scoped>
  
	  h2 {
		  margin-bottom: 2px;
		  font-size: 36px;
	  }
  
	  p {
		  margin: 20px 0;
	  }
  </style>