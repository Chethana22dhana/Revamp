var DurationDisplay = videojs.getComponent("DurationDisplay");

var duration= videojs.extend(DurationDisplay, {
  constructor: function (player, option) {
    DurationDisplay.apply(this, arguments);
    console.log("constructor");
    this.applyStyles(option.styleCSS);
  },

  applyStyles: function (options) {
    console.log("applyStyles++");
    console.log(options);
    console.log(this.el());
    var element = this.el();
    if (element) {
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
videojs.registerComponent("duration", duration);
