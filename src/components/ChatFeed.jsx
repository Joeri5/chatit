import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[keys];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} className="w-full">
                    <div>
                        {
                            isMyMessage
                                ? <MyMessage />
                                : <TheirMessage />
                        }
                    </div>
                    <div style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        read-receipts
                    </div>
                </div>
            );
        })
    }

    if(!chat) return 'Loading...';

    return (
        <div>
            <div>
                <div>{chat ?.title}</div>
                <div>
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div className="h-24"/>
            <div>
                <MessageForm { ...props} chatID={activeChat}/>
            </div>
        </div>
    )
}

export default ChatFeed;