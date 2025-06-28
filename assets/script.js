const sections = document.querySelectorAll(".nav__list-item")

sections.forEach(section => {
    section.addEventListener("click", function(e){
        e.preventDefault()
        const targetId = section.textContent.toLowerCase();
        const target = document.getElementById(targetId)
        if(target){
            target.scrollIntoView({behavior:"smooth"})
        }
    })
})

const toggleIcon = document.getElementById("navToggle")
const navList = document.getElementById("navList")
const navItems = document.querySelectorAll('.nav__list-item');

toggleIcon.addEventListener("click", () => {
    navList.classList.toggle("nav__toggle");

        navItems.forEach(item => {
            item.addEventListener("click", () => {
            navList.classList.remove("nav__toggle")
            })
        })
})
