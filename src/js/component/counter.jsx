import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import SecondsCounter from "./seconds-counter.jsx";
import Image from "react-bootstrap/Image";

const Counter = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setSeconds(seconds + 1);
		}, 1000);
	}, [seconds]);

	return (
		<>
			<Container className="bg-dark h-25 w-50 d-flex flex-row">
				<Image
					className="img-fluid"
					src="https://www.pngrepo.com/png/132777/512/clock.png"
				/>
				<SecondsCounter seconds={seconds} />
			</Container>
		</>
	);
};

export default Counter;
