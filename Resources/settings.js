function settingsPage(){
	var win = Ti.UI.createWindow({
	    backgroundColor : '#000005',
	    layout : 'vertical',
	    title: 'Settings'
	});
 
	var winSettings = Ti.UI.createWindow({
		/*title: 'Settings',
	    backgroundColor: '000005',
	    url: "settings.js"*/
	   	backgroundColor : '#000005',
    	layout : 'vertical',
   		title: 'Settings'
		
	});
	
	var basicSwitch = Ti.UI.createSwitch({
	  titleOn:'Notifications Enabled',
	  titleOff:'Notifications Disabled',
	  backgroundColor:'#B18E5F',
	  fontSize: 25,
	  fontColor:'#9f9d9d',
	  value:true,
	  width: '90%', height:'auto',
	  top:'5',
	  bottom:'5'
	});
	
	winSettings.add(basicSwitch);
	
	basicSwitch.addEventListener('change',function(e){
	  Ti.API.info('Switch value: ' + basicSwitch.value);
	});
	
	var basicSwitch2 = Ti.UI.createSwitch({
		titleOn:'Bblearn Enabled',
		titleOff:'Bblearn Disabled',
		backgroundColor:'#B18E5F',
		fontSize: 25,
		fontColor:'#9f9d9d',
		value:true, 
		width: '90%', height: 'auto', 
		bottom: '5',
		left:20,
		right: 20
	});
	
	winSettings.add(basicSwitch2);
	
	basicSwitch2.addEventListener('change', function(e){
		Ti.API.info('Switch value:'+basicSwitch2.value);
	});
	
	var aButton = Ti.UI.createButton({
		title : 'Feed Options',
		backgroundColor:'#B18E5F',
		fontColor:'#000005',
		height : 'auto',
		width : 200,
		bottom : '5'
	});
	
	winSettings.add(aButton);
	
	// Listen for click events.
	aButton.addEventListener('click', function() {
	    var win = Titanium.UI.createWindow({
	        layout : 'vertical',
	        height : '100%',
	        width : '100%',
	        backgroundColor: '#000005',
	        title: 'Feed Options',
	        fontSize: 40,
	    });
	    
	      // Create a Button.
	    var save = Ti.UI.createButton({
	        title : 'save',
	        backgroundColor: '#9f9d9d',
	        fontColor: '#000005',
	        height : 50,
	        width : 100,
	        top :10,
	        bottom: 5,
	        left: 5
	    });
	 
	    // Listen for click events.
	    save.addEventListener('click', function() {
	        win.close();
	    });
	 
	    var cancel = Ti.UI.createButton({
	        title : 'cancel',
	        backgroundColor:'#9f9d9d',
	        fontColor:'#000005',
	        fontSize: 20,
	        height : 50,
	        width : 100,
	        bottom: 5,
	        left: 5
	    });
	 
	    cancel.addEventListener('click', function() {
	        win.close();
	    });
	 
	  win.add(save);
	  win.add(cancel);
	      
	var Data=[
	    {
	        title:'+Colleges',
	        backgroundColor: '#B18E5F',
	        borderColor:'#0000005',
	        boarderWidth:2,
	        Size:35,
	        option:0,
	        press:0,
	        element:[
	        {name:'Agricultural and Life Sciences'},//,image:'KS_nav_views.png'},
	        {name:'Art and Architecture'},//,image:'KS_nav_views.png'},
	        {name:'Business and Economics'},//,image:'KS_nav_views.png'},
	        {name:'Education'},
	        {name:'Engineering'},
	        {name:'Graduate Studies'},
	        {name:'Law'},
	        {name:'Letters, Arts and Social Sciences'},
	        {name:'Natual Resources'},
	        {name:'Sciences'},
	        ]//,image:'KS_nav_views.png'}]
	    },
	     {
	        title:'+Sports',
	        backgroundColor: '#B18E5F',
	        borderColor:'#0000005',
	        boarderWidth:2,
	        Size:35,
	        option:0,
	        press:0,
	        element:[
	        {name:'Basketball (Men)'},//,image:'KS_nav_views.png'},
	        {name:'Basketball (Women)'},//,image:'KS_nav_views.png'},
	        {name:'Cross Country (Men)'},//,image:'KS_nav_views.png'},
	        {name:'Cross Country (Women)'},
	        {name:'Sport5'},
	        {name:'Sport6'}
	        ]//,image:'KS_nav_views.png'}]
	    },
	     {
	        title:'+Clubs',
	        backgroundColor: '#B18E5F',
	        borderColor:'#0000005',
	        boarderWidth:2,
	        Size:35,
	        option:0,
	        press:0,
	        element:[
	        {name:'Club1'},//,image:'KS_nav_views.png'},
	        {name:'Club2'},//,image:'KS_nav_views.png'},
	        {name:'Club3'},//,image:'KS_nav_views.png'},
	        {name:'Club4'},
	        {name:'Club5'}]//,image:'KS_nav_views.png'}]
	    },
	    {
	        title:'+Theater',
	        backgroundColor: '#B18E5F',
	        borderColor:'#0000005',
	        boarderWidth:2,
	        Size:35,
	        option:0,
	        press:0,
	        element:[
	        {name:'Category1'},//,image:'KS_nav_views.png'},
	        {name:'Category2'},//,image:'KS_nav_views.png'},
	        {name:'Category3'}//,image:'KS_nav_views.png'},
	        ]//,image:'KS_nav_views.png'}]
	    },
	    {
	        title:'+Music',
	        backgroundColor: '#B18E5F',
	        borderColor:'#0000005',
	        boarderWidth:2,
	        Size:35,
	        option:0,
	        press:0,
	        element:[
	        {name:'Category1'},//,image:'KS_nav_views.png'},
	        {name:'Category2'},//,image:'KS_nav_views.png'},
	        {name:'Category3'}//,image:'KS_nav_views.png'},
	        ]//,image:'KS_nav_views.png'}]
	    },{
	        title:'+News',
	        backgroundColor: '#B18E5F',
	        borderColor:'#0000005',
	        boarderWidth:2,
	        Size:35,
	        option:0,
	        press:0,
	        element:[
	        {name:'School'},//,image:'KS_nav_views.png'},
	        {name:'Local'},//,image:'KS_nav_views.png'},
	        {name:'NY Times'},//,image:'KS_nav_views.png'},
	        {name:'Wall Street Journal'},
	        {name:'Category5'}]//,image:'KS_nav_views.png'}]
	    },
	    {
	        title:'+Other',
	        backgroundColor: '#B18E5F',
	        borderColor:'#0000005',
	        boarderWidth:2,
	        Size:35,
	        option:0,
	        press:0,
	        element:[
	        {name:'Category1'},//,image:'KS_nav_views.png'},
	        {name:'Category2'},//,image:'KS_nav_views.png'},
	        {name:'Category3'}//,image:'KS_nav_views.png'},
	        ]//,image:'KS_nav_views.png'}]
	    },
	 ];
	 
	var table = Ti.UI.createTableView({
	  data:Data
	});
	 
	table.addEventListener('click', function(e) 
	{
	    if(Data[e.rowData.option].press==0)
	    {
	        Data[e.rowData.option].press=1;
	 
	 
	        for (var i=0; i < e.rowData.element.length; i++)
	        {
	            var row = Ti.UI.createTableViewRow({
	                layout : 'vertical'
	            });
	            var lbl=Ti.UI.createLabel({
	                text:e.rowData.element[i].name,
	                height:Ti.UI.SIZE,
	                color:'#9f9d9d', 
	                font:
	                {
	                    weight:'bold',
	                }
	            });
	            
	            var anImageView = Ti.UI.createImageView({
	                image : e.rowData.element[i].image,
	            });
	            
				var Switch = Ti.UI.createSwitch({
	              value:true,
	              style:Titanium.UI.Android.SWITCH_STYLE_CHECKBOX
	            });
	            
	            row.add(lbl);
	            row.add(anImageView);
	            row.add(Switch);
	            table.insertRowAfter(e.index+i,row);
	 
	        };
	 
	    }
	    else
	    {
	        Data[e.rowData.option].press=0;
	        for (var i =0;i< e.rowData.element.length;i++) 
	        {
	            table.deleteRow(e.index+1);
	        }
	    }
	});
	 
	 
	win.add(table);    
	 
	// Create a Label.
	//var name = Ti.UI.createLabel({
	    //text : 'Feed Options',
	    //color : '#000',
	    //font : {fontSize:15},
	    //height :Titanium.UI.SIZE,
	    //width : Titanium.UI.SIZE,
	    //top : 10,
	    //left : 10,
	    //textAlign : 'center'
	//});
	 
	
	    // Create a TextField.
	    //This needs to be replaced by check boxes
	    //var userName = Ti.UI.createTextField({
	        //height : Titanium.UI.SIZE,
	        //top : 10,
	        //width : Titanium.UI.FILL,
	        //hintText : 'Feed Options',
	        //softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	        //keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	        //returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	        //borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	    //});
	 
	
	  win.open({
	        modal : true
	    });
	 
	});
	
	var bButton = Ti.UI.createButton({
		title : 'Login/Log out',
		backgroundColor:'#B18E5F',
		fontColor:'#000005',
		height : 'auto',
		width : 200,
		bottom : '5',
	});
	
	winSettings.add(bButton);
	
	bButton.addEventListener('click', function() { 
		alert('You are logged out \n Note: Link to login window');
	});
	
	bButton.addEventListener('click', function(e){
	    var win1 = Ti.UI.createWindow({
	        backgroundColor : 'white',
	        url             : 'app.js' //Path to your js file
	    });
	    win1.open();
	});
	
	//win.open();
	
	//Gold: #B18E5F
	//Silver: #9f9d9d
	//Black: #000005
	
	winSettings.open({
        modal : true
    });
};

