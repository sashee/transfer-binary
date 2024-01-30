import {Worker} from "node:worker_threads";
import {buffer} from "node:stream/consumers";

const worker = new Worker("./worker.mjs");
worker.addListener("message", async (msg) => {
	console.log(msg, msg.byteLength ? Buffer.from(msg).toString("utf8"): await buffer(msg));
});
