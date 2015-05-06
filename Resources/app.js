Ti.UI.backgroundColor = '#000005';

Login();

function Login(){
	var winLogin = Ti.UI.createWindow({  
	    backgroundColor:'#b18e5f',
	    navBarHidden:false,
	    title:'Login'
	});
	 
	var viewLogin = Ti.UI.createView({
	    backgroundColor:'#b18e5f',
	    borderRadius:5,
	    layout:'vertical',
	    top:20,
	    height:200,
	    width:300
	});
	winLogin.add(viewLogin);
	 
	var username = Ti.UI.createTextField({
	    hintText:'Enter your username',
	    top:10,
	    left:10,
	    right:10
	});
	viewLogin.add(username);
	 
	var password = Ti.UI.createTextField({
	    hintText:'Enter your password',
	    passwordMask:true,
	    top:5,
	    height: 45,
	    left:10,
	    right:10
	});
	viewLogin.add(password);
	 
	var buttonLogin = Ti.UI.createButton({
	    title:'Login',
	    backgroundColor: '#9f9d9d',
	    borderRadius: 10,
	    borderWidth: 2,
	    borderColor: '#000005',
	    color: '#000005',
	    left:50,
	    right:50,
	    top:8,
	    height: 40
	});
	viewLogin.add(buttonLogin);
	 
	 buttonLogin.addEventListener('click', function(){
	    alert('You have logged in as "'+username.value+'"');
	    username.blur();
	    password.blur(); 
		});
	
	buttonLogin.addEventListener('click', function(e){
	    main();
	});
	
	var buttonGuest = Ti.UI.createButton({
	    title:'Guest',
	    backgroundColor: '#9f9d9d',
	    borderRadius: 10,
	    borderWidth: 2,
	    borderColor: '#000005',
	    color: '#000005',
	    left:50,
	    right:50,
	    top:8,
	    height: 40
	});
	viewLogin.add(buttonGuest);
	
	buttonGuest.addEventListener('click', function(){
	    alert('You have logged in as Guest');
	    username.blur();
	    password.blur(); 
		});
	
	buttonGuest.addEventListener('click', function(e){
	    main();
	    });
	
	winLogin.open();
}

function main(){
	var tabGroup = Titanium.UI.createTabGroup();
	
	var eventsPage = EventsPage();
	
	var tab1 = Titanium.UI.createTab({  
	    //icon:'03UI_Seal-Silver.jpg',
	    title:'Events',
	    window: eventsPage
	});
	
	//BEGINNING OF TAB 2 INFO
	
	var newsPage = NewsPage();
	
	var tab2 = Titanium.UI.createTab({
		title: 'News',
		window:newsPage
	});
	
	//BEGINNING OF TAB 3 INFO
	
	var scheduleWindow = ScheduleWindow();
		//title: 'Schedule',
		//window: ScheduleWindow()
		//backgroundColor: '000005',
		//url: "schedule_app.js"
	//});
	
	var tab3 = Titanium.UI.createTab({
		title: 'Schedule',
		window:scheduleWindow
	});
	
	//
	//  add tabs
	//
	tabGroup.addTab(tab1);  
	tabGroup.addTab(tab2);
	tabGroup.addTab(tab3);  
	
	
	// open tab group
	tabGroup.open();
}


