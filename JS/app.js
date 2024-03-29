const topnav = document.querySelector(".topnav-right");
const codeBtn = document.querySelector('.my-work-code-btn');


// Hides navigation menu if anywhere is clicked on the screen besides sandwich menu

if(window.matchMedia("(max-width: 600px)").matches) { 
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.menu-container')) {
      topnav.style.display = "none";
    }
  });
}

//Shows or hides the navigation menu

window.onload = function(){
  document.body.addEventListener('click', showMenu, false);

  function showMenu(e){
    if(e.target.classList.contains("menu-container")){
      if(topnav.style.display == "none"){
        topnav.style.display = "initial";
      }else{
        topnav.style.display = "none";
      }
    }
  }
}

// Main Project


// Event for medias 750px and over
// if(window.matchMedia("(min-width: 750px)").matches) { 
//   document.querySelector("#my-work").addEventListener('click', slideImage);

//   function slideImage(e){
//     if(e.target.classList.contains("work-grid")) 
//       console.log(e.target);
//   }
// }

// CSS image strings and variables

let bgImages = [];
for(var i = 1; i <= 4; i ++){
  bgImages.push(`url("./Style/Images/App${i}.PNG") no-repeat scroll center center / cover`);
  
}
console.log(bgImages);

const projects = document.querySelectorAll(".img-card");
const overlayText = document.querySelectorAll(".img-desc");
var tempImage = "";

console.log(projects);


var bgStyleCheck = "";
var linkStyle = "";

//Create modals for each project


function createProjModal(modalTxt){
  var myModal = document.createElement("div");
  myModal.style.textAlign = "center";
  myModal.style.background = "linear-gradient(to bottom, rgba(30,30,45,0) , rgba(204,218,209,0))";
  myModal.style.height = "100%";
  myModal.style.width = "100%";
  myModal.style.display = "flex";
  myModal.style.alignItems = "center";
  myModal.style.justifyContent = "center";
  // myModal.style.color = "";
  
  var modalText = document.createElement("p");
  modalText.appendChild(document.createTextNode(modalTxt));
  modalText.style.fontSize = "2em";
  modalText.style.opacity = "0";
  modalText.style.display = "inline";
  modalText.style.fontStyle = "italic";
  modalText.style.fontWeight = "900";

  myModal.appendChild(modalText);

  myModal.addEventListener('mouseover', () =>{
    myModal.style.background = "linear-gradient(to bottom, rgba(30,30,45,0.7) , rgba(204,218,209,0.7))";
    modalText.style.opacity = "1";
  });
  myModal.addEventListener('mouseleave', () =>{
    myModal.style.background = "linear-gradient(to bottom, rgba(30,30,45,0) , rgba(204,218,209,0))";
    modalText.style.opacity = "0";
  });

  return myModal;
}

//Create array of these nodes to remove later
var modalList = [];

//Project1 Modal Details

const txtDesc1 = "Weather App - " + "\nClick to see it!";
var projModal1 = createProjModal(txtDesc1);
projModal1.addEventListener('click', () => {
  window.open("https://codepen.io/ChrisCodeCole/pen/XENMmO", '_blank')
});
modalList.push(projModal1);

//Project2
const txtDesc2 = "Random Quote App - \nClick to see it!";
var projModal2 = createProjModal(txtDesc2);
projModal2.addEventListener('click', () => {
  window.open("https://codepen.io/ChrisCodeCole/pen/qxejgW", '_blank')
});
modalList.push(projModal2);

//Project3
const txtDesc3 = "Messenger App - \nClick to see it!";
var projModal3 = createProjModal(txtDesc3);
projModal3.addEventListener('click', () => {
  window.open("https://vimeo.com/268229570", '_blank')
});
modalList.push(projModal3);

//Project4
const txtDesc4 = "React Todo List App - Click to see it!";
var projModal4 = createProjModal(txtDesc4);
projModal4.addEventListener('click', () => {
  window.open("https://blooming-harbor-28312.herokuapp.com/", '_blank')
});
modalList.push(projModal4);

//Project5

//Add initial overlay
projects[1].appendChild(projModal2);


//Button Event Listeners
  //App 1 -
function codeLinkApp1(){
  window.open("https://codepen.io/ChrisCodeCole/pen/XENMmO", '_blank');
};
let App1Link = false;
  //App 2 - 
function codeLinkApp2(){
  window.open("https://codepen.io/ChrisCodeCole/pen/qxejgW", '_blank');
};
let App2Link = false;
  //App 3 -
function codeLinkApp3(){
  window.open("https://github.com/ChrisCodeCole/JavaGitProjects/tree/master/src", '_blank');
};
let App3Link = false;
  //App 4-
 function codeLinkApp4(){
  window.open("https://github.com/ChrisCodeCole/react-todolist", '_blank');
};
let App4Link = false;

//Initial button listener
codeBtn.addEventListener('click', codeLinkApp2);
App2Link = true;

