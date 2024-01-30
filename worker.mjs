import {Buffer} from "node:buffer";
import {parentPort} from "node:worker_threads";
import {Readable} from "node:stream";

const firstBuffer = Buffer.from("raw buffer", "utf8");
console.log("[W] sending the first buffer", firstBuffer);
parentPort.postMessage(firstBuffer);

const secondBuffer = Buffer.from("another buffer", "utf8");

const arrayBuf = (() => {
	if (secondBuffer.byteOffset === 0 && secondBuffer.byteLength === secondBuffer.buffer.byteLength) {
		return secondBuffer.buffer;
	}else {
		return secondBuffer.buffer.slice(secondBuffer.byteOffset, secondBuffer.byteOffset + secondBuffer.byteLength);
	}
})();

console.log("[W] sending the second buffer", secondBuffer, arrayBuf);
parentPort.postMessage(arrayBuf, [arrayBuf]);

const thirdBuffer = Buffer.from("third", "utf8");
const readableStream = Readable.toWeb(Readable.from(thirdBuffer));
console.log("[W] sending the third buffer", thirdBuffer);
parentPort.postMessage(readableStream, [readableStream])

