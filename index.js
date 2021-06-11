function display()
{
    var name=document.getElementById("passengername").value;
    var mobile=document.getElementById("mobile").value;
    document.getElementById("result").innerHTML="Hi "+name+"! Thank You for choosing us as your Travel Partner. <br> We will get back to you within a day at "+mobile+".<br>Have a nice day!";
    return false;
}
function reset()
{
    document.getElementById("form").reset();
}