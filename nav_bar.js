
var side_bar=document.createElement("div");
side_bar.setAttribute("class","ui thin sidebar vertical left inverted menu");
side_bar.innerHTML=
	"<a href='top_poems.html' class='item'>Top Poems</a>" +
    "<a href='top_authors.html' class='item'>Top Authors</a>" +
	"<a href='profile.html' class='item'>Profile</a>" +
    "<a href='#' class='item'>My poems</a>" +
    "<a href='#' class='item'>Starred poems</a>" +
    "<a href='write.html' class='item'>Write</a>" +
    "<a href='developers.html' class='item'>Developers</a>";
document.body.appendChild(side_bar);

var top_menu=document.createElement("div");
top_menu.setAttribute("class","ui basic icon top fixed menu");
top_menu.setAttribute("id","menu");
top_menu.innerHTML=
	"<a id='toggle' class='item'>" +
    "<i class='sidebar icon'></i>" +
    "</a>";
document.body.appendChild(top_menu);

		$('.ui.sidebar').sidebar('hide');

$('#toggle').click(function(){
	$('.ui.sidebar').sidebar('toggle');
});