// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// var search = $("#search-box").val();
// var beginYearInput = $("#start-year").val();
// var beginYearSearch = beginYearInput + 0101;
// var endYearInput = $("#end-year").val();
// var endYearSearch = endYearInput + 1231;
// var searchCount = $("#search-num").val();

// url += '?' + $.param({
// 	'q': search,
// 	'api-key': "aca26c04925149fa8f42f16e0ef758fb",
// 	'begin_date': beginYearSearch,
// 	'end_date': endYearSearch,
// 	'page': searchCount
// });

// // url += '?' + $.param({
// // 	'q': "Clinton",
// // 	'api-key': "aca26c04925149fa8f42f16e0ef758fb",
// // 	'begin_date': 20000101,
// // 	'end_date': 20151231,
// // 	'page': 5
// // });

//   console.log(url);
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
//   $("#search-results").text(JSON.stringify(result));
// }).fail(function(err) {
//   throw err;
// });

$( document ).ready(function() {

$("#search-button").on("click", function(event) {
	event.preventDefault();
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	var search = $("#search-box").val();
	var beginYearInput = $("#start-year").val();
	var beginYearSearch = beginYearInput + 0101;
	var endYearInput = $("#end-year").val();
	var endYearSearch = endYearInput + 1231;
	var searchCount = $("#search-num").val();

	url += '?' + $.param({
		'q': search,
		'api-key': "aca26c04925149fa8f42f16e0ef758fb",
		'begin_date': beginYearSearch,
		'end_date': endYearSearch,
		'page': searchCount
	});

	// url += '?' + $.param({
	// 	'q': "Clinton",
	// 	'api-key': "aca26c04925149fa8f42f16e0ef758fb",
	// 	'begin_date': 20000101,
	// 	'end_date': 20151231,
	// 	'page': 5
	// });

	  console.log(url);
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);
	  $("#search-results").text(JSON.stringify(result));
	}).fail(function(err) {
	  throw err;
	});
});
});