let myHeading=document.getElementById('aa0');
myHeading.textContent='Hello world!';

function AA(){
document.getElementById('aa1').innerHTML="11.5cm-15cm";
}
let myVariable=1;
/*Ԫ�����÷�����myVariable[0],myVariable[1]*/
//���ע��ֻ��һ�У����Լ򵥵ط�������б��֮��

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
//���һ��ͼ���л���

function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Mozilla ����ˣ�' + name + '��';
}

function setUserName() {
  let myName = prompt('�������������');
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
//��Ӹ��Ի���ӭ��Ϣ







