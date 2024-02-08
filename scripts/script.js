// script.js
document.addEventListener("DOMContentLoaded", function () {
  const barGraph = document.getElementById("barGraph");

  const unitData = [
    { name: "Unit 1", score: "80" },
    { name: "Unit 2", score: "70" },
    { name: "Unit 3", score: "65" },
    { name: "Unit 4", score: "59" },
    { name: "Unit 5", score: "87" },
    { name: "Unit 6", score: "67" },
    { name: "Unit 7", score: "78" },
    { name: "Unit 8", score: "75" },
  ];

  unitData.forEach((unit) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${unit.score}%`;
    const toolTip = document.createElement("div");
    toolTip.classList.add("tooltip");
    bar.appendChild(toolTip);
    bar.addEventListener("mouseover", function () {
      toolTip.textContent = `${unit.name} - ${unit.score}`;
      toolTip.style.display = "flex";
    });
    bar.addEventListener("mouseout", function () {
      toolTip.style.display = "none";
    });
    barGraph.appendChild(bar);
  });
});
