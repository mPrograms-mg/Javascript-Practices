let btn = document.getElementById('btn')
console.log(btn.innerHTML);

btn.addEventListener('click',function(){
    let val = btn.innerHTML
    btn.innerHTML = parseInt(val)+1
})