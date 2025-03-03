
/*
document.getElementById("jobtid").onclick= function(){jobselect()};
document.getElementById("interntid").onclick = function(){internselect()};
document.getElementById("codetid").onclick=function(){codeselect()};


function jobselect(){
  document.getElementById("jobtid").classList.toggle("userselect");
  document.getElementById("interntid").classList.toggle("unselect");
  document.getElementById("codetid").classList.toggle("unselect");
}

function internselect(){
  document.getElementById("interntid").classList.toggle("userselect");
  document.getElementById("jobtid").classList.toggle("unselect");
  document.getElementById("codetid").classList.toggle("unselect");
}

function codeselect(){
  document.getElementById("codetid").classList.toggle("userselect");
  document.getElementById("jobtid").classList.toggle("unselect");
document.getElementById("interntid").classList.toggle("unselect");
}*/

var thetopics = [ /*Intern*/
  'JOBS',
  'INTERNSHIPS',
  'CODING EVENTS'
];

var interntitles =[
'Drakeford Scott & Associates',
'Paul Pearson Internship',
'Black.Coin'
];
var images = [
  'Internship that prioritizes user research along with app development; consisted of me verbally communicating with potential company associates that carry higher titles in colleges across America.',
    'Web development internship where my duties were to build websites for organizations, whether they had a concrete idea of what they wanted the webpages to look like or not.',
    'Start-Up company internship where I collaborated with the front end team. Duties consisted of creating the login page along with assisting team members in designing the other pages. Website to be operational in January 2021.',

];


var jobtitles =[
  'Waiter/Bus Boy',
  'Camp Counselor'
];
var jobs =[
  'Waiter/Bus Boy (5/2018 - 8/2018)',
    'Camp Counselor (6/2019 -8/2019):Supervised children from grades kindergarden to 4th grade , Monday through Friday from 9 a.m. to 5 p.m.'


];


var codeetitle=[
'Google Spring Virtual Coding Challenge 2020',
'Techsgiving Hackathon 2020',
'2021 Google Hackathon'
];
var codeev =[
  'Google Spring Virtual Coding Challenge 2020:  Virtual problem solving event for freshmen/sophomores.',
  'Techsgiving Hackathon 2020: Coding competition with teams of 3 made up of college students (undergraduate and graduate) from schools across the country. Finished 17th out of 40 groups.',
  '2021 Google Hackathon:For the Disney section; Created a concept project correlating with the entertainment industry. Placed 3rd place and impressed the Disney executives that were judging.'
];

var num1 = 0;
let num3 =0;
var num = 0;
var selectedtopic='jobs';

var slider = document.getElementById('slide1');
var slidecount2 = document.getElementById('slidecount');
var topictitles1 = document.getElementById('maintitle');







/*Plan: When you click a topic, it triggers an event that changes the slide choice*/
function changetopics(){
var selectedtopic;
if(selectedtopic=='jobs'){

}

if(selectedtopic=='interns'){

}

if(selectedtopic=='code'){

}

}


function changetopics1(){
selectedtopic = 'jobs';
num=0;
console.log(selectedtopic);
whatyousee(selectedtopic);

}

function changetopics2(){
selectedtopic = 'interns';
num=0;
console.log(selectedtopic);
whatyousee(selectedtopic);

}

function changetopics3(){
selectedtopic = 'code';
num=0;
console.log(selectedtopic);
whatyousee(selectedtopic);
}

function whatyousee(selectedtopic){
  if(selectedtopic=='jobs'){
    topictitles1.innerHTML = 'JOBS';
    slider.innerHTML = jobs[num];
    slidecount2.innerHTML = num+1 + "/"+ jobs.length;
  }

  if(selectedtopic=='interns'){
    topictitles1.innerHTML = 'INTERNSHIPS'
    slider.innerHTML = images[num];
    slidecount2.innerHTML = num+1 + "/"+ images.length;
  }

  if(selectedtopic=='code'){
    topictitles1.innerHTML = 'CODING EVENTS'
    slider.innerHTML = codeev[num];
    slidecount2.innerHTML = num+1 + "/"+ codeev.length;
  }
}


