# WhatsAppTxt-to-JSON
This simple script takes in the `.txt` file exported by WhatsApp and outputs a `.json` file with an array of messages as objects.

The interface of the exported `output.json` file is
```typescript
const messageArray: {
	id: number;
	message: {
		date: string;
		time: string;
		sender: string;
		content: string;
	};
}[];
```
## Using as an npm package
To use this package in a Node.js project, import is using
```javascript
const w2j = require("whatsapp-to-json");
```

Then you can use it by
```javascript
const convertedArray = converter(PATH_TO_FILE);
```