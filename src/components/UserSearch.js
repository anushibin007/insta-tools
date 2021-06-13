import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
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
			<Form onSubmit={handleFormSubmit}>
				<Form.Group controlId="username">
					<Form.Label>Instagram Username</Form.Label>
					<Form.Control type="text" placeholder="Enter an Instagram user's username" onChange={handleUsernameChanged} required />
				</Form.Group>
				<br />
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</React.Fragment>
	);
};

export default UserSearch;
