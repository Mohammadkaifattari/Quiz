var quiz = [
    {
        question: "Q1. JavaScript me typeof null ka result kya hota hai?",
        options: ["a) null", "b) object", "c) undefined", "d) number"],
        correct: "b) object"
    },
    {
        question: "Q2. Kaunsa keyword variable declare karne ke liye use hota hai?",
        options: ["a) var", "b) let", "c) const", "d) All of the above"],
        correct: "d) All of the above"
    },
    {
        question: "Q3. JavaScript me arrays kis type ke hote hain?",
        options: ["a) Primitive", "b) Object", "c) Function", "d) Undefined"],
        correct: "b) Object"
    },
    {
        question: "Q4. \"2\" + 2 + 2 ka output kya hoga?",
        options: ["a) 6", "b) 222", "c) 22", "d) Error"],
        correct: "b) 222"
    },
    {
        question: "Q5. === operator kya check karta hai?",
        options: ["a) Sirf value", "b) Sirf type", "c) Value aur type dono", "d) None"],
        correct: "c) Value aur type dono"
    },
    {
        question: "Q6. JavaScript me NaN ka full form kya hai?",
        options: ["a) Not a Null", "b) Not a Number", "c) Negative a Number", "d) No any Number"],
        correct: "b) Not a Number"
    },
    {
        question: "Q7. console.log([] + []); ka result kya hoga?",
        options: ["a) []", "b) undefined", "c) \"\" (empty string)", "d) Error"],
        correct: "c) \"\" (empty string)"
    },
    {
        question: "Q8. JavaScript me functions kis type ke hote hain?",
        options: ["a) Object", "b) String", "c) Array", "d) Primitive"],
        correct: "a) Object"
    },
    {
        question: "Q9. setTimeout ka default return value kya hota hai?",
        options: ["a) Function", "b) Timer ID", "c) Promise", "d) Undefined"],
        correct: "b) Timer ID"
    },
    {
        question: "Q10. JavaScript me this keyword ka context kiske upar depend karta hai?",
        options: ["a) Execution context", "b) Variable scope", "c) Data type", "d) Object type"],
        correct: "a) Execution context"
    }
];

alert("Make Sure To Click A , B , C , D For Selection  & ENTER button For Next")

var quiznum = 0;
var score = 0;
var scoreel = document.getElementById("score");
correctanswerof = null
var nextbtn = document.getElementById("nextbtn")
var optionsElement = document.getElementById("options");
var restartbtn = document.getElementById("replay")
wrongAnswers = []

function render() {
  if (quiznum >= quiz.length) {  
    optionsElement.innerHTML = "";
    nextbtn.style.display = "none";
    restartbtn.style.display = "block";
    scoreel.innerHTML = "";

    //scre check
    let msg = "";
    if (score < 60) {
        msg = "❌ You scored " + score + ". Try again, you failed!";
    } else {
        msg = "✅ Congratulations! You passed with score " + score;
    }

     let wrongList = "<h3>❌ Wrong Answers:</h3><ul>";
        for (let i = 0; i < wrongAnswers.length; i++) {
            wrongList += `<li>
                <b>Q:</b> ${wrongAnswers[i].question}<br>
                <b>Your Answer:</b> ${wrongAnswers[i].yourAnswer}<br>
                <b>Correct Answer:</b> ${wrongAnswers[i].correctAnswer}
            </li><br>`;
        }
        wrongList += "</ul>";
 document.getElementById("tt").style.display= "block"
        document.getElementById("question").innerHTML = msg + "<br><br>" + wrongList;
        return;
}

    var questionelement = document.getElementById("question");
    questionelement.innerHTML = quiz[quiznum].question;


    optionsElement.innerHTML = ""
    
    for (let i = 0; i < quiz[quiznum].options.length; i++) {
        optionsElement.innerHTML += `
          <li 
            onclick="colour(event) " class = "non-active" data-index="${i}"
            style="cursor:pointer; padding:8px; border:1px solid #ccc; margin:5px; border-radius:5px; list-style:none; font-size:18px;"
          >
          ${quiz[quiznum].options[i]}
          </li>`;
        }
}

function colour(event) {
   event.target.classList.add("active")
console.log(event.target.classList);

   
   
    for(var i = 0; i < optionsElement.children.length ; i++ ){
        if(event.target !== optionsElement.children[i]){
            optionsElement.children[i].classList.remove("active")
        }
    }
    
    
    correctanswerof=event.target
   
     nextbtn.classList.add("show");
    
}
function nextone() { 

    if (quiz[quiznum].correct == correctanswerof.innerText.trim()) {
        score+=10
        
    } else {
        // agar answer galat hai to store karo
        wrongAnswers.push({
            question: quiz[quiznum].question,
            yourAnswer: correctanswerof.innerText.trim(),
            correctAnswer: quiz[quiznum].correct
        });}
    
    
    scoreel.innerHTML = score;
    quiznum++
    nextbtn.classList.remove("show");
    render()
    
}  

render();

function restartQuiz() {

    quiznum = 0;
    score = 0;
    scoreel.innerHTML = score;
   
    render();
    restartbtn.style.display = "none"
  
}

document.addEventListener("keydown", function (e) {
    let key = e.key.toLowerCase();

    
    if (["a", "b", "c", "d"].includes(key)) {
        let index = key.charCodeAt(0) - 97; 
        let option = optionsElement.children[index];
        if (option) {
            option.click(); 
        }
    }

    // Enter press 
    if (e.key === "Enter") {
        if (nextbtn.classList.contains("show")) {
            nextone()
        }
    }
});
