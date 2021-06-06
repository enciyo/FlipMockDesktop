const prettyJson = (dummyJsonData) => {
    let obj = JSON.parse(dummyJsonData);
    return JSON.stringify(obj, undefined, 4);
};

const checkJsonIsValid = (dummyJsonData) => {
    try {
        return prettyJson(dummyJsonData);
    } catch (e) {
        return null
    }
};

export {
    prettyJson,
    checkJsonIsValid
}
