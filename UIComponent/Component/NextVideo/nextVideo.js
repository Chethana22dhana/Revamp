var Button = videojs.getComponent("Button");
// var showingpopup = false;
// var binge = false;
var array = [
  {
    src: "https://d2zihajmogu5jn.cloudfront.net/elephantsdream/hls/ed_hd.m3u8",
    type: "application/x-mpegURL",
  },
  {
    src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    type: "application/x-mpegURL",
  },
  {
      src:'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
      type:"application/dash+xml"
  }
];
var i=0;
var LogituitNextVideo = videojs.extend(Button, {
  constructor: function (player, option) {
    Button.apply(this, arguments);
    console.log("constructor");
    this.applyStyles(option.styleCSS);
    this.updateTextContent(option.text);
  },

  createEl: function () {
    console.log("createEl");
    return videojs.createEl("button", {
      className: "settingbtn",
    });
  },

  handleClick: function (event) {
    console.log(player);
    player.player_.reset();
    player.player_.load();
    player.player_.src(array[i]);
    i++;
    if(i==array.length)
    i=0;
    player.player_.autoplay(true);
  },

  updateTextContent: function (text) {
    console.log("upadteTextContent");
    console.log(this.el());
    if (typeof text !== "string") {
      text = "Title Unknown";
    }
    this.el().innerHTML = text;
  },

  applyStyles: function (options) {
    console.log("applyStyles++");
    console.log(options);
    console.log(this.el());
    var element = this.el();
    if (element) {
      //element.setAttribute();
    }
    for (key in options) {
      console.log("key", key);
      console.log("value", options[key]);
      let cssArray = options[key];
      console.log("cssArray", options[key]);
      let value = "";
      cssArray.forEach(function (element) {
        for (ele in element) {
          value = value + ele + ":" + element[ele];
        }
      });
      if (element) {
        element.setAttribute(key, value);
      }
    }
    console.log("applyStyles--");
  },
});
videojs.registerComponent("LogituitNextVideo", LogituitNextVideo);
