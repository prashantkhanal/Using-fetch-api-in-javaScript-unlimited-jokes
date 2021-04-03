"use strict";

const joke = document.querySelector("#joke");
const btn = document.querySelector(".btn");

const unlimitedjoke = async () => {
	console.log("my na");

	try {
		const setHeaders = {
			headers: {
				Accept: "application/json",
			},
		};
		const res = await fetch("https://icanhazdadjoke.com", setHeaders);
		const data = await res.json();
		joke.innerHTML = data.joke;
	} catch (err) {
		console.log(err);
	}
};

btn.addEventListener("click", unlimitedjoke);
unlimitedjoke();
