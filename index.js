// Directives
// v-if
// v-else-if
// v-else

// v-bind
// V-show
// v-for
// v-html
// v-text
// v-on,
// v-model

const app = Vue.createApp({
	// Private
	components: {
		Header: Header,
		Body: Body,
		Greeting: Greeting,
	},
	data: function () {
		return {
			person: {
				age: 20,
				name: 'Ahmed Khaled',
				address: 'Cairo',
			},
			event1: 'mouseover',
			emailValue: '',
			passwordValue: '',
			descriptionValue: '',
			ageValue: 0,
			fruits: [],
		};
	},
	template: `
		<div>
			<Header  />

			<button @[event1]="logParent" type="submit" class="hello">
				Click ME
			</button>

			<form v-on:submit.prevent>
				<input v-model.lazy.trim="emailValue" placeholder="Enter your Email" />
				<br />
				<input v-model="passwordValue" placeholder="Enter your Password" />
				<br />
				<input type="text" v-model="ageValue" placeholder="Enter your Age" />
				<br />
				<textarea v-model="descriptionValue" placeholder="Enter your Description"></textarea>
				<br />

				<select v-model="fruits" multiple>
					<option disabled value="">Please select one</option>
					<option>apple</option>
					<option>banana</option>
				</select>

				<br />
				<button type="submit">Submit</button>
				<button @click="reset">Reset</button>
			</form>

			<pre>
				Login Info:
				{{ emailValue }} <br/>
				{{ passwordValue }} <br/>
				{{ descriptionValue }} <br/>
				{{ typeof ageValue }} <br/>
				fruits: {{ fruits }} <br/>
			</pre>

			<Body></Body>
		</div>
	`,
	methods: {
		logParent() {
			console.log('Event fired Parent');
		},
		reset() {
			this.emailValue = '';
			this.passwordValue = '';
			this.descriptionValue = '';
			this.fruits = [];
		},
	},
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
// <p v-show="true">Hello World With Show</p>

// .innerText = '<p>hello</p>'
// .innerHTML = '<p>hello</p>'

// AttrOrProp
// <Greeting :name="person.name" .class=""></Greeting>

// inherent
