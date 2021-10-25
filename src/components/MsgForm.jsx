import { PictureOutlined, SendOutlined } from "@ant-design/icons";
import { useState } from "react";
import { isTyping, sendMessage } from "react-chat-engine";
const MsgForm = (props) => {

    const [value, setValue] = useState('');
    const { chatId, creds } = props;
    const inputHandler = (event) => {
        setValue(event.target.value);
        isTyping(props, chatId);
    }
    const uploadHandler = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text:'' });
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const text = value.trim();
        if (text.length > 0) sendMessage(creds, chatId, { text });
        setValue('');
    }
    return (
        <form action="" className="message-form" onSubmit={submitHandler}>
            <input type="text" className="message-input" placeholder="send a message" value={value} onChange={inputHandler} onSubmit={submitHandler} />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon"/>
                </span>
            </label>
            <input type="file" multiple={false} id="upload-button" style={{ display: 'none' }} onChange={uploadHandler} />
            <button className="send-button" type="submit">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    )
}
export default MsgForm; 