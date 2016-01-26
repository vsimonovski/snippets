/**********************************************************************************
* Skripta koja prolazi kroz <div> i u slucaju da div ima vise/jednako 140 karaktera
* sakriva ostatak i pravi dugme show/hide.
* Ukoliko je 140. karakter razlicit od tacke, skripta pronalazi poslednju tacku 
* unazad.
* 
* If <div> has more than 140 char's, hide rest of the text and display show/hide
* button. If 140th char. is not equal to full stop, script goes back and look up for last
* appereance of full stop.
**********************************************************************************/

var node = document.getElementsByTagName("div");
var nodcnt = node[0].innerHTML;
var limit = 140;
if(nodcnt.length >= limit){
  if(nodcnt.charAt(limit) != ".") 
    limit = cfd(140)+1;
  var span_hide = "<span id=\"show_hide\" style=\"display: none;\">";
  var button_sh = "<button onclick=\"sh()\">show</button>";
  node[0].innerHTML = nodcnt.substr(0, limit) + span_hide + nodcnt.substr(limit+span_hide.length) + "</span>" + button_sh ;
}

// show hide function, toggles span visibility, toggles show/hide
function sh(){
  var target_sp = document.getElementById("show_hide");
  var target_btn = document.getElementsByTagName("button");

  switch(target_btn[0].innerHTML){
    case "show":
      target_btn[0].innerHTML = "hide"; break;
    case "hide":
      target_btn[0].innerHTML = "show"; break;        
  }

  switch(target_sp.style.display){
    case "none":
      target_sp.style.display = "inline"; break;
    case "inline":
      target_sp.style.display = "none"; break;
  }
}

// check for dot function, returns dot position.
function cfd(k){
  while(nodcnt.charAt(k) != ".")
    k -= 1; 
}
