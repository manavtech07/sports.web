var icon = document.getElementById('icon');
      icon.onclick = function(){
         document.body.classList.toggle('darktheme');
      
        if(document.body.classList.contains("darktheme")){
           icon.src="css/sun.png";
        }else{
           icon.src="css/moon.png";
        }
      }
window.addEventListener("scroll", function(){
   var header = document.querySelector("header");
   header.classList.toggle("sticky", window.scrollY > 0)

})