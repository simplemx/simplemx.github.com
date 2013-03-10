$(function(){
	var queryParams = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	var id = null;
	for(var i = 0; i < queryParams.length; i++){
		if(queryParams[i].indexOf("id=") == 0){
			id = queryParams[i].slice(3);
			break;
		}
	}

	var blog = null;
	for(i = 0;  i < blog_list.length; i++){
		if(blog_list[i]["id"] === id){
			blog = blog_list[i];
			break;
		}
	}

	if(blog){
		$.get(blog["file"], null, function(data){
			var converter = new Showdown.converter();
			var html = converter.makeHtml(data);
			$("#content").append(html);
		}, "text");
	}
});