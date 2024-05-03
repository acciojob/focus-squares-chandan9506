//your JS code here. If required.


			
        let sq1 = document.getElementById("square1");
        let sq2 = document.getElementById("square2");
        let sq3 = document.getElementById("square3");
        let squares = document.querySelectorAll(".square");
       
        
        sq1.addEventListener("mouseover",function highlight(e){
         
            sq2.style.backgroundColor= "#6F4E37";
            sq3.style.backgroundColor= "#6F4E37";

        });
        sq1.addEventListener("mouseout",function normal(e){
            sq1.style.backgroundColor= "#E6E6FA";
            sq2.style.backgroundColor=  "#E6E6FA";
            sq3.style.backgroundColor= "#E6E6FA";

        });


        sq2.addEventListener("mouseover",function highlight(e){
          
            sq1.style.backgroundColor= "#6F4E37";
            sq3.style.backgroundColor= "#6F4E37";

        });
        sq2.addEventListener("mouseout",function normal(e){
            sq1.style.backgroundColor= "#E6E6FA";
            sq2.style.backgroundColor=  "#E6E6FA";
            sq3.style.backgroundColor= "#E6E6FA";

        });
        sq3.addEventListener("mouseover",function highlight(e){
          
            sq1.style.backgroundColor= "#6F4E37";
            sq2.style.backgroundColor= "#6F4E37";

        });
        sq3.addEventListener("mouseout",function normal(e){
            sq1.style.backgroundColor= "#E6E6FA";
            sq2.style.backgroundColor=  "#E6E6FA";
            sq3.style.backgroundColor= "#E6E6FA";

        });
       