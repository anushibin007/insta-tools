import React, { useEffect, useState } from "react";
import { Alert, Image } from "react-bootstrap";
import InstaUtils from "../utils/InstaUtils";
import * as loaderMessage from "loader-message";

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

	const waitAnimation = () => {
		return (
			<Alert variant="secondary" className="text-center">
				<center>
					<lottie-player src="https://assets9.lottiefiles.com/packages/lf20_X31SKN.json" background="transparent" speed="2" style={{ width: "300px", height: "300px" }} loop autoplay></lottie-player>
					<h3 className="animate__animated animate__fadeIn">{loaderMessage.phrase()}</h3>
				</center>
			</Alert>
		);
	};

	const renderDpUrl = () => {
		if (dpUrl === "") {
			return waitAnimation();
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
