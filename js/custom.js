function receiveData(qab)
{
   console.log(qab.length);
}

function changeColor(e)
{
    console.log(e.value);
    document.body.style.backgroundColor=e.value;
}


function checkLength()
{
    console.clear();
    var name = document.getElementById('name');
    // var ad= name.value;//.toLower();
    // var ad= name.value.toLowerCase();
    var ad= name.value.toUpperCase();
    console.log('Ad: ',ad);
    console.log("Adin Uzunlugu: ",ad.length);
    console.log("Adda 's' - herfinin unvani: ",ad.indexOfInvariant('s'));    
    // console.log("Adda 't' - herfinin unvani: ",indexOfInvariant(ad,'t'));
    console.log("Adda 't' - herfinin son unvani: ",ad.lastIndexOfInvariant('t'));
// /,/g, '-'
    ad=ad.replace(/C/g,"K");
    
    console.log('Ad: ',ad);

}


function introBoolean()
{
    var _false1 = new Boolean(0);
    var _true1 = new Boolean(1);
    console.log(_false1,_true1);
    
    var _false2 = new Boolean("");
    var _true2 = new Boolean("Code");
    console.log(_false2,_true2);

    
    var _false3 = new Boolean(NaN);
    var _true3 = new Boolean('NaN');
    console.log(_false3,_true3);
    
    var _false4 = new Boolean(null);
    var _true4 = new Boolean('null');
    console.log(_false4,_true4);
    
    var _false5 = new Boolean(false);
    var _true5 = new Boolean(true);
    console.log(_false5,_true5);

    var _false6 = false;
    var _true6 = true;
    console.log(_false6,_true6);

    var _false7 = 1==2;
    var _true7 = 1!=2;
    console.log(_false7,_true7);
}

function mathIntro()
{
    console.log('2^3=',Math.pow(2,3));
    console.log('8^(1/3)=',Math.pow(8,1/3));
}
mathIntro();
// function indexOfInvariant(value,search)
// {
//     return value.toUpperCase().indexOf(search.toUpperCase());
// }

function circleArea()
{
   var radius = parseInt(document.getElementById('radius').value);
   var area = Math.PI*Math.pow(radius,2);
   console.log('Dairenin(radius='+radius+') sahesi: ',area);
}

function ringLength()
{
    var radius = parseInt(document.getElementById('radius').value);
    var ringLength = 2*Math.PI*radius;    
    console.log('Cevrenin(radius='+radius+') uzunlugu: ',ringLength);
}



String.prototype.indexOfInvariant = function (search) {
    return this.toUpperCase().indexOf(search.toUpperCase());;
};

String.prototype.lastIndexOfInvariant = function (search) {
    return this.toUpperCase().lastIndexOf(search.toUpperCase());;
};