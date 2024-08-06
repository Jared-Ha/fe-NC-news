import React from "react";
import Lottie from "lottie-react";
import loadingCircleAnimation from "./loading-circle.json";

const LoadingCircleAnimation = () => {
	return (
		<Lottie
			id="loading-circle"
			animationData={loadingCircleAnimation}
			loop={true}
		/>
	);
};
export default LoadingCircleAnimation;
