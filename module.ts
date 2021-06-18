import { readFileSync } from "fs";

interface message {
	id: number;
	message: {
		date: string;
		time: string;
		sender: string;
		content: string;
	};
}

const messageArray: message[] = [];

export const converter = async (name: string): Promise<message[]> => {
	const data: string = readFileSync(`./${name}.txt`).toLocaleString();

	// Define the id and the smessage test regex
	let id: number = 1;

	const newReg: RegExp =
		/\d*\/\d*\/\d*,\s\d:\d*\s[a|p]m\s-\s\w+[\?]*[\s\w]*:\s\w+[\?]*[\sa-z\?]*/gi;

	// split messages string to messages array at \n :
	const messages: string[] = data.match(newReg) || [""];

	// Push the message objects to messageArray
	messages.map((message: string) => {
		// Split the message string to difference components
		const date: string = message.split(",")[0];
		const time: string = message.split(", ")[1].split(" - ")[0];
		const sender: string = message.split(": ")[0].split("- ")[1];
		const content: string = message.split(": ")[1];

		// Push the values as an object to messageArray
		messageArray.push({
			id,
			message: { date, time, sender, content },
		});

		// Increment the id
		id++;
	});

	// Return messageArray
	return messageArray;
};

module.exports.converter = converter;
