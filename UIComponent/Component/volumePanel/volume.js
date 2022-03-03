var Volume = videojs.getComponent('Button');

var LogituitVolume = videojs.extend(Volume, {
  constructor: function(player,option) {
    Volume.apply(this, arguments);
    console.log("constructor")
    this.applyStyles(option.styleCSS);  
  },
  createEl: function() {
    console.log("createEl");
  return videojs.createEl('button', {
    className:'volume'
  });
},

handleClick: function() {
    
    if(!player.muted()){
      this.el().style.backgroundImage = "url('UIComponent/Component/assets/LogiPlayer_icons/ic-volume/ic-mute.png')";
      player.muted(true)
      
      
    }else{
      this.el().style.backgroundImage = "url('UIComponent/Component/assets/LogiPlayer_icons/ic-volume/ic-volume.png')";
      player.muted(false);
    }


  },

applyStyles : function(options){
  console.log("applyStyles++");
  console.log(options);
   console.log(this.el());
   var element=this.el();
   if(element){
     //element.setAttribute(); 
   }
   for(key in options){
     console.log("key",key);
     console.log("value",options[key]);
     let cssArray=options[key]
     console.log("cssArray",options[key]);
     let value=""
     cssArray.forEach(function(element) {
       for(ele in element)
       {
        value=value+ele+":"+element[ele];
       }
     });
      if(element){
     element.setAttribute(key,value); 
    }
   }
  console.log("applyStyles--");
}
});
videojs.registerComponent('LogituitVolume', LogituitVolume);
