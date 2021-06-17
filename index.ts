import { readFileSync, writeFile } from "fs";

const messageArray: {
	id: number;
	message: {
		date: string;
		time: string;
		sender: string;
		content: string;
	};
}[] = [];

const main = async (name: string) => {
	const data: string = readFileSync(`./${name}.txt`).toLocaleString();

	// Define the id and the message test regex
	let id: number = 1;
	const myReg: RegExp = /^[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]/;

	// split messages string to messages array at \n :
	const messages: string[] = data.split(/\n/);

	// Push the message objects to messageArray
	messages.map((message: string) => {
		// Check if message is valid before operating on it
		if (myReg.test(message)) {
			const date: string = message.split(",")[0];
			const time: string = message.split(",")[1].split(" - ")[0];
			const sender: string = message.split(": ")[0].split("- ")[1];
			const content: string = message.split(": ")[1];

			// Push the values as an object to messageArray
			messageArray.push({
				id,
				message: { date, time, sender, content },
			});

			// Increment the id
			id++;
		}
	});

	// Write the output file
	writeFile(
		"./output.json",
		JSON.stringify(messageArray),
		"utf8",
		(err) => {
			if (err) {
				console.log(
					"An error occured while writing JSON Object to File."
				);
				return console.log(err);
			}

			console.log("JSON file has been saved.");
		}
	);
};

// Get the name of the chat txt file and run the main() funciton
const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question(
	"Please enter the name of your txt file without the .txt extension: ",
	(name: string) => {
		main(name);
		readline.close();
	}
);
