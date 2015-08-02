$(document).ready(function() {
 var keyword = ["One", "Two"];
 var len = keyword.length;
 for(var i=0;i<len;i++) {
  keyword.push(keyword[i].toLowerCase());
 }
});
