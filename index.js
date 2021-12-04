function clock(){

    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var session=document.getElementById("am");

   
    var h=new Date().getHours();
    var m=new Date().getMinutes();
    var s=new Date().getSeconds();
    session.innerText="AM";

    if (h>=12) {
        session.innerText="PM";
     }
    if (h>12) {
        h=h-12;
    }
    if (h<10) {
        h="0"+h;
    }
    if (h==0) {
        h=12;
    }
    if (m<10) {
        m="0"+m;
    }
    if (s<10) {
        s="0"+s;
    }

    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;

}


var interval= setInterval(clock,1000);

function Makediv() {
    
    var container=document.createElement('div');
    container.className="grid1";
    container.id="dynamic-block";

    document.getElementById("grid1").appendChild(container);  

    var invalue1=document.getElementById("wakeUpTimeSelector");
    var value1=invalue1.options[invalue1.selectedIndex].text;

    var invalue2=document.getElementById("lunchTimeSelector");
    var value2=invalue2.options[invalue2.selectedIndex].text;

    var invalue3=document.getElementById("napTimeSelector");
    var value3=invalue3.options[invalue3.selectedIndex].text;
    document.getElementById("dynamic-block").innerText="Wake up time : " + value1 + "\n" +"Lunch time : "
     + value2 + "\n" +" Nap time  :" + value3;

}

function settime() {

    var i=document.getElementById("wakeUpTimeSelector").value;
    var hourr=new Date().getHours();

    if (i==hourr) {
        document.getElementById("bottom").style.backgroundImage="url(./pics/wakeup-img.png)";
        document.getElementById("top").innerHTML="Let's have some Breakfast ! !";
    }

    var j=document.getElementById("lunchTimeSelector").value;
    var hourr=new Date().getHours();

    if (j==hourr) {
        document.getElementById("bottom").style.backgroundImage="url(./pics/lunchimage.png)";
        document.getElementById("top").innerHTML="Let's have some Lunch ! !";
    }


    var k=document.getElementById("napTimeSelector").value;
    var hourr=new Date().getHours();

    if (k==hourr) {
        document.getElementById("bottom").style.backgroundImage="url(./pics/goodnight-img.png)";
        document.getElementById("top").innerHTML="Let's sleep ! !";
    }

     Makediv();

}