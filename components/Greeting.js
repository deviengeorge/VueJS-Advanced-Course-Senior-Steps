// Type => Any data type | array
// default => primitive ( int, string, array ) | function
// Validator => function
// Required => Boolean

const Greeting = {
	props: {
		name: String,
		day: {
			type: [Number, String],
		},
		year: {
			type: Number,
			required: true,
		},
		month: {
			type: Number,
			default: function () {
				return 5;
			},
			validator: function (value) {
				if (value >= 1 && value <= 12) {
					return 1;
				} else {
					return 0;
				}
			},
		},
	},
	template: `
    <p>name: {{ name }}</p>
    <p>month: {{ month }}</p>
    <p>year: {{ year }}</p>
    <p>day: {{ day }}</p>
  `,
};
