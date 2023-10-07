function calculat() {

    var nmp = document.getElementById('nump').value;
    
    var sseas = document.getElementById('season').value;
    var please = document.getElementById('places').value;
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
 
 
    if (please == "neom") {
 
      if (hc.checked) {
        var thotel = 600;
       var hcost = parseInt(nmd) * thotel;
      total += hcost * parseInt(nmp);
 
      }
      if (fl.checked) {
        var tfligth = 450;
        var fcost = tfligth * parseInt(nmp);
        total += fcost;
      }
      if (dr.checked) {
        var tdriver = 100;
        var dcost = parseInt(nmd) * tdriver;
        total += dcost;
      }
      if (sseas == 'win') {
        var ext = 1.5;
      }
      if (sseas == 'sum') {
        var ext = 0.8;
      }
      if (sseas == 'aut') {
        var ext = 1;
      }
      if (sseas == 'spr') {
        var ext = 1.2;
      }
 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total travel = " + total1 + "SAR<br> Please be aware this cost is not spesfic.<br>";
      return;
 
 
    }
 
    if (please == "riyadh") {
      if (hc.checked == true) {
        var thotel = 200;
        var hcost = parseInt(nmd) * thotel;
       total += hcost * parseInt(nmp);
      }
      if (fl.checked == true) {
        var tfligth = 500;
        var fcost = tfligth * parseInt(nmp);
        total += fcost;
      }
      if (dr.checked == true) {
        var tdriver = 50;
        var dcost = parseInt(nmd) * tdriver;
        total += dcost;
      }
      if (sseas == 'win') {
        var ext = 2.0;
      }
      if (sseas == 'sum') {
        var ext = 1.0;
      }
      if (sseas == 'aut') {
        var ext = 0.9;
      }
      if (sseas == 'spr') {
        var ext = 1.2;
      }
 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total travel = " + total1 + "SAR<br> Please be aware this cost is not spesfic.";
      return;
 
 
    }

    if (please == "zulfi") {
      if (hc.checked == true) {
        var thotel = 75;
        var hcost = parseInt(nmd) * thotel;
       total += hcost * parseInt(nmp);
      }
      if (fl.checked == true) {
        var tfligth = 1;
        var fcost = tfligth * parseInt(nmp);
        total += fcost;
      }
      if (dr.checked == true) {
        var tdriver = 20;
        var dcost = parseInt(nmd) * tdriver;
        total += dcost;
      }
      if (sseas == 'win') {
        var ext = 1.5;
      }
      if (sseas == 'sum') {
        var ext = .5;
      }
      if (sseas == 'aut') {
        var ext = 1;
      }
      if (sseas == 'spr') {
        var ext = 1.2;
      }
 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total travel = " + total1 + "SAR<br> Please be aware this cost is not spesfic.";
      return;
 
 
    }

    if (please == "aljouf") {
      if (hc.checked == true) {
        var thotel = 120;
        var hcost = parseInt(nmd) * thotel;
       total += hcost * parseInt(nmp);
      }
      if (fl.checked == true) {
        var tfligth = 300;
        var fcost = tfligth * parseInt(nmp);
        total += fcost;
      }
      if (dr.checked == true) {
        var tdriver = 30;
        var dcost = parseInt(nmd) * tdriver;
        total += dcost;
      }
      if (sseas == 'win') {
        var ext = 1.6;
      }
      if (sseas == 'sum') {
        var ext = 0.8;
      }
      if (sseas == 'aut') {
        var ext = 1.2;
      }
      if (sseas == 'spr') {
        var ext = 1.5;
      }
 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total travel = " + total1 + "SAR<br> Please be aware this cost is not spesfic.";
      return;
 
 
    }

    if (please == "dammam") {
      if (hc.checked == true) {
        var thotel =150;
        var hcost = parseInt(nmd) * thotel;
       total += hcost * parseInt(nmp);
      }
      if (fl.checked == true) {
        var tfligth = 500;
        var fcost = tfligth * parseInt(nmp);
        total += fcost;
      }
      if (dr.checked == true) {
        var tdriver = 40;
        var dcost = parseInt(nmd) * tdriver;
        total += dcost;
      }
      if (sseas == 'win') {
        var ext = 1.4;
      }
      if (sseas == 'sum') {
        var ext = 0.6;
      }
      if (sseas == 'aut') {
        var ext = 1;
      }
      if (sseas == 'spr') {
        var ext = 1.2;
      }
 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total travel = " + total1 + "SAR<br> Please be aware this cost is not spesfic.";
      return;
 
 
    }

    if (please == "yanbu") {
      if (hc.checked == true) {
        var thotel = 180;
        var hcost = parseInt(nmd) * thotel;
       total += hcost * parseInt(nmp);
      }
      if (fl.checked == true) {
        var tfligth = 1;
        var fcost = tfligth * parseInt(nmp);
        total += fcost;
      }
      if (dr.checked == true) {
        var tdriver = 75;
        var dcost = parseInt(nmd) * tdriver;
        total += dcost;
      }
      if (sseas == 'win') {
        var ext = 1.3;
      }
      if (sseas == 'sum') {
        var ext = 1;
      }
      if (sseas == 'aut') {
        var ext = 0.9;
      }
      if (sseas == 'spr') {
        var ext = 1.7;
      }
 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total travel = " + total1 + "SAR<br> Please be aware this cost is not spesfic.";
      return;
 
 
    }

    if (please == "alahsa") {
      if (hc.checked == true) {
        var thotel = 100;
        var hcost = parseInt(nmd) * thotel;
       total += hcost * parseInt(nmp);
      }
      if (fl.checked == true) {
        var tfligth = 300;
        var fcost = tfligth * parseInt(nmp);
        total += fcost;
      }
      if (dr.checked == true) {
        var tdriver = 35;
        var dcost = parseInt(nmd) * tdriver;
        total += dcost;
      }
      if (sseas == 'win') {
        var ext = 1;
      }
      if (sseas == 'sum') {
        var ext = 1;
      }
      if (sseas == 'aut') {
        var ext = 1.4;
      }
      if (sseas == 'spr') {
        var ext = 1.5;
      }
 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total travel = " + total1 + "SAR<br> Please be aware this cost is not spesfic.";
      return;
 
 
    }

    if (please == "Jeddah") {
      if (hc.checked == true) {
        var thotel = 200;
        var hcost = parseInt(nmd) * thotel;
       total += hcost * parseInt(nmp);
      }
      if (fl.checked == true) {
        var tfligth = 450;
        var fcost = tfligth * parseInt(nmp);
        total += fcost;
      }
      if (dr.checked == true) {
        var tdriver = 70;
        var dcost = parseInt(nmd) * tdriver;
        total += dcost;
      }
      if (sseas == 'win') {
        var ext = 1.3;
      }
      if (sseas == 'sum') {
        var ext = 0.7;
      }
      if (sseas == 'aut') {
        var ext = 0.9;
      }
      if (sseas == 'spr') {
        var ext = 1.2;
      }
 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total travel = " + total1 + "SAR<br> Please be aware this cost is not spesfic.";
      return;
 
 
    }

    if (please == "alula") {
      if (hc.checked == true) {
        var thotel = 300;
        var hcost = parseInt(nmd) * thotel;
       total += hcost * parseInt(nmp);
      }
      if (fl.checked == true) {
        var tfligth = 1000;
        var fcost = tfligth * parseInt(nmp);
        total += fcost;
      }
      if (dr.checked == true) {
        var tdriver = 120;
        var dcost = parseInt(nmd) * tdriver;
        total += dcost;
      }
      if (sseas == 'win') {
        var ext = 1.5;
      }
      if (sseas == 'sum') {
        var ext = 1.2;
      }
      if (sseas == 'aut') {
        var ext = 1;
      }
      if (sseas == 'spr') {
        var ext = 1.8;
      }
 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total travel = " + total1 + "SAR<br> Please be aware this cost is not spesfic.";
      return;
 
 
    }

    if (please == "abha") {
      if (hc.checked == true) {
        var thotel = 150;
        var hcost = parseInt(nmd) * thotel;
       total += hcost * parseInt(nmp);
      }
      if (fl.checked == true) {
        var tfligth = 300;
        var fcost = tfligth * parseInt(nmp);
        total += fcost;
      }
      if (dr.checked == true) {
        var tdriver = 50;
        var dcost = parseInt(nmd) * tdriver;
        total += dcost;
      }
      if (sseas == 'win') {
        var ext = 0.8;
      }
      if (sseas == 'sum') {
        var ext = 3;
      }
      if (sseas == 'aut') {
        var ext = 1.2;
      }
      if (sseas == 'spr') {
        var ext = 1;
      }
 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total travel = " + total1 + "SAR<br> Please be aware this cost is not spesfic.";
      return;
 
 
    }

    if (please == "qassim") {
      if (hc.checked == true) {
        var thotel = 190;
        var hcost = parseInt(nmd) * thotel;
       total += hcost * parseInt(nmp);
      }
      if (fl.checked == true) {
        var tfligth = 250;
        var fcost = tfligth * parseInt(nmp);
        total += fcost;
      }
      if (dr.checked == true) {
        var tdriver = 25;
        var dcost = parseInt(nmd) * tdriver;
        total += dcost;
      }
      if (sseas == 'win') {
        var ext = 1.8;
      }
      if (sseas == 'sum') {
        var ext = 1.6;
      }
      if (sseas == 'aut') {
        var ext = 1;
      }
      if (sseas == 'spr') {
        var ext = 1;
      }
 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total travel = " + total1 + "SAR<br> Please be aware this cost is not spesfic.";
      return;
 
 
    }

    if (please == "jazan") {
      if (hc.checked == true) {
        var thotel = 120;
        var hcost = parseInt(nmd) * thotel;
       total += hcost * parseInt(nmp);
      }
      if (fl.checked == true) {
        var tfligth = 400;
        var fcost = tfligth * parseInt(nmp);
        total += fcost;
      }
      if (dr.checked == true) {
        var tdriver = 30;
        var dcost = parseInt(nmd) * tdriver;
        total += dcost;
      }
      if (sseas == 'win') {
        var ext = 1;
      }
      if (sseas == 'sum') {
        var ext = 1.1;
      }
      if (sseas == 'aut') {
        var ext = 1.6;
      }
      if (sseas == 'spr') {
        var ext = 0.8;
      }
 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total travel = " + total1 + "SAR<br> Please be aware this cost is not spesfic.";
      return;
 
 
    }
 

 
      var total1 = ext * total ;
      document.getElementById('result').innerHTML="Your total cost = " + total1 + "SAR<br> Please be aware this cost is not spesfic.";
      return;
    }

 