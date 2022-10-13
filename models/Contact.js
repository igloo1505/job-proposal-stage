const mongoose = require("mongoose");
const dayjs = require("dayjs");

const ContactSchema = mongoose.Schema({
	name: {
		first: {
			type: String,
			required: true,
		},
		last: {
			type: String,
			required: false,
		},
	},
	company: {
		type: String,
		required: false,
	},
	isLocal: {
		type: Boolean,
		required: false,
	},
	date: {
		unix: {
			type: Date,
			default: Date.now(),
		},
		formatted: {
			type: Date,
			default: dayjs(),
		},
	},
	body: {
		type: String,
		required: true,
	},
});

module.exports =
	mongoose.models?.Contact || mongoose.model("Contact", ContactSchema);
