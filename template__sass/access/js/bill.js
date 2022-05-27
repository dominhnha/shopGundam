let listsession = [];
function displayByShop([...listItem]){
    let tableShop = document.getElementById("itemtable");
    let size = document.querySelector(`.number-item`);
    let price = document.querySelector(`#price`);
    let dataTable = "";
    index = 0;
    let sum = 0;
    listItem.forEach(e=>{
        dataTable +=`
        <li class="list__notification-item">
        <img src="../.${e[1]}" alt="" class="item-img">
        <div class="item-body">
            <div class="item-id"># <span>${e[0]}</span> </div>
            <div class="item-name">${e[2]}có sản phẩm </div>
            <div class="item-price"> <span>${e[3]}</span> $ </div>
        </div>
        <div class="item__remove" onclick="removeItem(this)" id="${index}">
            <i class='bx bxs-message-square-x'></i>
        </div>
        </li>
        `
        sum+=parseInt(e[3]);
        index++;
    })
    
    price.innerHTML = sum;
    size.innerHTML = listItem.length;
    tableShop.innerHTML = dataTable;
    
}
function readSection(){
    let data = JSON.parse(sessionStorage.getItem("ListItem"));
    if(data){
        data.forEach(e=>{
            listsession.push(e);
        })
        console.log(data);
        displayByShop(listsession);   
    }
}
readSection();

function removeItem(e){
    let button = e;
    listsession.splice(parseInt(e.id),1);
    displayByShop(listsession);
    sessionStorage.setItem("ListItem",JSON.stringify(listsession));
}
function nextpage(){
    window.location="../html/bill.html";
}