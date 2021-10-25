const TheirMsg = props => {
	const { lastMsg, msg } = props;
    const isFirstMsg = !lastMsg || lastMsg.sender.username !== msg.sender.username;
    console.log(msg.text);
	return (
		<div className="message-row">
			{isFirstMsg && (
				<div
					className="message-avatar"
					style={{ backgroundImage: `url(${msg?.sender?.avatar})` }}
				/>
			)}
			{msg?.attachments?.length > 0 ? (
				<img
					src={msg.attachments[0].file}
					alt="message-attachment"
					className="message-image"
					style={{ marginLeft: isFirstMsg ? "4px" : "48px" }}
				/>
			) : (
				<div
					className="message"
					style={{
						float: "left",
						backgroundColor: "#CABCDC",
						marginLeft: isFirstMsg ? "4px" : "48px",
					}}
				>
					{msg.text}
				</div>
			)}
		</div>
	);
};
export default TheirMsg;
