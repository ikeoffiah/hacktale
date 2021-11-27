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

 

     
