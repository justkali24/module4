(function(window) {
  let byeSpeaker = {};
    byeSpeaker.speak = function() {
        console.log(speakWord + " " + name);
    }
    let speakWord = "Good Bye";
    window.byeSpeaker = byeSpeaker;
    }(window));
