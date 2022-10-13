import uuid from "uuid";
import nc from "next-connect";
import { connectDB } from "../../utils/connectDB";
import jwt from "jsonwebtoken";
import Contact from "../../models/Contact";
import colors from "colors";
// TODO: Come back and handle cookies if needed later.

const handler = nc();

handler.post(async (req, res) => {
	console.log(colors.bgBlue("Did run in route with...", req.body));
	const cookies = new Cookies(req, res);
	try {
		// let {
		// 	name: { first, last },
		// 	company,
		// 	isLocal,
		// 	body,
		// } = req.body;
		let newContact = new Contact({
			...req.body,
		});
		let savedContact = await newContact.save();
		console.log("savedSubmission:", savedContact);
		return res.status(200).json({
			msg: "Contact sent successfully.",
			savedContact: savedContact,
			success: true,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: "Something went wrong saving that contact",
			success: false,
		});
	}
});

export default connectDB(handler);
