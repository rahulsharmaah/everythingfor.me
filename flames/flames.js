

function checnum(as)
{
	var dd = as.value;

            	if(!isNaN(dd))
            	{
            		dd = dd.substring(0,(dd.length-1));
            		as.value = dd;
            	}	
}

function calc() 
{
	var fname = document.getElementById('yname').value;
	var sname = document.getElementById('lname').value;
	if (fname=='') {
		alert("Enter Your Name");
	}
	else if (sname=='') {
		alert("Enter Partner Name");
	}
    var r = /\s+/g;
    var orfirst = document.first.name.value.toUpperCase();
    var nam=orfirst;
    orfirst = orfirst.replace(r,"");
    if(orfirst!="")
    {
			var count = 0;
            var first = orfirst;	
            second = eval("document.first.name"+1).value.toUpperCase();
            var names=second;
            second = second.replace(r,"");	
            if(second != "")
            {
                document.getElementById("tablid").style.display = 'block';
                    for(var xx=0; xx<first.length; xx++)
                    {
                            for(var yy=0; yy<second.length; yy++)
                            {
                                    if(first[xx] == second[yy])
                                    {
                                            var a1 = first.substring(0,xx);
                                            var a2 = first.substring(xx+1,first.length);
                                            first = a1+a2;
                                            xx=-1;
                                            var b1 = second.substring(0,yy);
                                            var b2 = second.substring(yy+1,second.length);
                                            second = b1+b2;
                                            yy=-1;
                                            break;
                                    }
                            }
                    }
            
                    var ss=(first+second);
                    var l=ss.length;
                    var ar = new Array("F", "L", "A", "M", "E", "S");
                    var stp=1;
            
                    for(var x=6; x>1; x--)
                    {
                            var g=((l%x)+stp)-1;
                            if(g>x)
                            {
                                    g=g%x;
                            }
                            if(g==0)
                            {
                                    g=ar.length;
                            }
                            ar.splice(g-1,1);
                            stp=g;
                            //alert(ar);
                    }

                    
                    if(ar=="F")
                    {
                            //res="FRIENDS";
							document.getElementById("msg").innerHTML = '<h1>Your relationship is :FRIENDS</h1>';
							document.getElementById("msg").style.color='black';                  
                    }
                    else if(ar=="L")
                    {
                            //res="LOVER";
							document.getElementById("msg").innerHTML = '<h1> Your relationship is :LOVER</h1>';
							document.getElementById("msg").style.color='maroon';
                    }
                    else if(ar=="A")
                    {
                            //res="AFFECTION";
							document.getElementById("msg").innerHTML = '<h1>Your relationship is : AFFECTION</h1>';
							document.getElementById("msg").style.color='orange';
                    } 
                    else if(ar=="M")
                    {
                            //res="MARRIAGE";
							document.getElementById("msg").innerHTML = '<h1>Your relationship is :MARRIAGE</h1>';
							document.getElementById("msg").style.color='purple';
                    }
                    else if(ar=="E")
                    {	
                            //res="ENEMY";
							document.getElementById("msg").innerHTML = '<h1>Your relationship is :ENEMY</h1>';
							document.getElementById("msg").style.color='gold';
                    }
                    else if(ar=="S")
                    {
                            //res="SISTER";
							document.getElementById("msg").innerHTML = '<h1>Your relationship is:SISTER</h1>';
							document.getElementById("msg").style.color='violet';
		    }
                    document.getElementById("nam"+1).style.display = 'block';
                    document.getElementById("nam"+1).textContent="Hye" + " "+nam + " &" +names;
            }
            else
            {
                    document.getElementById("nam"+1).style.display = 'none';
                    count++; 
                    if(count==4)
                    {
                            alert("Enter anyone of your partner name");
                            document.getElementById("tablid").style.display = 'block';
                    }
            }          
    }
    else
    {
            return false;
    }
}
