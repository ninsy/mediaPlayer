/**
 * Created by Kamil on 27.10.15.
 */

var playButton = document.getElementById("play");
var nextButton = document.getElementById("next");
var stopButton = document.getElementById("stop");
var internalPlaylist = document.getElementById("playlist");

somePlaylist = new Playlist();

no1 = new Song("Here Comes the Sun","The Beatles", "2:54");
no2 = new Song("Walking On Sunshine","Katrina and the Waves", "3:43");

somePlaylist.add(no1);
somePlaylist.add(no2);


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


