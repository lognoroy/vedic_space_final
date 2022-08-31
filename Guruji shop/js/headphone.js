// function incrementValue()
// {
//     var value = parseInt(document.getElementById('no').value, 10);
//     value = isNaN(value) ? 0 : value;
//     if(value<10){
//         value++;
//             document.getElementById('no').value = value;
//     }
// }



function increment()
{
    
    var count=document.getElementById("num").innerHTML;
    // console.log(count);

    var value=parseInt(count,10)+1;
    // console.log(value);
    document.getElementById("num").innerHTML=value;

}


function decrement()
{
    var count=document.getElementById("num").innerHTML;

    if(count>=1)
    {
        // console.log(count);
        
    
    
        var value=parseInt(count,10)-1;
        // console.log(value);
        document.getElementById("num").innerHTML=value;
    }
   

}


