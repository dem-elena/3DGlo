const menu = () => {
    let widthDoc= document.documentElement.clientWidth
    const menuBtn=document.querySelector(".menu")
    const menu=document.querySelector("menu")
    const closeBtn=menu.querySelector('.close-btn')
    const menuItems=menu.querySelectorAll('ul>li>a')

    const handleMenu =()=>{ 
        widthDoc= document.documentElement.clientWidth
        
        if (widthDoc>768){
        menu.classList.toggle('active-menu')
        }
        else{
            if (!menu.style.transform)
        {menu.style.transform="translateX(0)"}
        else {menu.style.transform=""}
        }
    }

    menuBtn.addEventListener('click',handleMenu)
    closeBtn.addEventListener('click',handleMenu)

    menuItems.forEach(menuItem=>menuItem.addEventListener('click',handleMenu))
}
export default menu