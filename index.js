const Card = {
	template: `<article>
		<p>card</p>
	</article>`,
};

const app = Vue.createApp({
	components: {
		Header: Header,
		Body: Body,
		Greeting: Greeting,
		Card: Card,
	},
	template: `
		<div>
			<Header />
			<h1>Index Page</h1>
			<Greeting
				name="654544"
				v-bind:month="50"
				v-bind:year="2001"
				day="Sunday" />
			<Body></Body>
		</div>
	`,
});

// 654544
// "654544"

app.mount('#app');
