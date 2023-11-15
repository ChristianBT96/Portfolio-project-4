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

// Heatmap attributes - incidentMonthData is created in seperate js-file called incident-month.js
const options = {
    series: incidentMonthData,
    chart: {
        height: 350,
        type: 'heatmap',
        width: "100%",
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        heatmap: {
            enableShades: true,
            colorScale: {

                ranges: [{
                    from: 25000,
                    to: 40000,
                    color: "#EE0000",
                    name: "High risk",

                }, {
                    from: 20000,
                    to: 25000,
                    color: "#FF6600",
                    name: "Medium-high risk"
                }, {
                    from: 14000,
                    to: 20000,
                    color: "#FFD300",
                    name: "Medium risk",
                }, {
                    from: 8000,
                    to: 14000,
                    color: "#5ca904",
                    name: "Low risk",
                }
                ]
            }
        }
    },
    title: {
        text: 'Birds killed by planes over months'
    },
};
// making the heatmap
const heatmapChart = new ApexCharts(document.querySelector(".graph-1 .right"), options);
heatmapChart.render();

const chart4elemnet = document.querySelector('#chart-4').getContext('2d');

const chart4Data = {
    labels: ["No info", "Warned with no impact", "Warned with impact"],
    datasets: [{
        label: "Warned",
        data: warnedData,
        backgroundColor: [
            'rgb(104,101,103)',
            'rgb(92,169,4)',
            'rgb(238,0,0)'
        ],
        hoverOffset: 4
    }]
};
const chart4Config = {
    type: "doughnut",
    data: chart4Data
}
const chart4 = new Chart(chart4elemnet, chart4Config);



const map = L.map('map').setView([38.82, -97.58], 4);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

tiles.addTo(map);

latitudeLongitudeSpeciesData.forEach((birdStrike) => {
    let marker = L.marker([birdStrike.latitude, birdStrike.longitude]).addTo(map);
    marker.bindPopup(`<b>${birdStrike.species}</b><br>${birdStrike.airport}</br>Altitude: ${birdStrike.height} ft`).openPopup();
});

