var ClickableComponent = videojs.getComponent('ClickableComponent');
var play;
var WrapperComponent=videojs.extend(ClickableComponent, {
    constructor: function(player, options) {
      ClickableComponent.apply(this, arguments);   
      },
    //   handleClick: function(){
    //     console.log("wrapper clicked");
    //   // this.el().style.display="none";
    //   if (this.player_.paused()) {
    //     play.el().style.backgroundImage = "url('UIComponent/Component/assets/LogiPlayer_icons/pause.png')"; 
    //     this.player_.play();
    //   } else {
    //     play.el().style.backgroundImage = "url('UIComponent/Component/assets/LogiPlayer_icons/play.png')"; 
    //     this.player_.pause();
        
    //   }
    // },
    // initializeWrapper: function(ele){
    //   play=ele;
    // },
      addChildToWrapper:function(child,cssOfchild)
      { 
        child.applyStyles(cssOfchild)
        this.addChild(child)
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
                if(element){
               element.setAttribute(key,options[key]); 
              }
           }
        console.log("applyStyles--");
    }
});
videojs.registerComponent('WrapperComponent', WrapperComponent);