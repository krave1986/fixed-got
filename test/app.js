'use strict'

const fixedGot = require("../index")

async function goToGet() {
    const result = await fixedGot('http://localhost:3000', 1000).json()
    console.log(result);
}

goToGet()