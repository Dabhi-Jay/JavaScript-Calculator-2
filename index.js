var buttonArray=document.querySelectorAll("button");
let text="";
let obj=document.getElementById("input")
for(let i=0;i<buttonArray.length;i++)
{
    buttonArray[i].addEventListener("click",function(){
        if(buttonArray[i].innerHTML=="C")
        {
            obj.setAttribute("value","");
            text="";
        }
        else if(buttonArray[i].innerHTML=="=")
        {
            obj.setAttribute("value",eval(text));
            text=""
        }
        else{
            text=text+buttonArray[i].innerHTML;
            obj.setAttribute("value",text);
        }
    })
}
