var emailEntry = document.getElementById('email').innerHTML;
var factBoxEntry = document.getElementById('factBox').innerHTML;

	
//When an email entry is submitted via button press, 
//this function will test to see if the email entered is in the correct format.
//to be called onSubmit
function testEmail (){
  var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegEx.test(emailEntry)) {
    console.log ('Valid Email Format');
    }
  if (emailEntry = " "){
    alert ('Please Enter an Email Address.')
  }
  else {
   alert ('Invalid Email Format. Please Try Again.'); 
  }
}

// displayCharLimit() displays available characters that can be typed in the textbox 
function displayCharLimit(){
  var charLimit = factBox.maxLength;
  var text = document.form.factBox.value; // creates a int count of characters currently in the textArea
  var len = text.length; // stores count
   if (len > charLimit) { // if amount of characters exceeds charater limit
     text = text.substring(0, charLimit); // dont print any characters past limit
   }
   //document.form.limit.value = charLimit;
}

/*Function setLocalStorage() 
checks if a single character or more is input in the email or factBox labels
and if the browser is compatible.
the function will save that character(s) in localStorage via setItem(key,value)
and access the input text via getItem (key,value)
Should be called onInput for both text boxes
*/

function setLocalStorage(){
  var emailCharCount = emailEntry.length;
  var factCharCount = factBoxEntry.length;
  
    if (emailCharCount > 0 && typeof(Storage) !== "undefined") {
      localStorage.setItem('email', "emailEntry");
    }
    if (factCharCount > 0 && typeof(Storage) !== "undefined") {
      localStorage.setItem('factBox', 'factBoxEntry');
    }
  document.getElementById('email').innerHTML = localStorage.getItem('emailEntry'); 
  document.getElementById('factBox').innerHTML = localStorage.getItem('factBoxEntry');
}

// function clearForm clears the contents of both email and factBox
// simply replace contents with an empty string
// call when specified button is clicked
  function clearForm() {
    document.getElementById('email').innerHTML =  " ";
    document.getElementById('factBox').innerHTML = " ";
  }

/* function undoForm restores previous states of email text box
   and factBox text box, by accessing localStorage via getItem
*/
  function undoForm() {
    document.getElementById('email').innerHTML =          localStorage.getItem('emailEntry'); 
    document.getElementById('factBox').innerHTML = localStorage.getItem('factBoxEntry');
  }