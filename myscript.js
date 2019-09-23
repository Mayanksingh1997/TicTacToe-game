// Restart game button
var restart = document.querySelector("#b")

// Select all squares
var squares = document.querySelectorAll('td')

// clear all squares
function clearBoard(){
    for(var i=0; i<squares.length; i++)
    {
        squares[i].textContent = '';
    }
}
restart.addEventListener('click',clearBoard);

function checkSquare()
{
    if(this.textContent === '')
       this.textContent = 'X'
    else if(this.textContent === 'X')
       this.textContent = 'O'
    else if(this.textContent === 'O')
       this.textContent = ''

}
for(var i=0; i<squares.length; i++)
{
    squares[i].addEventListener('click',checkSquare)
}