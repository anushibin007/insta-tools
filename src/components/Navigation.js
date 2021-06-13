import "../css/navbar.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import About from "./About";

function Navigation() {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand>Instagram Tools</Navbar.Brand>
				<Navbar.Toggle aria-controls="insta-tools-navbar" />
				<Navbar.Collapse id="insta-tools-navbar">
					<Nav className="mr-auto">
						<About />
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{/* This line is to make an AJAX call to the counter update function. This will just increment the counter in the background */}
			<img src="https://www.freevisitorcounters.com/en/home/counter/836517/t/0" style={{ display: "none" }} alt="Visitor Counter Invoker"></img>
		</div>
	);
}

export default Navigation;
