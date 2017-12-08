new Chart(document.getElementById("pie"), {
    type: 'pie',
    data: {
      labels: ["$w@g", "Dabbing", "Water Polo Skills", "Cuddliness", "Dietary Restrictions"],
      datasets: [{
        label: "Percentage",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [30,1.04,32.49,4,25]
	}]
    },
    options: {
      title: {
        display: true,
        text: "Personality Makeup"
      }
    }
});

new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],
    datasets: [{
        data: [6.6, 8, 8.2, 6, 7, 5.5, 5.4, 6.2, 7.4, 6.9, 7, 6.7, 8, NaN, NaN, NaN, NaN, NaN],
        label: "Historical",
        borderColor: "#3e95cd",
        fill: false,
    }, {
        data: [NaN, NaN, NaN, NaN, NaN, NaN, NaN,NaN, NaN, NaN, NaN, NaN, 8, 8.2, 8.24, 8.7, 9.2, 9.37, 9.5 ],
        label: "Projected",
        borderColor: "#4e95cd",
        fill: false,
        borderDash: [3]
    }
    ]
  },
  options: {
      tooltips: {enabled: false},
      responsive: true,
      title:{
          display:true,
          text:'Chart.js Line Chart'
      },
      hover: {
          mode: 'nearest',
          intersect: true
      },
      scales: {
          xAxes: [{
              display: true,
              scaleLabel: {
                  display: true,
                  labelString: 'Age'
              }
          }],
          yAxes: [{
              display: true,
              scaleLabel: {
                  display: true,
                  labelString: 'Cuteness'
              },
              ticks: {
                  display: false
              }
          }]
      }
  }
});
