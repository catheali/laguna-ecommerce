export default defineEventHandler(async (event)=>{
 
	//handle query params
	const {name} = getQuery(event)

	// handle post data
	const { age } = await readBody(event)

	//api call with private key
	const {currencyKey} = useRuntimeConfig()
	// is recommended to use $fetch when we're using server route 
	const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey='+currencyKey)
	// it would not show in front end
	return{
		message: `Hello ${name}! You are ${age} years old.`
	} 
	
})