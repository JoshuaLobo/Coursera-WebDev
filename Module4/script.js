(function() {
    //var names = ["Preeti", "Jai Prakash", "Jyoti", "Jack", "Pramod", "Faizal", "Akanksha", "Crystell", "Joshua"];
     var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
