import React from "react";
import Container from "react-bootstrap/Container";
import Algorism from "./algorism.jsx";

const SecondsCounter = (props) => {
	function getAlgorism(number, index) {
		const strVersion = number.toString();
		return strVersion[strVersion.length - (index + 1)];
	}

	return (
		<>
			<Container className="w-100 d-flex justify-content-between flex-row">
				<Algorism
					number={
						props.seconds >= 100000
							? getAlgorism(props.seconds, 5)
							: 0
					}
				/>
				<Algorism
					number={
						props.seconds >= 10000
							? getAlgorism(props.seconds, 4)
							: 0
					}
				/>
				<Algorism
					number={
						props.seconds >= 1000
							? getAlgorism(props.seconds, 3)
							: 0
					}
				/>
				<Algorism
					number={
						props.seconds >= 100 ? getAlgorism(props.seconds, 2) : 0
					}
				/>
				<Algorism
					number={
						props.seconds >= 10 ? getAlgorism(props.seconds, 1) : 0
					}
				/>
				<Algorism number={getAlgorism(props.seconds, 0)} />
			</Container>
		</>
	);
};

export default SecondsCounter;
