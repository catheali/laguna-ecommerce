export default defineEventHandler(async (event)=>{
 
	//handle query params
	const {name} = getQuery(event)

	// handle post data
	const { age } = await readBody(event)

	//api call with private key
	// is recommended to use $fetch when we're using server route 
	const {data} = await $fetch('url+apikey')
	// it would not show in front end
	return{
		message: `Hello ${name}! You are ${age} years old.`
	} 
	
})