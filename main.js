console.log("Hello World!")




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









