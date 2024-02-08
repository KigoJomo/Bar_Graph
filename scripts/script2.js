document.addEventListener("DOMContentLoaded", function () {
  const semesters = document.querySelector(".semesters");
  const semesterData = [
    {
      year: "1",
      sem: "2",
      units: [
        { name: "Unit 1", score: "80" },
        { name: "Unit 2", score: "70" },
        { name: "Unit 3", score: "65" },
        { name: "Unit 4", score: "59" },
        { name: "Unit 5", score: "87" },
        { name: "Unit 6", score: "67" },
        { name: "Unit 7", score: "78" },
        { name: "Unit 8", score: "75" },
      ],
    },
    {
      year: "2",
      sem: "1",
      units: [
        { name: "Unit 1", score: "80" },
        { name: "Unit 2", score: "70" },
        { name: "Unit 3", score: "65" },
        { name: "Unit 4", score: "59" },
        { name: "Unit 5", score: "87" },
        { name: "Unit 6", score: "67" },
        { name: "Unit 7", score: "78" },
        { name: "Unit 8", score: "75" },
      ],
    },
    {
      year: "2",
      sem: "2",
      units: [
        { name: "Unit 1", score: "80" },
        { name: "Unit 2", score: "70" },
        { name: "Unit 3", score: "65" },
        { name: "Unit 4", score: "59" },
        { name: "Unit 5", score: "87" },
        { name: "Unit 6", score: "67" },
        { name: "Unit 7", score: "78" },
        { name: "Unit 8", score: "75" },
      ],
    },
    ];

    semesterData.forEach((semester) => {
        const semesterCard = document.createElement('div');
        semesterCard.classList.add('semester')
        const title = document.createElement('h3');
        title.innerHTML = `year ${semester.year}, semester ${semester.sem}`;
        semesterCard.appendChild(title);
        const barGraph = document.createElement('div');
        barGraph.classList.add("bar_graph");
        semester.units.forEach((unit) => {
            const bar = document.createElement('div')
            bar.classList.add('bar');
            bar.style.height = `${unit.score}%`;
            const toolTip = document.createElement('div');
            toolTip.classList.add('tooltip');
            bar.appendChild(toolTip)
            bar.addEventListener('mouseover', function () {
                toolTip.textContent = `${unit.name} - ${unit.score}`;
                toolTip.style.display = 'flex';
            });
            bar.addEventListener('mouseout', function () {
                toolTip.style.display = "none";
            });
            barGraph.appendChild(bar);
        });
        const markers = document.createElement('div');
        markers.classList.add('markers');
        for (let i = 0; i < 5; i++) {
            const marker = document.createElement('div');
            marker.classList.add('marker');
            markers.appendChild(marker);
        }
        barGraph.appendChild(markers);
        semesterCard.appendChild(barGraph);
        semesters.appendChild(semesterCard);
    });
});
