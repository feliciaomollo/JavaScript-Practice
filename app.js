document.addEventListener('DomContentLoaded', ()=>{
    const menu = document.getElementById('menu');

});


window.onscroll = ()=>{
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight){
            document.querySelector('Message').textContent = "You've seen the full menu!"
        }else{
            document.querySelector('Message').style.background = '';
        }
    }