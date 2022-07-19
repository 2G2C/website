// massive fucking fail
// const ip = fetch("https://localhost:3000/api/ip")
// .then(res => res.json())
// .then((data) => {
// 	console.log(data)
// 	const para = document.createElement("span");
// 	para.appendChild(document.createTextNode(data.ip))
// 	document.getElementById("ip_addr").appendChild(para);
// })

const ip = fetch("http://127.0.0.1:3000/api/ping")
.then(res => res.json())
.then((data) => {
	console.log(data)
})