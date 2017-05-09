
var side_bar=document.createElement("div");
side_bar.setAttribute("class","ui sidebar vertical left inverted menu");
side_bar.innerHTML=
		"<a href='#' class='item'>Top Poems</a>" +
        "<a href='#' class='item'>Top Authors</a>" +
		"<a href='#' class='item'>Profile</a>" +
        "<a href='#' class='item'>My poems</a>" +
        "<a href='#' class='item'>Starred poems</a>" +
        "<a href='#' class='item'>Write</a>" +
        "<a href='#' class='item'>Developers</a>";

var form =document.getElementsByClassName("ui form");
form[0].appendChild(side_bar);
//console.log(form[0].innerHTML);