document.addEventListener("DOMContentLoaded", () => {
  const aboutBtn = document.querySelector(".about-btn");
  aboutBtn.style.background = "linear-gradient(90deg, #6a11cb, #2575fc)";
});
function changeBackground(color) {
  document.body.style.backgroundColor = color;

  const aboutBtn = document.querySelector(".about-btn");

  switch (color) {
    case "#f5f984ff": 
      aboutBtn.style.background = "linear-gradient(90deg, #f9d423, #ff4e50)";
      break;
    case "#00b894":
      aboutBtn.style.background = "linear-gradient(90deg, #2ed867ff, #13dfbaff)";
      break;
    case "#7777ff":
      aboutBtn.style.background = "linear-gradient(90deg, #6a11cb, #2575fc)";
      break;
    default:
      aboutBtn.style.background = "linear-gradient(90deg, #6a11cb, #2575fc)";
  }

}
function showAbout() {
  document.getElementById('home-view').style.display = 'none';
  document.getElementById('about-view').style.display = 'block';
}

function goBack() {
  document.getElementById('about-view').style.display = 'none';
  document.getElementById('home-view').style.display = 'block';
}