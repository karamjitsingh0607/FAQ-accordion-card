let listItems=document.querySelectorAll(".list-item");
let listTargetItem=document.querySelectorAll(".list-item>p");
let value=50;
listItems.forEach(element=>{
    element.addEventListener('click',()=>{
        let para=element.querySelector('p');
        let heading=element.querySelector('h2');
        if(!para.classList.contains('active')){
            heading.style.fontWeight=600;
            heading.querySelector('svg').style.transform=`rotate(${-180}deg)`;
            if(value>=30){
                value-=10;
            }else{
                value-=5;
            }
            document.querySelector('.pattern-img').style.bottom=`-${value}%`;
            para.style.height=para.scrollHeight+'px';
            para.classList.add('active');
        }else{
            heading.style.fontWeight=400;
            heading.querySelector('svg').style.transform=`rotate(${0}deg)`;
            if(value>=10 && value<20){
                value+=5;
            }else{
                value+=10;
            }
            document.querySelector('.pattern-img').style.bottom=`-${value}%`
            para.style.height=0;
            para.classList.remove('active');
        }
    })
})