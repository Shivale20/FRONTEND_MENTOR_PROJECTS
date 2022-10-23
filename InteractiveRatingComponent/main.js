const form = document.querySelector("form");
const options = document.querySelectorAll(".rating-numbers > div >input");
const thankYouContainer = document.querySelector(".thank-you-container");

function hoverEffect(object) {
  object.addEventListener("mouseenter", (e) => {
    e.target.style.background = "hsl(217, 12%, 63%)";
    e.target.nextSibling.style.color = "white";
  });
  object.addEventListener("mouseleave", (e) => {
    e.target.nextSibling.style.color = "rgb(151, 150, 150)";
    e.target.style.background = "hsl(218, 13%, 24%)";
  });
}
function setOrangeWhite_afterMouseLeave(object) {
  object.addEventListener("mouseleave", (e) => {
    e.target.nextSibling.style.color = "white";
    e.target.style.background = "hsl(25, 97%, 53%)";
  });
}
let optionList = [...options];

optionList.map((option) => {
  // set the color of label by default as "rgb(151, 150, 150)"
  option.nextSibling.style.color = "rgb(151, 150, 150)";
  hoverEffect(option);
  //   show color-white label and orange background of input of radio which is selected
  option.addEventListener("click", () => {
    let notCheckedOptionList = optionList.filter(
      (option) => option.checked !== true
    );

    let checkedOption = optionList.filter((option) => option.checked == true);

    if (option.checked == true) {
      //   console.log(notCheckedOptionList);
      console.log(checkedOption[0].value);
      checkedOption.map((option) => {
        setOrangeWhite_afterMouseLeave(option);
        option.style.background = "hsl(25, 97%, 53%)";
        option.nextSibling.style.color = "white";
      });

      notCheckedOptionList.map((option) => {
        hoverEffect(option);
        option.style.background = "hsl(218, 13%, 24%)";
        option.nextSibling.style.color = "rgb(151, 150, 150)";
      });
    }
  });
});

form.addEventListener(
  "submit",
  (e) => {
    const data = new FormData(form);

    let output = "";
    for (const entry of data) {
      console.log(entry);
      output = ` 
      <div class="thank-you-illustration"> 
        <img src="./images/illustration-thank-you.svg" alt="thank-you-illustration">
      </div>
      <div class="result">
        <p>You selected ${entry[1]} out 5 </p>
      </div>
      <h2>Thank you!</h2>
      <p class="feedback">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
      </p> `;
    }
    thankYouContainer.style.display = "grid";
    thankYouContainer.innerHTML = output;
    form.style.display = "none";
    e.preventDefault();
    console.log("submit");
  },
  false
);
