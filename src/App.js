import 	{ BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext";

import Chats from "./pages/Chats";
import Login from "./pages/Login";
import HomeScreen from "./pages/HomeScreen";
import {Redirect} from "react-router";

function App() {
	return (
		<div>
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