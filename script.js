let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

// Load available voices
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; 

    // Populate the select dropdown with available voices
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
};

// Handle voice selection from the dropdown
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Handle click event for text-to-speech
document.getElementById("speakButton").addEventListener("click", () => {
    let text = document.getElementById("textArea").value;
    if (text.trim() !== "") {
        speech.text = text;
        window.speechSynthesis.speak(speech);
    } else {
        alert("Please enter some text.");
    }
});
