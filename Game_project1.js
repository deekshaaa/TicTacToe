//Restart game button 
var restart = document.querySelector("#b")


//grabs all the squeares

var squares = document.querySelectorAll("td")

 //clears all the squares
 function clearBoard(){
 	for(var i=0; i< squares.length; i++){
 		squares[i].textContent= '';
 	}
 }
 restart.addEventListener('click',clearBoard);

 //check the square markers


// var cellOne = document.querySelector('#one')
// cellOne.addEventListener('click',function(){
// 	if(cellOne.textContent === ''){
// 		cellOne.textContent = 'X';
// 	}else if(cellOne.textContent === 'X'){
// 		cellOne.textContent= 'O';

// 	}else{
// 		cellOne.textContent= '';
// 	}
// })


function changeMarker(){
	if(this.textContent === ''){
		this.textContent ='X';
	}
	else if(this.textContent === 'X'){
		this.textContent = 'O';
	}else{
		this.textContent = '';
	}
}
//for loop to add event listners to all the square
for( var i=0; i< squares.length ; i++){
	squares[i].addEventListener('click',changeMarker);
}

 
