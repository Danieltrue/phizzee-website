//COUNT FUCNTION
//element
const likeBtn = document.querySelector('.like-icon .like'),
      chearBtn = document.querySelector('.like-icon .cherr'),
      happyBtn = document.querySelector('.like-icon .happy'),
      sadBtn = document.querySelector('.like-icon .sad');
// show likes and Sad
const likeshow = document.querySelector('.like-icon .like-count'),
      chearshow = document.querySelector('.like-icon .cherr-count'),
      happyshow = document.querySelector('.like-icon .happy-count'),
      sadshow = document.querySelector('.like-icon .sad-count');

function getCount () {
  

//like and sad connt
let like = 0,
    chear = 0,
    happy = 0,
    sad = 0;

let myLove = {
  likeC: '',
  cherrC: '',
  happyC: '',
  sadC: ''
};
//click option
likeBtn.addEventListener('click',function(e) {
  like++;
  likeshow.textContent = `+${like}`;
  //add like to object
  myLove.likeC = like;
  //push to local
  const love = getLocal();
  love.push(myLove);
  localStorage.setItem('love',JSON.stringify(love));

  e.preventDefault();
})

chearBtn.addEventListener('click',function(e) {
  chear++;
  chearshow.textContent = `+${chear}`;
  //add like to object
  myLove.cherrC = chear;
  //push to local
  const love = getLocal();
  love.push(myLove);
  localStorage.setItem('love',JSON.stringify(love));

  e.preventDefault();  
})
happyBtn.addEventListener('click',function(e) {
  happy++;
  happyshow.textContent = `+${happy}`;
  //add like to object
  myLove.happyC = happy;
  //push to local
  const love = getLocal();
  love.push(myLove);
  localStorage.setItem('love',JSON.stringify(love));

  e.preventDefault();
})
sadBtn.addEventListener('click',function(e) { 
  sad++;
  sadshow.textContent = `+${sad}`;
  //add like to object
  myLove.sadC = sad;
  //push to local
  const love = getLocal();
  love.push(myLove);
  localStorage.setItem('love',JSON.stringify(love));

  e.preventDefault();
})
//click option
}
getCount();
//local storage
function getLocal() {
  let love;
  if (localStorage.getItem('love') === null) {
    love = [];
  } else {
    love = JSON.parse(localStorage.getItem('love'))
  }
  return love;
}
//getting the max number of the object
document.addEventListener('DOMContentLoaded',function() {
  
  const love = getLocal();
  //log length
  const loveLen = love.length;
  //my log
  const myLog = love[love.length - 1];
  //add the text to log
  chearshow.textContent = `+${myLog.cherrC}`;
  happyshow.textContent = `+${myLog.happyC}`;
  sadshow.textContent = `+${myLog.sadC}`;
  //cheacking if the object is complete or add +0
  if (myLog.likeC !== '') { 
    likeshow.textContent = `+${myLog.likeC}`;
  } else {
    likeshow.textContent = `+0`
  }
  //cheacking if the object is complete or add +0
  if (myLog.cherrC !== '') {
    chearshow.textContent = `+${myLog.cherrC}`
  } else {
    chearshow.textContent = `+0`;
  }
  //cheacking if the object is complete or add +0
  if (myLog.happyC !== '') {
    happyshow.textContent = `+${myLog.happyC}`
  } else {
    happyshow.textContent = `+0`
  }
  //cheacking if the object is complete or add +0
  if (myLog.sadC !== '') {
   sadshow.textContent = `+${myLog.sadC}` 
  } else {
    sadshow.textContent = `+0`
  }
})


function pageScroll() {
  document.body.scrollBy(0,154);
}

pageScroll()