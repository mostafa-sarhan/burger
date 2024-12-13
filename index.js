const boxes = document.querySelectorAll(".big_box .box");
const img_box = document.querySelector(".image img");


// let  i = 0;
boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        console.log("hello box");
        img_box.src=`./photo/image_${index + 1}.png`;
        boxes.forEach((boxy)=>{
            boxy.classList.remove("active");
            // This box is click on
            box.classList.add("active")
        })
    });
});

let i =0;
setInterval(()=>{
    if(i < 5){
        img_box.src=`./photo/image_${i + 1}.png`;
        i++
    }else{
        i=0;
    }
},3000)

console.log("hello");
