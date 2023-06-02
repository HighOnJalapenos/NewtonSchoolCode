const nextBtn = document.getElementById("load_next");
const prevBtn = document.getElementById("load_prev");
const pageDisplay = document.getElementById("page_indicator");
const issueDisplay = document.getElementById("issue_container");
let pageNum = 1;

async function displayIssues() {
  const data = await fetch(
    `https://api.github.com/repositories/1296269/issues?page=${pageNum}&per_page=5`
  );
  const data1 = await data.json();
  issueDisplay.innerHTML = "";
  data1.forEach((issue) => {
    issueName = issue.title;
    const listElem = document.createElement("li");
    listElem.textContent = issueName;
    issueDisplay.insertAdjacentElement("beforeend", listElem);
  });

  pageDisplay.innerText = pageNum;
  if (pageNum === 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (pageNum < 5) {
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  displayIssues();
});

nextBtn.addEventListener("click", () => {
  pageNum++;
  displayIssues();
});

prevBtn.addEventListener("click", () => {
  pageNum--;
  displayIssues();
});
