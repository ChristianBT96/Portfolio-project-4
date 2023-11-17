/****************************************
 ****************************************
 *              START
 *  Horizontal Bar Chart - Marcus
 ****************************************
 ****************************************/

const speciesContext = document.querySelector('#species-chart').getContext('2d');

/**
 * Arrays to store labels and count data for the species horizontal bar chart.
 * @type {string[]} speciesLabelArray - Array to store species labels.
 * @type {number[]} speciesCountDataArray - Array to store corresponding count data.
 */
speciesLabelArray = [];
speciesCountDataArray = [];

// Populate speciesLabelArray and speciesCountDataArray from speciesData,
// starting from index 3 up to (but not including) index 18
for (let i = 3; i < 18; i++) {
    speciesLabelArray.push(speciesData[i].SPECIES);
    speciesCountDataArray.push(speciesData[i].COUNT);
}

/**
 * Documentation for chart.js bar chart: https://www.chartjs.org/docs/latest/charts/bar.html
 *
 * Configuration for horizontal bar chart and add to speciesContext element
 */
const barChartColor = "#588157"; // should be same color as css palette
const barChartFontSize = 18;
const barChartTitle = 'These bird species are the must killed by planes!';

Chart.defaults.font.size = barChartFontSize;
Chart.defaults.font.family = "Roboto";

