import "./App.css";
import Navigation from "./components/Navigation";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css/animate.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserSearch from "./components/UserSearch";

function App() {
	return (
		<Container>
			<Navigation />
			<Router>
				<Switch>
					<Route path="/" exact component={UserSearch} />
				</Switch>
			</Router>
		</Container>
	);
}

export default App;
