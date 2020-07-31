$("#login").click(function () { 
   var pass1 = $("#pass1").val();
   var pass2 = $("#pass2").val();
    
   if(pass1 != "" && pass2 != ""){
       if(pass1 == pass2){
           alert("Login Successful");
       }
       else{
           alert("Password Mismatch");
       }
   }
   else{
       alert("Password can't be empty");
   }
});