function EventsPage(){
	var winEvent = Ti.UI.createWindow({
		title: 'Events',
		backgroundColor: '#000005'
	});
	
	var mycog = Ti.UI.createImageView({
		top: 5,
		height: '40dp',
		width: '40dp',
		right: 5
	});
	
	mycog.image = '\cog.png';
	
	winEvent.add(mycog);
	
	mycog.addEventListener('click', function(e){
		settingsPage();
	});
	
	var logo = Ti.UI.createImageView({
		top: 5,
		left: '34%',
		height: '40dp',
		width: '120dp'
	});
	
	logo.image = 'ui_logo_white.png';
	
	winEvent.add(logo);
	
		var search = Ti.UI.createImageView({
		top: 5,
		left: 5,
		height: '40dp',
		width: '40dp'
	});
	
	search.image = 'Search.png';
	
	winEvent.add(search);
	
	//var viewImage = Ti.UI.createImageView({
		//top: '0%',
		//height: '20%',
		//width: '25%',
		//image: 'http://www.uidaho.edu/~/media/Images/orgs/advancement/Brand%20Resource%20Center/Content/Logos/ui_logos/jpg/Official-Seal/04UI_Seal-Black.ashx'
	//});
	
	var viewHeadMon = Ti.UI.createView({
		height: 17,
		backgroundColor: '#b18e5f'
	});
	var labelHeadMon = Ti.UI.createLabel({
		text: 'Monday, April 13',
		color: '#000005',
		left: 0,
		font: {fontSize: '14dp'}
	});
	viewHeadMon.add(labelHeadMon);
	var sectionMonday = Ti.UI.createTableViewSection({
		headerView: viewHeadMon
	});
	
	var viewHeadTue = Ti.UI.createView({
		height: 17,
		backgroundColor: '#b18e5f'
	});
	var labelHeadTue = Ti.UI.createLabel({
		text: 'Tuesday, April 14',
		color: '#000005',
		left: 0,
		font: {fontSize: '14dp'}
	});
	viewHeadTue.add(labelHeadTue);
	var sectionTuesday = Ti.UI.createTableViewSection({
		headerView: viewHeadTue
	});
	var viewHeadWed = Ti.UI.createView({
		height: 17,
		backgroundColor: '#b18e5f'
	});
	var labelHeadWed = Ti.UI.createLabel({
		text: 'Wednesday, April 15',
		color: '#000005',
		left: 0,
		font: {fontSize: '14dp'}
	});
	viewHeadWed.add(labelHeadWed);
	var sectionWednesday = Ti.UI.createTableViewSection({
		headerView: viewHeadWed
	});
	
	var mondayDataE = ['Barker Trading Competition', 'Department of Business Advisory Board', 'Outdoor Rental Center Open',
	'How to Facilitate Meetings Effectively', 'Josh Collette - Fish & Wildlife Sciences 501 Seminar', 'Mountain Bike Mondays'];
	
	var mondayDataT = ['12 days', 'All Day', '10am', '11am', 'll:30am', '4pm'];
	
	var mondayDataP = ['ALB 203', 'ALB Gallery', 'SRC 101', 'Admin 217', 'CNR 108', 'Moscow Mountain'];
	
	allRows1 = [];
	
	for (var i = 0; i < mondayDataE.length; i++) {
		theRow = Ti.UI.createTableViewRow({
			eventInfo : mondayDataE[i],
			height : '70dp'
		});
	
		eventLabel = Ti.UI.createLabel({
			text : mondayDataE[i],
			top : '0%',
			height : '70%',
			textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
			font : {fontSize:'16dp'}
		});
		theRow.add(eventLabel);
	
		placeLabel = Ti.UI.createLabel({
			text : mondayDataP[i],
			font : {fontSize:'13dp'},
			top : '70%',
			height : '30%',
			left : '15%',
		});
		theRow.add(placeLabel);
	
		timeLabel = Ti.UI.createLabel({
			text : mondayDataT[i],
			font : {fontSize:'13dp'},
			left : '75%',
			top : '70%',
			height : '30%'
		});
		theRow.add(timeLabel);
	
		sectionMonday.add(theRow);
	};
	
	var tuesdayDataE = ['Dissertation Defense for Troy Magney', 'Outdoor Rental Center Open', 'Dissertation Defense for Christopher Jason Williams',
	'Health Hut', 'Equal Pay Day', 'How to Handle Emotionally Charged Situations in the Workplace',
	'Fulbright U.S. Student Program Workshop', 'Graduate Faculty and Staff Info Session','Graduate Admission Departmental Info Session',
	'Fulbright U.S. Student Program Workshop', 'IBEST Seminar - Chris Henry | Mechanistic Modeling to Elucidate Interactions in Gut Microbiome',
	'Fish and Wildlife Sciences Spring Seminar Speaker Dr.Katie Dugger "Mega-Icebergs and Meta-Population Dynamics: Adelie Penguins Coping with Environmental Change"',
	'Mental Training for Job Seekers - Self-Talk & Self-Confidence Workshop', 'Stuart Hambley, trombone'];
	
	var tuesdayDataT = ['9am', '10am', '10am', '10:30am', '11am', '11am', '11:30am', '12pm', '12pm', '12:30pm', '12:30pm',
	'3:30pm', '4pm', '7:30'];
	
	var tuesdayDataP = ['CNR 200', 'SRC 101', 'Morrill 202', 'TLC Balcony Area', 'Commons Plaza', 'Admin 217', 'TLC 145', 'Clearwater Room',
	'Clearwater Room', 'TLC 145 & TLC 146', 'EP 202', 'CNR 10', 'TLC 030', 'Haddock Performance Hall'];
	
	allRows2 = [];
	
	for (var i = 0; i < tuesdayDataE.length; i++) {
		if(tuesdayDataP[i] == 'EP 202'){
			theRow = Ti.UI.createTableViewRow({
				eventInfo: tuesdayDataE[i],
				height: '100dp'
			});
		} else if(tuesdayDataP[i] == 'CNR 10'){
			theRow = Ti.UI.createTableViewRow({
				eventInfo: tuesdayDataE[i],
				height: '116dp'
			});
		} else {
			theRow = Ti.UI.createTableViewRow({
			eventInfo : tuesdayDataE[i],
			height : '70dp'
			});
		};
	
		eventLabel = Ti.UI.createLabel({
			text : tuesdayDataE[i],
			top : '0%',
			height : '70%',
			textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
			font : {fontSize:'16dp'}
		});
		theRow.add(eventLabel);
	
		placeLabel = Ti.UI.createLabel({
			text : tuesdayDataP[i],
			font : {fontSize:'13dp'},
			top : '70%',
			height : '30%',
			left : '15%',
		});
		theRow.add(placeLabel);
	
		timeLabel = Ti.UI.createLabel({
			text : tuesdayDataT[i],
			font : {fontSize:'13dp'},
			left : '75%',
			top : '70%',
			height : '30%'
		});
		theRow.add(timeLabel);
	
		sectionTuesday.add(theRow);
	};
	
	var tableEvent = Ti.UI.createTableView({
		backgroundColor: '#000005',
		top: '50dp',
		data : [sectionMonday, sectionTuesday]
	});
	
	//winEvent.add(viewImage);
	winEvent.add(tableEvent);
	//winEvent.open();
	
	
	var winBark = Ti.UI.createWindow({
		title: 'Event Information',
		backgroundColor: '#000005'
	});
	var viewBark = Ti.UI.createView();
	var labelBarkTitle = Ti.UI.createLabel({
		text: 'Barker Trading Competition',
		font: {fontSize: '20dp', fontWeight: 'bold'},
		top: '5%'
	});
	var labelBarkWhen = Ti.UI.createLabel({
		top: '15%',
		text: 'When:	Monday, April 13 – Friday, April 24, 2015'
	});
	var labelBarkWhere = Ti.UI.createLabel({
		top: '20%',
		text: 'Where:	ALB 203'
	});
	var labelBarkTime = Ti.UI.createLabel({
		top: '25%',
		text: 'Time: 	8:00 am - 5:00pm'
	});
	var labelBarkNote = Ti.UI.createLabel({
		top: '30%',
		text: 'Notes:		2015 Barker Trading Competition April 13-24. Visit the website for additional information about this event. Sponsored by: Barker Capital Management and Trading Program and the College of Business and Economics.'
	});
	
	viewBark.add(labelBarkTitle);
	viewBark.add(labelBarkWhen);
	viewBark.add(labelBarkWhere);
	viewBark.add(labelBarkTime);
	viewBark.add(labelBarkNote);
	winBark.add(viewBark);
	
	var winMount = Ti.UI.createWindow({
		title: 'Event Information',
		backgroundColor: '#000005'
	});
	var viewMount = Ti.UI.createView();
	var labelMountTitle = Ti.UI.createLabel({
		top: '5%',
		text: 'Mountain Bike Mondays',
		font: {fontSize: '20dp', fontWeight: 'bold'}
	});
	var labelMountWhen = Ti.UI.createLabel({
		top: '15%',
		text: 'When:	Monday, April 13, 2015'
	});
	var labelMountWhere = Ti.UI.createLabel({
		top: '20%',
		text: 'Where:	Moscow Mountain'
	});
	var labelMountTime = Ti.UI.createLabel({
		top: '25%',
		text: 'Time: 	4-6pm'
	});
	var labelMountNote = Ti.UI.createLabel({
		top: '30%',
		text: 'Notes:		Introduction rides on area trails on Moscow Mountain. Cost: $5 includes transportation Rides: April 13 & May 4,meet at the Outdoor Program Office at 4:30pm.'
	});
	
	viewMount.add(labelMountTitle);
	viewMount.add(labelMountWhen);
	viewMount.add(labelMountWhere);
	viewMount.add(labelMountTime);
	viewMount.add(labelMountNote);
	winMount.add(viewMount);
	
	var winHow = Ti.UI.createWindow({
		title: 'Event Information',
		backgroundColor: '#000005'
	});
	var viewHow = Ti.UI.createView();
	var labelHowTitle = Ti.UI.createLabel({
		top: '5%',
		text: 'How to Handle Emotionally Charged Situations in the Workplace',
		font: {fontSize: '20dp', fontWeight: 'bold'}
	});
	var labelHowWhen = Ti.UI.createLabel({
		top: '15%',
		text: 'When:	Tuesday, April 14, 2015'
	});
	var labelHowWhere = Ti.UI.createLabel({
		top: '20%',
		text: 'Where:	Admin 217'
	});
	var labelHowTime = Ti.UI.createLabel({
		top: '25%',
		text: 'Time: 	11am-12pm'
	});
	var labelHowNote = Ti.UI.createLabel({
		top: '30%',
		text: 'Notes:		This powerful hour of training is packed with essential how-to’s you need to identify and disarm emotionally charged situations in the early stages, before tensions escalate out of control. You’ll discover how to hold your own in any situation and how to turn conflict into an opportunity to build stronger, more positive working relationships. That’s just for starters! You’ll also get tips for staying in control when tears threaten, and strategies for shutting down the “pressure-cooker” tactics of others. You will be amazed by just how easy it is to tame unproductive emotions and build cooperation once you have mastered these new techniques. For locations outside of Moscow, please contact pdl@uidaho.edu for registration and webinar access information.'
	});
	
	viewHow.add(labelHowTitle);
	viewHow.add(labelHowWhen);
	viewHow.add(labelHowWhere);
	viewHow.add(labelHowTime);
	viewHow.add(labelHowNote);
	winHow.add(viewHow);
	
	var winFull = Ti.UI.createWindow({
		title: 'Event Information',
		backgroundColor: '#000005'
	});
	var viewFull = Ti.UI.createView();
	var labelFullTitle = Ti.UI.createLabel({
		top: '5%',
		text: 'Fulbright U.S. Student Program Workshop',
		font: {fontSize: '20dp', fontWeight: 'bold'}
	});
	var labelFullWhen = Ti.UI.createLabel({
		top: '15%',
		text: 'When:	Tuesday, April 14, 2015'
	});
	var labelFullWhere = Ti.UI.createLabel({
		top: '20%',
		text: 'Where:	TLC 145 & TLC 146'
	});
	var labelFullTime = Ti.UI.createLabel({
		top: '25%',
		text: 'Time: 	11:30am-12:20pm & 12:30pm-1:20pm'
	});
	var labelFullNote = Ti.UI.createLabel({
		top: '30%',
		text: 'Notes:		Learn about fully funded grants for study, research or English Teaching Assistantships in more than 140 countries. Two sessions will be offered on Tuesday, April 14th. The first session is from 11:30 a.m. to 12:20 p.m. in TLC Room 145. The second session is from 12:30 to	1:20 p.m. in TLC Room 146. The sessions will be	presented by Lee Rivers, Assistant Manager of Outreach for the Institute of International Education; and Joanie Andruss, Fulbright Student Alumni Ambassador. The University of Idaho Fulbright representative, Holly LaHann, will also be available to answer questions about applying for a Fulbright grant through the UI. All	undergraduate and graduate students interested in learning more about the Fulbright Program are welcome	to attend.'
	});
	
	viewFull.add(labelFullTitle);
	viewFull.add(labelFullWhen);	
	viewFull.add(labelFullWhere);
	viewFull.add(labelFullTime);
	viewFull.add(labelFullNote);
	winFull.add(viewFull);
	
	function openWindow(events){
		var indicator = events.charAt(0);
		
		switch (indicator){
			case 'B': winBark.open(); break;
			case 'M': winMount.open(); break;
			case 'H': winHow.open(); break;
			case 'F': winFull.open(); break;
		}
		return null;
	};
	
	sectionMonday.addEventListener('click', function(e){
		openWindow(e.source.eventInfo);
	});
	
	sectionTuesday.addEventListener('click', function(e){
		openWindow(e.source.eventInfo);
	});
	
	return winEvent;
}

