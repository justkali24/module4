(function(window) {
  let helloSpeaker = {};
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }
  let speakWord = "Hello";
  window.helloSpeaker = helloSpeaker;
}(window));
