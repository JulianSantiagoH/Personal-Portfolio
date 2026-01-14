const buttons = {
    allButton: document.getElementById('allButton'),
    frontButton:document.getElementById('frontButton'),
    backButton: document.getElementById('backButton'),
    fullButton: document.getElementById('fullButton'),
}

const items = document.querySelectorAll('.filter-project')

console.log(items)

buttons.allButton.addEventListener('click',()=>{
    items.forEach(item=>{
        item.style.display=''
    })
})
buttons.frontButton.addEventListener('click',()=>{
    items.forEach(item=>{
        if(item.classList.contains('front-end')){
            item.style.display=''
        } else{
            item.style.display='none'
        }
    })
})
buttons.backButton.addEventListener('click',()=>{
    items.forEach(item=>{
        if(item.classList.contains('back-end')){
            item.style.display=''
        } else{
            item.style.display='none'
        }
    })
})
buttons.fullButton.addEventListener('click',()=>{
    items.forEach(item=>{
        if(item.classList.contains('full-stack')){
            item.style.display=''
        } else{
            item.style.display='none'
        }
    })
})