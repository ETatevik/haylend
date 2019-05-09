let total_value = [
    {
        "id": 1,
        "value": 10.000,
		"country": "Yerevan",
		"users": 100.000
    },
    {
        "id": 2,
        "value": 20.000,
		"country": "Moscov",
		"users": 30.000
    },
    {
        "id": 3,
        "value": 10.000,
		"country": "Paris",
		"users": 10.000
    },
    {
        "id": 4,
        "value": 50.000,
		"country": "Beygin",
		"users": 70.000
    },
    {
        "id": 5,
        "value": 30.000,
		"country": "Astana",
		"users": 80.000
    },
    {
        "id": 6,
        "value": 20.000,
		"country": "Tokyo",
		"users": 90.000
	}
];
let productsArray = [
	{
		"percent": 25,
		"type": "Product type"
	},
	{
		"percent": 12,
		"type": "Product type1"
	},
	{
		"percent": 13,
		"type": "Product type2"
	},
	{
		"percent": 35,
		"type": "Product type3"
	},
	{
		"percent": 15,
		"type": "Product type4"
	}
];

let colors = ["#E03141","#FFB946","#2ED47A","#008CA9","#7163CA","#615B51","#A2E96A","#DF5E5E","#4C5862"]
let digArrayValue = [];
for(let i in total_value){
	let obj = {
		x: total_value[i]["id"],
		y: total_value[i]["value"]
	};
	digArrayValue[i] = obj;
}


let digArrayCountry = [];
for(let i in total_value){
	let obj = {        
			type: "column",
			showInLegend: true, 
			legendText: total_value[i]["country"],
			legendMarkerType: "circle",
			color: colors[total_value[i]["id"]-1],
			dataPoints: [{ x: total_value[i]["id"], y: total_value[i]["value"] }]
	};
	digArrayCountry[i] = obj;
}

let digArrayNumberCountry = [];
for(let i in total_value){
	let obj = {        
			type: "column",
			showInLegend: true, 
			legendText: total_value[i]["country"],
			legendMarkerType: "circle",
			color: colors[total_value[i]["id"]-1],
			dataPoints: [{ x: total_value[i]["id"], y: total_value[i]["users"] }]
	};
	digArrayNumberCountry [i] = obj;
}


let digProductsArray = [];
for(let i  in productsArray){
	let obj = {
		y: productsArray[i]["percent"], 
		name: productsArray[i]["type"]	
	};
	digProductsArray[i] = obj;
}

jQuery(document).ready(function($){
    $('.data').text(new Date().getFullYear());

    let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,  
        axisY: {
            suffix: "$",
            gridThickness: 1,
            tickColor: "#D3D8DD",
            gridColor: "#D3D8DD",
            gridDashType: "longDash"
        },
        axisX: {
            interval:1,
            gridThickness: 1,
            tickColor: "#D3D8DD",
            gridColor: "#D3D8DD",
            gridDashType: "longDash"
        },
        data: [{
            type: "splineArea",
            color: "rgba(16, 156, 241, .4)",
            dataPoints:digArrayValue 
        }]
        });
    chart.render();
    
    
    let chart2 = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        axisY: {
            suffix: "$",
            gridThickness: 1,
            tickColor: "#D3D8DD",
            gridColor: "#D3D8DD",
            gridDashType: "longDash"
        },
        axisX: {
            interval:10,
            tickColor: "#D3D8DD",
            gridColor: "#D3D8DD",
            gridDashType: "longDash",
            gridThickness: 0,
            tickLength: 0,
            lineThickness: 0,
            labelFontColor: "transparent"
        },
        legend :{
            verticalAlign: "center",
            horizontalAlign: "right"
        },
        data: digArrayCountry 
    });
    chart2.render();
    
    let chart3 = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,
        axisY: {
            suffix: "$",
            gridThickness: 1,
            tickColor: "#D3D8DD",
            gridColor: "#D3D8DD",
            gridDashType: "longDash"
        },
        axisX: {
            interval:10,
            tickColor: "#D3D8DD",
            gridColor: "#D3D8DD",
            gridDashType: "longDash",
            gridThickness: 0,
            tickLength: 0,
            lineThickness: 0,
            labelFontColor: "transparent"
        },
        legend :{
            verticalAlign: "center",
            horizontalAlign: "right"
        },
        data: digArrayNumberCountry 
    });
    chart3.render();
    
    
    CanvasJS.addColorSet("greenShades", colors);
    let chart4 = new CanvasJS.Chart("chartContainer4", {
        animationEnabled: true,
        colorSet: "greenShades",
        legend:{
            verticalAlign: "center",
            horizontalAlign: "right"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendMarkerType: "circle",
            toolTipContent: "{name}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            indexLabelPlacement: "inside",
            indexLabelFontColor: "white",
            explodeOnClick: false, 
            dataPoints: digProductsArray
        }]
    });
    chart4.render();



});

function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();

}