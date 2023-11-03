
document.write("Object-5 examples"+"<br>");

document.write("Object-1"+"-bike"+"<br>");
let bike={
	name:"pulsar",
	color:"black",
	fuelCapacity:"15L",
	priceInLakhs:1.5,
	warrenty:"2 years"
}
document.write(JSON.stringify(bike)+"<br>");
console.log(bike);
document.write("---------------"+"<br>");




document.write("Object-2"+"-marks"+"<br>");
let marks={
	tamil:96,
	english:80,
	maths:90,
	science:95,
	social:95
}
document.write(JSON.stringify(marks)+"<br>");
console.log(marks);
document.write("---------------"+"<br>");


document.write("Object-3"+"-person"+"<br>");
let person={
	name:"person-1",
	heightInCm:160,
	weightInKg:50,
	color:"fair",
	type:"introvert"
}

document.write(JSON.stringify(person)+"<br>");
console.log(person);
document.write("---------------"+"<br>");


document.write("Object-4"+"-frock"+"<br>");
let frock={
	category:"dress",
	gender:"women",
	price:500,
	fabric:"cotton",
	size:"xl"
}

document.write(JSON.stringify(frock)+"<br>");
console.log(frock);
document.write("---------------"+"<br>");



document.write("Object-5"+"-sunFlower"+"<br>");
let sunFlower={
	shape:"round",
	color:"yellow",
	quantity:"10",
	category:"flower",
	price:10
	
}
document.write(JSON.stringify(sunFlower)+"<br>");
console.log(sunFlower);
document.write("---------------");