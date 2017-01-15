var ViewModel = function() {
	this.clickCount = ko.observable(0);
	// connects to data-bind="text : name"
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/catpic1.jpg');
	this.imgAttribution = ko.observable('httpsdfasdasdf');

	this.level = ko.computed(function() {
		if (this.clickCount() < 5) {
			return 'infant';
		} else {
			return 'adult';
		}
	}, this);

	this.incrementcounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());