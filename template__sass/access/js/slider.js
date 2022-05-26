
window.addEventListener("load",function(){
    const slider = this.document.querySelector(`.slider`);
    const sliderMain = this.document.querySelector(`.slider__main`);
    const sliderItem = this.document.querySelectorAll(`.slider__item`);
    const nextBtn = this.document.querySelector(`.slider__icon-right`);
    const PreBtn =  this.document.querySelector(`.slider__icon-left`);
    const docItem = this.document.querySelectorAll(`.slider-dot-item`)
    let positionX = 0;
    let index = 0;
    let tmp = 0.0;
    let sliderItemWidth = sliderItem[0].offsetWidth;
    // setdefause in slider
    


    const sliderItemLenght = sliderItem.length;
    // bắt sự thay đổi của trình duyệt vs reset slider      
    tmp = sliderItemWidth;
    console.log("tmps",tmp);

    let btn = document.querySelector(`#btn`);
    btn.addEventListener("click", checkresize);

    
   
    function checkresize(){
        // let newSize = this.document.querySelector(".slider__item").offsetWidth;
        // console.log(`new size = `,newSize)
        // tmp = newSize;
        
        sliderMain.style = `transform: translateX(${0}px);`;
        let size = document.querySelector(`.slider__item`).offsetWidth;
        
        if(size === tmp){
            size = document.querySelector(`.slider__item img`).offsetWidth;
            console.log("Size new project = ",size)
        }
        this.tmp == size;
        console.log("size    = ",size);
        console.log("tmp",tmp)
        
        docItem.forEach(el=>el.classList.remove("active__BG"));
        docItem[0].classList.add("active__BG");
        positionX = 0;
        index = 0;
        console.log("ỏness");
        return;
    }
    this.window.onresize = ()=>{
        let newSize = this.document.querySelector(".slider__item").style.offsetWidth;
        this.tmp = newSize;
        sliderMain.style = `transform: translateX(${0}px);`;
        docItem.forEach(el=>el.classList.remove("active__BG"));
        docItem[0].classList.add("active__BG");
        this.positionX = 0;
        this.index = 0;
    }
    nextBtn.addEventListener("click",function () {
        handlechangeslide(1);
    })

    PreBtn.addEventListener("click",function(){
        handlechangeslide(-1);
    })

   docItem.forEach(item=>item.addEventListener("click",function(e){
       docItem.forEach(el=>el.classList.remove("active__BG"))
       e.target.classList.add("active__BG");
       const sliderIndex = parseInt(e.target.dataset.index);
       index = sliderIndex;
       positionX =  -1*index*tmp;
       sliderMain.style = `transform: translateX(${
          positionX
        }px);`
       console.log(sliderIndex);
   }))

    function handlechangeslide(direction){
        if( direction == 1){
            
            if(index >= sliderItemLenght-1){
                index = sliderItemLenght-1;
                return;
            }
            
            positionX -= tmp;
            sliderMain.style = `transform: translateX(${positionX}px);`
            index++;
            
            console.log(index);
        }else if( direction == -1){
            
            if(index <=-0){
                index=0;
                return;
            }
            
            positionX += tmp;
            sliderMain.style = `transform: translateX(${positionX}px);`
            index--;
        }
        docItem.forEach(el=>el.classList.remove("active__BG"));
        docItem[index].classList.add("active__BG");
    }
})