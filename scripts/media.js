/**
 * Created by Kamil on 28.10.15.
 */

function Media(title, duration) {
    this.title = title;
    this.duration = duration;
    this.isPlaying = false;
}


Media.prototype.play = function() {
    this.isPlaying = true;
}


Media.prototype.stop = function() {
    this.isPlaying = false;
}
