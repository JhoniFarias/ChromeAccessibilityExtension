
const speechSynthesis = window.speechSynthesis;
var speakerOn = false;

(function() {
    createButtonSpeach();
    loadEvent();

    document.getElementById("btnSpeak").addEventListener("click", function(){
        speakerOn = !speakerOn;

        speechSynthesis.cancel();
    });

}());

function createButtonSpeach(){
    document.body.innerHTML += `<button id="btnSpeak"><img src="https://icons.veryicon.com/png/o/miscellaneous/vue3-ebook/speak-5.png" alt=""></button>`
}

function loadEvent(){
    document.body.addEventListener("click", (e) => {
      if(e.target.children.length == 0 && speakerOn){
            textToSpeach(e.target.innerText || e.target?.alt)
      }
  });
  
}

function textToSpeach(text){
    speechSynthesis.cancel();
    var toSpeak = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(toSpeak);
}