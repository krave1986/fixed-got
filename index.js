'use strict'

const got = require('got')

const fixedGot = (path, mustThrowWithinThisPeriodIfAnyError, retryInterval = 1000, timeOrigin) => {
    const start = timeOrigin || performance.now()

    return got(path, {
        retry: {
            calculateDelay: () => {
                const current = performance.now()
                const delay = (current - start + retryInterval > mustThrowWithinThisPeriodIfAnyError) ? 0 : retryInterval
                return delay
            }
        }
    })
}

module.exports = fixedGot