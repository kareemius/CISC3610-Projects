var ctx = document.getElementById('barChart').getContext('2d');
	console.log(Chart.defaults.global);
	let barChart = new Chart(ctx, {
	type: 'horizontalBar',
	data: {
		 labels: ["PSX", "PS2" , "PSP" , "PS3" , "PSVita" ,"PS4"],
		 datasets: [
		 {
			maxBarThickness: 30,
			label: "Units Sold (Millions)",
			backgroundColor: ["#cfd2cd" , "#1c5d99" , "#111111" , "#9a0101" , "#276ef1" , "#183766"],
			borderWidth: 1,
			borderColor: '#111111',
			data: [102.49, 155, 82, 87.4, 4, 110.4]
		 }
		 ]
	 },
	 
	 options: {
		 legend: { display: true },
		 title: {
			 display: true,
			 text: 'PlayStation Console Unit Sales (in millions)',
			 fontSize: 25,
		 }
	 }
	 });
	 
	 