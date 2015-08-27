function $2s(b) {
  return String.fromCharCode.apply(null, new Uint16Array(b));
}

function $2ab(x) {
  var b = new ArrayBuffer(x.length*2);
  var bV = new Uint16Array(b);
  
  for (var i=0, xL=x.length; i<xL; i++) {
    bV[i] = x.charCodeAt(i);
  }
  return b;
}

function gC(){
    var c= document.getElementById('c').value;
    c=Array.apply( 
        [],
        new Uint16Array(
            $et(
                (
                    (c)? c:" "
                )
            )
        )
    );
    return c;
}

function $864(x) {
    return window.btoa(unescape(encodeURIComponent(x)));
}
 
function $648(x) {
    return decodeURIComponent(escape(window.atob(x)));
}

function $et(x){
    return $2ab($864(x));
}

function aC(v){
    var a=v.length,
        o='';
    var c = gC();
    var cC=0,
        mC=c.length;
    
    for(var i=0;i<a;i++){
        o+=String.fromCharCode(Math.round(Math.random()*5e3))+
            (v[i]+c[cC])+
            String.fromCharCode(Math.round(Math.random()*5e3));
        cC++;
        if(cC<mC)
            continue;
        
        cC=0;
    }
    return o;
}

function rC(x){
    var v=x.split(/\D/).filter(Number);
    var a=v.length,
        o=[];
    var c = gC();
    var cC=0,
        mC=c.length;
    
    for(var i=0;i<a;i++){
        o.push(v[i]-c[cC]);
        cC++;
        if(cC<mC)
            continue;
        
        cC=0;
    }
    return o;
}

function tD(e){
    return $648(
        $2s(
            rC(
                $648(
                    e.target.value
                )
            )
        )
    );
}

function tE(e){
    return $864(
        aC(
            Array.apply( 
                [],
                new Uint16Array(
                    $et(
                        e.target.value
                    )
                )
            )
        )
    );
}

function cze(){
    var e={
        target:document.getElementById('tI')
    };
    var values=Array.apply( 
        [],
        new Uint16Array(
            $2ab(
                tE(e)
            )
        )
    );
    var crs=[];
    
    while(values.length>0){
        var cr=values.splice(0,4);
        crs.push(cr);
    }
    
    return crs;
}

function bCH(crs){
    var html=document.createElement('section');
    while(crs.length>0){
        var cr=document.createElement('div');
        var block=crs.splice(0,1)[0];
        cr.style.backgroundColor='rgb('+
                    block[0]+
                ','+
                    (block[1]?block[1]:'0')+
                ','+
                    (block[2]?block[2]:'0')+
            ')';
        cr.setAttribute('data-alpha',(block[3]?block[3]:'0'));
        cr.style.width=
            cr.style.height='5px';
        cr.style.float='left';
        html.appendChild(cr);
    }
    return html.innerHTML;
}

function eFCH(){
    var d=document.getElementById('tI').value;
    var b=d.match(/\([^)]*\)/gi).join().replace(/[\(\)\s]/ig,'').split(',');
    var a=d.match(/\"[\d\.]*\"/gi).join(',').replace(/\"/ig,'').split(',');
    var d=[];
    
    while(b.length>0){
        var n=b.splice(0,3);
        n.push(
            a.splice(0,1)[0]
        )
        d.push(
            parseInt(n[0]),
            parseInt(n[1]),
            parseInt(n[2]),
            parseInt(n[3])
        );
    }
    
    document.getElementById('tI').value=$2s(
        d
    );
        
    document.getElementById('dT').checked=true;
    sM(
        {
            target:document.getElementById('dT')
        }
    );
}

function sC(crBlocks){
    document.getElementById('tEO').style.height='50px';
    document.getElementById('vO').innerHTML=crBlocks;
}

function sT(el,value){
    document.getElementById('tEO').style.height='';
    document.getElementById('vO').innerHTML='';
    el.value=value;
}

function sM(e){
    mtd=e.target.value;
    document.getElementById('tI').oninput
    var e={
        target:document.getElementById('tI')
    };
    tED(e);
}

function tED(e){
    switch(mtd){
        case 'e' :
        case 'd' :
            sT(
                document.getElementById('tEO'),
                (
                    (mtd=='e')?
                        tE(e):
                        tD(e)
                )
            );
            break;
        case 'eCH' :
            var crs=bCH(cze());
            (
                function(){
                    setTimeout(
                        function(){
                            document.getElementById('tEO').value=crs;
                        },1
                    )
                    setTimeout(
                        function(){
                            sC(crs);
                        },2
                    )
                }
            )(crs);
            break;
        case 'dCH' :
            eFCH();
            break;
    }
}

function uC(){
    var e={
        target:document.getElementById('tI')
    };
    tED(e);
}

function cO(){
    document.getElementById('tEO').select();
    document.execCommand('copy')
}

var mtd='e';

window.onerror=function(e){
    document.getElementById('tEO').value='Invalid data supplied. If you are attempting to decrypt, make sure you are putting the encrypted data above, and that you have the correct password for the data if required.';
}

document.getElementById('tI').oninput=tED;
document.getElementById('c').oninput=uC;
document.getElementById('eT').onchange=sM;
document.getElementById('dT').onchange=sM;
document.getElementById('eCH').onchange=sM;
document.getElementById('dCH').onchange=sM;
document.getElementById('cET').onclick=cO;