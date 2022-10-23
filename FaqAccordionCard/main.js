const faqLi = document.querySelectorAll("li");
const faqList = [...faqLi];

const faqQuestions = document.querySelectorAll("h5");
faqQuestionList = [...faqQuestions];

faqQuestionList.map((question) => {
  question.addEventListener("click", (e) => {
    e.target.classList.toggle("semi-bold");
    e.target.firstElementChild.classList.toggle("plus");
    e.target.nextElementSibling.classList.toggle("open");
    let current_li = e.target.parentElement;
    let allOtherLi = faqList.filter((x) => x !== current_li);
    allOtherLi.map((question) => {
      question.firstElementChild.classList.remove("semi-bold");
      question.firstElementChild.firstElementChild.classList.remove("plus");
      question.firstElementChild.nextElementSibling.classList.remove("open");
    });
  });
});
