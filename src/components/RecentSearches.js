import React, { useState, useEffect } from "react";
import { Accordion, Card, Row, Col, Button, ListGroup } from "react-bootstrap";
import Constants from "../utils/Constants";
import { Link } from "react-router-dom";

const RecentSearches = () => {
	const [recents, setRecents] = useState([]);

	/**
	 * On initial page load, check if the old state is cached in local storage.
	 * If nothing is found there, just show one empty row by calling the "reset" function.
	 */
	useEffect(() => {
		const stateFromLocalStorage = localStorage.getItem(Constants.LOCALSTORAGE_KEY);
		if (stateFromLocalStorage) {
			setRecents(JSON.parse(stateFromLocalStorage));
		}
	}, []);

	const resetRecents = () => {
		localStorage.setItem(Constants.LOCALSTORAGE_KEY, "[]");
		setRecents([]);
	};

	return (
		<div>
			<Accordion defaultActiveKey="0">
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="0">
						<h5>Your Recent Searches</h5>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							<ListGroup>
								{recents.map((recent) => (
									<Link to={`dp/${recent}`} key={recent}>
										<ListGroup.Item>{recent}</ListGroup.Item>
									</Link>
								))}
							</ListGroup>
							{recents.length > 0 && (
								<Button variant="warning" style={{ "margin-bottom": "10px", "margin-top": "10px" }} onClick={resetRecents} className="float-end">
									🧹 Clear Recents
								</Button>
							)}
							{recents.length === 0 && <h6>No recent searches</h6>}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
};

export default RecentSearches;
