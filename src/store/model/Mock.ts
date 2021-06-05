import uuid from 'react-uuid'


interface Mock {
    uniqueId: string,
    endpoint: string,
    dummyJsonData: string,
    isShow: boolean
}

function initialMock(): Mock {
    return {
        uniqueId: uuid(),
        endpoint: "",
        dummyJsonData: "",
        isShow: false
    }
}

export {
    Mock,
    initialMock
}