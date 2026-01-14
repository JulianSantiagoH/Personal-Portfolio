const buttons = {
    allButton: document.getElementById('allButton'),
    technologiesButton:document.getElementById('technologiesButton'),
    frameworksButton: document.getElementById('frameworksButton'),
    toolsButton: document.getElementById('toolsButton'),
    databasesButton:document.getElementById('databasesButton'),
}

const items = document.querySelectorAll('.filter-skills')

console.log(items)

buttons.allButton.addEventListener('click',()=>{
    items.forEach(item=>{
        item.style.display=''
    })
})
buttons.technologiesButton.addEventListener('click',()=>{
    items.forEach(item=>{
        if(item.classList.contains('technologies-container')){
            item.style.display=''
        } else{
            item.style.display='none'
        }
    })
})
buttons.frameworksButton.addEventListener('click',()=>{
    items.forEach(item=>{
        if(item.classList.contains('frameworks-container')){
            item.style.display=''
        } else{
            item.style.display='none'
        }
    })
})
buttons.toolsButton.addEventListener('click',()=>{
    items.forEach(item=>{
        if(item.classList.contains('tools-container')){
            item.style.display=''
        } else{
            item.style.display='none'
        }
    })
})
buttons.databasesButton.addEventListener('click',()=>{
    items.forEach(item=>{
        if(item.classList.contains('databases-container')){
            item.style.display=''
        } else{
            item.style.display='none'
        }
    })
})