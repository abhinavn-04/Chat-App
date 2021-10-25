import MsgForm from "./MsgForm";
import MyMsg from "./MyMsg";
import TheirMsg from "./ThierMsg";
const ChatFeed = props => {
    const { chats, activeChat, userName, messages } = props;
	const chat = chats && chats[activeChat];
	const renderMsgs = () => {
		const keys = Object.keys(messages);
		return keys.map((key, index) => {
			const msg = messages[key];
            const lastMsgKey = index === 0 ? null : keys[index - 1];
			const isMyMsg = userName === msg.sender.username;
			return (
				<div key={`msg_${index}`} style={{ width: "100%" }}>
					<div className="message-block">
						{isMyMsg ? <MyMsg msg={msg} /> : <TheirMsg msg={msg} lastMsg={messages[lastMsgKey]} />}
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMsg ? '18px' : '0px', marginLeft: isMyMsg ? '0px' : '68px' }}>
                        read-receipts
                    </div>
				</div>
			);
		});
	};
    if(!chat)return 'Loading...'
    return <div className='chat-feed'>
        <div className="chat-title-container">
            <div className="chat-title">{chat?.title}</div>
            <div className="chat-subtitle">
                {chat.people.map((person)=>`${person.person.username} `)}
            </div>
        </div>
        {renderMsgs()}
        <div style={{ height: '100px' }} />
        <div className="message-form-container">
            <MsgForm {...props} chatId={activeChat} />
        </div>
    </div>;
};
export default ChatFeed;
