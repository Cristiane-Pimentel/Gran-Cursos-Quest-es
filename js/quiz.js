const correctAns = ["B"];
	const form = document.querySelector(".quiz-form");
	const label = document.querySelectorAll(".quiz-form__ans");
	const result = document.querySelector(".quiz__heading");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		let score = 0;
		const userAns = [
		form.q1,
		];

  //check ans
  userAns.forEach((ans, i) => {
  	if (ans.value === correctAns[i]) {
  		score += 10;
  		for (let i = 0; i < 4; i++) {
  			const isChecked = ans[i].checked;
  			if (isChecked) {
  				ans[i].parentElement.classList.add("correct");
  			}
  		}
  	} else {
  		for (let i = 0; i < 4; i++) {
  			const isChecked = ans[i].checked;
  			if (isChecked) {
  				ans[i].parentElement.classList.add("wrong");
  			}
  		}
  	}
  });
});