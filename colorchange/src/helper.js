function getsingleColor(){
	var letters = '0123456789ABCDEF';
	var colorselect = '#';
	for (var i = 0; i < 6; i++) {
		colorselect += letters[Math.floor(Math.random() * 16)];
	}
	return colorselect;
}
 function getRandomColor(numBoxes) {
	let boxes=[]
	for (let j=0;j<numBoxes;j++){
			let colorselect=getsingleColor()
			boxes.push({backgroundColor:colorselect})
	}
	return boxes;
}
export {getRandomColor, getsingleColor};