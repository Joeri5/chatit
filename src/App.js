import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext";

import Chats from "./components/Chats";
import Login from "./components/Login";
import HomeScreen from "./components/HomeScreen";
import {Redirect} from "react-router";

function App() {
	return (
		<div style={{ fontFamily: 'Avenir' }}>
			<Router>
				 <AuthProvider>
				<Switch>
					<Route exact path="/">
						<Redirect to="/home" />
					</Route>
					<Route path="/home" component={HomeScreen} />
					<Route path="/login" component={Login} />
					<Route path="/chats" component={Chats} />
				</Switch>
				 </AuthProvider>
			</Router>
		</div>
	)
}

export default App