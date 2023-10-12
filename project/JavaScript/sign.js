function JsValidation(){
    let fn = document.forms["theform"]["fname"].value;
    let ln = document.forms["theform"]["lname"].value;
    let em = document.forms["theform"]["email"].value;
    let rem = document.forms["theform"]["reemail"].value;
    let ph = document.forms["theform"]["phone"].value;
    let ag = document.forms["theform"]["age"].value;
  
  
    if (fn==null || fn==""){
      alert("first name can't be empty");
      return false;
    }
    else if (ln==null || ln==""){
      alert("last name can't be empty");
      return false;
  }
  else if (em==null || em==""){
    alert("email can't be empty");
    return false;
  }
  else if (rem==null || rem==""){
    alert("email can't be empty");
    return false;
  }
  else if (em !=rem){
    alert("email not't match");
    return false;
  }
  else if (ph.length<10 || ph.length>15 ){
    alert("wrong phone number or empty");
    return false;
  }
  else if (ag.length<1 || ag.length>3){
    alert("age is too big or empty");
    return false;
  }
  if ( ( theform.tb[0].checked == false ) && ( theform.tb[1].checked == false ) )
  {
  alert ( "you have not chosen if you traveled before or not");
  return false;
  }
  }
  