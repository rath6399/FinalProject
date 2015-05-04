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
    left:50,
    right:50,
    top:8,
    height: 40
});
viewLogin.add(buttonLogin);
 
 buttonLogin.addEventListener('click', function(){
    alert('Login Successful \n You have logged in with a username of "'+username.value+'"');
    username.blur();
    password.blur(); 
	});

buttonLogin.addEventListener('click', function(e){
    var win1 = Ti.UI.createWindow({
        backgroundColor : 'white',
        url             : '\Eventsapp.js' //Path to your LandingPage js file
    });
    win1.open();
});

var buttonGuest = Ti.UI.createButton({
    title:'Guest',
    left:50,
    right:50,
    top:8,
    height: 40
});
viewLogin.add(buttonGuest);

buttonGuest.addEventListener('click', function(){
    alert('Login Successful \n You have logged in as Guest');
    username.blur();
    password.blur(); 
	});

buttonGuest.addEventListener('click', function(e){
    var win1 = Ti.UI.createWindow({
        backgroundColor : 'white',
        url             : '\Eventsapp.js' //Path also to your LandingPage js file
    });
    win1.open();
});

winLogin.open();