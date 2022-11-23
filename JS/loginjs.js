const d=document;
const input=d.querySelectorAll("input");
const summry=d.querySelector("summary");
const arr=[".lable1",".lable2"];
const ar2r=["demolable1","demolable2"];
const arrt=["app12","app13"];
const data=["Please enter a valid email address or phone number.","Your password must contain between 4 and 60 characters."];
const get=[".app1",".app2"];
for(let i=0;i<2;i++)
{   const a=  d.querySelector(arr[i]);
    input[i].addEventListener("focus",()=>{
        if(input[i].value=="")
        a.classList.toggle(ar2r[i]);
    }) 
    let op=0;
    input[i].addEventListener("focusout",()=>{
        if(input[i].value=="")
        a.classList.toggle(ar2r[i]);

     if(input[i].value=="")
     {
        input[i].id="orange";
        if(op<1)
        {
            const p=d.createElement("div");
        p.classList.add(arrt[i]);
        p.innerHTML=data[i];
        d.querySelector(get[i]).append(p);
        
        }
        op++;
       


       
      
     }
    })
}

summry.addEventListener("click",()=>{
    summry.classList.add("gayab");
    
})

