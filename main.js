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

const options = {
    series: [{
        name: 'December',
        data: [10469]
    },
        {
            name: 'November',
            data: [18141]
        },
        {
            name: 'October',
            data: [32876]
        },
        {
            name: 'September',
            data: [34890]
        },
        {
            name: 'August',
            data: [37395]
        },
        {
            name: 'July',
            data: [34950]
        },
        {
            name: 'June',
            data: [22704]
        },
        {
            name: 'May',
            data: [26518]
        },
        {
            name: 'April',
            data: [19166]
        },
        {
            name: 'March',
            data: [13234]
        },
        {
            name: 'February',
            data: [8598]
        },
        {
            name: 'January',
            data: [8928]
        },
    ],
    chart: {
        height: 350,
        type: 'heatmap',
        width: "50%",
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        heatmap: {
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
const heatmapChart = new ApexCharts(document.querySelector(".graph-1"), options);
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






