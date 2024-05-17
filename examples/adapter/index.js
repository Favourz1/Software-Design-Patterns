class MediaPlayer {
    play(filename) {
        throw new Error("Method 'play()' must be implemented");
    }
}

class AdvancedMediaPlayer {
    playVlc(filename) {
        console.log(`Playing VLC file: ${filename}`);
    }

    playMp4(filename) {
        console.log(`Playing MP4 file: ${filename}`);
    }
}

class MediaAdapter extends MediaPlayer {
    constructor(mediaType) {
        super();
        this.advancedMediaPlayer = new AdvancedMediaPlayer();
        this.mediaType = mediaType;
    }

    play(filename) {
        if (this.mediaType === "vlc") {
            this.advancedMediaPlayer.playVlc(filename);
        } else if (this.mediaType === "mp4") {
            this.advancedMediaPlayer.playMp4(filename);
        }
    }
}

class AudioPlayer extends MediaPlayer {
    constructor() {
        super();
        this.mediaAdapter = null;
    }

    play(filename) {
        if (filename.endsWith(".vlc") || filename.endsWith(".mp4")) {
            const mediaType = filename.split(".").pop();
            this.mediaAdapter = new MediaAdapter(mediaType);
            this.mediaAdapter.play(filename);
        } else {
            console.log(`Playing MP3 file: ${filename}`);
        }
    }
}

const audioPlayer = new AudioPlayer();
audioPlayer.play("song.mp3"); // Playing MP3 file: song.mp3
audioPlayer.play("movie.vlc"); // Playing VLC file: movie.vlc
audioPlayer.play("clip.mp4"); // Playing MP4 file: clip.mp4
