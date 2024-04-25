//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;
var scores = [];

var HTMLquestions=[

    {
        question: "HTML is what type of language ?",
        choices: ["Yes","No"],
        answer: 1
    
    },
    
    {
        question: "HTML uses :",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {
        question: "The year in which HTML was first proposed _______.",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {
        question: "Apart from <b> tag, what other tag makes text bold ?",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {/*5*/
        question: "How can you make a bulleted list with numbers? ",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {
        question: "What tag is used to display a picture in a HTML page?",
        choices: ["Yes","No"],
        answer: 1
    
    }            
];

var CSSquestions=[

    {
        question: "If we want define style for an unique element, then which css selector will we use ?",
        choices: ["Yes","No"],
        answer: 1
    
    }, 
    {
        question: "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {
        question: "Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack ?",
        choices: ["Yes","No"],
        answer: 1
    
    }, 
    {/*4*/
        question: "Can we align a Block element by setting the left and right margins ?",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {
        question: "If we want to wrap a block of text around an image, which css property will we use ?",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {/*6*/
        question: "If we want to show an Arrow as cursor, then which value we will use ?",
        choices: ["Yes","No"],
        answer: 1
    
    }           
];
var JSquestions=[

    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        choices: ["Yes","No"],
        answer: 1
    
    }, 
    {/*wscubetech*/
        question: " Which of the following is a server-side Java Script object?",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {
        question: "Java script can be used for Storing the form's contents to a database file on the server",
        choices: ["Yes","No"],
        answer: 1
    
    }, 
    {
        question: "How does Java Script store dates in objects of Date type?",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {
        question: "C-style block-level scoping is not supported in Java script",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {
        question: "JavaScript ignores extra spaces in Syntax",
        choices: ["Yes","No"],
        answer: 1
    
    }
                 
];
var PYquestions=[

    {
        question: "What is the output of the following program : print(Hello World'[::-1])",
        choices: ["Yes","No"],
        answer: 1
    
    }, 
    {
        question: "Given a function that does not return any value, what value is shown when executed at the shell?",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {
        question: "Which module in Python supports regular expressions?",
        choices: ["Yes","No"],
        answer: 1
    
    }, 
    {
        question: "What is the output of the following program : (tricky ques.)  print (0.1 + 0.2 == 0.3) ",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {
        question: "Which of the following is not a complex number?",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {
        question: "What does ~~~~~~5 evaluate to?",
        choices: ["Yes","No"],
        answer: 1
    
    }
                
];
var Cquestions=[

    {
        question: "C Language was developed in the year ____",
        choices: ["Yes","No"],
        answer: 1
    
    }, 
    {
        question: "Which one is not a reserve keyword in C Language?",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {
        question: "A C variable name can start with a ____",
        choices: ["Yes","No"],
        answer: 1
    
    }, 
    {
        question: "Prototype of a function means _____",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {
        question: "Name the loop that executes at least once.",
        choices: ["Yes","No"],
        answer: 1
    
    },
    {
        question: "Far pointer can access _____",
        choices: ["Yes","No"],
        answer: 1
    
    }    
];





//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";








document.querySelector(".choose-lang").addEventListener("click",function(){

    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=2;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i-2];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i-2];
        
    };/*For loop Closed*/
    
//    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click", function() {
    if(document.querySelector('input[name="options"]:checked').value === window[lang][countQues].choices[window[lang][countQues].answer-1]) {
        score += 1;
    } else {
        score += 0;
    };

    if (countQues < window[lang].length - 1) {
        countQues++;
    } else {
        document.querySelector(".submit-answer").style.display = "none";
        document.querySelector(".view-results").style.display = "unset";
    }
    
    document.getElementById("score").textContent = "Score : " + score;
    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[lang].length;
    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];
    };
});


document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="You Solved "+(countQues+1)+" questions of "+document.getElementById("language").value;
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" were Right and "+((countQues+1)-correct)+" were Wrong";
    
    document.getElementById("display-final-score").innerHTML="Your Final Score is: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Remark: OutStanding ! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Remark: Good, Keep Improving.";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Remark: Satisfactory, Learn More.";
    }else{
        document.querySelector(".remark").innerHTML="Remark: Unsatisfactory, Try Again.";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

document.getElementById("about").addEventListener("click",function(){
    alert("Quiz Website Project Created By Digvijay Singh");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
