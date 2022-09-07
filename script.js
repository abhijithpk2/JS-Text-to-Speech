textArea=document.querySelector('textarea');
speechBtn=document.querySelector('button');
voiceList= document.getElementById('voice');

 let synth= speechSynthesis;
 let isSpeaking = true;

speechBtn.addEventListener("click", e=>{
     e.preventDefault();
    if(textArea.value !==""){
        textToSpeech(textArea.value)
    }
    if(textArea.value.length > 80){
        if(isSpeaking){
            synth.resume()
            isSpeaking=false;
            speechBtn.innerText = "pause";
        }else{
            synth.pause()
            isSpeaking=true
            speechBtn.innerText = "Resume";
        }
        setInterval(()=>{
            if(!synth.speaking && isSpeaking){
                isSpeaking=true;
                speechBtn.innerText = "start";
            }
        });
    }else{
        speechBtn.innerText = "Start";
    }
});

function textToSpeech(text){
let utter= new SpeechSynthesisUtterance(text);

for(let voice of synth.getVoices()){
    if(voice.name=== voiceList.value){
        utter.voice=voice;
    }
}

synth.speak(utter);
}

function voices(){
    for(let voice of synth.getVoices()){
        console.log(voice);
        let selected= voice.name ==="Microsoft Anna - English (United States)" ? "selected" : "";
        let option=`<option value="${voice.name}"${selected}> ${voice.name}(${voice.lang}) </option>`;
        voiceList.insertAdjacentHTML("beforeend",option);
    }
}

synth.addEventListener("voiceschanged",voices)