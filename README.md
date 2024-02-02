## Run

```
node index.mjs
```

## Result

```
[W] sending the first buffer <Buffer 72 61 77 20 62 75 66 66 65 72>
first Uint8Array(10) [
  114,  97, 119,  32,
   98, 117, 102, 102,
  101, 114
] raw buffer
second ArrayBuffer {
  [Uint8Contents]: <61 6e 6f 74 68 65 72 20 62 75 66 66 65 72>,
  byteLength: 14
} another buffer
[W] sending the second buffer <Buffer 61 6e 6f 74 68 65 72 20 62 75 66 66 65 72> ArrayBuffer {
  [Uint8Contents]: <61 6e 6f 74 68 65 72 20 62 75 66 66 65 72>,
  byteLength: 14
}
[W] sending the third buffer <Buffer 74 68 69 72 64>
third ReadableStream { locked: false, state: 'closed', supportsBYOB: false } <Buffer 74 68 69 72 64>
```
