// navbar 
const searchInput = document.createElement("input");
const li = document.createElement("li");
const ul = document.querySelector("ul");
const searchIcon = document.createElement("img");
searchIcon.setAttribute("src","./icons/314807_search_icon.png");
searchIcon.style.marginRight ="5px";
searchInput.style.borderWidth = "0px";
searchIcon.style.marginTop = "-4px"
ul.appendChild(li);
li.append(searchIcon);
li.appendChild(searchInput);
li.classList.add("search");
searchInput.classList.add("searchBox");
searchInput.setAttribute("placeHolder","Search Your Episode")
//body 
let cards = (epImage,epTitle,epSummary,url)=>{
let cards = document.createElement("div");
cards.classList.add("cards");
console.log(cards)
let main = document.querySelector("main");
main.append(cards);
cards.classList.add("card");
let image = document.createElement("img");
 image.classList.add("cardImage");
 image.src = epImage;
 cards.append(image);
 let title = document.createElement("h4");
 title.classList.add("cardTitle");
 title.textContent = epTitle;
 cards.append(title);
 let summary = document.createElement("p");
 summary.classList.add("cardPara");
summary.innerHTML = epSummary;
 cards.append(summary);
 let link=document.createElement('a');
 link.classList.add('cardLink');
 link.href=url;
 link.target = "/blanked";
    link.innerText = "watch";
    cards.append(link);
}












// using api
const movieData=async ()=>{
    try {
       const res=await fetch('https://api.tvmaze.com/shows/5/episodes')
       const data=await res.json()
      return data 
      
    }catch(err){
     console.log(err)
    }
}
movieData()
.then((data)=>{
    for (const element of data) {
     cards(element.image.medium,element.name,element.summary,element.url,element.runtime) 
        
                }
            })
                    let inpt=searchInput;
                    inpt.addEventListener('keyup',()=>{
                        let liveShare=document.querySelectorAll('.cardTitle');
                        let search=inpt.value; 
                        for (let live of liveShare) {
                       if(live.textContent.toLowerCase().includes(search.toLowerCase()) ){
                          
                           live.parentElement.style.display='flex' 
                       }else{
                           live.parentElement.style.display='none '
                       }
                         }
                             })
   