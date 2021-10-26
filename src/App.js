import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";
const App = () => {
	if (!localStorage.getItem("username")) {
		return <LoginForm />;
	}
	return (
		<ChatEngine
			height="100vh"
			projectID={window.env.projectID}
			userName={localStorage.getItem("username")}
			userSecret={localStorage.getItem("password")}
			renderChatFeed={chatProps => <ChatFeed {...chatProps} />}
		/>
	);
};
export default App;
