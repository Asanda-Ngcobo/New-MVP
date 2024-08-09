

const check = document.querySelectorAll(".check");
const cross = document.querySelectorAll(".cross");

//Add
const correctCheck = function(){
  check.forEach(function(ch){

    ch.classList.remove("hide");
    ch.style.backgroundColor = "#60b347";
  });
 
}

//Remove
const remove = function(){
  check.forEach(function(ch){

    ch.classList.add("hide");
    
  });

  cross.forEach(function(cr){
    cr.classList.add("hide");
 

  });
}



const incorrectCheck = function(){
  cross.forEach(function(cr){
    cr.classList.remove("hide");
  cr.style.backgroundColor = "orange";

  });

    
}
const correctRemove = function(){

  cross.forEach(function(cr){
    cr.classList.add("hide");
 

  });
}

let getout = document.querySelectorAll(".getout");
let question = document.querySelector(".quiz");
let question2 = document.querySelector(".quiz2");
let question3 = document.querySelector(".quiz3");
let question4 = document.querySelector(".quiz4");
let question5 = document.querySelector(".quiz5");
let question6 = document.querySelector(".quiz6");
let question7 = document.querySelector(".quiz7");
let question8 = document.querySelector(".quiz8");
let question9 = document.querySelector(".quiz9");
let question10 = document.querySelector(".quiz10");
let question11 = document.querySelector(".quiz11");
let question12 = document.querySelector(".quiz12");
let question13 = document.querySelector(".quiz13");
let question14 = document.querySelector(".quiz14");
let question15 = document.querySelector(".quiz15");
let question16 = document.querySelector(".quiz16");
let question17 = document.querySelector(".quiz17");
let question18 = document.querySelector(".quiz18");
let question19 = document.querySelector(".quiz19");
let question20 = document.querySelector(".quiz20");
// let question17 = document.querySelector(".quiz17");

let questions = [
  question,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  question14,
  question15,
  question16,
  question17,
  question18,
  question19,
  question20,
  // question17,
 // question17,
];


//Leave the questions
getout.forEach(function(go){
    go.addEventListener('click', ()=>{
      overlay.classList.add("hide");
      location.reload();
      questions.forEach(function(que){
        
        que.classList.add("notshown");
      });
      
     
    })
    });
    
    const generated = document.querySelectorAll(".interger");
    let generated1 = document.querySelectorAll(".interger1");
    let generated2 = document.querySelectorAll(".interger2");
    let generated3= document.querySelectorAll(".interger3");
    let generated4 = document.querySelectorAll(".interger4");
    let generated5 = document.querySelectorAll(".interger5");
    let generated6 = document.querySelectorAll(".interger6");
    let generated7= document.querySelectorAll(".interger7");
    let generated8 = document.querySelectorAll(".interger8");
    let generated9 = document.querySelectorAll(".interger9");
    let generated10 = document.querySelectorAll(".interger10");
    let generated11 = document.querySelectorAll(".interger11");
    let generated12 = document.querySelectorAll(".interger12");
    let generated13 = document.querySelectorAll(".interger13");
    let generated14 = document.querySelectorAll(".interger14");
    let generated15 = document.querySelectorAll(".interger15");
    let generated16 = document.querySelectorAll(".interger16");
    let generated17 = document.querySelectorAll(".interger17");
    let generated18= document.querySelectorAll(".interger18");
    let generated19 = document.querySelectorAll(".interger19");
    let generated20 = document.querySelectorAll(".interger20");
    let generated21= document.querySelectorAll(".interger21");
    let generated22= document.querySelectorAll(".interger22");
    let generated23= document.querySelectorAll(".interger23");
    let generated24 = document.querySelectorAll(".interger24");
    let generated25 = document.querySelectorAll(".interger25");
    let generated26 = document.querySelectorAll(".interger26");
    let generated27 = document.querySelectorAll(".interger27");
    let generated28 = document.querySelectorAll(".interger28");
    let generated29 = document.querySelectorAll(".interger29");
    let generated30= document.querySelectorAll(".interger30");
    let generated31 = document.querySelectorAll('.interger31');
