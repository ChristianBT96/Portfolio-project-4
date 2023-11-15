console.log("Hello World!");

const barChartColor = "#588157"; // should be same color as css palette
const barChartFontSize = 18;

const speciesContext = document.querySelector('#species-chart').getContext('2d');

// Make array with artist names and array with artist count
speciesLabelArray = [];
speciesCountDataArray = [];

for (let i = 3; i < 18; i++) {
    speciesLabelArray.push(speciesData[i].SPECIES);
    speciesCountDataArray.push(speciesData[i].COUNT);
}

// Creating species horizontal bar chart
Chart.defaults.font.size = barChartFontSize;

const speciesChart = new Chart(speciesContext, {
    type: 'bar',
    data: {
        labels: speciesLabelArray,
        datasets: [{
            data: speciesCountDataArray,
            backgroundColor: [barChartColor],
        }]
    },
    options: {
        indexAxis: 'y', // makes it horizontal
        plugins: {
            legend: {
                display: false
            },
            title : {
                display: false, // not used for now
                text: 'These bird species are the must killed by planes!',
                font: {
                    size: 25
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
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






/////////////// GAUGE JS SLIDER /////////////

const slider = document.getElementById('slider');
const spanElement = document.querySelector('.graph-5 span');

const minimumRange = 0;
const maximumRange = 10000; // 10km in m

// SLIDER HERE: https://refreshless.com/nouislider/slider-values/ //
noUiSlider.create(slider, {
    start: 0,
    connect: 'lower',
    range: {
        'min': minimumRange,
        'max': maximumRange
    }
});

// GAUGE HERE: https://bernii.github.io/gauge.js/ //
const opts = {
    angle: -0.20, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: maximumRange,     // If false, max value increases automatically if value > maxValue
    limitMin: minimumRange,     // If true, the min value of the gauge will be fixed
    staticZones: [
        {strokeStyle: "#D3212C", min: minimumRange, max: 1200}, // Color for each zone in gauge
        {strokeStyle: "#FF681E", min: 1100, max: 5100},
        {strokeStyle: "#FF980E", min: 5000, max: 9600},
        {strokeStyle: "#069C56", min: 9400, max: maximumRange},
    ]
};

const gaugeCanvasElement = document.querySelector('#gauge'); // your canvas element
const gauge = new Gauge(gaugeCanvasElement).setOptions(opts); // create sexy gauge!
gauge.maxValue = maximumRange; // set max gauge value
gauge.setMinValue(minimumRange);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(1244); // set actual value

// documentation: https://refreshless.com/nouislider/events-callbacks/
slider.noUiSlider.on('update', function(values){
    gauge.set(values);
    spanElement.innerHTML = `${parseInt(values)} meters`;
});