// Event for medias above 750px
if(window.matchMedia("(min-width: 750px)").matches) { 
  document.querySelector("#my-work").addEventListener('click', slideImage);

  function slideImage(e){
    //Slide Left
    if(e.target.classList.contains("project1")){
      tempImage = bgImages[0];

      //Update project images
      for(var i = 0; i < bgImages.length; i++){
        if(i == bgImages.length - 1){
          projects[bgImages.length - 1].style.background = bgImages[0];
          break;
        }
        projects[i].style.background = bgImages[i + 1];
        //add fade animation class
      }

      //Update Image array
      for(var i = 0; i < bgImages.length; i++){
        if(i == bgImages.length - 1){
          bgImages[bgImages.length - 1] = tempImage;
          break;
        }
        bgImages[i] = bgImages[i + 1];
      }

      //CSS Fade effect
      projects[0].classList.add("fade-in"); 
      projects[1].classList.add("fade-inMain");
      projects[2].classList.add("fade-in");
      codeBtn.classList.add("fade-inMain");
      setTimeout(function(){
        projects[0].classList.remove("fade-in");
        projects[1].classList.remove("fade-inMain");
        projects[2].classList.remove("fade-in");
        codeBtn.classList.remove("fade-inMain");
      }, 1000);         
    }


    //Slide Right
    if(e.target.classList.contains("project3")){
      tempImage = bgImages[bgImages.length - 1];

      //Update project images
      for(var i = bgImages.length - 1; i > -1; i--){
        if(i == 0){
          projects[0].style.background = bgImages[bgImages.length - 1];
          break;
        }
        projects[i].style.background = bgImages[i - 1];
      }


      //Update Image array
      for(var i = bgImages.length - 1; i > -1; i--){
        if(i == 0){
          bgImages[0] = tempImage;
          break;
        }
        bgImages[i] = bgImages[i - 1];
      }

      //CSS Fade effect
      projects[0].classList.add("fade-in");
      projects[1].classList.add("fade-inMain");
      projects[2].classList.add("fade-in");
      codeBtn.classList.add("fade-inMain");
      setTimeout(function(){
        projects[0].classList.remove("fade-in");
        projects[1].classList.remove("fade-inMain");
        projects[2].classList.remove("fade-in");
        codeBtn.classList.remove("fade-inMain");
      }, 1000);       
    }

    //Update Main Image Link
    bgStyleCheck = window.getComputedStyle(projects[1]);
    linkStyle = bgStyleCheck.background;


    //Remove modal nodes
    for(var i = 0; i < modalList.length; i++){
      if(projects[1].contains(modalList[i])){
        projects[1].removeChild(modalList[i]);
      }
    }

    //Remove button event listeners
    if(App1Link) {
      codeBtn.removeEventListener('click', codeLinkApp1);
      App1Link = false;
    }
    if(App2Link) {
      codeBtn.removeEventListener('click', codeLinkApp2);
      App2Link = false;
    }
    if(App3Link) {
      codeBtn.removeEventListener('click', codeLinkApp3);
      App3Link = false;
    }
    if(App4Link) {
      codeBtn.removeEventListener('click', codeLinkApp4);
      App4Link = false;
    }


    if(linkStyle.search(/App1/) != -1){
      projects[1].appendChild(projModal1);
      codeBtn.addEventListener('click', codeLinkApp1);
      App1Link = true;
    }else if(linkStyle.search(/App2/) != -1){
      projects[1].appendChild(projModal2);
      codeBtn.addEventListener('click', codeLinkApp2);
      App2Link = true;
    }else if(linkStyle.search(/App3/) != -1){
      projects[1].appendChild(projModal3);
      codeBtn.addEventListener('click', codeLinkApp3);
      App3Link = true;
    }else if(linkStyle.search(/App4/) != -1){
      projects[1].appendChild(projModal4);
      codeBtn.addEventListener('click', codeLinkApp4);
      App4Link = true;
    }else{
      console.log("No project found"); 
    }

    
  } 
}

//Event for medias below 750px
if(window.matchMedia("(max-width: 749px)").matches) {
  let touchstartX = 0;
  let touchstartY = 0;
  let touchendX = 0;
  let touchendY = 0;

  const gestureZone = projects[1];

  gestureZone.addEventListener('touchstart', function(event) {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
  }, false);

  gestureZone.addEventListener('touchend', function(event) {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      handleGesture();
  }, false); 

  function handleGesture() {
      if (touchendX < touchstartX - 10) {
          console.log('Swiped left');
      }
      
      if (touchendX > touchstartX) {
          console.log('Swiped right');
      }
      
      if (touchendY < touchstartY) {
          console.log('Swiped up');
      }
      
      if (touchendY > touchstartY) {
        console.log('Swiped down');
      }
      
      if (touchendY === touchstartY) {
        console.log('Tap');
      }
  }
}
// //Prevent default on form and submit animation
// document.querySelector('#contact-form').addEventListener('submit', function(e) {
  // e.preventDefault();
  // document.querySelector("#contact-form").reset();

  // var submitAlert = document.querySelector('#submit-alert');
  // var alertMsg = document.querySelector("#alert-msg");

  
  // submitAlert.style.visibility = "initial";
  // submitAlert.classList.add("submitFade");

  // setTimeout(function(){
  //   alertMsg.classList.add("fade-inMain");
  //   alertMsg.style.display = "initial";
  // }, 2000);
  // setTimeout(function(){
  //   submitAlert.classList.remove("submitFade");
  //   submitAlert.style.visibility = "hidden";
  //   alertMsg.classList.remove("fade-inMain");
  //   alertMsg.style.display = "none";
    
  // }, 5000);

// });