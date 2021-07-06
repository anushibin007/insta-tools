import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import Constants from "../utils/Constants";

const UserSearch = (props) => {
	const [username, setUsername] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault();
		addUserNameToHistory();
		props.history.push("dp/" + username);
	};

	const handleUsernameChanged = (event) => {
		setUsername(event.target.value);
	};

	const addUserNameToHistory = () => {
		const stateFromLocalStorage = localStorage.getItem(Constants.LOCALSTORAGE_KEY);
		// append this username to the existing storage
		if (stateFromLocalStorage) {
			var recents = JSON.parse(stateFromLocalStorage);
			recents = [...recents, username];
			localStorage.setItem(Constants.LOCALSTORAGE_KEY, JSON.stringify(recents));
		} else {
			// this is the first item
			localStorage.setItem(Constants.LOCALSTORAGE_KEY, JSON.stringify([username]));
		}
	};

	return (
		<React.Fragment>
			<Form onSubmit={handleFormSubmit} className="d-flex">
				<FormControl type="text" placeholder="👨 Enter an Instagram user's username" onChange={handleUsernameChanged} required autoFocus />
				<Button variant="primary" type="submit">
					🔍Search
				</Button>
			</Form>
		</React.Fragment>
	);
};

export default UserSearch;
