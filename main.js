console.log("Hello World!")

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