// added code for news

function NewsPage(){	
	var winNews = Ti.UI.createWindow({
	backgroundColor: '#000005'
	});
	
	var MyCog = Ti.UI.createImageView({
		top: 5,
		height: '40dp',
		width: '40dp',
		right: 5
	});
	
	MyCog.image = '\cog.png';
	
	winNews.add(MyCog);
	
	MyCog.addEventListener('click', function(e){
		settingsPage();
	});
	
	var logo = Ti.UI.createImageView({
		top: 5,
		left: '34%',
		height: '40dp',
		width: '120dp'
	});
	
	logo.image = 'ui_logo_white.png';
	
	winNews.add(logo);
	
		var search = Ti.UI.createImageView({
		top: 5,
		left: 5,
		height: '40dp',
		width: '40dp'
	});
	
	search.image = 'Search.png';
	
	winNews.add(search);
	
	var view = Ti.UI.createView({
		top: '50dp',
		height: '10%',
		bottom: 5
	});
	
	var label = Ti.UI.createLabel({
		text : ' Alerts',
		color : '#FF0000',
		top: '10',
		font: {fontSize: 20, fontWeight: 'bold'},
		textAlign : 'left'
	});
	
	var alertData = [ 'Moose on Campus!', 'Weather Advisory', 
		'Another Moose on Campus'];
	
	var table = Ti.UI.createTableView({
		top: '130dp',
		height: '40%',
	  	data: alertData,
	});
	
	allRows = [];
	
	for (var i=0; i<alertData.length; i++){
		if (i%2 == 0){ // if case is looking to see if there is a remainder or not, in this case we don't want one
			theRow = Ti.UI.createTableViewRow({
				title: alertData[i],
				backgroundColor: '#000005',
				color: '#9f9d9d',
				clubInfo: alertData[i]
			});
		};
		if( i%2 == 1){ // if case is looking to see if there is a remainder or not, in this case we want a remainder
			theRow = Ti.UI.createTableViewRow({
				title: alertData[i],
				backgroundColor: '#b18e5f',
				color: '#000005',
				clubInfo: alertData[i]
			});
		};
		allRows.push(theRow); 
	};
	
	table.setData(allRows);
	view.add(label);
	winNews.add(view);
	winNews.add(table);
	//winNews.open();
	
	function openWindow(club){
		var indicator = club.charAt (0);
		
		if(indicator == 'M'){
			var win1 = Ti.UI.createWindow();
			var view1 = Ti.UI.createView();
			var label1 = Ti.UI.createLabel ({
				borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
				color: '#9f9d9d',
				top:10,
				fontsize:14,
				text: 'On Friday May 10th, a moose was spotted on campus near the alb. Please be aware that these animals are not friendly and will attack if provoked. It is best to stay clear of them and do not try to pet the animal. Thank you and stay safe!'
			});
		var button1 = Ti.UI.createButton({
		title : 'Contact Information',
		color: '#ffd700',
		height : 50,
		top : '75%'
		});
		var buttonView1 = Ti.UI.createView({
		top: '75%'
		});
		var button1 = Ti.UI.createButton({
		title : 'Contact Information',
		height: 50,
		width: '100%'
		//top: '75%'
		});
		buttonView1.add(button1);
		win1.add(buttonView1); 
		view1.add(label1);
		win1.add(button1);
		win1.add(view1);
		win1.open();
		button1.addEventListener('click', function(e){
		button1open(); });
		return 0;
		};
		if(indicator == 'W'){
		var win2 = Ti.UI.createWindow({
		});
		var view2 = Ti.UI.createView();
		var label2 = Ti.UI.createLabel ({
		borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color: '#9f9d9d',
		top:10,
		fontsize:14,
		text: 'There is a weather advisory for Monday May 13th. The Palouse area will experience heavy rain fall and winds up to 60 mph. Please take appropriate action to ensure your safety and the safety of others. Thank you.'
		});
		var button2 = Ti.UI.createButton({
		title: 'Contact Information',
		color: '#ffd700',
		height: 50,
		top: '75%'
		});
		var buttonView2 = Ti.UI.createView({
		top: '75%'
		});
		var button2 = Ti.UI.createButton({
		title : 'Contact Information',
		height: 50,
		width: '100%'
		//top: '75%'
		});
		buttonView2.add(button2);
		win2.add(buttonView2); 
		view2.add(label2);
		win2.add(button2);
		win2.add(view2);
		win2.open();
		button2.addEventListener('click', function(e){
		button2open(); });
		return 0;
		};
		if(indicator == 'A'){
		var win3 = Ti.UI.createWindow({
		});
		var view3 = Ti.UI.createView();
		var label3 = Ti.UI.createLabel ({
		borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color: '#9f9d9d',
		top:10,
		fontsize:14,
		text: 'Another moose, possibly the same one as before, has been spotted on campus. The moose was spotted near Sigma Chi and headed west. Please stay aware and do not try to interact with the animal. Thank you and stay safe.'
		});
		var button3 = Ti.UI.createButton({
		title : 'Contact Information',
		color: '#ffd700',
		height: 50,
		top: '75%'
		});
		var buttonView3 = Ti.UI.createView({
		top: '75%'
		});
		var button3 = Ti.UI.createButton({
		title : 'Contact Information',
		height: 50,
		width: '100%'
		//top: '75%'
		});
		buttonView3.add(button3);
		win3.add(buttonView3); 
		view3.add(label3);
		win3.add(button3);
		win3.add(view3);
		win3.open();
		button3.addEventListener('click', function(e){
		button3open(); 
		});
		return 0; 
		};
	};
	
	table.addEventListener('click', function(e)
		{openWindow(e.source.clubInfo); });
	//Starting of second table code
	
	var viewWeather = Ti.UI.createView({
	top: '40%',
	height: '10%',
	});
	
	var labelWeather = Ti.UI.createLabel({
	text : ' Recent News',
	color : '#b18e5f',
	top: 10,
	font: {fontSize: '20dp', fontWeight:'bold'},
	textAlign : 'left'
	});
	
	var tableDataWeather = [ 'College of Law Receives High Grades From preLaw Magazine', 'Director of Career Center Receives Leadership in Career Development Award', 
	'UI College of Art and Architecture Announces Winners of 24th Annual High School Art Exhibition'];
	
	var tableWeather = Ti.UI.createTableView({
	top: '50%',
	  data: tableDataWeather,
	});
	
	allRows = [];
	
	for (var i=0; i<tableDataWeather.length; i++){
	if (i%2 == 0){ // if case is looking to see if there is a remainder or not, in this case we don't want one
	theRow = Ti.UI.createTableViewRow({
	title: tableDataWeather[i],
	backgroundColor: '#000005',
	color: '#9f9d9d',
	clubInfo: tableDataWeather[i]
	});
	};
	if( i%2 == 1){ // if case is looking to see if there is a remainder or not, in this case we want a remainder
	theRow = Ti.UI.createTableViewRow({
	title: tableDataWeather[i],
	backgroundColor: '#b18e5f',
	color: '#000005',
	clubInfo: tableDataWeather[i]
	});
	};
	allRows.push(theRow); 
	};
	
	tableWeather.setData(allRows);
	viewWeather.add(labelWeather);
	winNews.add(viewWeather);
	winNews.add(tableWeather);
	//winNews.open();
	
	function openWindow2(club){
	var indicatorX = club.charAt (0);
	
	if(indicatorX == 'C'){
	var win4 = Ti.UI.createWindow();
	var view4 = Ti.UI.createView();
	var label4 = Ti.UI.createLabel ({
	borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#9f9d9d',
	top:10,
	fontsize:10,
	text: 'The Spring 2015 issue of preLaw magazine recognized the University of Idaho College of Law for the following: \n \n• The College of Law received an A- for Practical Training.\n\n • The College of Law was mentioned in "Around the Nation" for its participation in the U.S. Patent and Trademark Office pilot program.\n\n • The College of Law was recognized, again, as a top law school to attend for its environmental law emphasis.\n\n • The College of Law was recognized as a top law school to attend for its Intellectual Property and Technology law emphasis.' 
	});
	
	var button4 = Ti.UI.createButton({
	title : 'Contact Information',
	color: '#ffd700',
	height : 50,
	top : '75%'
	});
	var buttonView4 = Ti.UI.createView({
	top: '75%'
	});
	var button4 = Ti.UI.createButton({
	title : 'Contact Information',
	height: 50,
	width: '100%'
	//top: '75%'
	});
	buttonView4.add(button4);
	win4.add(buttonView4); 
	view4.add(label4);
	win4.add(button4);
	win4.add(view4);
	win4.open();
	button4.addEventListener('click', function(e){
	button4open(); });
	return 0;
	};
	if(indicatorX == 'D'){
	var win5 = Ti.UI.createWindow({
	});
	var view5 = Ti.UI.createView();
	var label5 = Ti.UI.createLabel ({
	borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#9f9d9d',
	top:10,
	fontsize:14,
	text: 'Suzi Billington, Career Center and ASAP director, will be the co-recipient of the 2015 Idaho Leadership in Career Development Award. Given out by the Idaho Career Development Association, it is the highest honor a career development professional can receive in the state of Idaho. The award will be given out this Friday at the annual Idaho Career Development Conference in Boise. This is the second time in three years a University of Idaho employee has won this award. Cynthia Mika (retiree, 2013) received this award in 2013.'
	});
	var button5 = Ti.UI.createButton({
	title: 'Contact Information',
	color: '#ffd700',
	height: 50,
	top: '75%'
	});
	var buttonView5 = Ti.UI.createView({
	top: '75%'
	});
	var button5 = Ti.UI.createButton({
	title : 'Contact Information',
	height: 50,
	width: '100%'
	//top: '75%'
	});
	buttonView5.add(button5);
	win5.add(buttonView5); 
	view5.add(label5);
	win5.add(button5);
	win5.add(view5);
	win5.open();
	button5.addEventListener('click', function(e){
	button5open(); });
	return 0;
	};
	if(indicatorX == 'U'){
	var win6 = Ti.UI.createWindow({
	});
	var view6 = Ti.UI.createView();
	var label6 = Ti.UI.createLabel ({
	borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#9f9d9d',
	top:10,
	fontsize:14,
	text: 'The University of Idaho today announced the winners of the 24th Annual High School Art Exhibition sponsored by the College of Art and Architecture’s Studio Art and Design Program. Entries were judged by Zoe Ball, Mercedes Rennison, Ali Hurt, and Sean Robertson. The following winners were honored at an awards reception on Feb. 27: First Place Winner - $1,000 UI Scholarship and $150 Gift Certificate. More information on U of I webpage. '
	});
	var button6 = Ti.UI.createButton({
	title : 'Contact Information',
	color: '#ffd700',
	height: 50,
	top: '75%'
	});
	var buttonView6 = Ti.UI.createView({
	top: '75%'
	});
	var button6 = Ti.UI.createButton({
	title : 'Contact Information',
	height: 50,
	width: '100%'
	//top: '75%'
	});
	buttonView6.add(button6);
	win6.add(buttonView6); 
	view6.add(label6);
	win6.add(button6);
	win6.add(view6);
	win6.open();
	button6.addEventListener('click', function(e){
	button6open(); });
	return 0; 
	};
	};
	
	tableWeather.addEventListener('click', function(e)
		{openWindow2(e.source.clubInfo); });
	
	function button6open(){
		var win61 = Ti.UI.createWindow({
					backgroundColor: '#000000',
					title: 'Contact Information'
		});
				
		var view61 = Ti.UI.createView({
					
		});
		
		var label61 = Ti.UI.createLabel({
			text: 'Jan Rauk',
			text: 'Phone:	(208) 885-0147',
		    text: 'Email:	jrauk@uidaho.edu'
		});
		view6.add(label61);
		win6.add(view61);
		win61.open();
		return 0;
	};
	return winNews;
}

