const menu = () => {
    const body = document.querySelector("body");
    let widthDoc = document.documentElement.clientWidth;
    const menuBtn = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const closeBtn = menu.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul>li>a");
    
    const handleMenu = (rez) => {
      widthDoc = document.documentElement.clientWidth;
  
      if (widthDoc > 768) {
          if (rez){
              menu.classList.add("active-menu");}
            else{menu.classList.remove("active-menu");}
          
            //menu.classList.toggle("active-menu");
      } else {
        if (!menu.style.transform) {
          menu.style.transform = "translateX(0)";
        } else {
          menu.style.transform = "";
        }
      }
    };
  
  
    body.addEventListener("click", (e) => {
      if (e.target.closest(".menu")) {
        handleMenu(true);
      } else if (
        e.target.classList.contains("close-btn") ||
        !e.target.closest(".active-menu") ||
        e.target.matches(".active-menu>ul>li>a")
      ) {
        handleMenu(false);
      }
    });
  };
export default menu