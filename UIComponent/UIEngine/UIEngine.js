var Component = videojs.getComponent("Component");
//{ fluid: true, aspectRatio: "16:9" }
var player = videojs("my-player",{ fluid: true, aspectRatio: "16:9" });
// player.src({src:"https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",type: 'application/x-mpegURL'})
player.src({
  src: "https://d2zihajmogu5jn.cloudfront.net/elephantsdream/hls/ed_hd.m3u8",
  type: "application/x-mpegURL",
});
// player.src({src:"https://trailershls-a.erosnow.com/hls/movie/4/1023354/trailer/6374940/1023354_6374940_IPAD_ALL_multi.m3u8",type: 'application/x-mpegURL'})
// player.poster("https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/art-of-motion_poster.jpg")
var UIEngine = videojs.extend(Component, {
  constructor: function (player, options) {
    Component.apply(this, arguments);

    // this.spriteThumbnail(player);

    let Wrapper = this.initializeWrapperLayout({
      style: "position:absolute;top:0;height:100%;width:100%;",
    });
    {
      this.initializeComponent(options.inputjson, Wrapper);
    }
  },
  initializeWrapperLayout: function (style) {
    let DesktopWrapper = new WrapperComponent(player);
    DesktopWrapper.applyStyles(style);
    return DesktopWrapper;
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
      if (element) {
        element.setAttribute(key, options[key]);
      }
    }
    console.log("applyStyles--");
  },

  isMobile: function () {
    var check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  },

  initializeComponent: function (options, Wrapper) {
    options.forEach(function (record) {
      if (record.control == "play_pause") {
        this.play_pause = new LogituitPlay(player, record);
        Wrapper.addChild(play_pause);
      }
      if (record.control == "cap_sub") {
        this.cap_sub = new caption(player, record);
        Wrapper.addChild(cap_sub);
      }
      if (record.control == "seekBar") {
        this.seekBar = new Seek(player, record);
        Wrapper.addChild(seekBar);
      }
      if (record.control == "pipmode") {
        this.pipmode = new LogituitPipmode(player, record);
        Wrapper.addChild(pipmode);
      }
      if (record.control == "fullscreen") {
        this.fullscreen = new LogituitFullscreen(player, record);
        Wrapper.addChild(fullscreen);
      }
      if (record.control == "forward") {
        this.forward = new LogituitForward(player, record);
        Wrapper.addChild(forward);
      }
      if (record.control == "rewind") {
        this.rewind = new LogituitRewind(player, record);
        Wrapper.addChild(rewind);
      }
      if (record.control == "currentTime") {
        this.currentTime = new CurrentTime(player, record);
        Wrapper.addChild(currentTime);
      }
      if (record.control == "duration") {
        this.duration = new duration(player, record);
        Wrapper.addChild(duration);
      }
      if (record.control == "remainingTime") {
        this.remainingTime = new remainingTime(player, record);
        Wrapper.addChild(remainingTime);
      }
      if (record.control == "volume") {
        this.volume = new LogituitVolume(player, record);
        Wrapper.addChild(volume);
      }
      if (record.control == "episodetitle") {
        this.episodetitle = new LogituitEpisodeTitle(player, record);
        Wrapper.addChild(episodetitle);
      }
      if (record.control == "episode") {
        this.episode = new LogituitEpisode(player, record);
        Wrapper.addChild(episode);
      }
      if (record.control == "nextvideo") {
        this.nextvideo = new LogituitNextVideo(player, record);
        Wrapper.addChild(nextvideo);
      }
    });
    //adding wrapper to player
    player.addChild(Wrapper);
  },
});
videojs.registerComponent("UIEngine", UIEngine);
var styleOptions = {
  inputjson: [
    {
      control: "play_pause",
      styleCSS: {
        style: [
          { top: "88%;" },
          { position: "absolute;" },
          { outline: "none;" },
          { left: "4%;" },
          { height: "10%;" },
          { width: "5%;" },
          { display: "block;" },
          { transform: "rotate(0deg);" },
          { transform: "transform 500ms linear;" },
          { "z-index": "1;" },
          { cursor: "pointer;" },
          { "background-repeat": "no-repeat;" },
          { "background-position": "center;" },
          {
            "background-image":
              "url(UIComponent/Component/assets/LogiPlayer_icons/ic-play/ic-play.png);",
          },
          { "font-size": "20px;" },
        ],
      },
      text: "",
      icon: "imagpath",
      hovertext: "",
    },
    {
      control: "cap_sub",
      styleCSS: {
        style: [
          { top: "89.5%;" },
          { position: "absolute;" },
          { outline: "none;" },
          { right: "5%;" },
          { height: "10%;" },
          { width: "5%;" },
          { display: "block;" },
          { transform: "rotate(0deg);" },
          { transform: "transform 500ms linear;" },
          { "z-index": "1;" },
          { cursor: "pointer;" },
          { "background-repeat": "no-repeat;" },
          { "background-position": "center;" },
          // {'background-image':'url(UIComponent/Component/assets/LogiPlayer_iconsPortrait/assets_CC/drawable-xhdpi/icon_subs.png);'},
          { "font-size": "20px;" },
        ],
      },
      text: "",
      icon: "imagpath",
      hovertext: "",
    },
    {
      control: "currentTime",
      styleCSS: {
        style: [
          { top: "82.9%;" },
          { position: "absolute;" },
          { outline: "none;" },
          { left: "1%;" },
          { height: "10%;" },
          { width: "5%;" },
          { display: "block;" },
          { transform: "rotate(0deg);" },
          { transform: "transform 500ms linear;" },
          { "z-index": "1;" },
          { cursor: "pointer;" },
          { "background-repeat": "no-repeat;" },
          { "background-position": "center;" },
          { "font-size": "20px;" },
        ],
      },
      text: "",
      icon: "imagpath",
      hovertext: "",
    },
    {
      control: "duration",
      styleCSS: {
        style: [
          { top: "82.9%;" },
          { position: "absolute;" },
          { outline: "none;" },
          { right: "4%;" },
          { height: "10%;" },
          { width: "5%;" },
          { display: "block;" },
          { transform: "rotate(0deg);" },
          { transform: "transform 500ms linear;" },
          { "z-index": "1;" },
          { cursor: "pointer;" },
          { "background-repeat": "no-repeat;" },
          { "background-position": "center;" },
          { "font-size": "20px;" },
        ],
      },
      text: "",
      icon: "imagpath",
      hovertext: "",
    },
    {
      control: "remainingTime",
      styleCSS: {
        style: [
          { top: "82.9%;" },
          { position: "absolute;" },
          { outline: "none;" },
          { left: "6%;" },
          { height: "10%;" },
          { width: "5%;" },
          { display: "block;" },
          { transform: "rotate(0deg);" },
          { transform: "transform 500ms linear;" },
          { "z-index": "1;" },
          { cursor: "pointer;" },
          { "background-repeat": "no-repeat;" },
          { "background-position": "center;" },
          { "font-size": "20px;" },
        ],
      },
      text: "",
      icon: "imagpath",
      hovertext: "",
    },

    {
      control: "seekBar",
      styleCSS: {
        style: [
          { top: "87.5%;" },
          { outline: "none;" },
          { position: "absolute;" },
          { left: "15%;" },
          { height: "-0.9%;" },
          { outline: "none" },
          { width: "50%;" },
          { right: "13%;" },
          { "z-index": "1!important; " },
          { color: "#54c362!important;" },
          {
            "background-image": "linear-gradient(272deg,#1ee549,#87e992 99%);",
          },
          { "background-color": "#206432!important;" },
          { "font-size": "25px;" },
        ],
      },
      text: "",
      icon: "imagpath",
      hovertext: "",
    },
    {
      control: "pipmode",
      styleCSS: {
        style: [
          { top: "88%;" },
          { position: "absolute;" },
          { outline: "none;" },
          { right: "10%;" },
          { height: "10%;" },
          { width: "5%;" },
          { display: "block;" },
          { transform: "rotate(0deg);" },
          { transform: "transform 500ms linear;" },
          { "z-index": "1;" },
          { cursor: "pointer;" },
          { "background-repeat": "no-repeat;" },
          { "background-position": "center;" },
          {
            "background-image":
              "url(UIComponent/Component/assets/LogiPlayer_icons/cta-pip/cta-pip.png);",
          },
          { "font-size": "20px;" },
        ],
      },
      text: "",
      icon: "imagpath",
      hovertext: "",
    },
    {
      control: "fullscreen",
      styleCSS: {
        style: [
          { top: "88%;" },
          { position: "absolute;" },
          { outline: "none;" },
          { left: "95%;" },
          { height: "10%;" },
          { width: "5%;" },
          { display: "block;" },
          { transform: "rotate(0deg);" },
          { transform: "transform 500ms linear;" },
          { "z-index": "1;" },
          { cursor: "pointer;" },
          { "background-repeat": "no-repeat;" },
          { "background-position": "center;" },
          {
            "background-image":
              "url(UIComponent/Component/assets/LogiPlayer_icons/ic-fullscreen/ic-fullscreen.png);",
          },
          { "font-size": "20px;" },
        ],
      },
      text: "",
      icon: "imagpath",
      hovertext: "",
    },
    {
      control: "forward",
      styleCSS: {
        style: [
          { top: "88%;" },
          { position: "absolute;" },
          { outline: "none;" },
          { left: "12%;" },
          { height: "10%;" },
          { width: "5%;" },
          { display: "block;" },
          { transform: "rotate(0deg);" },
          { transform: "transform 500ms linear;" },
          { "z-index": "1;" },
          { cursor: "pointer;" },
          { "background-repeat": "no-repeat;" },
          { "background-position": "center;" },
          {
            "background-image":
              "url(UIComponent/Component/assets/LogiPlayer_icons/ic-forward-10-secs/ic-forward-10-secs.png);",
          },
          { "font-size": "20px;" },
        ],
      },
      text: "",
      icon: "imagpath",
      hovertext: "",
    },
    {
      control: "rewind",
      styleCSS: {
        style: [
          { top: "88%;" },
          { position: "absolute;" },
          { outline: "none;" },
          { left: "8%;" },
          { height: "10%;" },
          { width: "5%;" },
          { display: "block;" },
          { transform: "rotate(0deg);" },
          { transform: "transform 500ms linear;" },
          { "z-index": "1;" },
          { cursor: "pointer;" },
          { "background-repeat": "no-repeat;" },
          { "background-position": "center;" },
          {
            "background-image":
              "url(UIComponent/Component/assets/LogiPlayer_icons/ic-back-10-secs/ic-back-10-secs.png);",
          },
          { "font-size": "20px;" },
        ],
      },
      text: "",
      icon: "imagpath",
      hovertext: "",
    },
    {
      control: "volume",
      styleCSS: {
        style: [
          { top: "88%;" },
          { position: "absolute;" },
          { outline: "none;" },
          { left: "16%;" },
          { height: "10%;" },
          { width: "5%;" },
          { display: "block;" },
          { transform: "rotate(0deg);" },
          { transform: "transform 500ms linear;" },
          { "z-index": "1;" },
          { cursor: "pointer;" },
          { "background-repeat": "no-repeat;" },
          { "background-position": "center;" },
          {
            "background-image":
              "url(UIComponent/Component/assets/LogiPlayer_icons/ic-volume/ic-volume.png);",
          },
          { "font-size": "20px;" },
        ],
      },
      text: "",
      icon: "imagpath",
      hovertext: "",
    },
    {
      control: "episodetitle",
      styleCSS: {
        style: [
          { top: "15%;" },
          { position: "absolute;" },
          { outline: "none;" },
          { left: "4%;" },
          { height: "3%;" },
          { width: "17%;" },
          { display: "block;" },
          { "font-size": "24px;" },
        ],
      },
      text: "Elephants Dream 1",
      icon: "imagpath",
      hovertext: "",
    },
    //all episode css
    {
      control: "episode",
      styleCSS: {
        style: [
          { top: "88%;" },
          { position: "absolute;" },
          { outline: "none;" },
          { right: "20%;" },
          { height: "10%;" },
          { width: "5%;" },
          { display: "block;" },
          { transform: "rotate(0deg);" },
          { transform: "transform 500ms linear;" },
          { "z-index": "1;" },
          { cursor: "pointer;" },
          { "background-repeat": "no-repeat;" },
          { "background-position": "center;" },
          {
            "background-image":
              "url(UIComponent/Component/assets/LogiPlayer_iconsMobile/assets_05_Episode/drawable-hdpi/cta_all_episodes.png);",
          },
          { "font-size": "20px;" },
        ],
      },
      text: "",
      icon: "imagpath",
      hovertext: "",
    },
    {
      control: "nextvideo",
      styleCSS: {
        style: [
          { top: "88%;" },
          { position: "absolute;" },
          { outline: "none;" },
          { right: "30%;" },
          { height: "10%;" },
          { width: "5%;" },
          { display: "block;" },
          { transform: "rotate(0deg);" },
          { transform: "transform 500ms linear;" },
          { "z-index": "1;" },
          { cursor: "pointer;" },
          { "background-repeat": "no-repeat;" },
          { "background-position": "center;" },
          // {
          //   "background-image":
          //     "url(UIComponent/Component/assets/LogiPlayer_iconsMobile/assets_05_Episode/drawable-hdpi/cta_all_episodes.png);",
          // },
          { "font-size": "20px;" },
        ],
      },
      text: "NextVideo",
      icon: "imagpath",
      hovertext: "",
    },
    
  ],
};
let UIEngin = new UIEngine(player, styleOptions);
