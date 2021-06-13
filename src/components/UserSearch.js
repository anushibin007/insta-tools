import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const UserSearch = (props) => {
	const [username, setUsername] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault();
		props.history.push("dp/" + username);
	};

	const handleUsernameChanged = (event) => {
		setUsername(event.target.value);
	};

	return (
		<Form onSubmit={handleFormSubmit}>
			<Form.Group controlId="username">
				<Form.Label>Instagram Username</Form.Label>
				<Form.Control type="text" placeholder="Enter a public Instagram user's username" onChange={handleUsernameChanged} />
			</Form.Group>
			<br />
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default UserSearch;
