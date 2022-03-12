const MyMessage = ({ message }) => {
    if(message?.attachments?.length > 0){
        return(
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="float-right"
                />
        )
    }
    return(
        <div className="float-right mr-5 text-white bg-purple-500">
            {message.text}
        </div>
    )
}

export default MyMessage;