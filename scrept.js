function lable(tagname,attrname,attrvalue,contant){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML= contant;
    return ele;
}
function linebrk(tagname){
var br = document.createElement(tagname);
return br;
}

function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
var ele1 = document.createElement(tagname);
ele1.setAttribute(attrname,attrvalue);
ele1.setAttribute(attrname1,attrvalue1);
ele1.setAttribute(attrname2,attrvalue2);

return ele1;
}

var Firstname = lable("lable","for","fristname","Firstname");
var br = linebrk("br");
var inputF = inputs("input","type","text","name","firstname","id","firstname")
var br1 = linebrk("br");

var Middlename = lable("lable","for","middlename","Middlename");
var br2 = linebrk("br");
var inputM = inputs("input","type","text","name","middlename","id","middlename")
var br3 = linebrk("br");

var Lastname = lable("lable","for","lastname","Lastname");
var br4 = linebrk("br");
var inputL = inputs("input","type","text","name","lastname","id","lastname")
var br5 = linebrk("br");

var Email = lable("lable","for","email","Email");
var br6 = linebrk("br");
var inputE = inputs("input","type","text","name","email","id","email")
var br7 = linebrk("br");

var password = lable("lable","for","pwd","Password");
var br8 = linebrk("br");
var inputP = inputs("input","type","password","name","pwd","id","pwd");

document.body.append(Firstname,br,inputF,br1,Middlename,br2,inputM,br3,Lastname,br4,inputL,br5,Email,br6,inputE,br7,password,br8,inputP);


// <div><label for="Firstname">Firstname</label></div>
//     <div>  <input type="text" name="Firstname" id="Firstname"></div>
// <div><label for="middlename">Middle Name</label></div>
//     <div> <input type="text" name="middlename" id="middlename"></div>
// <div>  <label for="lastname">LastName</label></div>
//     <div>  <input type="text" name="lastname" id="lastname"></div>
// <div> <label for="email">Email</label></div>
//     <div> <input type="email" name="email" id="email"></div>
// <div> <label for="pwd">password</label></div>
//     <div> <input type="password" name="pwd" id="pwd"></div>
// <button onclick="foo()">submit</button>
