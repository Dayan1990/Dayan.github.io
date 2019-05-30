let myHeading=document.getElementById('aa0');
myHeading.textContent='Hello world!';

function AA(){
document.getElementById('aa1').innerHTML="11.5cm-15cm";
}
let myVariable=1;
/*元素引用方法：myVariable[0],myVariable[1]*/
//如果注释只有一行，可以简单地放在两个斜杠之后。

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
//添加一个图像切换器

function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;
//添加个性化欢迎信息







