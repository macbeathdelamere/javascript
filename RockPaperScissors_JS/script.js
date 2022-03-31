
	let robotChoice
	let yourChoice
	let robotChoiceShow = document.getElementById('robotchoice')
	let yourChoiceShow = document.getElementById('yourchoice')
	let choiceChoices = document.querySelectorAll('button')

	choiceChoices.forEach(choiceChoices => choiceChoices.addEventListener('click', (event) =>{
		yourChoice = event.target.id
		yourChoiceShow.innerHTML = yourChoice
		randomRobot()
		}))

	function randomRobot (){
		let randomNumber = Math.floor(Math.random()*3) +1

		if (randomNumber === 1) {
			robotChoice = 'paper'
			}

		if (randomNumber === 2) {
			robotChoice = 'rock'
			}

		if (randomNumber === 3) {
			robotChoice = 'scissors'
			}

		robotChoiceShow.innerHTML = robotChoice

		}