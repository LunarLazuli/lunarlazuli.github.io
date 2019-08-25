var thehours = new Date().getHours();
var day = new Date().getDay();
	var greeting;
	var morning = ('～　おはよう　～');
	var afternoon = ('～　こんにちは　～');
	var evening = ('～　今晩は　～');

	if (thehours >= 0 && thehours < 12) {
		greeting= morning; 

	} else if (thehours >= 12 && thehours < 17) {
		greeting= afternoon;

	} else if (thehours >= 17 && thehours < 24) {
		greeting= evening;
	}

	$('.greeting').append(greeting);
