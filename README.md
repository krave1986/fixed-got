# A very simplified version of got

## Usage

```javascript
const fixedGot = require("fixed-got")

const result = await fixedGot(URL, time_limit, retry_interval, time_origin).josn()
```

## Purpose of this lib

It uses a very simple mechanism to do retry based on `got` if an error.

The time we start the request is `time_origin`, and we order the request must finish in the `time_limit` even if any errors. And with the help of `retry_interval`, we can set how long to wait for the next retry.

## Parameters

- `URL`

- `time_limit`
  Required

- `retry_interval`
  Optional. Defaults to `1000`

- `time_origin`
  Optional. Defaults to `performance.now()`