$(document).ready(function(){
	$("#search").on("click",function(){
			window.open(dosearch());
	});
});

function dosearch() {

	var query = $('#gender').val();
	var searchURL = "https://www.facebook.com/search/"+query+"/intersect/";;

	return	searchURL;

}
