const app = Vue.createApp({
	components: {
		Header: Header,
		Body: Body,
	},
	template: `
		<div>
			<Header></Header>
			<h1>About Page</h1>
			<Body></Body>
		</div>
	`,
});

app.mount('#app');
