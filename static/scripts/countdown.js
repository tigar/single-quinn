function countdown(){
	var now = new Date();
	var eventDate = new Date(2017, 9, 21);
	var currentTime = now.getTime();
	var eventTime = eventDate.setTime(1511842980000);
	var remTime = currentTime - eventTime;
	var s = Math.floor(remTime / 1000);
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);
	h %= 24;
	m %= 60;
	s %= 60;
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;
	document.getElementById("days").textContent = d;
	document.getElementById("days").innerText = d;
	document.getElementById("hours").textContent = h;
	document.getElementById("minutes").textContent = m;
	document.getElementById("seconds").textContent = s;
	setTimeout(countdown, 1000);
}
countdown();





// new Chart(document.getElementById("line-chart"), {
//     type: 'pie',
//     data: {
//       labels: ["$w@g", "Dabbing", "Water Polo Skills", "Cuddliness", "Dietary Restrictions"],
//       datasets: [{
//         label: "Percentage",
//         backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
//         data: [30,10,10,4,25]
// 	}]
//     },
//     options: {
//       title: {
//         display: true,
//         text: 'Predicted world population (millions) in 2050'
//       }
//     }
// });
