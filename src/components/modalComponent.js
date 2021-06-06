import React, {useState} from "react";
import {Button, Col, Input, Modal} from "antd";
import {styled} from "flipper-plugin";
import "../utils/Utils";
import {initialMock} from "../redux/createStore";
import {checkJsonIsValid} from "../utils/Utils";
import {useDispatch, useSelector} from "react-redux";
import {addMock, updateModalVisibility} from "../redux/actionCreators";

const SCol = styled(Col)({
    margin: 12,
    span: 4,
});

const {TextArea} = Input;

const ModalComponent = (props) => {

    const isShowModal = useSelector()
    const dispatch = useDispatch()
    const [mock, setMock] = useState(initialMock)
    const [isJsonValid, setIsJsonValid] = useState(true)
    const {endpoint, dummyJsonData} = mock

    const onCancel = () => {
        clearStateAndFinish()
    }

    const onOk = async () => {
        let isValid = handleFormat()
        if (isValid) {
            dispatch(addMock(mock))
            clearStateAndFinish()
        }
    }

    const clearStateAndFinish = () =>{
        setMock(initialMock)
        dispatch(updateModalVisibility(false))
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
