let smsg = "Successfully messeged";
let emsg = "Rejected messege"
let imsg = "Invalid msg";
let main = document.querySelector(".p");

function messege (msg) {
	let np = document.createElement("p");
	np.innerText = msg;
	main.appendChild(np);

	if(msg == smsg) {
		np.classList.add("s");
	}
	if(msg == emsg) {
		np.classList.add("r");
	}
	if(msg == imsg) {
		np.classList.add("i");
	}

	setTimeout(() => {
		np.remove();
	}, 3000);
}