const showSlidebarID = document.getElementById("showSlidebar");
const hiddenSlidebarID = document.getElementById("hiddenSlidebar");
const slidebar = document.getElementById('slidebar')
const bgDark = document.getElementById('bgDark')

const getClassnameSlidebar = slidebar.classList.value;
const getClassnameBgDark = bgDark.classList.value

let classNameSlidebarOpened = getClassnameSlidebar.split(" ");
let classNameBgDark = getClassnameBgDark.split(' ')

showSlidebarID.addEventListener("click", () => {
  if (classNameSlidebarOpened.includes("hidden-slidebar") && classNameBgDark.includes("hidden-slidebar")) {
    slidebar.classList.remove("hidden-slidebar");
    bgDark.classList.remove("hidden-slidebar")
  }});

hiddenSlidebarID.addEventListener('click',()=>{
    slidebar.classList.add("hidden-slidebar");
    bgDark.classList.add("hidden-slidebar");
})