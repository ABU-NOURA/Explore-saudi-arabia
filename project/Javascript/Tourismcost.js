function calculat() {

    var nmp = document.getElementById('nump').value;
    var wslected = document.getElementsByName('go');
    var sseas = document.getElementById('seas').value;
    var nmd = document.getElementById('numd').value;
    var hc = document.getElementById('hotel');
    var fl = document.getElementById('flight');
    var dr = document.getElementById('driver');
       var total = 0;
 
    if (nmp <= 0)
    {
      document.getElementById('result').innerHTML="Enter persons please";
      return;
    }
    if (nmd <= 0)
    {
      document.getElementById('result').innerHTML="Enter days please";
      return;
    }
 
 
    if (wslected[0].checked) {
 
      if (hc.checked) {
        var thotel = 150;
       var hcost = parseInt(nmd) * thotel;
      total += hcost * parseInt(nmp);
 
      }
      if (fl.checked) {
        var tfligth = 450;
        var fcost = tfligth * parseInt(nmp);
        total += fcost;
      }
      if (dr.checked) {
        var tdriver = 75;
        var dcost = parseInt(nmd) * tdriver;
        total += dcost;
      }
      if (sseas == 'win') {
        var ext = 0.90;
      }
      if (sseas == 'sum') {
        var ext = 1.2;
      }
      if (sseas == 'aut') {
        var ext = 1;
      }
      if (sseas == 'spr') {
        var ext = 1.1;
      }
 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total travel = " + total1 + "SAR<br> Please be aware this cost is not spesfic.<br>";
      return;
 
 
    }
 
    if (wslected[1].checked) {
      if (hc.checked == true) {
        var thotel = 250;
        var hcost = parseInt(nmd) * thotel;
       total += hcost * parseInt(nmp);
      }
      if (fl.checked == true) {
        var tfligth = 700;
        var fcost = tfligth * parseInt(nmp);
        total += fcost;
      }
      if (dr.checked == true) {
        var tdriver = 100;
        var dcost = parseInt(nmd) * tdriver;
        total += dcost;
      }
      if (sseas == 'win') {
        var ext = 0.8;
      }
      if (sseas == 'sum') {
        var ext = 1.4;
      }
      if (sseas == 'aut') {
        var ext = 0.9;
      }
      if (sseas == 'spr') {
        var ext = 1.3;
      }
 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total travel = " + total1 + "SAR<br> Please be aware this cost is not spesfic.";
      return;
 
 
    }
 
    if (wslected[2].checked) {
      if (hc.checked == true) {
        var thotel = 450;
        var hcost = parseInt(nmd) * thotel;
       total += hcost * parseInt(nmp);
      }
      if (fl.checked == true) {
        var tfligth = 1000;
        var fcost = tfligth * parseInt(nmp);
        total += fcost;
      }
      if (dr.checked == true) {
        var tdriver = 200;
        var dcost = parseInt(nmd) * tdriver;
        total += dcost;
      }
      if (sseas == 'win') {
        var ext = 0.6;
      }
      if (sseas == 'sum') {
        var ext = 1.1;
      }
      if (sseas == 'aut') {
        var ext = 1.3;
      }
      if (sseas == 'spr') {
        var ext = 1.3;
      }
 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total cost = " + total1 + "SAR<br> Please be aware this cost is not spesfic.";
      return;
    }
  }
 