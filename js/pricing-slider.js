function osFunction() {
    var x = document.getElementById("os").value;
    document.getElementById("osname").innerHTML = x;
   }
   
   
   $(document).ready(function() {
    $("#slider1").slider({
    range: "min",
    animate: true,
    value:2,
    min: 1,
    max: 16,
    step: 1,
    slide: function(event, ui) {
    update(1,ui.value); //changed
    }
    });
    
    $("#slider2").slider({
    range: "min",
    animate: true,
    value:2,
    min: 1,
    max: 64,
    step: 1,
    slide: function(event, ui) {
    update(2,ui.value); //changed
    }
    });
    
    $("#slider3").slider({
    range: "min",
    animate: true,
    value:40,
    min: 20,
    max: 500,
    step: 10,
    slide: function(event, ui) {
    update(3,ui.value); //changed
    }
    });
    
    $("#slider4").slider({
    range: "min",
    animate: true,
    value:2,
    min: 1,
    max: 5,
    step: 1,
    slide: function(event, ui) {
    update(4,ui.value); //changed
    }
    });
    
    //Added, set initial value.
    $("#cpuamt").val(2);
    
    $("#ramamt").val(2);
    
    $("#ssdamt").val(30);
    
    $("#ipsamt").val(2);
    
    update();
   });
   
   function update(slider,val) {
    var formatNumber = {
    separador: ",",
    sepDecimal: '.',
    formatear:function (num){
    num +='';
    var splitStr = num.split('.');
    var splitLeft = splitStr[0];
    var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
    var regx = /(\d+)(\d{3})/;
    while (regx.test(splitLeft)) {
    splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
    }
    return this.simbol + splitLeft + splitRight;
    },
    new:function(num, simbol){
    this.simbol = simbol ||'';
    return this.formatear(num);
    }
    }
    
    //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
    var $cpuamt = slider == 1?val:$("#cpuamt").val();
    var $ramamt = slider == 2?val:$("#ramamt").val();
    var $ssdamt = slider == 3?val:$("#ssdamt").val();
    var $ipsamt = slider == 4?val:$("#ipsamt").val();
    
    $cpu = ($cpuamt * 6);
    $ram = ($ramamt * 3);
    $ssd = ($ssdamt * 3);
    $ips = ($ipsamt * 10);
    
    $total = $cpu + $ram + $ssd + $ips
    
    $( "#cpuamt" ).val($cpuamt);
    $( "#cpuamt-label" ).text($cpuamt);
    $( "#total-cpuamt" ).html('<label><span class="currency-value">£</span> '+$cpu+ '</label>');
    
    $( "#ramamt" ).val($ramamt);
    $( "#ramamt-label" ).html($ramamt+ 'GB');
    $( "#total-ramamt" ).html('<label><span class="currency-value">£</span> '+$ram+ '</label>');
    
    $( "#ssdamt" ).val($ssdamt);
    $( "#ssdamt-label" ).html($ssdamt+ 'GB');
    $( "#total-ssdamt" ).html('<label><span class="currency-value">£</span> '+$ssd+ '</label>');
    
    $( "#ipsamt" ).val($ipsamt);
    $( "#ipsamt-label" ).text($ipsamt);
    $( "#total-ipsamt" ).html('<label><span class="currency-value">£</span> '+$ips+ '</label>');
    
    $( "#total" ).val($total);
    $( "#total-label" ).html('<label><span class="currency-value">£</span> '+$total+ '<span class="month-range">/Month</span></label>');
    
    $('#cpu-value').html($cpuamt);
    $('#ram-value').html($ramamt+ 'GB');
    $('#ssd-value').html($ssdamt+ 'GB');
    $('#ips-value').html($ipsamt);
   }