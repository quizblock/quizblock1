
function openNav12() {
    document.getElementById("myNav").style.width = "70%";
    document.getElementById("main2").onclick = function() {closeNav12()};
  }
  function closeNav12() {
    document.getElementById("myNav").style.width = "0%";
  }
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
    
  }function openNav1() {
    document.getElementById("mySidebar1").style.width = "250px";
    document.getElementById("main2").style.marginLeft="250vw" ;
    document.getElementById("close1").onclick = function() {closeNav1()};
  }
  function closeNav1() {
    
    document.getElementById("mySidebar1").style.width = "0";
    document.getElementById("main2").style.marginLeft = "0";
    document.getElementById("content12").style.marginLeft = "0";
  }
  var dropdown = document.getElementsByClassName("dropdown-btn1");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    }); 
    
  }
        var btnContainer = document.getElementById("sidebar");

var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
  });
}
var btnContainer = document.getElementById("mySidebar1");

var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
  });
}


$(document).ready( function(){

  $('#dismiss').click( function(event){
      event.stopPropagation();
      $('#dismiss3').hide();
  });
  
  $('#dismiss2').click( function(){
      $('#dismiss1').hide();
  });
  });
  $(document).ready( function(){

    $('#dismiss4').click( function(event){
        event.stopPropagation();
        $('#dismiss1').hide();
    });
    
    $('#dismiss4').click( function(){
        $('#dismiss3').hide();
    });
    });
    $(document).ready( function(){

      $('#dismiss').click( function(event){
          event.stopPropagation();
          $('#dismiss5').hide();
      });
      
      $('#dismiss2').click( function(){
          $('#dismiss5').hide();
      });
      });



      $(document).ready( function(){

        $('#dismiss00').click( function(event){
            event.stopPropagation();
            $('#dismiss33').hide();
        });
        
        $('#dismiss22').click( function(){
            $('#dismiss11').hide();
        });
        });
        $(document).ready( function(){
      
          $('#dismiss44').click( function(event){
              event.stopPropagation();
              $('#dismiss11').hide();
          });
          
          $('#dismiss44').click( function(){
              $('#dismiss33').hide();
          });
          });
          $(document).ready( function(){
 $('#dismiss00').click( function(event){
     event.stopPropagation();
     $('#dismiss55').hide();
 });
 
 $('#dismiss22').click( function(){
     $('#dismiss55').hide();
 });
 });


const counters = document.querySelectorAll('.counter');
const speed = 200; 

counters.forEach(counter => {
const updateCount = () => {
const target = +counter.getAttribute('data-target');
const count = +counter.innerText;

const inc = target / speed;

if (count < target) {
    counter.innerText = count + inc;
    setTimeout(updateCount, 1);
} else {
    counter.innerText = target;
}
};

updateCount();
});

window.onscroll = function() {myFunction1()};

function myFunction1() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("backtotop").className = "backtotop";
  } else {
    document.getElementById("backtotop").className = "";
  }
}