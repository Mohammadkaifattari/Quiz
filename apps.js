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


var quiznum = 0;
var score = 0;
var scoreel = document.getElementById("score");
scoreel.innerHTML = score;

function render() {
    var questionelement = document.getElementById("question");
    questionelement.innerHTML = quiz[quiznum].question;


    var optionsElement = document.getElementById("options");
    optionsElement.innerHTML = ""

    for (let i = 0; i < quiz[quiznum].options.length; i++) {
        optionsElement.innerHTML += `
          <li 
            onclick="colour('${quiz[quiznum].options[i]}', this)" 
            style="cursor:pointer; padding:8px; border:1px solid #ccc; margin:5px; border-radius:5px; list-style:none; font-size:18px;"
          >
            ${quiz[quiznum].options[i]}
          </li>`;
    }
}

function colour(selectedOption, element) {
    let correct = quiz[quiznum].correct.trim();

    if (selectedOption== correct) {
        score += 10; 
        scoreel.innerHTML = score; 
        element.style.background = "#55efc4"; 
        element.style.borderColor = "#00b894";
    } else {
        element.style.background = "#fab1a0"; 
        element.style.borderColor = "#d63031";
    }


}
function nextone() {  quiznum++
    render()
    
}  

render();
