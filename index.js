// v-if,
// v-else-if,
// v-else,
// v-bind,
// V-show
// v-for
// v-html
// v-text

// Not Completed v-on

const app = Vue.createApp({
	// Private
	components: {
		Header: Header,
		Body: Body,
		Greeting: Greeting,
	},
	data: function () {
		return {
			arr: ['ahmed', 'ahmed', 'ahmed', 'ahmed', 'ahmed', 'ahmed', 'ahmed'],
			person: {
				age: 20,
				name: 'Ahmed Khaled',
				address: 'Cairo',
			},
			imgSrc: 'https://via.placeholder.com/350x150',
			altValue: 'hello Image123',
			idValue: 'myImg',
		};
	},
	template: `
		<div>
			<Header  />

			<button @click="arr[2] = 'mohamed'">Click ME</button>

			<p v-text="'<h1>hello</h1>'"></p>

			<p v-html="'<h1>This IS My Wesbite</h1>'"></p>


			<Greeting
				v-bind:name="person.name"
			/>

			

			<Body></Body>
		</div>
	`,
});

// arr = ["1", "2", "3"]
// for (const item in arr) {

// }

// 654544
// "654544"

app.mount('#app');

// V-If
// <h1 v-if="age > 18">You Are UnderAge</h1>
// <h1 v-else-if="name === 'Admin'">You Are Admin</h1>
// <h1 v-else>Else</h1>

// V-For
// <p v-for="(myItem, i) in arr">{{ myItem }} - {{ i }}</p>
// <p v-for="(value, key1, index) in person">{{ key1 }}: {{ value }} - {{ index }}</p>

// V-Bind
// <img v-bind="{ id: 'hello img id', alt: altValue }" :title="myTitle" :src="imgSrc" />

// V-show
// <p v-show="false">Hello World With Show</p>

// .innerText = '<p>hello</p>'
// .innerHTML = '<p>hello</p>'
