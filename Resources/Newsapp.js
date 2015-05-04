Ti.UI.backgroundColor = 'white';
var winLand = Ti.UI.createWindow({
	backgroundColor: '#000000'
});

var view = Ti.UI.createView({
		top: '0px',
		height: '10%',
		bottom: 5
});

var label = Ti.UI.createLabel({
	text : ' LABEL',
	color : '#ffd700',
	top: '10',
	font: {fontSize: 12},
	textAlign : 'left'
});

var tableData = [ 'American Marketing Association', 'Beta Alpha Psi and the Student Accounting Association', 
'Distinguished Sophomore Business Club'];

var table = Ti.UI.createTableView({
	top: '100px',
	bottom: 0,
  	data: tableData,
});

allRows = [];

for (var i=0; i<tableData.length; i++){
	
	if (i%2 == 0){ // if case is looking to see if there is a remainder or not, in this case we don't want one
		theRow = Ti.UI.createTableViewRow({
			title: tableData[i],
			backgroundColor: '#000000',
			color: '#ffd700',
			clubInfo: tableData[i]
		});
	};
	
	if( i%2 == 1){ // if case is looking to see if there is a remainder or not, in this case we want a remainder
		theRow = Ti.UI.createTableViewRow({
			title: tableData[i],
			backgroundColor: '#ffd700',
			color: '#000000',
			clubInfo: tableData[i]
		});
	};
	
	allRows.push(theRow);	
};

table.setData(allRows);
view.add(label);
winLand.add(view);
winLand.add(table);
winLand.open();

function openWindow(club){
	var indicator = club.charAt (0);

	if(indicator == 'A'){
		var win1 = Ti.UI.createWindow();
		var view1 = Ti.UI.createView();
		var label1 = Ti.UI.createLabel ({
			borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#ffd700',
			top:10,
			fontsize:14,
			text: 'American Marketing Association (AMA): A national organization for students, academics and professionals. Join as early as your freshman year to learn about marketing career opportunities. Faculty Advisor: Sanjay Sisodiya'
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
			button1open();	});
		return 0;
	};
	if(indicator == 'B'){
		var win2 = Ti.UI.createWindow({
	
		});
		var view2 = Ti.UI.createView();
		var label2 = Ti.UI.createLabel ({
			borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#ffd700',
			top:10,
			fontsize:14,
			text: 'Beta Alpha Psi (BAP) and the Student Accounting Association (SAA): A national scholastic and professional accounting fraternity. Any University of Idaho student can join the Student Accounting Association. Those who join BAP must be majoring in accounting, information systems, and finance, be in or have completed their first upper-division course in their major, have a 3.0 GPA or higher, and have minimum attendance requirements. SAA and BAP share the same meetings, which often include having professional speakers from nearby businesses. Their meetings may cover topics such as interview techniques, or the groups may engage in socials, fundraisers, and community service. Faculty Advisor: Jane Weiss'
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
			button2open();	});
		return 0;
	};
	if(indicator == 'D'){
		var win3 = Ti.UI.createWindow({
	
		});
		var view3 = Ti.UI.createView();
		var label3 = Ti.UI.createLabel ({
			borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#ffd700',
			top:10,
			fontsize:14,
			text: 'Distinguished Sophomore Business Club: A group that recognizes 3.7-4.0 GPA sophomores and junior transfers who are not ready to begin the Integrated Business Curriculum (IBC). Membership provides information about exciting opportunities that enhance ones career opportunities. Faculty Advisor: Daniel Borgia'
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
			button3open();	});
		return 0;		
	};
};

//Starting of second table code

var viewWeather = Ti.UI.createView({
		top: 150,
		height: '10%',
		
});

var labelWeather = Ti.UI.createLabel({
	text : ' LABEL2',
	color : '#ffd700',
	top: '45%',
	font: {fontSize: 12},
	textAlign : 'left'
});

var tableDataWeather = [ 'American Marketing Association', 'Beta Alpha Psi and the Student Accounting Association', 
'Distinguished Sophomore Business Club'];

var tableWeather = Ti.UI.createTableView({
	top: '50%',
  	data: tableDataWeather,
});

allRows = [];

for (var i=0; i<tableDataWeather.length; i++){
	
	if (i%2 == 0){ // if case is looking to see if there is a remainder or not, in this case we don't want one
		theRow = Ti.UI.createTableViewRow({
			title: tableDataWeather[i],
			backgroundColor: '#000000',
			color: '#ffd700',
			clubInfo: tableDataWeather[i]
		});
	};
	
	if( i%2 == 1){ // if case is looking to see if there is a remainder or not, in this case we want a remainder
		theRow = Ti.UI.createTableViewRow({
			title: tableDataWeather[i],
			backgroundColor: '#ffd700',
			color: '#000000',
			clubInfo: tableDataWeather[i]
		});
	};
	
	allRows.push(theRow);	
};

tableWeather.setData(allRows);
viewWeather.add(labelWeather);
winLand.add(viewWeather);
winLand.add(tableWeather);
//winLand.open();

function openWindow(club){
	var indicatorX = club.charAt (0);

	if(indicatorX == 'A'){
		var win4 = Ti.UI.createWindow();
		var view4 = Ti.UI.createView();
		var label4 = Ti.UI.createLabel ({
			borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#ffd700',
			top:10,
			fontsize:14,
			text: 'American Marketing Association (AMA): A national organization for students, academics and professionals. Join as early as your freshman year to learn about marketing career opportunities. Faculty Advisor: Sanjay Sisodiya'
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
		win1.add(buttonView4);				
		view4.add(label4);
		win4.add(button4);
		win4.add(view4);
		win4.open();
		button4.addEventListener('click', function(e){
			button4open();	});
		return 0;
	};
	if(indicatorX == 'B'){
		var win5 = Ti.UI.createWindow({
	
		});
		var view5 = Ti.UI.createView();
		var label5 = Ti.UI.createLabel ({
			borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#ffd700',
			top:10,
			fontsize:14,
			text: 'Beta Alpha Psi (BAP) and the Student Accounting Association (SAA): A national scholastic and professional accounting fraternity. Any University of Idaho student can join the Student Accounting Association. Those who join BAP must be majoring in accounting, information systems, and finance, be in or have completed their first upper-division course in their major, have a 3.0 GPA or higher, and have minimum attendance requirements. SAA and BAP share the same meetings, which often include having professional speakers from nearby businesses. Their meetings may cover topics such as interview techniques, or the groups may engage in socials, fundraisers, and community service. Faculty Advisor: Jane Weiss'
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
		view5.add(label2);
		win5.add(button2);
		win5.add(view2);
		win5.open();
		button5.addEventListener('click', function(e){
			button5open();	});
		return 0;
	};
	if(indicatorX == 'D'){
		var win6 = Ti.UI.createWindow({
	
		});
		var view6 = Ti.UI.createView();
		var label6 = Ti.UI.createLabel ({
			borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#ffd700',
			top:10,
			fontsize:14,
			text: 'Distinguished Sophomore Business Club: A group that recognizes 3.7-4.0 GPA sophomores and junior transfers who are not ready to begin the Integrated Business Curriculum (IBC). Membership provides information about exciting opportunities that enhance ones career opportunities. Faculty Advisor: Daniel Borgia'
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
			button6.open();	});
		return 0;		
	};
};