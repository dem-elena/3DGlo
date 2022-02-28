const modal=()=>{
    let widthDoc = document.documentElement.clientWidth;
    const modal = document.querySelector(".popup");
    const modalContent = modal.querySelector(".popup-content");
    const buttons = document.querySelectorAll(".popup-btn");
    const closeBtn = modal.querySelector(".popup-close");
    let idInterval;
    let count = 0;
    const movePopup = () => {
      count++;
      if (count < 30) {
        modalContent.style.left = count * 2 + "%";
        idInterval = requestAnimationFrame(movePopup);
      } else {
        cancelAnimationFrame(idInterval);
        count = 0;
      }
    };
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        widthDoc = document.documentElement.clientWidth;
        //debugger
        modalContent.style.left = "1%";
        modal.style.display = "block";
        if (widthDoc > 768) {
          idInterval = requestAnimationFrame(movePopup);
        }
      });
    });
  
    ////////////////////////////
    modal.addEventListener("click", (e) => {
      if (
        !e.target.closest("popup-content") ||
        e.target.classList.contains("popup-close")
      ) {
        modal.style.display = "none";
        count = 0;
      }
    });
  };  
export default modal