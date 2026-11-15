// The clips list. This is the only file to edit when adding a clip.
// Newest clip goes at the TOP. See README.md for the steps.
//
// title        Name of the clip.
// description  One or two plain sentences saying what happens in the video.
// songs        The songs in the order they play. Each is "Song by Artist", or
//              { text: "Song by Artist", url: "https://www.youtube.com/..." } to add a Play link.
// video        Path to the video file in this repo, or "" if there is none yet.
// poster       Path to a thumbnail image, or "" if there is none yet.
// tiktok       Link to the clip on TikTok, or "".
// instagram    Link to the clip on Instagram, or "".

window.CLIPS = [
  {
    title: "Mashup preview",
    description: "A 60 second preview of a mix. The songs play in the order listed.",
    songs: [
      { text: "Toast by Koffee", url: "https://www.youtube.com/watch?v=p8HoEvDh70Y" },
      { text: "Love Is Wicked by Brick & Lace", url: "https://www.youtube.com/watch?v=JNjO0Busqog" },
      { text: "Sorry by Justin Bieber", url: "https://www.youtube.com/results?search_query=Justin+Bieber+Sorry+official+video" },
      { text: "Get Busy by Sean Paul", url: "https://www.youtube.com/watch?v=oPQ3o14ksaM" },
      { text: "No Letting Go by Wayne Wonder", url: "https://www.youtube.com/watch?v=QV6m2r0NIkA" }
    ],
    video: "",
    poster: "",
    tiktok: "",
    instagram: ""
  }
];
