interface Config {
    isLogging: boolean
    isMockEnable: boolean
}


function initialConfig(): Config {
    return {
        isLogging: false,
        isMockEnable: true
    }
}

export {
    Config,
    initialConfig
}