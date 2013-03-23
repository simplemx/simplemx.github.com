$(function(){
	var blogs = blog_list;
	var str = null;
	for(var i = 0; i < blog_list.length; i++){
		str = blogs[i]["file"]; 
		blogs[i]["date"] = str.substring(0, str.indexOf("."));
	}
	var templateData = $("#indexTemplate").html();
	var templateHtml = Mustache.to_html(templateData, { blogs: blogs });
	$("body").append(templateHtml);
});