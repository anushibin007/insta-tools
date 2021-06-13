import React, { useEffect, useState } from "react";
import { Alert, ProgressBar, Image } from "react-bootstrap";
import InstaUtils from "../utils/InstaUtils";

const DisplayPicture = (props) => {
	const [username] = useState(props.match.params.username);
	const [dpUrl, setDpUrl] = useState("");

	useEffect(() => {
		InstaUtils.getDpUrl(username)
			.then((response) => {
				setDpUrl(response.data);
			})
			.catch((err) => {
				// error occured
				console.log(err);
				setDpUrl("500");
			});
	}, [username]);

	const renderDpUrl = () => {
		if (dpUrl === "") {
			return <ProgressBar animated now={100} />;
		} else if (dpUrl === "500") {
			return <Alert variant="danger">There was an error processing DP URL for your request</Alert>;
		} else {
			return (
				<Alert variant="secondary">
					<a href={dpUrl} target="_blank" rel="noopener noreferrer">
						<Image src={dpUrl} href={dpUrl} fluid />
					</a>
				</Alert>
			);
		}
	};

	return (
		<React.Fragment>
			<Alert variant="primary">Username: {username}</Alert>
			{renderDpUrl()}
		</React.Fragment>
	);
};

export default DisplayPicture;
