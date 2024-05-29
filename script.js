document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');
    const ctx = document.getElementById('salesChart').getContext('2d');
    let salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Ventas',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const month = document.getElementById('month').value;
        const sales = Number(document.getElementById('sales').value);

        if (salesChart.data.labels.includes(month)) {
            alert('Este mes ya ha sido agregado.');
            return;
        }

        salesChart.data.labels.push(month);
        salesChart.data.datasets[0].data.push(sales);
        salesChart.update();
    });
});
