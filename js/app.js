var ViewModel = function() {
	this.currentCat = ko.observable(new Cat());
	this.incrementcounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};
}

var Cat = function() {
	this.clickCount = ko.observable(0);
	// connects to data-bind="text : name"
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/catpic1.jpg');
	this.imgAttribution = ko.observable('httpsdfasdasdf');
	this.nicknames = ko.observableArray([
		{name: 'Bert'},
		{name: 'Charles'}
	]);

	this.level = ko.computed(function() {
		if (this.clickCount() < 5) {
			return 'infant';
		} else {
			return 'adult';
		}
	}, this);
}

ko.applyBindings(new ViewModel());