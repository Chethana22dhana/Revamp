var Button = videojs.getComponent('Button')
var showingpopup = false

 var LogituitEpisode = videojs.extend(Button,{

    constructor: function(player,option) {
        Button.apply(this, arguments);
        console.log("constructor")
        this.applyStyles(option.styleCSS);
        this.updateTextContent(option.text);
        
      },

      createEl: function() {
        console.log("createEl");
      return videojs.createEl('button', {
        className:'settingbtn'
      });
    },
    settingpopup:function(){
       showingpopup = true;
     var mainContainer = document.createElement('div');
     mainContainer.setAttribute('class','mainContainer');
    var header=document.createElement('div');
    header.setAttribute('class','header')
     var settingtext = document.createElement('span');
     settingtext.setAttribute('class','settingtext');
     settingtext.innerHTML="All Episodes";
     //close popup icon
    var closeicon = document.createElement('span');
    closeicon.setAttribute('class','closeicon');
    closeicon.innerHTML='<i class="fa-solid fa-xmark"></i>'
   

    // header.appendChild(closeicon)

     header.appendChild(settingtext)
    // header.appendChild(closeicon)
    mainContainer.appendChild(header)
     //season episods
     var seasonheader=document.createElement('div');
     seasonheader.setAttribute('class','header')
      var settingtext = document.createElement('button');
      settingtext.setAttribute('class','settingtext');
      settingtext.setAttribute('type','button');
      settingtext.innerHTML="season 1";
      seasonheader.appendChild(settingtext)
      mainContainer.appendChild(seasonheader)

    // Episodes list
    var episdoelist=document.createElement('ul')
    episdoelist.setAttribute('class','episodeList');

    var episdoes=document.createElement('li')
    episdoes.setAttribute('class','episdoes');
    var videoLink=document.createElement('a')
    videoLink.setAttribute('href','http://127.0.0.1:5501/index.html');
    var videoImg=document.createElement('img');
    videoImg.setAttribute('class','videoImg');
    //videoImg.src='https://media.istockphoto.com/vectors/play-button-icon-vector-id1194415465?k=20&m=1194415465&s=612x612&w=0&h=GzotgW8-97uNwXyiPk8OSFv54Gs47VVACKCOQAgqvhY='
  videoImg.src="UIComponent/Component/Allepisode/Capture.PNG"
    var videoDesc=document.createElement('span')
    videoDesc.setAttribute('class','videoDesc')
    videoDesc.innerHTML="Episode-1"
    videoLink.appendChild(videoImg)
    videoLink.appendChild(videoDesc)    
    episdoes.appendChild(videoLink);
    episdoelist.appendChild(episdoes)

    var episdoes=document.createElement('li')
    episdoes.setAttribute('class','episdoes');
    var videoLink=document.createElement('a')
    videoLink.setAttribute('href','http://127.0.0.1:5501/index.html');
    var videoImg=document.createElement('img');
    videoImg.setAttribute('class','videoImg');
   // videoImg.src='https://media.istockphoto.com/vectors/play-button-icon-vector-id1194415465?k=20&m=1194415465&s=612x612&w=0&h=GzotgW8-97uNwXyiPk8OSFv54Gs47VVACKCOQAgqvhY='
   videoImg.src="UIComponent/Component/Allepisode/Capture.PNG" 
   var videoDesc=document.createElement('span')
    videoDesc.setAttribute('class','videoDesc')
    videoDesc.innerHTML="Episode-2"
    videoLink.appendChild(videoImg)
    videoLink.appendChild(videoDesc) 
    episdoes.appendChild(videoLink);
    episdoelist.appendChild(episdoes)

    var episdoes=document.createElement('li')
    episdoes.setAttribute('class','episdoes');
    var videoLink=document.createElement('a')
    videoLink.setAttribute('href','http://127.0.0.1:5501/index.html');
    var videoImg=document.createElement('img');
    videoImg.setAttribute('class','videoImg');
   // videoImg.src='https://media.istockphoto.com/vectors/play-button-icon-vector-id1194415465?k=20&m=1194415465&s=612x612&w=0&h=GzotgW8-97uNwXyiPk8OSFv54Gs47VVACKCOQAgqvhY='
   videoImg.src="UIComponent/Component/Allepisode/Capture.PNG" 
   var videoDesc=document.createElement('span')
    videoDesc.setAttribute('class','videoDesc')
    videoDesc.innerHTML="Episode-3"
    videoLink.appendChild(videoImg)
    videoLink.appendChild(videoDesc) 
    episdoes.appendChild(videoLink);
    episdoelist.appendChild(episdoes)

    var episdoes=document.createElement('li')
    episdoes.setAttribute('class','episdoes');
    var videoLink=document.createElement('a')
    videoLink.setAttribute('href','http://127.0.0.1:5501/index.html');
    var videoImg=document.createElement('img');
    videoImg.setAttribute('class','videoImg');
   // videoImg.src='https://media.istockphoto.com/vectors/play-button-icon-vector-id1194415465?k=20&m=1194415465&s=612x612&w=0&h=GzotgW8-97uNwXyiPk8OSFv54Gs47VVACKCOQAgqvhY='
   videoImg.src="UIComponent/Component/Allepisode/Capture.PNG" 
   var videoDesc=document.createElement('span')
    videoDesc.setAttribute('class','videoDesc')
    videoDesc.innerHTML="Episode-4"
    videoLink.appendChild(videoImg)
    videoLink.appendChild(videoDesc) 
    episdoes.appendChild(videoLink);
    episdoelist.appendChild(episdoes)


     mainContainer.appendChild(episdoelist);

     closeicon.addEventListener('click', function(){
         console.log('close icon clicked');
         distroysettingpoup()
  
      })
     


    //  //Report an issue
    //  var reportissuemain = document.createElement('div');
    // reportissuemain.setAttribute('class','reportissuemain');
    
    // //report an issue icon
    // var reportissueicon = document.createElement('span');
    // reportissueicon.setAttribute('class','reportissueicon');

    // reportissuemain.appendChild(reportissueicon)

    // //report an issue Text
    // var reportissuetext = document.createElement('span');
    // reportissuetext.setAttribute('class','reportissuetext');
    // reportissuetext.innerHTML="Report an Issue"

    // reportissuetext.addEventListener('click',function(){
    //     console.log("report an issue clicked")
    // })

    //  reportissuemain.appendChild(reportissuetext); 

    //   mainContainer.appendChild(reportissuemain);






     this.el().appendChild(mainContainer)

    },


    distroysettingpoup : function(){
      showingpopup=false;
      var popup = document.getElementsByClassName('mainContainer')
      this.el().removeChild(popup[0])
    },

    handleClick: function(){
        var popup = document.getElementsByClassName('mainContainer')
        
          console.log(popup[0])
        
       if(showingpopup==false){
        this.settingpopup();
       }else if(showingpopup==true){
         console.log("remove popup")
         this.distroysettingpoup();
       }
        
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




 })
 videojs.registerComponent('LogituitEpisode', LogituitEpisode);