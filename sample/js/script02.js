$(function(){
    
    let hako = 0;

    function checkBox(){
        if(hako > 13){
          $("#content").append(hako + "個入っています。箱はいっぱいです。空にします");
          $("#content").addClass('full')
           hako = 0;
        }else if(hako <= 0){
          hako = 0;
          $("#content").append(hako + "個。入っていません。");
          $("#content").removeClass()
        }else{
          $("#content").append(hako + "個入っています。まだ入ります");
          $("#content").removeClass()
        }
    }

    $("#button01").on("click",function(){
        checkBox()
    })
  
    $("#button02").on("click",function(){
       hako = hako + 3;
       checkBox()
    })
      
    $("#button03").on("click",function(){
       hako = hako - 4;
       checkBox()
    })


})