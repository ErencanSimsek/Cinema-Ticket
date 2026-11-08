const seats = document.querySelectorAll('.seat')
const movies=document.querySelectorAll('#movie')
const count=document.getElementById('count')
const amount = document.querySelector('#amount')

let countNumber=0;
let amountNumber=0
let movieBuy=20

for(let movie of movies){
    movie.addEventListener('click',function(){
        movieBuy=movie.value
        amount.innerHTML=`${movieBuy*countNumber}`
    })
}

for(let seat of seats){
    seat.addEventListener('click',function(event) {
        seat.className='seat selected'
        count.innerHTML=`${countNumber+=1}`
        amount.innerHTML=`${movieBuy*countNumber}`
        event.preventDefault();
    })
}