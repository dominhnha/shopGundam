let database;
let Listdata = [];

// read data in js 

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
function renderDislay(database){
    let table = document.querySelector(`#table`);
    let stringItem = `<div class="home__shop-row row">`
    database.forEach(element => {
        stringItem+=`
        <div class="col l-3 m-6 c-12">
        <div class="home__shop-cand">
            <div class="cand-img"  style="background-image: url(${element.img});">
            </div>
            <div class="cand__body">
                <div class="cand__body-title">
                    <div class="cand__body-title-waper">
                        <i class='bx bxs-home-alt-2'></i>
                         ${element.name}
                    </div>
                    <div class="cand__body-id">#<span>${element.id}</span></div>
                </div>
                
                <div class="cand__body-waper">

                    <div class="cand__body-price">
                        <i class='bx bx-dollar-circle' ></i>
                        <span>${element.price}</span>đ
                    </div>
                    <div class="cand__body-sale">
                        <span>best sale</span>
                    </div>
                </div>
            </div>
            <button class="btn" onclick="getInfo(this)" >View</button>
            </div>
        </div>
        `;
    });
    stringItem+=`</div>`;
    table.innerHTML = stringItem;
}
readTextFile("../database/listGundam.json", function(text){

    database = JSON.parse(text);
    database.forEach(element => {
        Listdata.push(element);
    })
    renderDislay(database);
});
// lay ra id mon hang


function getInfo(e){
    let cand = e.parentElement.children;
    let id = cand[1].children[0].children[1].children[0].innerHTML;
    sessionStorage.setItem("id",id);
    
    window.location="./access/html/item.html";
}
function nextpage(){
    window.location="./access/html/bill.html";
}
//-----gio hang --------.//

let listsession = [];
function displayByShop([...listItem]){
    let tableShop = document.querySelector(`.list__notification-waper`);
    let size = document.querySelector(`.quantity`);
    let dataTable = "";
    listItem.forEach(e=>{
        dataTable += `
        <li class="list__notification-item">
            <img src="${e[1]}" alt="" class="item-img">
            <div class="item-body">
                <div class="item-id"># <span>${e[0]}</span> </div>
                <div class="item-name">${e[2]}</div>
                <div class="item-price"> <span>${e[3]}</span> $ </div>
            </div>
        </li>
        
        `
    })
    size.innerHTML = listItem.length;
   tableShop.innerHTML = dataTable;
    
}
function readSection(){
    let data = JSON.parse(sessionStorage.getItem("ListItem"));
    if(data){
        data.forEach(e=>{
            listsession.push(e);
        })
        displayByShop(listsession); 
        displayByShop(listsession); 
  
    }
}
readSection();
function additem(){
    let item = new Array(infoItem[0].id,infoItem[0].img,infoItem[0].name,infoItem[0].price,infoItem[0].describe);
    listsession.push(item);
    displayByShop(listsession);
    sessionStorage.setItem("ListItem",JSON.stringify(listsession));
}

//------------------------------fuction---------------------------------//

let price = document.querySelector(`#price`);
price.addEventListener("click", ()=>{
    Listdata.sort((a,b)=>{
        return  b.price -a.price ;
    })
    renderDislay(Listdata);
    let addButton = document.querySelectorAll(".home__sort-bar-best-sale");
    addButton.forEach(element=>{
        element.classList.remove("bar__active");
    })
    price.classList.add("bar__active");
})
let Common = document.querySelector(`#Common`);
Common.addEventListener("click",()=>{
    Listdata.sort((a,b)=>{
        return  a.price-b.price ;
    })
    renderDislay(Listdata);
    let addButton = document.querySelectorAll(".home__sort-bar-best-sale");
    addButton.forEach(element=>{
        element.classList.remove("bar__active");
    })
    price.classList.add("bar__active");
})



