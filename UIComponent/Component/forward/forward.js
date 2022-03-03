var Button = videojs.getComponent('Button');


var LogituitForward = videojs.extend(Button, {

    constructor: function(player,option) {
        Button.apply(this, arguments);
        console.log("constructor")
        this.applyStyles(option.styleCSS);
        this.updateTextContent(option.text)  
      },

      createEl: function() {
        console.log("createEl");
      return videojs.createEl('button', {
        className:'forwardbtn'
      });
    },
    handleClick: function(){
         console.log("clicked forward");
        player.currentTime(player.currentTime()+10);
         
      },

      updateTextContent: function(text) {
        console.log("upadteTextContent");
        console.log(this.el());
      if (typeof text !== 'string') {
        text = 'Title Unknown';
      }
     this.el().innerHTML=text
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
videojs.registerComponent('LogituitForward', LogituitForward);