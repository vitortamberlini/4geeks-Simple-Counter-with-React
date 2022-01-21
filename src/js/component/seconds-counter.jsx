import React from "react";
import Container from "react-bootstrap/Container";
import Algorism from "./algorism.jsx";

const SecondsCounter = (props) => {
	return (
		<>
			<Container className="w-100 d-flex justify-content-between flex-row">
				<Algorism
					number={props.seconds > 100000 ? props.seconds % 100000 : 0}
				/>
				<Algorism
					number={props.seconds > 10000 ? props.seconds % 10000 : 0}
				/>
				<Algorism
					number={props.seconds > 1000 ? props.seconds % 1000 : 0}
				/>
				<Algorism
					number={props.seconds > 100 ? props.seconds % 100 : 0}
				/>
				<Algorism
					number={props.seconds > 10 ? props.seconds % 10 : 0}
				/>
				<Algorism number={props.seconds} />
			</Container>
		</>
	);
};

export default SecondsCounter;
