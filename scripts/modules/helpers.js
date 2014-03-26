define([], function() {
	var Helpers = {
		toObject: function(arr) {
			var rv = {};
			for (var i = 0; i < arr.length; ++i)
				rv[arr[i].field] = arr[i].value;
			return rv;
		},
		getTime: function(d) {
			d = new Date(d);
			var hour = (d.getHours() <= 12) ? d.getHours() : d.getHours() - 12,
				minute = (d.getMinutes() < 10) ? '0' + d.getMinutes() : d.getMinutes(),
				meridiem = (d.getHours() < 12) ? 'AM' : 'PM';
			return '' + hour + ':' + minute + ' ' + meridiem;
		},
		getDate: function(d) {
			d = new Date(d);
			var month = d.getMonth() + 1,
				date = d.getDate(),
				year = d.getFullYear();
			return '' + month + '/' + date + '/' + year;
		},
		getShortMonth: function(d) {
			var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
			return monthNames[d.getMonth()];
		},
		getShortDay: function(d) {
			var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
			return weekday[d.getDay()];
		},
		getLongMonth: function(d) {
			var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			return monthNames[d.getMonth()];
		},
		getLongDay: function(d) {
			var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			return weekday[d.getDay()];
		},
		getOrdinal: function(d) {
			var i = d.getDate();
			var j = i % 10;
			if (j == 1 && i != 11) {
				return i + "st";
			}
			if (j == 2 && i != 12) {
				return i + "nd";
			}
			if (j == 3 && i != 13) {
				return i + "rd";
			}
			return i + "th";
		},
		numberWithCommas: function(x) {
			if (x === '' || isNaN(x) || x === null) {
				x = '0';
			}

			return x.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		tomorrow: function(dashs) {
			var someDate = new Date();
			var numberOfDaysToAdd = 1;
			var someFormattedDate;

			someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

			var dd = someDate.getDate();
			var mm = someDate.getMonth() + 1;
			var y = someDate.getFullYear();

			if (dashs) {
				someFormattedDate = mm + '-' + dd + '-' + y;
			} else {
				someFormattedDate = mm + '/' + dd + '/' + y;
			}

			return someFormattedDate;
		},
		formatMoney: function(x) {
			return '$' + parseInt(x).toFixed(2);
		},
		timestamp: function() {
			function todaysdate() {
				var d = new Date();

				var dd = d.getDate();
				var mm = d.getMonth() + 1;
				var y = d.getFullYear();
				var t = d.getFullYear();

				someFormattedDate = mm + '/' + dd + '/' + y;

				return someFormattedDate;
			}

			function todaystime() {
				var d = new Date();
				var hour = (d.getHours() <= 12) ? d.getHours() : d.getHours() - 12,
					minute = (d.getMinutes() < 10) ? '0' + d.getMinutes() : d.getMinutes(),
					meridiem = (d.getHours() < 12) ? 'AM' : 'PM';
				return '' + hour + ':' + minute + ' ' + meridiem;

			}

			return todaysdate() + ' ' + todaystime();
		},
		timeIncrementer: function(startHour, endHour) {
			//Used on the course details page to populate the time drop down box
			var returnValue = [{
				text: 'Time',
				value: -1
			}];
			var minArray = [':00', ':30'];
			var incrementer = startHour;
			var hour, meridiem;

			if (startHour < endHour) {
				for (var i = startHour; i < (endHour + 1); i++) {
					hour = (i <= 12) ? i : i - 12;
					meridiem = (i < 12) ? 'AM' : 'PM';

					for (var x = 0; x < minArray.length; x++) {
						returnValue.push({
							text: hour + minArray[x] + ' ' + meridiem,
							value: hour + minArray[x] + ' ' + meridiem
						});
					}

				}
			}

			return returnValue;
		},
		getQueryString: function() {
			var url = document.URL;
			url = url.substring(url.indexOf('#')).replace('#', '&');
			url = url.split("&");
			var d = {}, a;

			for (var i = 0; i < url.length; i++) {
				if (url[i].indexOf('=') != -1) {
					a = url[i].split('=');

					if (a[0].indexOf('?') != -1) {
						a[0] = a[0].substring((a[0].indexOf('?') + 1), a[0].length);
					}
					console.log(a[0]);
					d[a[0]] = a[1];
				}
			}
			return d;
		},
		val: {
			isVaildEmail: function(val) {
				if (val === '') {
					return false;
				}

				var pattern = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
				if (pattern.test(val)) {
					return true;
				} else {
					return false;
				}
			}
		},
		sorts: {
			stringDesc: function(coll, arg) {
				coll.comparator = function(model) {
					return model.get(arg);
				};
			},

			stringAcs: function(coll, arg) {
				coll.comparator = function(model) {
					return String.fromCharCode.apply(String,
						_.map(model.get(arg).split(""), function(c) {
							return 0xffff - c.charCodeAt();
						})
					);
				};
			},

			floatDesc: function(coll, arg) {
				coll.comparator = function(model) {
					return -parseFloat(model.get(arg).replace('$', '').replace(',', ''));
				};
			},

			floatAcs: function(coll, arg) {
				coll.comparator = function(model) {
					return parseFloat(model.get(arg).replace('$', '').replace(',', ''));
				};
			}
		},
		stringToBoolean: function(string) {
			switch (string.toLowerCase()) {
				case "true":
				case "yes":
				case "1":
					return true;
				case "false":
				case "no":
				case "0":
				case null:
					return false;
				default:
					return Boolean(string);
			}
		}
	};

	window.Helpers = Helpers;
	return Helpers;
});