const emailCopy = document.getElementById('emailCopy')

emailCopy.addEventListener('click',()=>{
    const emailTextAddress= 'juliansantiago.rubianoherrera@gmail.com'
    navigator.clipboard.writeText(emailTextAddress)
})