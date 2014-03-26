

define([], function() {

	return {
		initialize: function(){
			this.consolelog();
            this.placeholder();
            this.trim();
            this.foreach();
            // this.localstorage();
            console.log('Polyfills Applied');
		},
		consolelog: function() {
			var alertFallback = true;
			if (typeof console === "undefined" || typeof console.log === "undefined") {
				console = {};
				if (alertFallback) {
					console.log = function(msg) {
						// alert(msg);
					};
				} else {
					console.log = function() {};
				}
			}
		},
		placeholder: function() {
			$(document).ready(function() {

				if (!("placeholder" in document.createElement("input"))) {
					$("input[placeholder], textarea[placeholder]").each(function() {
						var val = $(this).attr("placeholder");
						if (this.value === "") {
							this.value = val;
						}
						$(this).focus(function() {
							if (this.value === val) {
								this.value = "";
							}
						}).blur(function() {
							if ($.trim(this.value) === "") {
								this.value = val;
							}
						});
					});

					// Clear default placeholder values on form submit
					$('form').submit(function() {
						$(this).find("input[placeholder], textarea[placeholder]").each(function() {
							if (this.value == $(this).attr("placeholder")) {
								this.value = "";
							}
						});
					});
				}
			});
		},
		trim: function() {
			if (typeof String.prototype.trim !== 'function') {
				String.prototype.trim = function() {
					return this.replace(/^\s+|\s+$/g, '');
				};
			}
		},
		foreach: function() {
			if (!Array.prototype.forEach) {
				Array.prototype.forEach = function(fn, scope) {
					for (var i = 0, len = this.length; i < len; ++i) {
						fn.call(scope, this[i], i, this);
					}
				};
			}
		},
		localstorage: function() {
			if (typeof window.localStorage == 'undefined' || typeof window.sessionStorage == 'undefined')(function() {

				var Storage = function(type) {
					function createCookie(name, value, days) {
						var date, expires;

						if (days) {
							date = new Date();
							date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
							expires = "; expires=" + date.toGMTString();
						} else {
							expires = "";
						}
						document.cookie = name + "=" + value + expires + "; path=/";
					}

					function readCookie(name) {
						var nameEQ = name + "=",
							ca = document.cookie.split(';'),
							i, c;

						for (i = 0; i < ca.length; i++) {
							c = ca[i];
							while (c.charAt(0) == ' ') {
								c = c.substring(1, c.length);
							}

							if (c.indexOf(nameEQ) === 0) {
								return c.substring(nameEQ.length, c.length);
							}
						}
						return null;
					}

					function setData(data) {
						data = JSON.stringify(data);
						if (type == 'session') {
							window.name = data;
						} else {
							createCookie('localStorage', data, 365);
						}
					}

					function clearData() {
						if (type == 'session') {
							window.name = '';
						} else {
							createCookie('localStorage', '', 365);
						}
					}

					function getData() {
						var data = type == 'session' ? window.name : readCookie('localStorage');
						return data ? JSON.parse(data) : {};
					}


					// initialise if there's already data
					var data = getData();

					return {
						length: 0,
						clear: function() {
							data = {};
							this.length = 0;
							clearData();
						},
						getItem: function(key) {
							return data[key] === undefined ? null : data[key];
						},
						key: function(i) {
							// not perfect, but works
							var ctr = 0;
							for (var k in data) {
								if (ctr == i) return k;
								else ctr++;
							}
							return null;
						},
						removeItem: function(key) {
							delete data[key];
							this.length--;
							setData(data);
						},
						setItem: function(key, value) {
							data[key] = value + ''; // forces the value to a string
							this.length++;
							setData(data);
						}
					};
				};

				if (typeof window.localStorage == 'undefined') window.localStorage = new Storage('local');
				if (typeof window.sessionStorage == 'undefined') window.sessionStorage = new Storage('session');

			})();
		}
	};

});

