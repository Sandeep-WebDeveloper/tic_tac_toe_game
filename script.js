 /*
1 get the GamepadButton
2 here to player x and 0
3 check turn of player
4 and onclick fill value according to player turm
5 difine the winning pattern
6 check who is winner if pattern is matching
7 display the massege
8 and disable the all buttons
9 create a reset button 
10 onclick all the value will be default

*/

let boxes = document.querySelectorAll(".box");
let turmX = true;
let messageBox = document.querySelector(".messageBox");
let newGameBtn = document.querySelector(".newGameBtn");
let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]
boxes.forEach((box) =>{
    box.addEventListener( "click", () =>{
        if(turmX){
            box.classList.add("red")
            box.innerText = "X";
            turmX = false;
        }else{
            box.classList.add("green");
            box.innerText = "O";
            turmX = true;
        }
         box.disabled = true;
         checkWinner()
        
    })
})

const checkWinner = () =>{
  for(let winner of winCondition){
   let val1 = boxes[winner[0]].innerText;
   let val2 = boxes[winner[1]].innerText;
   let val3 = boxes[winner[2]].innerText;
   if(val1 != "" && val2 != "" && val3 != ""){
            if(val1==val2 && val2 == val3){
            displayMessage(val1, messageBox)
            disable() 
        }
} }}
  



const displayMessage = (winner, tag) =>{
  tag.innerText = `winner is ${winner}`
}

const disable = () =>{
    boxes.forEach( (box) =>{
        box.disabled = true;})
}



// ****************** new game button logic ***************
newGameBtn.addEventListener("click", () =>{
    turmX = true;
    boxes.forEach( (box) =>{
        box.innerText = "";
        
        box.disabled = false;
        messageBox.innerText = '';
    })
})