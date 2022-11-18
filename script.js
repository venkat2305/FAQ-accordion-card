const ques = document.querySelectorAll(".faq")
console.log(ques)

for(let i=0;i<ques.length;i++){
    ques[i].addEventListener("click",function(){
        ques[i].classList.remove(".answer")
    })
}