window.onload = conter;

function conter() {

	//===

	// VARIABLES

	//===

	var datLejana = '08/23/2021 11:03 PM';//08/11/2021 6:1 AM

	const DATE_TARGET = new Date(datLejana);

	// DOM for render

	const SPAN_DAYS = document.querySelector('span#days');

	const SPAN_HOURS = document.querySelector('span#hours');

	const SPAN_MINUTES = document.querySelector('span#minutes');

	const SPAN_SECONDS = document.querySelector('span#seconds');

	// Milliseconds for the calculations

	const MILLISECONDS_OF_A_SECOND = 1000;

	const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;

	const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;

	const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

	var interval;

	//===

	// FUNCTIONS

	//===



	/**
	
	 * Method that updates the countdown and the sample
	
	 */









	function updateCountdown() {

		// console.log(request_serv_date())



		// let reloj = document.getElementById("hora")

		// function muestraReloj () {



		fetch("php/fecha_hora.php")

			.then(response => response.text())

			.then(

				// .then(data => fecha = data)

				// }

				// muestraReloj ()

				function (d) {

					// console.log(d)

					if (DATE_TARGET <= d) {

						clearInterval(interval)

						Call()

						return false;

					}

					// Calcs

					const NOW = d

					const DURATION = DATE_TARGET - NOW;

					const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);

					const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);

					const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);

					const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

					// Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)



					// Render

					document.querySelector('span#days').textContent = REMAINING_DAYS;

					document.querySelector('span#hours').textContent = REMAINING_HOURS;

					document.querySelector('span#minutes').textContent = REMAINING_MINUTES;

					document.querySelector('span#seconds').textContent = REMAINING_SECONDS;

					// console.log(DATE_TARGET +""+ NOW)

				})



	}







	// console.log(DATE_TARGET - DATE_TARGET)

	//===

	// INIT

	//===



	fetch("php/fecha_hora.php")

		.then(response => response.text())

		.then(function (d) {



			// console.log( DATE_TARGET)

			// console.log(DATE_TARGET >= d )



			if (d <= DATE_TARGET) {

				document.querySelector("body").innerHTML = `<section id="sect">

						    <p id="cont_conter">

						    	<span>Faltan</span>

						    	<br>

						        <span id="days" class="time"></span> <i>días</i> / <span id="hours" class="time"></span><i>horas</i>  / <span id="minutes" class="time"></span> <i>minutos</i> / <span id="seconds" class="time"></span> <i>segundos</i>

						        <br>

						        <span>Para un gran evento</span>

						    </p>

						</section> `;

				updateCountdown();

				interval = setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);





			} else {

				var compare = d;

				// SPAN_DAYS.textContent = 0;

				//    SPAN_HOURS.textContent = 0;

				//    SPAN_MINUTES.textContent = 0;

				//    SPAN_SECONDS.textContent = 0;

				Call(compare)

				// console.log(DATE_TARGET +""+ NOW)

			}

		})





	// Refresh every second





}