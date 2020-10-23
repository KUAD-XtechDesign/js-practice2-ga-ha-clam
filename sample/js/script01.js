$(function(){
    
    let txt1= "えーーーーーー！？";
    let txt2= "いいのぉ！？";
    let txt3= "ありがとぉ〜";
    let num1= 4826;
    let num2= 7294;

    function sayHallo(){
        $("#content").append("いよぉ〜〜ポン！");
    }

    function saySomething(txt){
        $("#content").append(txt1);
    }

    function samtwo(arg1,arg2){
        $("#content").append(arg1 + arg2);
    }
  


    $("#button01").on("click",function(){
        sayHallo();
    })
  
    $("#button02").on("click",function(){
        saySomething();
    })
      
    $("#button03").on("click",function(){
        samtwo(txt1,txt2)
    })
      
    $("#button04").on("click",function(){
        samtwo(num1,num2)
    })
  
    $("#button05").on("click",function(){
        samtwo(txt1,txt2);
        samtwo(num1,num2);
    })
})