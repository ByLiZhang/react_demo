export function genRandomColor() {
	return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
}

function randomNumber(max){
	return Math.floor(Math.random() * (max + 1));
}

export function genRandomPos() {
	return {
		left: `${randomNumber(100)}%`,
		top: `${randomNumber(100)}%`
	}
}