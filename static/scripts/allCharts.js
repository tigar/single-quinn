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
