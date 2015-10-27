/**
 * Created by Kamil on 27.10.15.
 */

var playButton = document.getElementById("play");
var nextButton = document.getElementById("next");
var stopButton = document.getElementById("stop");
var internalPlaylist = document.getElementById("playlist");

somePlaylist = new Playlist();

no1 = new Song("Wait and Bleed","Slipknot", "2:54");
no2 = new Song("Gears of War","Megadeth", "3:43");
no3 = new Song("Bloodline","Slayer", "3:43");
no4 = new Song("Lack of Comprehension"," Death", "3:43");
no5 = new Song("Now You've got something to die for", "Lamb of God", "3:43");
no6 = new Movie("Avengers", "2:33:21", 2015);
no7 = new Movie("Star Wars VII", "3:11:11", 2015);

somePlaylist.add(no1);
somePlaylist.add(no2);
somePlaylist.add(no3);
somePlaylist.add(no4);
somePlaylist.add(no5);
somePlaylist.add(no6);
somePlaylist.add(no7);


somePlaylist.renderIn(internalPlaylist);

playButton.onclick = function() {
    somePlaylist.play();
    somePlaylist.renderIn(internalPlaylist);
}

stopButton.onclick = function() {
    somePlaylist.stop();
    somePlaylist.renderIn(internalPlaylist);
}

nextButton.onclick = function() {
    somePlaylist.next();
    somePlaylist.renderIn(internalPlaylist);
}


