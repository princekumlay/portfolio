var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-content');



// //first page animation
// function firstPageAnim(){
//     var tl = gsap.timeline();
//     tl.form('#nav', {
//         y: '-10',
//         opacity: 0,
//         duration: 1,
//         ease: Expo
//     })
//     .to(".bounding", {
//         y: 0,
//         ease: Expo.easeInOut,
//         duration: 2,
//         stagger: 0.3
//     })
// }

// firstPageAnim();


//function to controll the tabs
function opentab(tabname){
     for(tablink of tablinks){
         tablink.classList.remove("active-link");
     }
     for(tabcontent of tabcontents){
         tabcontent.classList.remove("active-tab");
     }

     event.currentTarget.classList.add("active-link")
     document.getElementById(tabname).classList.add('active-tab');
}

//javascript for the sidebar functioning
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = '0';
}

function closemenu(){
    sidemenu.style.right = '-200px';
}

//script code for the contact form data sending to the excel sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbz0ufspPuXh4Ac2PRIyia7DHhKA6xvqftsw8P6_qAkbRr_3FKu5yUs_uqD0A7hX3Z7C/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfylly"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
