$(document).ready(function() {

	function _init() {
		$('.success').hide();
		$('.warning').hide();
	}

	function getEmailFromForm () {
		return $('.signup_email').val();
	}

	function errorMessageFadeOut(message) {
		$(".warning-text").text(message);
		$(".warning").fadeIn();
		setTimeout(function() {
			$('.warning').fadeOut();
		}, 2000);
	}

	function successMessageFadeOut(message) {
		$(".success-text").text(message);
		$(".success").fadeIn();
		setTimeout(function() {
			$('.success').fadeOut();
		}, 2000);
	}

	function callToSendMail(email) {
		jQuery.post('mail.php', { email })
		.then(function(response) {
			if (response.data.sent) {
				successMessageFadeOut("Thanks for your signup!");
			}
		})
		.fail(function(err) {
			errorMessageFadeOut("Something is wrong!");
		})
	}

	$(".mail_button").click(function(e) {
		e.preventDefault();
		console.log(getEmailFromForm())
		if (! getEmailFromForm()) {
			errorMessageFadeOut("Email is required!");
			return;
		}
		callToSendMail(getEmailFromForm());
	})

	_init();
});