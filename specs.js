describe('pig latin test', function() {
	it('u is a vowel', function() {
		isVowel('u').should.equal(true);
	});
	it('x is NOT a vowel', function() {
		isVowel('x').should.equal(false);
	});
	it('q is a Q', function() {
		isQ('q').should.equal(true);
	});
	it('x is NOT a Q', function() {
		isQ('x').should.equal(false);
	});
	it('u is a U', function() {
		isQ('q').should.equal(true);
	});
	it('x is NOT a U', function() {
		isQ('x').should.equal(false);
	});
	var name1 = "monte";
	var sbName1 = "ontemay ";
	it(name1 + ' test s/b ' + sbName1, function() {
		parseOneWord(name1).should.equal(sbName1);
	});
	var name2 = "squid";
	var sbName2 = "idsquay ";
	it(name2 + ' test s/b ' + sbName2, function() {
		parseOneWord(name2).should.equal(sbName2);
	});
	var name3 = "sqash";
	var sbName3 = "ashsqay ";
	it(name3 + ' test s/b ' + sbName3, function() {
		parseOneWord(name3).should.equal(sbName3);
	});
	var name4 = "myth";
	var sbName4 = "mythay ";
	it(name4 + ' test s/b ' + sbName4, function() {
		parseOneWord(name4).should.equal(sbName4);
	});
	var sentence1 = "I hope this WORKS because this is a squidward";
	var sbSentence1 = "Iay opehay isthay ORKSWay ecausebay isthay isay aay idwardsquay ";
	it(sentence1 + ' test s/b ' + sbSentence1, function() {
		parseSentence(sentence1).should.equal(sbSentence1);
	});
});