const speciesChart = new Chart(speciesContext, {
    type: 'bar', // this makes it bar chart
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
                display: true,
                text: barChartTitle,
                font: {
                    size: 25
                }
            }
        },
        scales: { // This removes grid lines
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

/****************************************
 ****************************************
 *              END
 *  Horizontal Bar Chart - Marcus
 ****************************************
 ****************************************/


/****************************************
 ****************************************
 *              START
 *      Heatmap Chart - Jonathan
 ****************************************
 ****************************************/
// Documentation for ApexChart.js heatmap is found at: https://apexcharts.com/docs/chart-types/heatmap-chart/
// Heatmap attributes

const heatmapOptions = {
    series: incidentMonthData, // incidentMonthData is created in separate js-file called incident-month.js
    chart: {
        height: 350,
        type: 'heatmap',
        width: "100%",
        toolbar: {
            show: false // removes toolbar, which is a menu with a few options that was cluttering the chart.
        },
        fontFamily: "Roboto"

    },
    xaxis: {
        labels: {
            style: {
                colors: ["#dad7cd", "#dad7cd"] // work-around to remove x-axis: Coloured the labels on x-axis same colour as background.
            }
        },
        tooltip: {
            enabled: false // removes x-axis tooltip, which showed the x-axis when hovering a specific point in chart.
        }
    },
    legend: {
        show: true
    },
    dataLabels: {
        enabled: false // Removes data from directly printed on chart, deemed too cluttering.
    },
    plotOptions: {
        heatmap: {
            enableShades: true, // on by default - Allows different shades of color chosen below.
            colorScale: { // allows choice in what colors should be displayed in what range in the data.

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

const heatmapChart = new ApexCharts(document.querySelector(".graph-1 .right"),heatmapOptions); // setting up heatmap, and selecting where in the html it should be applied to.
heatmapChart.render(); // making the heatmap

/****************************************
 ****************************************
 *              END
 *      Heatmap chart - Jonathan
 ****************************************
 ****************************************/




/****************************************
 ****************************************
 *              START
 *  Doughnut Chart - Christian
 ****************************************
 ****************************************/

//
const doughnutChartElement = document.querySelector('#chart-4').getContext('2d');
// Creating the chart data using the data from the database
const doughnutChartData = {
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
// Configuring the chart
const doughnutChartConfig = {
    type: "doughnut",
    data: doughnutChartData
}
// Creating the chart
const chart4 = new Chart(doughnutChartElement, doughnutChartConfig);

/****************************************
 ****************************************
 *              END
 *  Doughnut Chart - Christian
 ****************************************
 ****************************************/



/****************************************
 ****************************************
 *              START
 *  Map with markers - Christian
 ****************************************
 ****************************************/

// Leaflet map - making the map on the html page, using the id "map"
// plus setting the starting view and the zoom level
const map = L.map('map', {minZoom: 3, maxZoom: 19}).setView([38.82, -97.58], 3);
// Leaflet tile layer - using openstreetmap.org as the map tiles
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
// Adding the tiles to the map
tiles.addTo(map);
// Setting the max bounds of the map
map.setMaxBounds(map.getBounds());

// Looping through the latitudeLongitudeSpeciesData array and adding a marker for each object
// Each marker has a popup with the species, airport, and altitude
latitudeLongitudeSpeciesData.forEach((birdStrike) => {
    // Creating the marker and adding it to the map
    let marker = L.marker([birdStrike.latitude, birdStrike.longitude]).addTo(map);
    // Adding the popup to the marker
    marker.bindPopup(`<b>${birdStrike.species}</b><br>${birdStrike.airport}</br>Altitude: ${birdStrike.height} ft`).openPopup();
});

/****************************************
 ****************************************
 *              END
 *  Map with markers - Christian
 ****************************************
 ****************************************/

/****************************************
 ****************************************
 *              START
 *  Gauge chart with slider - Marcus
 ****************************************
 ****************************************/

const slider = document.querySelector('#slider');
const meterSpanElement = document.querySelector('.gauge-height');
const animalSpanElement = document.querySelector('.killed-animals');
const gaugeCanvasElement = document.querySelector('#gauge');

/**
 * The minimum and maximum range for the gauge chart and slider (in American feet).
 */
const minimumRange = 0;
const maximumRange = 20000; // american feet

/**
 * See calculateFlightPhases() comment for more infomation about flightPhases
 */
let flightPhaseOne = 0;
let flightPhaseTwo = 0;
let flightPhaseThree = 0;

calculateFlightPhases();

/**
 * Documentation for gauge.js: https://bernii.github.io/gauge.js/
 */
const gaugeChartConfig = {
    angle: -0.20, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: true,     // If false, max value increases automatically if value > maxValue
    limitMin: true,     // If true, the min value of the gauge will be fixed
    staticZones: [
        {strokeStyle: "#D3212C", min: minimumRange, max: 3000}, // Color for each zone in gauge
        {strokeStyle: "#FF681E", min: 3000, max: 10000},
        {strokeStyle: "#FF980E", min: 10000, max: maximumRange}
    ]
};

/**
 * Creates a new Gauge in the gauge canvas with the specified configuration.
 */
const gauge = new Gauge(gaugeCanvasElement).setOptions(gaugeChartConfig);
gauge.maxValue = maximumRange;
gauge.setMinValue(minimumRange);
gauge.animationSpeed = 32; // (32 is default value)
gauge.set(0);

/**
 * Documentation for noUiSlider: https://refreshless.com/nouislider/slider-values/
 *
 * Creating noUiSlider in slider element based on config
 */
noUiSlider.create(slider, {
    start: 0,
    connect: 'lower', // this makes it one slider
    range: {
        'min': minimumRange,
        'max': maximumRange
    }
});


/**
 * Documentation for noUiSlider eventListener: https://refreshless.com/nouislider/events-callbacks/
 *
 * Event handler for when slider value changes.
 * The function updates the gauge, height and kill span in html - based on the slider values.
 *
 * @param {Array} values - The current values of the slider.
 */
slider.noUiSlider.on('update', function(values){
    gauge.set(values);
    meterSpanElement.innerHTML = `${parseInt(values)} ft.`;
    updateAnimalSpan(values);
});

/**
 * Updates the animal kill count span element based on the slider values.
 * @param {Array} values - The current values of the slider.
 */
function updateAnimalSpan(values) {
    let newKillValue = 0;

    if (values < 3000) {
        newKillValue = flightPhaseOne;
    } else if (values < 10000) {
        newKillValue = flightPhaseTwo;
    } else if (values >= 10000) {
        newKillValue = flightPhaseThree;
    }

    animalSpanElement.innerText = `${newKillValue} animal lives has been taken at this height`;
}

/**
 * Flight phases height reference: https://www.researchgate.net/figure/Phases-of-flight-at-various-altitude-as-modeled-in-ATOMS-A-flight-having_fig4_3428103
 *
 * Phases of Flight from MySQL query (phaseOfFlightData):
 * - Take off Run: under 3000 ft.
 * - Climb: 3000-10000 ft.
 * - En Route: over 10000
 * - Cruise: 10000 - 43000 ft.
 * - Departure: over 10000 ft.
 * - Descent: 5000 - 10000 ft.
 * - Local: under 3000 ft.
 * - Approach: 3000-5000 ft.
 * - Landing Roll: 3000ft
 * - Land: under 3000 ft.
 * - Taxi: under 3000 ft.
 * - Parked: under 3000 ft.
 * - Unknown: ?
 *
 * Defined Groups based on height:
 *
 * - Group one: Approach, Landing Roll, Take-off Run, Local, Arrival, Taxi, Parked
 *    - under 3000 ft.
 * - Group two: Climb, Descent
 *    - 3000 - 10000 ft.
 * - Group three: En Route, Departure
 *    - 10000 - 43000 ft.
 *
 * Calculates counts for different flight phases based on predefined data.
 * Updates the 'flightPhaseOne', 'flightPhaseTwo', and 'flightPhaseThree' variables.
 */
function calculateFlightPhases() {

    phaseOfFlightData.forEach((flightData) => {
        const flightPhase = flightData.PHASE_OF_FLIGHT;
        const count = flightData.COUNT;

        switch (flightPhase) {
            case 'Approach':
            case 'Landing Roll':
            case 'Take-off Run':
            case 'Local':
            case 'Arrival':
            case 'Taxi':
            case 'Parked':
                flightPhaseOne += count;
                break;
            case 'Climb':
            case 'Descent':
                flightPhaseTwo += count;
                break;
            case 'En Route':
            case 'Departure':
                flightPhaseThree += count;
                break;
            case 'Unknown':
                break;
        }

    });

}

/****************************************
 ****************************************
 *              END
 *  Gauge chart with slider - Marcus
 ****************************************
 ****************************************/


/****************************************
 ****************************************
 *              START
 *  Heatmap map chart - Christian / Marcus
 ****************************************
 ****************************************/

// Creating the heatmap
// Getting the html element where the heatmap should be placed
const globeElement = document.querySelector('#globe');

// Creating an array to store the data for the heatmap
const heatmapData = [];

// Looping through the latitudeLongitudeSpeciesData array and adding the data to the heatmapData array
latitudeLongitudeSpeciesData.forEach((birdStrike) => {
   const obj = {
    lat :birdStrike.latitude,
    lng: birdStrike.longitude,
    weight: 0.01
    };

    heatmapData.push(obj);
});

// Getting the html element where the heatmap should be placed
const graphThreeSectionElement = document.querySelector('.graph-3 .content .right');

// Creating the globe
// Documentation for globe.gl: https://globe.gl/
const myGlobe = Globe();

// Setting the attributes for the globe
myGlobe(globeElement)
    .globeImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg')
    .heatmapsData([heatmapData])
    .heatmapPointLat('lat')
    .heatmapPointLng('lng')
    .heatmapPointWeight('weight')
    .heatmapTopAltitude(0.01)
    .enablePointerInteraction(false)
    // Setting the size of the globe using the width of the html element
    .width(parseInt(graphThreeSectionElement.offsetWidth))
    .height(0.8 * window.innerHeight)

/****************************************
 ****************************************
 *              END
 *  Heatmap map chart - Christian / Marcus
 ****************************************
 ****************************************/