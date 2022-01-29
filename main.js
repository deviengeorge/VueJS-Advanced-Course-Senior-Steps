// var counter = 1;

// Vue Reactivity Module

const app = Vue.createApp({
	template: `
		<div>
			{{ title }}
			<br />
			{{ arr }}
			<br />
			{{ "16" }}
			<br />
			<button v-on:click="arr.push(11)">add '11' to arr</button>
		</div>
	`,
	data: function () {
		return {
			counter: 10,
			title: 'Lorem, ipsum dolor.',
			arr: [5, 6, 7, 8, 9, 10],
			person: {
				name: 'devien',
				age: 11,
			},
		};
	},
});

app.mount('#app');
