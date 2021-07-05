import React, { useEffect, useState } from "react";
import { Alert, ProgressBar, Image } from "react-bootstrap";
import InstaUtils from "../utils/InstaUtils";

const DisplayPicture = (props) => {
	const [username] = useState(props.match.params.username);
	const [dpUrl, setDpUrl] = useState("");

	useEffect(() => {
		InstaUtils.getDpUrl(username)
			.then((response) => {
				setDpUrl(response.data.base64);
			})
			.catch((err) => {
				// error occured
				console.log(err);
				setDpUrl("500");
			});
	}, [username]);

	const openImageInNewTab = () => {
		var newTab = window.open();
		newTab.document.body.innerHTML = `<img src="${dpUrl}" />`;
	};

	const renderDpUrl = () => {
		if (dpUrl === "") {
			return <ProgressBar animated now={100} />;
		} else if (dpUrl === "500") {
			return <Alert variant="danger">There was an error processing DP URL for your request</Alert>;
		} else {
			return (
				<Alert variant="secondary" className="text-center">
					<button href="#" style={{ border: "0px" }}>
						<Image src={dpUrl} fluid onClick={openImageInNewTab} />
					</button>
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
