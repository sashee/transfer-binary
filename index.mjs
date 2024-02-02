import {Worker} from "node:worker_threads";
import {buffer} from "node:stream/consumers";

const worker = new Worker("./worker.mjs");
worker.addListener("message", async ({name, data}) => {
	if (name === "third") {
		console.log(name, data, await buffer(data));
	}else {
		console.log(name, data, Buffer.from(data).toString("utf8"));
	}
});
