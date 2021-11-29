/* ------------------------------------
course preview
 --------------------------------------*/
function coursePreviewVideo(){
    const coursePreviewVide = document.querySelector(".js-course-preview-modal")

    if(coursePreviewVide){
        coursePreviewVide.addEventListener("shown.bs.modal", function(){
            this.querySelector(".js-course-preview-video").play()
            this.querySelector("js-course-preview-video").currentTime=0

        
        });

        coursePreviewVide.addEventListener("hide.bs.modal", function(){
            this.querySelector(".js-course-preview-video").pause()
        });
    }

}
coursePreviewVideo();

 /* ------------------------------------
header menu
 --------------------------------------*/
 function headerMenu(){
     
    const menu = document.querySelector(".js-header-menu"),
    backdrop = document.querySelector(".js-header-backdrop"),
    menuCollapseBreakpoint= 991;

//toggle the sidebar
    function toggleMenu(){
        menu.classList.toggle("open");
        backdrop.classList.toggle("active");
        document.body.classList.toggle("overflow-hidden");
    }

    document.querySelectorAll(".js-header-menu-toggler").forEach((element) => {
    element.addEventListener('click', toggleMenu); 
    });

// close the menu by clicking outside of it

    backdrop.addEventListener("click", toggleMenu);


    function collapse(){
        
        menu.querySelector(".active .js-sub-menu").removeAttribute("style");
        menu.querySelector(".active").classList.remove("active");
    }

    menu.addEventListener("click", (event) => {
        const { target } = event;


        if(target.classList.contains("js-toggle-sub-menu") && window.innerWidth <= menuCollapseBreakpoint){
            //prevent default anchor click behavior
            event.preventDefault();

            //if menu-item already expanded, collapse it and exit
            if(target.parentElement.classList.contains("active")){
                collapse();
                return;
            }

            //collapse the other expanded menu-item if exists
            if(menu.querySelector(".active")){
                
                collapse();
 
            }

            //expand menu item
            target.parentElement.classList.add("active");
            target.nextElementSibling.style.maxHeight = target.nextElementSibling.scrollHeight + "px";
            
            window.addEventListener("resize", function(){
                if(this.innerWidth > menuCollapseBreakpoint && menu.classList.contains("open")){
                    toggleMenu();
                }

                if(this.innerWidth > menuCollapseBreakpoint && menu.querySelector(".active")){
                    collapse()
                }
            })

        }
    })

}
 headerMenu()

     
