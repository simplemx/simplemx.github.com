$(function(){
	var blogs = blog_list,
	    str = null,
        page_size = 10,
        page_index = 0;
    
	$.each(blogs, function(i, blog){
		str = blog["file"]; 
		blog["date"] = str.substring(0, str.indexOf("."));
	});
    
    var show_next_page = function(){
        if (page_index == blogs.length) {
            $win.unbind("scroll");
            return;
        }

        var show_blogs = [],
            len = (page_index + page_size) > blogs.length ? blogs.length : (page_index + page_size);
        for (var i = page_index; i < len; i++) {
            show_blogs.push(blogs[i]);
        }

        page_index = len;

        var templateData = $("#blogsTemplate").html();
	    var templateHtml = Mustache.to_html(templateData, { blogs: show_blogs });
	    $("#main_content").append(templateHtml);
    };

    show_next_page();
    
    var $win = $(window);
    var $document = $(document);
    $win.scroll(function(){
        if ($win.height() + $win.scrollTop()  == $document.height()) {
            show_next_page()
        }
        
    })
});
