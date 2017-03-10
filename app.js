var name = prompt("Enter Your Name Please","Your Name");
var eng = +prompt("|Marksheet|","Enter English Marks");
var urdu = +prompt("|Marksheet|","Enter Urdu Marks");
var math = +prompt("|Marksheet|","Enter Mathematics Marks");
var phy = +prompt("|Marksheet|","Enter Physics Marks");
var isl = +prompt("|Marksheet|","Enter Islamiat Marks");

var obt = eng+urdu+math+phy+isl;
var per = (obt*100)/500;



if(per>80)
    {
        alert("Congratulations "+name+"! Your Grade is 'A+' and your Percentage is: " + per);
    }
else if(per>70 && per<80)
    {
        alert("Congratualtions, Your Grade is 'A'");
    }
else if(per>60 && per<70)
    {
        alert("Congratulations, Your Grade is 'B'");
    }
else if(per>50 && per<60)
    {
        alert("Congratulations, Your Grade is 'C'")
    }
else if(per>40 && per<50)
    {
        alert("Congratulations, Your Grade is 'E'")
    }
else
    {
        alert(name +"! " + "Sorry to say, You are Fail");
    }