function settingsPage(){
	var win = Ti.UI.createWindow({
	    backgroundColor : '#B18E5F',
	    layout : 'vertical',
	    title: 'Settings'
	});
 
	var winSettings = Ti.UI.createWindow({
		/*title: 'Settings',
	    backgroundColor: '000005',
	    url: "settings.js"*/
	   	backgroundColor : '#B18E5F',
    	layout : 'vertical',
   		title: 'Settings'
		
	});
	
	var basicSwitch = Ti.UI.createSwitch({
	  titleOn:'Notifications Enabled',
	  titleOff:'Notifications Disabled',
	  backgroundColor:'#000005',
	  fontSize: 25,
	  color:'#000005',
	  backgroundColor: '#9f9d9d',
	  borderRadius:10,
	  borderColor: '#000005',
	  borderWidth:2,
	  value:true,
	  width: '90%', 
	  height:'auto',
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
		fontSize: 25,
		color:'#000005',
	    backgroundColor: '#9f9d9d',
	    borderRadius:10,
	    borderColor: '#000005',
	    borderWidth:2,
		value:true, 
		width: '90%', 
		height: 'auto',
		bottom: '5'
		});
	
	winSettings.add(basicSwitch2);
	
	basicSwitch2.addEventListener('change', function(e){
		Ti.API.info('Switch value:'+basicSwitch2.value);
	});
	
	var aButton = Ti.UI.createButton({
		title : 'Feed Options',
		color:'#000005',
	    backgroundColor: '#9f9d9d',
	    borderRadius:10,
	    borderColor: '#000005',
	    borderWidth:2,
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
	        backgroundColor: '#b18e5f',
	        title: 'Feed Options',
	        fontSize: 40,
	    });

	    
	      
	var Data=[
	    {
	        title:'+Colleges',
	        backgroundColor: '#B18E5F',
	        color:'#000005',
	        //borderColor:'#0000005',
	        //borderWidth:2,
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
	        color:'#000005',
	        //borderColor:'#0000005',
	        //borderWidth:2,
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
	        color:'#000005',
	        //borderColor:'#0000005',
	        //borderWidth:2,
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
	        color:'#000005',
	        //borderColor:'#0000005',
	        //borderWidth:2,
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
	        color:'#000005',
	        //borderColor:'#0000005',
	        //borderWidth:2,
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
	        color:'#000005',
	        //borderColor:'#0000005',
	        //borderWidth:2,
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
	        color:'#000005',
	        //borderColor:'#0000005',
	        //borderWidth:2,
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
	  top:'0%',
	  backgroundColor:'#B18E5F',
	  height: '75%',
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
	                color:'#FFFFFF', 
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
	
var saveview = Ti.UI.createView({
	    	 backgroundColor:'#b18e5f',
	         layout:'vertical',
	         height:100,
	         bottom: '0%',
	         left: '0%',
	         width:'100%'
	    });
	    
	    win.add(saveview);
	    	    
	      // Create a Button.
	    var save = Ti.UI.createButton({
	        title : 'save',
	        backgroundColor: '#9f9d9d',
	        color:'#000005',
	        borderRadius:10,
	        borderColor: '#000005',
	        borderWidth:2,
	        fontSize: 20,
	        height : '40%',
	        width : '90%',
	        top:5,
	    });
	 
	    // Listen for click events.
	    save.addEventListener('click', function() {
	        win.close();
	    });
	    //var cancelview = Ti.UI.createView({
	    	 //backgroundColor:'#b18e5f',
	         //layout:'vertical',
	         //bottom: '0%',
	         //height:100,
	         //right: '0%',
	         //width:'45%'
	    //});
	    
	    //win.add(cancelview);	 
	    
	    var cancel = Ti.UI.createButton({
	        title : 'cancel',
	        backgroundColor: '#9f9d9d',
	        color:'#000005',
	        borderRadius:10,
	        borderColor: '#000005',
	        borderWidth:2,
	        fontSize: 20,
	        height : '40%',
	        width : '90%',
	        top:5,
	    });
	 
	    cancel.addEventListener('click', function() {
	        win.close();
	    });
	 
	  saveview.add(save);
	  saveview.add(cancel);    
	 
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
		color:'#000005',
	    backgroundColor: '#9f9d9d',
	    borderRadius:10,
	    borderColor: '#000005',
	    borderWidth:2,
		height : 'auto',
		width : 200,
		bottom : '5',
	});
	
	winSettings.add(bButton);
	
	bButton.addEventListener('click', function() { 
		alert('You are logged out');
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

function ScheduleWindow() {	
	var winEvent = Ti.UI.createWindow({
		title: 'Schedule',
		backgroundColor:'#000005'
	});
	
	var mycog = Ti.UI.createImageView({
	top: 5,
	height: '40dp',
	width: '40dp',
	right: 5
	});

	mycog.image = '\cog.png';
	
	winEvent.add(mycog);
	
	mycog.addEventListener('click', function(e){
		settingsPage();
	});
	
	var logo = Ti.UI.createImageView({
		top: 5,
		left: '34%',
		height: '40dp',
		width: '120dp'
	});
	
	logo.image = 'ui_logo_white.png';
	
	winEvent.add(logo);
	
		var search = Ti.UI.createImageView({
		top: 5,
		left: 5,
		height: '40dp',
		width: '40dp'
	});
	
	search.image = 'Search.png';
	
	winEvent.add(search);
	
	var viewHeadMon = Ti.UI.createView({
		height: 17,
		backgroundColor: '#b18e5f'
	});
	var labelHeadMon = Ti.UI.createLabel({
		text: 'Monday, April 13',
		color: '#000005',
		left: 0,
		font: {fontSize: '14dp'}
	});
	viewHeadMon.add(labelHeadMon);
	var sectionMonday = Ti.UI.createTableViewSection({
		headerView: viewHeadMon
	});
	
	var viewHeadTue = Ti.UI.createView({
		height: 17,
		backgroundColor: '#b18e5f'
	});
	var labelHeadTue = Ti.UI.createLabel({
		text: 'Tuesday, April 14',
		color: '#000005',
		left: 0,
		font: {fontSize: '14dp'}
	});
	viewHeadTue.add(labelHeadTue);
	var sectionTuesday = Ti.UI.createTableViewSection({
		headerView: viewHeadTue
	});
	var viewHeadWed = Ti.UI.createView({
		height: 17,
		backgroundColor: '#b18e5f'
	});
	var labelHeadWed = Ti.UI.createLabel({
		text: 'Wednesday, April 15',
		color: '#000005',
		left: 0,
		font: {fontSize: '14dp'}
	});
	viewHeadWed.add(labelHeadWed);
	var sectionWednesday = Ti.UI.createTableViewSection({
		headerView: viewHeadWed
	});
	
	var mondayDataE = ['Barker Trading Competition', 'BUS353 Assignment 4 Due', 'BUS453 Paper Due',
	 'Bus353 Presentation', 'Mountain Bike Mondays'];
	
	var mondayDataT = ['12 days', 'Midnight', 'Midnight', '3:30pm', '4pm'];
	
	var mondayDataP = ['ALB 203', 'BlackBoard', 'BlackBoard', 'ALB 311', 'Moscow Mountain'];
	
	allRows1 = [];
	
	for (var i = 0; i < mondayDataE.length; i++) {
		theRow = Ti.UI.createTableViewRow({
			eventInfo : mondayDataE[i],
			height : '70dp'
		});
	
		eventLabel = Ti.UI.createLabel({
			text : mondayDataE[i],
			top : '0%',
			height : '70%',
			textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
			font : {fontSize:'16dp'}
		});
		theRow.add(eventLabel);
	
		placeLabel = Ti.UI.createLabel({
			text : mondayDataP[i],
			font : {fontSize:'13dp'},
			top : '70%',
			height : '30%',
			left : '15%',
		});
		theRow.add(placeLabel);
	
		timeLabel = Ti.UI.createLabel({
			text : mondayDataT[i],
			font : {fontSize:'13dp'},
			left : '75%',
			top : '70%',
			height : '30%'
		});
		theRow.add(timeLabel);
	
		sectionMonday.add(theRow);
	};
	
	var tuesdayDataE = ['ECON 354 Quiz 4', 'BUS370 Test 3','Health Hut', 'Equal Pay Day', 
	'How to Handle Emotionally Charged Situations in the Workplace',
	'Mental Training for Job Seekers - Self-Talk & Self-Confidence Workshop', 'Stuart Hambley, trombone'];
	
	var tuesdayDataT = ['9am', '7pm', '10am', 'All Day', '11am', '12pm', '9pm'];
	
	var tuesdayDataP = ['BlackBoard', 'Ag 120', 'TLC Balcony Area', 'Commons Plaza', 'Clearwater Room',
	'Clearwater Room', 'Haddock Performance Hall'];
	
	allRows2 = [];
	
	for (var i = 0; i < tuesdayDataE.length; i++) {
		theRow = Ti.UI.createTableViewRow({
		eventInfo : tuesdayDataE[i],
		height : '70dp'
		});
	
		eventLabel = Ti.UI.createLabel({
			text : tuesdayDataE[i],
			top : '0%',
			height : '70%',
			font : {fontSize:'16dp'},
			textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
		});
		theRow.add(eventLabel);
	
		placeLabel = Ti.UI.createLabel({
			text : tuesdayDataP[i],
			font : {fontSize:'13dp'},
			top : '70%',
			height : '30%',
			left : '15%',
		});
		theRow.add(placeLabel);
	
		timeLabel = Ti.UI.createLabel({
			text : tuesdayDataT[i],
			font : {fontSize:'13dp'},
			left : '75%',
			top : '70%',
			height : '30%'
		});
		theRow.add(timeLabel);
	
		sectionTuesday.add(theRow);
	};
	
	var tableEvent = Ti.UI.createTableView({
		top: '50dp',
		backgroundColor: '#000005',
		data : [sectionMonday, sectionTuesday]
	});
	
	winEvent.add(tableEvent);
	//winEvent.open();
	
	
	var winBark = Ti.UI.createWindow({
		title: 'Event Information'
	});
	var viewBark = Ti.UI.createView();
	var labelBarkTitle = Ti.UI.createLabel({
		text: 'Barker Trading Competition',
		font: {fontSize: '20dp', fontWeight: 'bold'},
		top: '5%'
	});
	var labelBarkWhen = Ti.UI.createLabel({
		top: '15%',
		text: 'When:	Monday, April 13 – Friday, April 24, 2015'
	});
	var labelBarkWhere = Ti.UI.createLabel({
		top: '20%',
		text: 'Where:	ALB 203'
	});
	var labelBarkTime = Ti.UI.createLabel({
		top: '25%',
		text: 'Time: 	8:00 am - 5:00pm'
	});
	var labelBarkNote = Ti.UI.createLabel({
		top: '30%',
		text: 'Notes:		2015 Barker Trading Competition April 13-24. Visit the website for additional information about this event. Sponsored by: Barker Capital Management and Trading Program and the College of Business and Economics.'
	});
	
	viewBark.add(labelBarkTitle);
	viewBark.add(labelBarkWhen);
	viewBark.add(labelBarkWhere);
	viewBark.add(labelBarkTime);
	viewBark.add(labelBarkNote);
	winBark.add(viewBark);
	
	var winMount = Ti.UI.createWindow({
		title: 'Event Information'
	});
	var viewMount = Ti.UI.createView();
	var labelMountTitle = Ti.UI.createLabel({
		top: '5%',
		text: 'Mountain Bike Mondays',
		font: {fontSize: '20dp', fontWeight: 'bold'}
	});
	var labelMountWhen = Ti.UI.createLabel({
		top: '15%',
		text: 'When:	Monday, April 13, 2015'
	});
	var labelMountWhere = Ti.UI.createLabel({
		top: '20%',
		text: 'Where:	Moscow Mountain'
	});
	var labelMountTime = Ti.UI.createLabel({
		top: '25%',
		text: 'Time: 	4-6pm'
	});
	var labelMountNote = Ti.UI.createLabel({
		top: '30%',
		text: 'Notes:		Introduction rides on area trails on Moscow Mountain. Cost: $5 includes transportation Rides: April 13 & May 4,meet at the Outdoor Program Office at 4:30pm.'
	});
	
	viewMount.add(labelMountTitle);
	viewMount.add(labelMountWhen);
	viewMount.add(labelMountWhere);
	viewMount.add(labelMountTime);
	viewMount.add(labelMountNote);
	winMount.add(viewMount);
	
	
	function openWindow(events){
		var indicator = events.charAt(0);
		
		switch (indicator){
			case 'B': winBark.open(); break;
			case 'M': winMount.open(); break;
		}
		return null;
	};
	
	sectionMonday.addEventListener('click', function(e){
		openWindow(e.source.eventInfo);
	});
	return winEvent;
}
