import "./App.css";
import Navigation from "./components/Navigation";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css/animate.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserSearch from "./components/UserSearch";
import DisplayPicture from "./components/DisplayPicture";
import Constants from "./utils/Constants";

function App() {
	return (
		<Container>
			<Navigation />
			<br />
			<Router basename={Constants.APPLICATION_CONTEXT_PATH}>
				<Switch>
					<Route path="/" exact component={UserSearch} />
					<Route path="/dp/:username" component={DisplayPicture} />
				</Switch>
			</Router>
		</Container>
	);
}

export default App;
