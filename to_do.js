$(loaded);

function loaded() {
  showText();
  $("#formButton").click(
    function() {
      saveText();
      showText();

    });
   
}


function saveText() {
  var text = $("#formText");
  var now = new Date();
  if(checkText(text.val())) {
 // var time= ( JSON.parse( JSON.stringify(now) ) );
  localStorage.setItem(now, text.val());
  text.val("");
}
}


function removeAllText() {
    localStorage.clear();
    showText();
  }




function showText() {
 var year = document.getElementById("year").value;
 var month = document.getElementById("month").value;
 var day = document.getElementById("day").value;
    var list = $("#list");
      list.children().remove();
      var key, value, html = [];
      for(var i=0, len=localStorage.length; i<len; i++) {
        key = localStorage.key(i);
        value = localStorage.getItem(key);
        
        html.unshift("<p>" + "タスク:   " +value + "</p>");
        html.unshift("<p>" + key + "</p>");
        html.unshift("<p>" + "期限  " + year + "/" + month + "/" + day + "</p>");
        html.unshift("<br>" +"<p>" + "Index:   " + i + "</p>" + "</br>");
    
      }
  list.append(html.join(''));
}


function removeText() {
       var num =$("#deleteText");
       var key = localStorage.key(num);
       localStorage.removeItem(key);
       showText();
}

function escapeText(text) {
  return $("<div>").text(text).html();
}


function checkText(text) {
  if (0 === text.length) {
    alert("入力してください");
    return false;
  }
  var length = localStorage.length;
  for (var i = 0; i < length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    if (text === value) {
      alert("同じ内容は避けてください");
      return false;
    }
  }
  return true;
}