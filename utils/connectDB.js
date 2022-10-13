const mongoose = require("mongoose");
const nc = require("next-connect");
const colors = require("colors");

const connectDB = (handler) => async (req, res) => {
	console.log("process.env.MONGO_URI: ", process.env.MONGO_URI);
	console.log(colors.bgCyan.black("Running connectDB()"));
	if (mongoose.connections[0].readyState) {
		return handler(req, res);
	}
	return mongoose
		.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(async () => {
			console.log(colors.bgCyan.black("MongoDB connected"));
			return handler(req, res);
		});
};

module.exports = {
	connectDB,
};
