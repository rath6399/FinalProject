var winEvent = Ti.UI.createWindow({
	title: 'Events'
});

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
		height : '50%',
		font : {fontSize:'16dp'}
	});
	theRow.add(eventLabel);

	placeLabel = Ti.UI.createLabel({
		text : mondayDataP[i],
		font : {fontSize:'13dp'},
		top : '50%',
		height : '50%',
		left : '15%',
	});
	theRow.add(placeLabel);

	timeLabel = Ti.UI.createLabel({
		text : mondayDataT[i],
		font : {fontSize:'13dp'},
		left : '75%',
		top : '50%',
		height : '50%'
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
	if(tuesdayDataP[i] == 'EP 202' || tuesdayDataP[i] == 'TLC 030'){
		theRow = Ti.UI.createTableViewRow({
			eventInfo: tuesdayDataE[i],
			height: '90dp'
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
		height : '50%',
		font : {fontSize:'16dp'}
	});
	theRow.add(eventLabel);

	placeLabel = Ti.UI.createLabel({
		text : tuesdayDataP[i],
		font : {fontSize:'13dp'},
		top : '50%',
		height : '50%',
		left : '15%',
	});
	theRow.add(placeLabel);

	timeLabel = Ti.UI.createLabel({
		text : tuesdayDataT[i],
		font : {fontSize:'13dp'},
		left : '75%',
		top : '50%',
		height : '50%'
	});
	theRow.add(timeLabel);

	sectionTuesday.add(theRow);
};

var tableEvent = Ti.UI.createTableView({
	backgroundColor: '#000005',
	top: '20%',
	data : [sectionMonday, sectionTuesday]
});

winEvent.add(viewImage);
winEvent.add(tableEvent);
winEvent.open();


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
	text: 'Notes:		2015 Barker Trading Competition April 13-24.'+ '\n'+  
		  '				Visit the website for additional information about this'+'\n'+
		  '				event.' + '\n'+'\n'+ 
	      '				Sponsored by: Barker Capital Management and Trading'+'\n'+
	      '				Program and the College of Business and Economics.'
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
	text: 'Notes:		Introduction rides on area trails on Moscow Mountain.'+ '\n'+'\n'+  
		  '				Cost: $5 includes transportation' + '\n'+ 
	      '				Rides: April 13 & May 4,meet at the Outdoor Program'+
	      '				Office at 4:30pm.'
});

viewMount.add(labelMountTitle);
viewMount.add(labelMountWhen);
viewMount.add(labelMountWhere);
viewMount.add(labelMountTime);
viewMount.add(labelMountNote);
winMount.add(viewMount);

var winHow = Ti.UI.createWindow({
	title: 'Event Information'
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
	text: 'Notes:		This powerful hour of training is packed with essential'+'\n'+
	'				how-to’s you need to identify and disarm emotionally'+'\n'+
	'				charged situations in the early stages, before tensions'+'\n'+
	'				escalate out of control. You’ll discover how to hold your'+'\n'+
	'				own in any situation and how to turn conflict into an'+'\n'+
	'				opportunity to build stronger, more positive working'+'\n'+
	'				relationships. That’s just for starters! You’ll also get tips'+'\n'+
	'				for staying in control when tears threaten, and strategies'+'\n'+
	'				for shutting down the “pressure-cooker” tactics of others.'+'\n'+
	'				You will be amazed by just how easy it is to tame'+'\n'+
	'				unproductive emotions and build cooperation once'+'\n'+
	'				you have mastered these new techniques. For locations'+'\n'+
	'				outside of Moscow, please contact pdl@uidaho.edu for'+'\n'+
	'				registration and webinar access information.'
});

viewHow.add(labelHowTitle);
viewHow.add(labelHowWhen);
viewHow.add(labelHowWhere);
viewHow.add(labelHowTime);
viewHow.add(labelHowNote);
winHow.add(viewHow);

var winFull = Ti.UI.createWindow({
	title: 'Event Information'
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
	text: 'Notes:		Learn about fully funded grants for study, research'+'\n'+
	'				or English Teaching Assistantships in more than 140'+'\n'+
	'				countries. Two sessions will be offered on Tuesday, April'+'\n'+
	'				14th. The first	session is from 11:30 a.m. to 12:20 p.m.'+'\n'+
	'				in TLC Room 145. The second session is from 12:30 to'+'\n'+
	'				1:20 p.m. in TLC Room 146. The sessions will be'+'\n'+
	'				presented by Lee Rivers, Assistant Manager of Outreach'+'\n'+
	'				for the Institute of International Education; and'+'\n'+
	'				Joanie Andruss, Fulbright Student Alumni Ambassador.'+'\n'+
	'				The University of Idaho Fulbright representative, Holly'+'\n'+
	'				LaHann, will also be available to answer questions about'+'\n'+
	'				applying for a Fulbright grant through the UI.	All'+'\n'+
	'				undergraduate and graduate students interested in'+'\n'+
	'				learning more about the	Fulbright Program are welcome'+'\n'+
	'				to attend.'
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