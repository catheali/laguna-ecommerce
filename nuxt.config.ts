// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
	head:{
		title: 'Laguna',
		meta: [
			{name: 'description',
			 content: 'example project of a ecommerce in Nuxt 3'
			}
		],
		link: [
			{
				rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'
			}
		]
	}
  }
})
