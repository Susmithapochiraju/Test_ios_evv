
function check(username) 
{






if (username == "") 
{
document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Username is Required</div>";

return false;
}
else
{
	
return true;
}
}



  
function checkpassword(password1) 
{


if (password1) 
{

			var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
       
        
 
       var json ='{"result":"E-10003 :","message": "Please Check Internet Connection Settings"}';

	obj = JSON.parse(json);

	            window.location='./first_screen.html';
                return false;
    }
    else
    {

    
    
    return true;
        
       
     }
  
}
else
{
document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Password is Required</div>";


return false;
}
}



function formValidation()  
{ 


var u = document.getElementById("username1");

var p = document.getElementById("password1");


    
    
   
    	if(check(u.value))
    	{
    		
    			if(checkpassword(p.value))
    			{
    					
    				//$.post( "http://192.168.0.99:8087/my_drupal_site/?q=my_services/m_resources/recover_forgotten_pin" , { device_uuid:encodeURIComponent(device_uuid), user_name:encodeURIComponent(u.value), user_pass:encodeURIComponent(p.value) }, function( data ) {
    		     	  
    					var json ='{"response":"0","response_Code":"I-20010","response_message": "Portal Username Password Matched"}';
    				
  				  	//	var json ='{"response":"1","response_Code":"E-10009","response_message": "Invalid Username or Password"}';
  				  
  				  		obj = JSON.parse(json);
  				  
  				  if(obj.response=='0')
  			    	
  				  	{
  				
  						alert(obj.response_message);
  						window.location='./recovery_for_forgot_pin.html';
  					}
  				  else
  					
  				  	{
  						alert(obj.response_message);
  						return false;
  					}
  				
    				  return false;
    			 
					
    			}
    				else
    			{
    				return false;
    			}
    	
    			
			}
    	return false;
	}