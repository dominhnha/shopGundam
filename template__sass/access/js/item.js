let infoItem = [] ;

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

function nextPage(){
    window.location="./access/html/bill.html";
}
readTextFile("../../database/listGundam.json", function(text){

    let database = JSON.parse(text);
    // let table = document.querySelector(`#table`);
    text = database;
    let data = sessionStorage.getItem('id');
    
    let item = database.find(element=>element.id == data);
    infoItem.push(item);
    console.log(item);
    
    let formtable = `
    <div class="col l-6 m-12 c-12" >
    <div class="item">
        <div class="item-img" style="background-image: url(../.${item.img});"></div>
    </div>
</div>
<div class="col l-6 m-12 c-12">
    <div class="item">
        <div class="item-id"># <span>${item.id}</span> </div>
        <div class="item__name">${item.name}</div>
        <div class="item__price">Price :<span>${item.price}</span>$</div>
        <div class="item__des">${item.describe}</div>
        <div class="item__selection">
            <button class="item__button item__button-add" onclick=" additem()">
                <i class='bx bx-cart-add' ></i>
                Add list
            </button>
            <button class="item__button item__button-buy" onclick="nextpage()">
                <i class='bx bxs-dollar-circle' ></i>
                Buy Now
            </button>
        </div>
        <div class="item__contact">
            <div class="item__contact-title">Contact Information</div>
            <ul class="item__contact-list">
                <li class="item__contact-item">
                    <a href="">
                        <i class='bx bxl-facebook-circle' ></i>
                        facebook
                    </a>
                </li>
                <li class="item__contact-item">
                    <a href="">
                        <i class='bx bxl-twitter'></i>
                        twitter
                    </a>
                </li>
                <li class="item__contact-item">
                    <a href="">
                        <i class='bx bxl-blogger'></i>
                        blogger
                    </a>
                </li>
            </ul>
        </div>
    </div>
    
</div>
    
    `
    document.querySelector(`#table`).innerHTML = formtable;
    let listData = sessionStorage.getItem("listItem");
});

let listsession = [];
function displayByShop([...listItem]){
    let tableShop = document.querySelector(`.list__notification-waper`);
    let size = document.querySelector(`.quantity`);
    let dataTable = "";
    listItem.forEach(e=>{
        dataTable += `
        <li class="list__notification-item">
            <img src="../.${e[1]}" alt="" class="item-img">
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
//-------------chuyen trang-------------------//
function nextpage(){
    window.location="../html/bill.html";
}






