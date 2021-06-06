import {useLayoutEffect, useState} from "react";
import {Button, Col, Input, Modal} from "antd";
import {styled, usePlugin} from "flipper-plugin";
import "../utils/Utils";
import {checkJsonIsValid} from "../utils/Utils";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store/model/AppState";
import {plugin} from "../index";

const SCol = styled(Col)({
    margin: 12,
    span: 4,
});

const {TextArea} = Input;

const ModalComponent = (props) => {

    const isShowModal = useSelector((state: AppState) => state.isVisibleModal)
    const currentMock = useSelector((state: AppState) => state.mock)
    const isUpdate = useSelector((state:AppState) => state.mocks.find(item => item.uniqueId === currentMock.uniqueId) !== undefined)
    const dispatch = useDispatch()
    const [mock, setMock] = useState(currentMock)
    const [isJsonValid, setIsJsonValid] = useState(true)
    const {endpoint, dummyJsonData} = mock
    const actions = usePlugin(plugin)

    useLayoutEffect(()=>{
        setMock(currentMock);
    },[currentMock])

    const onCancel = () => {
        clearStateAndFinish()
    }

    const onOk = async () => {
        let isValid = handleFormat()
        if (isValid) {
            if (isUpdate){
                dispatch(actions.updateMockAction(mock))
            }else{
                dispatch(actions.addMockAction(mock))
            }

            clearStateAndFinish()
        }
    }

    const clearStateAndFinish = () => {
        dispatch(actions.updateModalVisibility(false))
    }

    const update = e => {
        setMock({
            ...mock,
            [e.target.name]: e.target.value
        })
    }

    const handleFormat = () => {
        let pretty = checkJsonIsValid(mock.dummyJsonData);
        let isValid = pretty !== undefined && pretty !== null
        setIsJsonValid(isValid)
        if (!isValid) {
            return false
        }
        setMock({
            ...mock,
            dummyJsonData: pretty
        })
        return true
    }


    return (
        <>
            <Modal
                width={1000}
                title="New Mock"
                visible={isShowModal}
                onOk={onOk}
                onCancel={onCancel}>
                <SCol>
                    <Input
                        type="text"
                        name="endpoint"
                        value={endpoint}
                        onChange={update}
                        placeholder="Endpoint"
                    />
                </SCol>
                <SCol>
                    <TextArea
                        rows={6}
                        name="dummyJsonData"
                        value={dummyJsonData}
                        onChange={update}
                        placeholder="Mock Response"
                    />
                    <Button
                        style={{margin: 4,}}
                        onClick={handleFormat}>
                        Pretty
                    </Button>
                    {isJsonValid ? null : <h1> Json is not valid </h1>}
                </SCol>
            </Modal>
        </>
    );
};

export default ModalComponent;
