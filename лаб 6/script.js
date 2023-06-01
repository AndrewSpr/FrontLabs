let btn = document.querySelector("#btn");
let image = document.querySelector("#image");

btn.addEventListener("click", () => {
	try {
		fetch("https://restcountries.com/v3.1/name/Poland")
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					return Promise.reject(`Http error: ${res.status}`);
				}
			})
			.then((res) => {
				console.log(res);
			});
	} catch (err) {
		console.log(err);
	}
});
