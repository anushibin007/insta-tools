import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const UserSearch = (props) => {
	const [userid, setUserid] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault();
		props.history.push("dp?userid=" + userid);
	};

	const handleUseridChanged = (event) => {
		setUserid(event.target.value);
	};

	return (
		<Form onSubmit={handleFormSubmit}>
			<Form.Group controlId="userid">
				<Form.Label>Instagram User ID</Form.Label>
				<Form.Control type="text" placeholder="Enter a public Instagram user's ID" onChange={handleUseridChanged} />
			</Form.Group>
			<br />
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default UserSearch;
