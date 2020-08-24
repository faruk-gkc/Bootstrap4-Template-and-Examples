/* Class Çıkarma ve Ekleme*/

  $(document).ready(function(){

    $(".navbar-nav a").on("click",function(){
      $(".nav-item a").removeClass("active");
      $(this).addClass("active")
    }); 
    $(".nav a").on("click",function(){
      $(".nav-item a").removeClass("active");
      $(this).addClass("active")
    }); 
  });
