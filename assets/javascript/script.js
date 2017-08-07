//---------------------------------------------------------------------------
// VARIABLE DECLARATIONS!

//---------------------------------------------------------------------------
// FUNCTION DECLARATIONS!

//---------------------------------------------------------------------------
// FUNCTION CALLS!

// On page load
$(document).ready(function() {

// Clear and hide search results
$("#search-results").hide;
$("#search-results").val("");

// On Clear Button click
$("#clear-button").on("click", function(event) {
	// Prevent default action
	event.preventDefault();

	// Clear and hide search results
	$("#search-results").hide;
	$("#search-results").html("");

	// Clear search boxes
	$("#search-box").val("");
	$("#start-year").val("");
	$("#end-year").val("");
	$("#search-num").val("");
});

// On Search Button click
$("#search-button").on("click", function(event) {
	event.preventDefault();
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	var search = $("#search-box").val();
	var beginYearInput = $("#start-year").val();
	// var beginYearSearch = beginYearInput + "0101";
	var endYearInput = $("#end-year").val();
	// var endYearSearch = endYearInput + "1231";
	var searchCount = $("#search-num").val();

	url += '?' + $.param({
		'q': search,
		'api-key': "aca26c04925149fa8f42f16e0ef758fb",
		'page': searchCount
	});

	// added conditional to check if dates have been put in the text box before adding them to the url
	if ($("#start-year").val() !== "") {
		url += "&" + $.param({
			'begin_date': beginYearInput + "0101"
		});
	}
		
	if ($("#end-year").val() !== "") {
		url += "&" + $.param({
			'end_date': endYearInput + "1231"
		});
	}

	  // console.log(url);

	$.ajax({
		url: url,
		method: 'GET',
	}).done(function(result) {
		$("#search-results").show;
	  // console.log(result);
	  // console.log(searchCount);
	  for (var i = 0; i < searchCount; i++) {
	  	// console.log(result.response.docs[i].snippet);
	  $("#search-results").append('<div class="panel-body">' + result.response.docs[i].snippet + '</div>');
	}
	}).fail(function(err) {
		throw err;
	});
});
});