const MyMsg = (props) => {
    const { msg } = props;
    if (msg?.attachments?.length > 0) {
        return (
            <img src={msg.attachments[0].file} alt="message-attachment" className="message-image" style={{float:'right'}} />
        )
    }
    const cleanText = msg.text.replace(/<\/?[^>]+(>|$)/g, "");
    return <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50', }}>
        {cleanText}
    </div>;
};
export default MyMsg;
