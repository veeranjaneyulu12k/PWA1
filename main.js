// ajax call initialisation
function jsondata(file,callback) {
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function() {
  if (xhr.readyState === 4 && xhr.status === 200){
  callback(xhr.responseText);
  }
};
xhr.send();
}
// function calling
jsondata("data.json",function(text) {
let data=JSON.parse(text);
console.log(data);
ba(data.basics);
educa(data.education);

})
// main division calling from html
var main=document.querySelector('.main');
// left diivision creation
// var left=document.getElementById('main');
var left=document.createElement("div");
left.classList.add ("left");
// id for left division
left.setAttribute("id","left");
// appending to main division
main.appendChild(left);
function ba(basic) {
  var img=document.createElement("img");
  img.src=basic.photo;
  left.appendChild(img);
  var name=document.createElement("h1");
  name.textContent=basic.name;
  left.appendChild(name);
  var email=document.createElement("p");
  email.textContent=basic.email;
  name.appendChild(email);
  var mobile=document.createElement("h4");
  mobile.textContent=basic.mobile;
  email.appendChild(mobile);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
// edu division
var edu=document.createElement("h1");
edu.textContent="Education Details:";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);
function educa(education) {
  for(i in education){
    var e1=document.createElement("div");
    e1.classList.add("edu1");
    e1.textContent=education[i].course;
    // list greation
    var ul=document.createElement("ul");
    ul.classList.add("edu2");
    for(j in education[i].college){
      var li=document.createElement("li");
      li.textContent=education[i].college[j];


    edu.appendChild(e1);
    e1.appendChild(ul);
    ul.appendChild(li);
  }

}
}
