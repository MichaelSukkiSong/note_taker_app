/* functions */

const JudgeNumOfNotesAndChangeWidthOfListelement = () => {
  // 1) determine number of notes
  const num = document.getElementsByClassName("list_element").length;
  console.log(num);
  // 2) Judge and change width
  if (num === 1) {
    document.querySelector(".list_element").style.width = "950px";
  } else if (num > 1) {
    // shorten width of list element
    listEleDomArr = Array.from(document.querySelectorAll(".list_element"));
    listEleDomArr.forEach((el) => (el.style.width = "455px"));
  }
};

const JudgeNumOfNotesAndDisplaySentence = () => {
  // 1) determine number of notes
  const num = document.querySelector(".table_list").childElementCount;
  //   console.log(num);
  // 2) Judge and display sentence
  if (num < 1) {
    // display sentence
    const sentence = `
        <h5 class="sentence">No notes added yet!</h5>
    `;
    document
      .querySelector(".table_list")
      .insertAdjacentHTML("beforeend", sentence);
  } else {
    // remove sentence
    if (document.querySelector(".sentence")) {
      document.querySelector(".sentence").remove();
    }
  }
};

const controlAdd = () => {
  // 1) get text input
  const note = document.querySelector("textarea").value;
  // 2) Display in list UI
  const markup = `
    <div class="list_element">
        <span>Note 1</span>
        <p>${note}</p>
        <button>View Detail</button>
    </div>
  `;
  document.querySelector(".table_list").insertAdjacentHTML("beforeend", markup);
  // 3) Judge and display sentence
  JudgeNumOfNotesAndDisplaySentence();
  // 4) Judge and change width of list element
  JudgeNumOfNotesAndChangeWidthOfListelement();
};

/* add button */

document.querySelector(".add_note").addEventListener("submit", (e) => {
  e.preventDefault();
  controlAdd();
});

/* on load */

window.addEventListener("load", JudgeNumOfNotesAndDisplaySentence);

/* detail button */
