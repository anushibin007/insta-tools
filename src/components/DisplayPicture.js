import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import InstaUtils from "../utils/InstaUtils";

const DisplayPicture = (props) => {
	const [username] = useState(props.match.params.username);
	const [dpUrl, setDpUrl] = useState("");

	useEffect(() => {
		InstaUtils.getDpUrl(username).then((response) => {
			setDpUrl(response.data);
		});
	}, [username]);

	return (
		<React.Fragment>
			<Alert variant="primary">Username: {username}</Alert>
			<a href={dpUrl} target="_blank" rel="noopener noreferrer">
				Show DP
			</a>
		</React.Fragment>
	);
};

export default DisplayPicture;
