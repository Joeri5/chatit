import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext";

import Chats from "./components/Chats";
import Login from "./components/Login";
import HomeScreen from "./components/HomeScreen";

function App() {
	return (
		<div style={{ fontFamily: 'Avenir' }}>
			<Router>
				 <AuthProvider>
				<Switch>
					 <Route path="/chats" component={Chats} />
					<Route path="/home" component={HomeScreen} />
					<Route path="/login" component={Login} />
				</Switch>
				 </AuthProvider>
			</Router>
		</div>
	)
}

export default App