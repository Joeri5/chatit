const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username === message.sender.username;

    return(
        <div>
            {isFirstMessageByUser && (
                <div
                style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                />
            )}
            {message?.attachments?.length > 0
                ? (
                    <img
                    src={message.attachments[0].file}
                    alt="message-attachment"
                    style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                />
                ) : (
                    <div className="float-left bg-red-600" style={{  marginLeft: isFirstMessageByUser ? '4px' : '48px'  }}>
                        {message.text}
                    </div>
                )
            }
            }
        </div>
    )
}

export default TheirMessage;