textArea=document.querySelector('textarea');
speechBtn=document.querySelector('button');
voiceList= document.getElementById('voice');

 synth= speechSynthesis;
 
speechBtn.addEventListener("click", e=>{
     e.preventDefault();
    if(textArea.value !==""){
        textToSpeech(textArea.value)
    }
});

function textToSpeech(text){
let speechConvert= new SpeechSynthesisUtterance(text);
synth.speak(speechConvert);
}

