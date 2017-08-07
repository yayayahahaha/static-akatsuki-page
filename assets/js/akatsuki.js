document.addEventListener("DOMContentLoaded", function() {

	new Vue({
		el: "#app",
		data: {
			backWord: [],
			backTimes: 1
		},
		created: function() {

			function messArray(array) {
				var currentIndex = array.length,
					temporaryValue, randomIndex;
				while (0 !== currentIndex) {
					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex -= 1;
					temporaryValue = array[currentIndex];
					array[currentIndex] = array[randomIndex];
					array[randomIndex] = temporaryValue;
				}
				return array;
			}
			var char = 'qazwsxedcrfvtgbyhnujmikolpQAZWSXEDCRFVTGBYHNUJMIKOLP0123456789',
				tempArray = [],
				bigArray = [];
			for (var i = 0; i < char.length; i++) {
				tempArray[i] = char[i];
			}
			for (var i = 0; i < 1; i++) {
				tempArray = messArray(tempArray);
				bigArray = bigArray.concat(tempArray);
			}
			bigArray = bigArray.map(function(item) {
				var className = null;
				switch (item.toLowerCase()) {
					case "k":
						className = "back_word red";
						break;
					case "a":
						className = "back_word yellow";
						break;
					case "t":
						className = "back_word blue1";
						break;
					case "s":
						className = "back_word blue2";
						break;
					case "u":
						className = "back_word green1";
						break;
					case "k":
						className = "back_word green2";
						break;
					case "i":
						className = "back_word purple";
						break;
					default:
						className = "back_word";
				}
				return {
					char: item,
					className: className
				};
			})
			this.backWord = bigArray;			
			this.backTimes = 1;
		},
		mounted: function() {
			/* click btn part */
			var btns = document.querySelectorAll(".btn");
			for (var i = 0; i < btns.length; i++) {
				clickMaker(btns[i], i);
			}
			/* click btn part end */

			window.word = document.querySelector(".background-class");
			window.h = window.innerHeight;
			if (h > word.offsetHeight) {
				this.backTimes = Math.ceil(2 * h/word.offsetHeight);
			}
		}
	});

});

function clickMaker(obj, number, callback) {

	obj.onclick = function() {
		$(".perspectiveView").animate({
				scrollTop: document.all.forHeight.offsetHeight * number,
			},
			1000);
	}
}