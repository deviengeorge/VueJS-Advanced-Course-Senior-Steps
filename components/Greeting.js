// Type => Any data type | array
// default => primitive ( int, string, array ) | function
// Validator => function
// Required => Boolean

const Greeting = {
	props: {
		name: String,
	},
	template: `
    <p>name: {{ name }}</p>
  `,
};
