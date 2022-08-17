import Player from "@madzadev/audio-player";

function Worldsongtrends() {
  const tracks = [
    {
      url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
      title: "Madza - Chords of Life",
      tags: ["house"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      title: "Madza - Late Night Drive",
      tags: ["dnb"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      tags: ["dubstep"],
    },
  ];

  const colors = `html {
        --tagsBackground: #9440f3;
        --tagsText: #ffffff;
        --tagsBackgroundHoverActive: #2cc0a0;
        --tagsTextHoverActive: #ffffff;
        --searchBackground: #18191f;
        --searchText: #ffffff;
        --searchPlaceHolder: #575a77;
        --playerBackground: rgb(48, 47, 78);
        --titleColor: #ffffff; 
        --timeColor: #ffffff;
        --progressSlider: #9440f3;
        --progressUsed: #ffffff;
        --progressLeft: #151616;
        --volumeSlider: #9440f3;
        --volumeUsed: #ffffff;
        --volumeLeft:  #151616;
        --playlistBackground: rgb(48, 47, 78);
        --playlistText: #575a77;
        --playlistBackgroundHoverActive:  #18191f;
        --playlistTextHoverActive: #ffffff;
    }`;

  return (
    <div className="worldsongtrends">
      <h1>Songs Trending Worldwide</h1>

      <Player
        trackList={tracks}
        includeSearch={false}
        includeTags={false}
        customColorScheme={colors}
      />
    </div>
  );
}

export default Worldsongtrends;
