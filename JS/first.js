const d=document;
const arr=["Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices.</br></br>You can watch as much as you want, whenever you want, without a single ad all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!","Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.","Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</br></br>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.","Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.","Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.","The Netflix Kids experience is included in your membership to give parents control while kids enjoy family friendly TV shows and films in their own space.</br></br>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."];
const divs=d.querySelectorAll(".box_list");
const sub_divs=d.querySelectorAll(".sub_box");
const ii=d.querySelectorAll("i");
const arryofset=[];
const de=new Array();
const doi=new Array();
const count=[0,0,0,0,0,0];
divs.forEach((e,i)=>{ 
    let op=1;
    const data=new Array();
    e.addEventListener("click",()=>{
       
       
        
        const p=d.createElement("p");  
        data.push(p);
        if(op%2!=0)
        {

         p.innerHTML=arr[i];
         sub_divs[i].append(p);
         sub_divs[i].classList.add("sub_box1");
         ii[i].classList.add("rotate");
        
        }

        if(op%2==0)
        {  data[op-2].remove();
            ii[i].classList.remove("rotate");
            sub_divs[i].classList.remove("sub_box1");
            console.log("hello");
        }
        arryofset.push(p);
        de.push(sub_divs[i]); 
         doi.push(ii[i]);
        
        delt();
         
           
        
       
        op++;
       
         
    })

})
function delt()
{
if(arryofset.length>1)
{
  arryofset[arryofset.length-2].remove();
  arryofset.shift();
    de[de.length-2].classList.remove("sub_box1");
    de.shift();
    doi[doi.length-2].classList.remove("rotate");
    doi.shift();
    
    
}


}