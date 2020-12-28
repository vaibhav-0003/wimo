// SNACKS
$("button.snacks").click( function(){
    var randomnuber1 = Math.floor(Math.random() * 7) + 1;

    var snacks = "images/snacks/s" + randomnuber1 + ".jpeg";
   
    $("img")[0].setAttribute("class", "snacksi ");
    $("img")[0].setAttribute("src", snacks);
    
    // name of the dish
    var x = document.getElementsByTagName("img")[0].getAttribute("src");
   if(x == "images/snacks/s1.jpeg"){
       $("p.s").text("Afghani Chicken");
   }
   else if(x == "images/snacks/s2.jpeg"){
    $("p.s").text("Chilli Baby Corn");
    }
    else if(x == "images/snacks/s3.jpeg"){
    $("p.s").text("Chilli Paneer");
    }
    else if(x == "images/snacks/s4.jpeg"){
    $("p.s").text("Tandoori Momos");
     }
     else if(x == "images/snacks/s5.jpeg"){
    $("p.s").text("Tandoori Chicken");
    }
    else if(x == "images/snacks/s6.jpeg"){
    $("p.s").text("French Fries");
    }
    else if(x == "images/snacks/s7.jpeg"){
        $("p.s").text("Steam Momos");
        }

})


// MAIN COURSE

$("button.main").click( function(){
    var randomnuber1 = Math.floor(Math.random() * 6) + 1;

    var main = "images/main/m" + randomnuber1 + ".jpeg";
    
    $("img")[1].setAttribute("class", "snacksi ");
    $("img")[1].setAttribute("src", main);

    //Name of the dish
    var x = document.getElementsByTagName("img")[1].getAttribute("src");
    if(x == "images/main/m1.jpeg"){
        $("p.m").text("Chicken Biryani");
    }
    else if(x == "images/main/m2.jpeg"){
     $("p.m").text("Butter Chicken");
     }
     else if(x == "images/main/m3.jpeg"){
     $("p.m").text("Kadhai Chicken");
     }
     else if(x == "images/main/m4.jpeg"){
     $("p.m").text("Paneer Butter Masala");
      }
      else if(x == "images/main/m5.jpeg"){
     $("p.m").text("Veg Manchurian");
     }
     else if(x == "images/main/m6.jpeg"){
     $("p.m").text("Chicken Tikka Pizza");
     }
     
})

// DESSERT

$("button.dessert").click( function(){
    var randomnuber1 = Math.floor(Math.random() * 6) + 1;

    var dessert = "images/dessert/d" + randomnuber1 + ".jpeg";
    
    $("img")[2].setAttribute("class", "snacksi ");
    $("img")[2].setAttribute("src", dessert);


    // NAME OF THE DISH
    var x = document.getElementsByTagName("img")[2].getAttribute("src");
    if(x == "images/dessert/d1.jpeg"){
        $("p.d").text("Chocolate Brownie");
    }
    else if(x == "images/dessert/d2.jpeg"){
     $("p.d").text("Coke");
     }
     else if(x == "images/dessert/d3.jpeg"){
     $("p.d").text("Gulab Jamun");
     }
     else if(x == "images/dessert/d4.jpeg"){
     $("p.d").text("Virgin Mojito");
      }
      else if(x == "images/dessert/d5.jpeg"){
     $("p.d").text("Oreo Shake");
     }
     else if(x == "images/dessert/d6.jpeg"){
     $("p.d").text("Ras Malai");
     }
})