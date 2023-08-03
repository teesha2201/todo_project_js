let addItem = document.getElementById("popupbox")
let cardContainer = document.getElementById("container")
let newCardName =document.getElementById("cardname")
let pTag = document.getElementById("ptag")
let blurBack = document.getElementById("backgroundblur")
let selectContainer = document.getElementById("selectContainer") 
let revertButton = document.getElementById("revertbackbutton")
let navBar = document.querySelector("nav")
let header = document.querySelector("header")
let cardHeading =document.getElementById("cardheading")
let headerId = document.getElementById("headerid")

console.log(newCardName.parentNode);

/* Additem on first page :open popupbox to add card */

function additem()
{
      addItem.classList.remove("hide")
      blurBack.setAttribute("class","blur")
      pTag.setAttribute("class","blur")
      cardContainer.style.filter = "blur(5px)"
}

/* Close Button of popupbox that add card */
function hideAddCard()
{
    addItem.classList.add("hide")
    blurBack.setAttribute("class","undoblur")
    pTag.setAttribute("class","undoblur")
    cardContainer.style.filter = "blur(0px)"
}
/* unique id to each card */
let cardId = 0;
/* card design and push card into card container */

function addCard()
{
    
    cardId++;
    let createCard = document.createElement("div");
    let hrLine = document.createElement("hr")
    let cardName = document.createElement("h2")
    let divstore = document.createElement("div")
    let deleteButton = document.createElement("button");
    let itemAdd = document.createElement("button");

    createCard.setAttribute("id",cardId);
    createCard.appendChild(cardName);
    createCard.appendChild(hrLine);
    createCard.appendChild(divstore);
    createCard.appendChild(deleteButton);
    createCard.appendChild(itemAdd);
    cardContainer.appendChild(createCard);

    createCard.classList.add("card")
    pTag.style.display = "none";
    cardContainer.style.filter = "blur(5px)"

    cardName.innerText = newCardName.value;
   
    //for this eventlistener needed
    newCardName.value="";
   
    /*styling for card : inside cardcontainer */
    cardName.classList.add("cardtitle")
    hrLine.classList.add("hrlineinsidecard")
    itemAdd.classList.add("itemadd");
    deleteButton.classList.add("deletebutton");
    
/* delete card from card container */
    deleteButton.addEventListener('click',function()
     {
         createCard.style.display="none";
         cardHeading.innerText=  "";
         headerId.style.filter = "blur(0px)"
    
     }
     );
    /* Hide popupbox  after adding single card in card container */ 
     hideAddCard()

    /*addbutton of card we are creating popup2  from where we add item in list*/
    
    itemAdd.addEventListener('click',function()
    {    
        //createpopupbox(divstore);
       let body = document.querySelector("body")
       let listItem = document.createElement("div")
       let h2Item = document.createElement("h2")
       let newItemName = document.createElement("input")
       let addListItem = document.createElement("button")
       let closeItem = document.createElement("button")
   
       listItem.style.display = "block";
       listItem.appendChild(newItemName)
       listItem.appendChild(h2Item)
       listItem.appendChild(addListItem)
       listItem.appendChild(closeItem)
       body.appendChild(listItem)
      
       cardContainer.style.filter="blur(5px)"
       listItem.setAttribute("class","itempopupbox" )
       selectContainer.style.filter="blur(5px)"
        //itempopupbox.style.display = "block"
      
       h2Item.setAttribute("class","h2item")
       newItemName.setAttribute("class","newitemname")
       addListItem.setAttribute("class","addcard")
       closeItem.setAttribute("class","closecard")
   
        h2Item.innerText = "Add New Item";
        //newItemName.style.placeholder = "add new item";
        addListItem.innerText = "Add";
        closeItem.innerText = "Close";
        blurBack.setAttribute("class","blur")
        /* close button of popupbox */
        closeItem.addEventListener("click", () => {
            listItem.remove();
            cardContainer.style.filter="blur(0px)"

           
      });
      /* Add button of popupboox */
      
      addListItem.addEventListener('click',function()
      {  
          let itemNameInCard = document.createElement("h3")
          let markDone = document.createElement("button")

          cardContainer.style.filter="blur(0px)"
          selectContainer.style.filter="blur(0px)"
         
          //let bgblur = document.createElement("div")
          itemNameInCard.appendChild(markDone)
          divstore.appendChild(itemNameInCard)
          divstore.appendChild(markDone)
         // body.appendChild(bgblur)
  
        // divstore.style.display="flex";
        blurBack.setAttribute("class","undoblur")
        itemNameInCard.setAttribute("class","itemNameincard")
        markDone.setAttribute("class","markdone")
        
          itemNameInCard.innerText =  newItemName.value;
          markDone.innerHTML = "markdone";
        
  
          divstore.setAttribute("class","innerdivinsidecard")
          
          listItem.style.display = "none";
          createCard.style.height="auto";
         

          /* markdone cut when activity done*/
          markDone.addEventListener('click',function(){
          markDone.setAttribute("class","linethrough")
          itemNameInCard.setAttribute("class","textdecoration")
          
          })
          }) //closing tag of addListItem
    } );
    
    /* for showing only select card in center ,today */
    cardName.addEventListener('click',function()
    {
        cardContainer.classList.add("hide");
        header.style.display ="none";
        navBar.style.display ="flex";
        cardHeading.innerText=  cardName.innerText;
        // cardHeading.style.color =" Red"
        selectContainer.appendChild(createCard)

        /*styling container and back button */
       
        selectContainer.style.display="flex";

    })
    revertButton.addEventListener('click',function(){
        Back()
    })
    
 function Back(){
    selectContainer.style.display="none";
    cardContainer.classList.remove("hide");
    navBar.style.display = "none";
    header.style.display ="flex";
    cardContainer.appendChild(createCard);
    cardHeading.innerText=  "";
    selectContainer.innerText =" ";
    
    
 }
}

//   deleteButton.addEventListener('click',function(){
        //     markDone.classList.remove("class","linethrough")
        //     markDone.classList.add("class","markdone")
        //     itemNameInCard.classList.remove("class","textdecoration")
        //     itemNameInCard.classList.add("class","itemNameincard")
        //     cardHeading.innerText=  "";
           
        // } ); 
       
 