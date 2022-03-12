import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

const App = () => {
	return (
		<>
			<ChatEngine
				height="100vh"
				projectID="94131741-a9c4-4ae4-87ae-1900731768f3"
				userName="Joeri"
				userSecret="123123"
				renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

			/>
		</>
	)
}

export default App;
