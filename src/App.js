import "./App.css";
import Navigation from "./components/Navigation";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css/animate.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserSearch from "./components/UserSearch";
import DisplayPicture from "./components/DisplayPicture";
import Constants from "./utils/Constants";
import RecentSearches from "./components/RecentSearches";

function App() {
	return (
		<Container>
			<Navigation />
			<br />
			<Router basename={Constants.APPLICATION_CONTEXT_PATH}>
				<Route path="/" exact component={UserSearch} />
				<br />
				<Route path="/" exact component={RecentSearches} />
				<Route path="/dp/:username" component={DisplayPicture} />
			</Router>
		</Container>
	);
}

export default App;
