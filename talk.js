

function searchBanana(){

  var textInputArea = document.querySelector(".inputTextArea").value;

  var search = "https://api.funtranslations.com/translate/minion.json" + "?text=" + textInputArea;

  fetch(search).then(response => response.json()).then(json => document.querySelector(".textOutputArea").innerHTML = json.contents.translated).catch(errorChecker);
}
function errorChecker(error){
  alert("error");
}
