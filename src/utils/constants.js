export const THEMES = {
  DARK: "DARK",
  LIGHT: "LIGHT",
};

const faviconProvider = "http://icons.duckduckgo.com/ip2/";
const extension = ".ico";

const urlBuilder = (domain) => {
  return `${faviconProvider}${domain}${extension}`;
};

// ICONS[Math.round(Math.random() * 20)];
export const ICONS = [
  urlBuilder("dribbble.com"),
  urlBuilder("figma.com"),
  urlBuilder("google.com"),
  urlBuilder("asana.com"),
  urlBuilder("github.com"),
  urlBuilder("linkedin.com"),
  urlBuilder("srikantsahoo.now.sh"),
  urlBuilder("freecodecamp.com"),
  urlBuilder("discord.com"),
  urlBuilder("slack.com"),
  urlBuilder("spotify.com"),
  urlBuilder("facebook.com"),
  urlBuilder("twitter.com"),
  urlBuilder("gmail.com"),
  urlBuilder("trello.com"),
  urlBuilder("drive.google.com"),
  urlBuilder("glasswire.com"),
  urlBuilder("reddit.com"),
  urlBuilder("behance.net"),
  urlBuilder("wikihow.com"),
  urlBuilder("youtube.com"),
];
