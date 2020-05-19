var ctx = document.getElementById('donutChart').getContext('2d');
 let donutChart = new Chart (ctx, {
	type: 'doughnut',
	data: {
		labels: ['Hispanic/Latino' , 'White' , 'Black/African American' , 'Asian/Pacific Islander' , 'American Indian' ],
		datasets: [{
			label: "Ethnicity",
			backgroundColor: ['#9DA39A', '#D1D5DE' , '#2A2E45' , '#7EBA98' , '#8AAA79'],
			borderWidth: 1,
			borderColor: '#111111',
			data: [3.752, 107.94, 2.789, 1.697, 0.454]
		}]
	},
	options: {
		cutoutPercentage: 80,
		animation: {
			animateScale:true
		},
		legend: { display: true },
		title: {
			display: true,
			text: "NYC Population by Ethnicity (in millions)",
			fontSize: 25,
		}
	}
 });