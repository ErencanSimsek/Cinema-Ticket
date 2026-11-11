const container = document.querySelector('.container')
const count = document.getElementById('count')
const amount=document.getElementById('amount')
const movie=document.getElementById('movie')

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat')&&!e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected')
        onTotal()
    }
})

movie.addEventListener('click',function(e){
    onTotal()
})

function onTotal() {
    let selected = container.querySelectorAll('.seat.selected').length
    count.innerText=selected
    amount.innerText=selected*movie.value
}