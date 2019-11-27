document.addEventListener("DOMContentLoaded", () => {
	menuHandler();
	$('.carousel').slick();
    submittedForm();
});

// menu handler
const menuHandler = () => {
	const menuButton = document.querySelector('.mob-button');
	const menu = document.querySelector('nav ul');

	menuButton.addEventListener('click', ()=> {
		menuButton.classList.toggle('open');
		menu.classList.toggle('open');
	})
}

const submittedForm = () => {
	const data = {};
	const formAlert = document.querySelector('.form-alert');
	const formInputs = document.querySelectorAll('.row input');
	const submitted = document.querySelector('.submit');

	submitted.addEventListener('click', ()=>{
		formInputs.forEach(input=>{
			let name = input.name;
			let value = input.value;
			if(value !== ''){
                data[name] = value;
                input.classList.remove('invalid');
                formAlert.style = "background: #2ecc71"
                formAlert.innerHTML = "<span>Successful send!</span>";
			} else {
				input.classList.add('invalid');
				formAlert.style = "background: #e74c3c"
                formAlert.innerHTML = "<span>Invalid values!</span>";
			}
		})

		console.log(data);

		formAlert.classList.add('splash');
		setTimeout(()=>formAlert.classList.remove('splash'), 3000);
	})
}