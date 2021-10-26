import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";
const App = () => {
  if (!localStorage.getItem('username')) {
    return (
      <LoginForm/>
    )
  }
	return (
		<ChatEngine
			height="100vh"
			projectID="a506373d-7cf4-4001-a84f-3f7fc87e7086"
			userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatProps)=><ChatFeed {...chatProps} />}
		/>
	);
};
export default App;
