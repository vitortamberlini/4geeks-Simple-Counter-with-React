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
			<Container className="bg-dark h-25 w-25 d-flex flex-row">
				<Image
					className="img-fluid py-1 my-1 px-1 rounded rounded-3 bg-secondary"
					src="https://www.pngrepo.com/png/132777/512/clock.png"
					id="clock-image"
				/>
				<SecondsCounter className="flex-grow-1" seconds={seconds} />
			</Container>
		</>
	);
};

export default Counter;
