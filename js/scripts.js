function checkOneChar(inChar, array) {
	 return array.indexOf(inChar.toLowerCase()) !== -1;
}
function isVowel(char1) { //stackoverflow.com
	 return checkOneChar(char1, ['a','e','i','o','u']);
}
function isQ(char1) {
	 return checkOneChar(char1, ['q']);
}
function isU(char1) {
	 return checkOneChar(char1, ['u']);
}
function parseOneWord(word) {
	var AY = 'ay '
	for(var i=0,prevQ=false;i<word.length;i++) {
		var work_char = word.slice(i,i+1);

		if(!isU(work_char))
			prevQ = false;
    if(isVowel(work_char) && prevQ === false )
			return word.slice(i) + word.slice(0,i) + AY;
		prevQ = false;
		if(isQ(work_char))
			prevQ = true;
	}
	return word + AY;
}
function parseSentence(inSent) {
	var sentence = "";
	inSent.split(" ").forEach(function(oneWord) {
		sentence += parseOneWord(oneWord);
	});
	return sentence;
}
$(document).ready(function() {
	$('form#pig-latin').submit(function(event) {
		var outSentence = parseSentence($('input#userText').val());

	  $('.result1').text(outSentence);
		$('#result').show();
    event.preventDefault();
  });
});
