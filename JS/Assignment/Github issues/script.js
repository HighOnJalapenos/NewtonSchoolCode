const nextBtn = document.getElementById("load_next");
const prevBtn = document.getElementById("load_prev");
let pageNum = 1;

nextBtn.addEventListener("click", async () => {
  if (pageNum >= 1 && pageNum < 5) {
    const data = await fetch(
      `https://api.github.com/repositories/1296269/issues?page=${pageNum}&per_page=5`
    );
    pageNum++;
    const data1 = await data.json();
    console.log(data1);
  }
});

prevBtn.addEventListener("click", async () => {
  if (pageNum > 1 && pageNum <= 5) {
    pageNum--;
    const data = await fetch(
      `https://api.github.com/repositories/1296269/issues?page=${pageNum}&per_page=5`
    );
    const data1 = await data.json();
    console.log(data1);
  }
});