let generated32 = document.querySelectorAll('.interger32');
let generated33 = document.querySelectorAll('.interger33');
let generated34 = document.querySelectorAll('.interger34');
let generated35 = document.querySelectorAll('.interger35');
let generated36 = document.querySelectorAll('.interger36');
let generated37 = document.querySelectorAll('.interger37');
let generated38 = document.querySelectorAll('.interger38');

    
const random = document.querySelectorAll(".random");
const random2 = document.querySelectorAll(".random2");
const random3 = document.querySelectorAll(".random3");   
const random4 = document.querySelectorAll(".random4");  
    
   
    const normalColor = function(){
      remove();
      question.style.backgroundColor = "black";
      
    
      
       question2.style.backgroundColor = "black";
       
    
       question3.style.backgroundColor = "black";
       
    
        question4.style.backgroundColor = "black";
        
       
    
       question5.style.backgroundColor = "black";
       
        question6.style.backgroundColor = "black";
        
    
        question7.style.backgroundColor = "black";
        
        question8.style.backgroundColor = 'black';
               
    
                 question9.style.backgroundColor = 'black';
                
              
                   question10.style.backgroundColor = 'black';
                 
                   question11.style.backgroundColor = 'black';
                   
    
                     question12.style.backgroundColor = 'black';
                     
                       question13.style.backgroundColor = 'black';
                       question14.style.backgroundColor = 'black';
                     
                       question15.style.backgroundColor = 'black';

                       question16.style.backgroundColor = 'black';
                     
                       question17.style.backgroundColor = 'black';
                       question18.style.backgroundColor = 'black';
                     
                       question19.style.backgroundColor = 'black';
                       question20.style.backgroundColor = 'black';
                       
    }
    const quizcorrect = function (){
   
      correctCheck();
      correctRemove();
      question.style.backgroundColor = "#60b347";
      
    
       question2.style.backgroundColor = "#60b347";
      
       question3.style.backgroundColor = "#60b347";
    
        question4.style.backgroundColor = "#60b347";
       
    
       question5.style.backgroundColor = "#60b347";
       
    
        question6.style.backgroundColor = "#60b347";
       
    
        question7.style.backgroundColor = "#60b347";
       
        question8.style.backgroundColor = '#60b347';
              
                 question9.style.backgroundColor = '#60b347';
                 
                   question10.style.backgroundColor = '#60b347';
                   
                     question11.style.backgroundColor = '#60b347';
                    
      
                       question12.style.backgroundColor = '#60b347';
                      
                
                         question13.style.backgroundColor = '#60b347';
                         question14.style.backgroundColor = '#60b347';
                      
                
                         question15.style.backgroundColor = '#60b347';
                         question16.style.backgroundColor = '#60b347';
                      
                
                         question17.style.backgroundColor = '#60b347';
                         question18.style.backgroundColor = '#60b347';
                      
                
                         question19.style.backgroundColor = '#60b347';
                         question20.style.backgroundColor = '#60b347';
      
    }
    
    
    const quizwrong = function (){
     
      incorrectCheck();
      question.style.backgroundColor = "orange";
    
     
      question2.style.backgroundColor = "orange";
       
    
      question3.style.backgroundColor = "orange";
    
     question4.style.backgroundColor = "orange";
     
    question5.style.backgroundColor = "orange";
         
    
          question6.style.backgroundColor = "orange";
          
         question7.style.backgroundColor = "orange";
         
    
          question8.style.backgroundColor = "orange";
          
          question9.style.backgroundColor = "orange";
         
    
          question10.style.backgroundColor = 'orange';
                 
                     question11.style.backgroundColor = 'orange';
                   
      
                       question12.style.backgroundColor = 'orange';
                      
                
                         question13.style.backgroundColor = 'orange';
                        
                         question14.style.backgroundColor = 'orange';
                      
                
                         question15.style.backgroundColor = 'orange';
                         question16.style.backgroundColor = 'orange';
                      
                
                         question17.style.backgroundColor = 'orange';
                         question18.style.backgroundColor = 'orange';
                      
                
                         question19.style.backgroundColor = 'orange';
                         question20.style.backgroundColor = 'orange';
    
    }
    
    const quizzero = function (){
      
     
        question.style.backgroundColor = "red";
     
      
    
      question2.style.backgroundColor = "red";
    
    
      question3.style.backgroundColor = "red";
     
    
      
      question4.style.backgroundColor = "red";
      
    
    
     
      question5.style.backgroundColor = "red";
     
    
    
      
      question6.style.backgroundColor = "red";
     
      
    
      question7.style.backgroundColor = "red";
      
    
      
            question8.style.backgroundColor = 'red';
              
            
    
      
      question9.style.backgroundColor = 'red';
         
      
           question10.style.backgroundColor = 'red';
          
    
             question11.style.backgroundColor = 'red';
             
               question12.style.backgroundColor = 'red';
              
        
                 question13.style.backgroundColor = 'red';
                 
                 question14.style.backgroundColor = 'red';
              
        
                 question15.style.backgroundColor = 'red';
                 question16.style.backgroundColor = 'red';
              
        
                 question17.style.backgroundColor = 'red';
                 question18.style.backgroundColor = 'red';
              
        
                 question19.style.backgroundColor = 'red';
                 question20.style.backgroundColor = 'red';
    }

