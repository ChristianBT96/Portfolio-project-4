console.log("Hello World!");

const speciesContext = document.querySelector('#species-chart').getContext('2d');

// Make array with artist names and array with artist count
speciesLabelArray = [];
speciesCountDataArray = [];

for (let i = 3; i < 25; i++) {
    speciesLabelArray.push(speciesData[i].SPECIES);
    speciesCountDataArray.push(speciesData[i].COUNT);
}

// Creating species horizontal bar chart
const speciesChart = new Chart(speciesContext, {
    type: 'bar',
    data: {
        labels: speciesLabelArray,
        datasets: [{
            data: speciesCountDataArray,
        }]
    },
    options: {
        indexAxis: 'y', // makes it horizontal
    }
});

const chart4elemnet = document.querySelector('#chart-4').getContext('2d');

const chart4Data = {
    labels: ["red", "blue", "yellow"],
    datasets: [{
        label: "Warned",
        data: [160092, 59812, 47965],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};
const chart4Config = {
    type: "doughnut",
    data: chart4Data
}
const chart4 = new Chart(chart4elemnet, chart4Config);






