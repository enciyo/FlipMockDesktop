import uuid from 'react-uuid'
import HttpMethods from "./HttpMethods";


interface Mock {
    uniqueId: string,
    endpoint: string,
    dummyJsonData: string,
    isShow: boolean,
    httpMethod: string,
    queryParams: string,
    statusCode: number
}

function initialMock(): Mock {
    return {
        uniqueId: uuid(),
        endpoint: "",
        dummyJsonData: "",
        httpMethod: HttpMethods.NOT_CHECK,
        queryParams: "",
        isShow: false,
        statusCode: null
    }
}

export {
    Mock,
    initialMock
}