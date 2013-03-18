$(function(){
	var blogs = blog_list;
	var templateData = $("#indexTemplate").html();
	var templateHtml = Mustache.to_html(templateData, { blogs: blogs });
	$("body").append(templateHtml);
});