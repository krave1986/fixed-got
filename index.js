'use strict'

const fixedGot = async (path, mustThrowWithinThisPeriodIfAnyError, retryInterval = 1000, timeOrigin) => {
    const start = timeOrigin || performance.now()

    console.log(`start is ${start}`);

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