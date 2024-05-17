class MediaPlayer:
    def play(self, filename):
        raise NotImplementedError("Method 'play()' must be implemented")

class AdvancedMediaPlayer:
    def play_vlc(self, filename):
        print(f"Playing VLC file: {filename}")

    def play_mp4(self, filename):
        print(f"Playing MP4 file: {filename}")

class MediaAdapter(MediaPlayer):
    def __init__(self, media_type):
        self.advanced_media_player = AdvancedMediaPlayer()
        self.media_type = media_type

    def play(self, filename):
        if self.media_type == "vlc":
            self.advanced_media_player.play_vlc(filename)
        elif self.media_type == "mp4":
            self.advanced_media_player.play_mp4(filename)

class AudioPlayer(MediaPlayer):
    def __init__(self):
        self.media_adapter = None

    def play(self, filename):
        if filename.endswith(".vlc") or filename.endswith(".mp4"):
            media_type = filename.split(".")[-1]
            self.media_adapter = MediaAdapter(media_type)
            self.media_adapter.play(filename)
        else:
            print(f"Playing MP3 file: {filename}")

audio_player = AudioPlayer()
audio_player.play("song.mp3")  # Playing MP3 file: song.mp3
audio_player.play("movie.vlc")  # Playing VLC file: movie.vlc
audio_player.play("clip.mp4")  # Playing MP4 file: clip.mp4
