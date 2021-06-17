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
To use this package in a Node.js project, first install it using
```bash
npm install whatsapp-to-json
```
or
```bash
yarn add whatsapp-to-json
```

Then import it using
```javascript
import { converter } from "whatsapp-to-json";
```

Then you can use it like
```javascript
const convertedArray = converter(PATH_TO_FILE);
```
