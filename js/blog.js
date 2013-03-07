var blog_list = [
	{
		title : "2013-03-04.md",
		file : "2013-03-04.md"
	},
	{
		title : "2012-12-23.md",
		file : "2012-12-23.md"
	},
	{
		title : "2012-12-16",
		file : "2012-12-16.md"
	}
];

$(function(){
	//first insert 5 blogs into page
	var blogs = null;
	if(blog_list.length < 5){
		blogs = blog_list;
	}
	else {
		blogs = blog_list.slice(0,5)
	}

	$.each(blogs, function(index, blog){
		console.log(blog["title"]);
	});

	$.get("../blog/2013-03-04.md", null, function(response, status, xhr){
		alert(response);
	}, "text");
});