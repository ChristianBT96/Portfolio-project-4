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

const ctx = document.querySelector('#chart-1').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
        }]
    }
});









