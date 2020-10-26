// ***** variables
const leftMenu = document.getElementById('left_menu');
const leftPart = document.querySelector('.left__menu');
const close1 = document.querySelector('.close');
const rightHamburger = document.querySelector('.right__hamburger');
const support = document.querySelector('.support');
const profile = document.querySelector('#erick');
const logout  = document.querySelector('.logout');
const profileClose = document.getElementById('profileClose');
const notification = document.getElementById('notification');
const notificationMain = document.querySelector('.notification');
const user = document.querySelector('.user1');
const userClose = document.querySelector('#profileClose1');
const leftMenuIn = document.querySelector('.left_menu_in');
const hamburger = document.querySelector('#hamburger');
const website = document.getElementById('website');
const logoutWebsite = document.querySelector('.website');
const WebsiteClose = document.getElementById('WebsiteClose')



// event listerner
eventListener()
function eventListener(){
  hamburger.addEventListener('click',leftMenuFull)
  leftMenu.addEventListener('click', showItem);
  close1.addEventListener('click', closeItem);
  rightHamburger.addEventListener('click', function(e){
    if(e.target.classList.contains('fa-align-center')){
      support.style.display="block";
      e.target.classList.remove('fa-align-center');
      e.target.classList.add('fa-close')
    } else{
      support.style.display="none";
      e.target.classList.add('fa-align-center');
      e.target.classList.remove('fa-close')
    }
  })
  profile.addEventListener('click', function(e){
    user.style.width="350px"
    user.style.padding="20px"
  })
  profileClose.addEventListener('click', function(e){
    notificationMain.style.width="0px";
    notificationMain.style.padding="0px"
  })
  userClose.addEventListener('click', function(){
    user.style.width="0px";
    user.style.padding="0px"
  })
  notification.addEventListener('click', function(){
    notificationMain.style.width="350px"
    notificationMain.style.padding="20px"
  })
  website.addEventListener('click', function(){
    logoutWebsite.style.width="350px"
    logoutWebsite.style.padding="20px"
  })
  
  WebsiteClose.addEventListener('click', function(){
    logoutWebsite.style.width="0px"
    logoutWebsite.style.padding="0px"
  })
 
}

function showItem(e){
  leftPart.style.display="block";
}

function closeItem(e){
  leftPart.style.display="none"
}

function leftMenuFull(e){
  if(leftMenuIn.classList.contains('spancl')){
    leftMenuIn.classList.remove('spancl')
    // leftPart.style.width="15%"
    leftPart.classList.add('left_menu_full');
   
  } else{
    leftMenuIn.classList.add('spancl')
    leftPart.classList.remove('left_menu_full');


  }
  
}