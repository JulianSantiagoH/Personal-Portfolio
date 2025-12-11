const showSlidebarID = document.getElementById("showSlidebar");
const hiddenSlidebarID = document.getElementById("hiddenSlidebar");
const slidebar = document.getElementById('slidebar')

const getClassnameSlidebar = slidebar.classList.value;

let classNameSlidebarOpened = getClassnameSlidebar.split(" ");

console.log(classNameSlidebarOpened);

showSlidebarID.addEventListener("click", () => {
  if (classNameSlidebarOpened.includes("hidden-slidebar")) {
    slidebar.classList.remove("hidden-slidebar");
    console.log("si esta");
  } else {
    slidebar.classList.add("hidden-slidebar");
    console.log("no esta");
  }
});

hiddenSlidebarID.addEventListener('click',()=>{
    slidebar.classList.add("hidden-slidebar");
})