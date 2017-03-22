var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var search = $("#search-box").val().trim();
var beginYearInput = $("#start-year").val().trim();
var beginYearSearch = beginYearInput + 0101;
var endYearInput = $("#end-year").val().trim();
var endYearSearch = endYearInput + 1231;

url += '?' + $.param({
	'q': search,
	'api-key': "aca26c04925149fa8f42f16e0ef758fb",
	'begin_date': beginYearSearch,
	'end_date': endYearSearch
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

}).fail(function(err) {
  throw err;
});

