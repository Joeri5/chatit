const MessageForm = () => {
    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
            />
        </form>
    )
}

export default MessageForm;