function newprev(){

  if(selectedtopic=='jobs'){

    num--;
    if(num < 0) {
        num = jobs.length-1;
    }
    slider.innerHTML = jobs[num];
    slidecount2.innerHTML = num+1 + "/"+ jobs.length;
  }


  if(selectedtopic=='interns'){

    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.innerHTML = images[num];
    slidecount2.innerHTML = num+1 + "/"+ images.length;
  }


  if(selectedtopic=='code'){

    num--;
    if(num < 0) {
        num = codeev.length -1;
    }
    slider.innerHTML = codeev[num];
    slidecount2.innerHTML = num+1 + "/"+ codeev.length;
  }


}




function newnext(){

  if(selectedtopic=='jobs'){

    num++;
    if(num >= jobs.length) {
        num = 0;
    }
    slider.innerHTML = jobs[num];
    slidecount2.innerHTML = num+1 + "/"+ jobs.length;
  }


  if(selectedtopic=='interns'){

    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.innerHTML = images[num];
    slidecount2.innerHTML = num+1 + "/"+ images.length;
  }


  if(selectedtopic=='code'){

    num++;
    if(num >= codeev.length) {
        num = 0;
    }
    slider.innerHTML = codeev[num];
    slidecount2.innerHTML = num+1 + "/"+ codeev.length;
  }


}




function topicnext(){
  var topic = document.getElementById('jobs');
  num1++;

if(num1==1){
  document.getElementById('jobs').style.color = "blue";
}



  if(num1>= thetopics.length){
    num1=0;
  }
  topic.innerHTML = thetopics[num1];

}

function topicprev(){
  var topic = document.getElementById('jobs');
  num1--;
  if(num1<0){
    num1=2;
  }

  topic.innerHTML = thetopics[num1];

  if(num1==2){

  next(codeev);
  }

  if(num1==1){
  next(jobs);
  }

  if(num1==0){
  next(images);
  }
}



function next(list) {


    var slider = document.getElementById('slider2');
    var slidecount2 = document.getElementById('slidecount2');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.innerHTML = images[num];
    slidecount2.innerHTML = num+1 + "/3";
console.log(num);

}

function prev(list) {
    var slider = document.getElementById('slider2');
      var slidecount2 = document.getElementById('slidecount2');
    num--;
    if(num < 0) {
        num = images.length-1; /*list.length*/
    }


    slider.innerHTML = images[num];
    slidecount2.innerHTML = num+1 + "/3";
    console.log(num);
    /*slider.innerHTML = list[num];*/
}


function jobsnext(list) {

    var slider = document.getElementById('jobs');
      var slidecount = document.getElementById('slidecount');

    num++;

/*slider.style.color = "yellow";*/

    if(num >= jobs.length) { /*images.length*/
        num = 0;

    }

    slider.innerHTML = jobs[num];
      slidecount.innerHTML = num+1 + "/2";


}

function jobsprev(list) {
    var slider = document.getElementById('jobs');
      var slidecount = document.getElementById('slidecount');
    num--;


    if(num < 0) {
        num = jobs.length-1;

    }

    slider.innerHTML = jobs[num];
      slidecount.innerHTML = num+1 + "/2";

}


function codenext() {

    var slider3 = document.getElementById('codee');
      var slidecount3 = document.getElementById('slidecount3');

    num3=num3+1;


  if(num3 >= codeev.length) {
    num3=0;
}



    slider3.innerHTML = codeev[num3];
      slidecount3.innerHTML = num3+1 + "/3";
      console.log(num3);


}

function codeprev(list) {
    var slider = document.getElementById('codee');
      var slidecount3 = document.getElementById('slidecount3');
    num--;
    if(num < 0) {
        num = codeev.length-1;
    }
    slider.innerHTML = codeev[num];
      slidecount3.innerHTML = num+1 + "/3";
      console.log(num);

}
