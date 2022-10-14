import gsap from "gsap";
import * as ids from "../animations/domIDs";

class StackedPhoto {
	constructor(
		index,
		imagePath,
		displayText,
		entranceFunction,
		exitFunction,
		imageComponent = null
	) {
		this.index = index;
		this.displayText = displayText;
		this.entranceFunction = entranceFunction;
		this.exitFunction = exitFunction;
		this.imagePath = imagePath ? imagePath : false;
		this.imageComponent = imageComponent ? imageComponent : false;
		this.hasSeparateComponent = !imagePath && imageComponent;
	}
}

const data = [];

data.append(
	new StackedPhoto(
		0,
		"/assets/laylaInLivingRoom.jpeg",
		"Not long ago me and her were living a cozy life in a nice apartment while I worked as a freelance developer.",
		(oncomplete) => {
			tl = gsap.timeline({ onComplete: oncomplete });
			tl.to(ids.photoStackPhotoID(0), {
				x: 0,
				y: 0,
				rotateZ: 30,
				duration: 0,
				ease: "back.out",
			});
		},
		(oncomplete) => {
			tl = gsap.timeline({ onComplete: oncomplete });
			tl.to(ids.photoStackPhotoID(0), {
				y: -500,
				duration: 2,
				ease: "power4.out",
			});
		}
	)
);

export default data;
