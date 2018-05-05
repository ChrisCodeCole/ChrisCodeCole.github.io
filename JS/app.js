const topnav = document.querySelector(".topnav-right");


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
for(var i = 1; i <= 3; i ++){
  bgImages.push(`url("./Style/Images/App${i}.PNG") no-repeat scroll center center / cover`);
  
}
console.log(bgImages);

const projects = document.querySelectorAll(".img-card");
const overlayText = document.querySelectorAll(".img-desc");
var tempImage = "";

console.log(projects);
projects[0].style.background

var bgStyleCheck = "";
var linkStyle = "";

//Create modals for each project


function createProjModal(modalBgColor, modalTxtColor, modalTxt){
  var myModal = document.createElement("div");
  myModal.style.textAlign = "center";
  myModal.style.backgroundColor = modalBgColor;
  myModal.style.opacity = "0";
  myModal.style.height = "100%";
  myModal.style.width = "100%";
  myModal.style.color = modalTxtColor;
  
  var modalText = document.createTextNode(modalTxt);
  myModal.appendChild(modalText);

  myModal.addEventListener('mouseover', () =>{
    myModal.style.opacity = "100";
  });
  myModal.addEventListener('mouseleave', () =>{
    myModal.style.opacity = "0";
  });

  return myModal;
}

//Create array of these nodes to remove later
var modalList = [];

//Project1 Modal Details

const bgModal1 = "rgb(30,30,45)";
const txtModal1 = "rgb(204,218,209)";
const txtDesc1 = "Weather App - \nClick for more info";
var projModal1 = createProjModal(bgModal1, txtModal1, txtDesc1);
projModal1.addEventListener('click', () => {
  window.open("https://codepen.io/ChrisCodeCole/pen/qxejgW", '_blank')
});
modalList.push(projModal1);

//Project2
const bgModal2 = "rgb(30,30,45)";
const txtModal2 = "rgb(204,218,209)";
const txtDesc2 = "Weather App - \nClick for more info";
var projModal2 = createProjModal(bgModal1, txtModal1, txtDesc1);
projModal2.addEventListener('click', () => {
  window.open("https://codepen.io/ChrisCodeCole/pen/XENMmO", '_blank')
});
modalList.push(projModal2);

//Project3
const bgModal3 = "rgb(30,30,45)";
const txtModal3 = "rgb(204,218,209)";
const txtDesc3 = "Weather App - \nClick for more info";
var projModal3 = createProjModal(bgModal1, txtModal1, txtDesc1);
modalList.push(projModal3);

//Project4
//Project5




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
      setTimeout(function(){
        projects[0].classList.remove("fade-in");
        projects[1].classList.remove("fade-inMain");
        projects[2].classList.remove("fade-in");
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
      setTimeout(function(){
        projects[0].classList.remove("fade-in");
        projects[1].classList.remove("fade-inMain");
        projects[2].classList.remove("fade-in");
      }, 1000);       
    }

    //Update Main Image Link
    //Add event listener to div modals and 
    //https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element (Replace Node !will replace child listeners if node is replaced)
    // or https://js-tricks.io/blog/how-to-remove-all-event-listeners-from-an-element
    bgStyleCheck = window.getComputedStyle(projects[1]);
    linkStyle = bgStyleCheck.background;


    //Remove modal nodes
    for(var i = 0; i < modalList.length; i++){
      if(projects[1].contains(modalList[i])){
        projects[1].removeChild(modalList[i]);
      }
    }

    if(linkStyle.search(/App1/) != -1){
      console.log("Test1");
      projects[1].appendChild(projModal1);

    }else if(linkStyle.search(/App2/) != -1){
      console.log("Test2");
      projects[1].appendChild(projModal2);

    }else{
      console.log("Test3");
    }

    
  } 
}



//Prevent default on form and submit animation
document.querySelector('#contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.querySelector("#contact-form").reset();

  var submitAlert = document.querySelector('#submit-alert');
  var alertMsg = document.querySelector("#alert-msg");

  
  submitAlert.style.visibility = "initial";
  submitAlert.classList.add("submitFade");

  setTimeout(function(){
    alertMsg.classList.add("fade-inMain");
    alertMsg.style.display = "initial";
  }, 2000);
  setTimeout(function(){
    submitAlert.classList.remove("submitFade");
    submitAlert.style.visibility = "hidden";
    alertMsg.classList.remove("fade-inMain");
    alertMsg.style.display = "none";
    
  }, 5000);

});