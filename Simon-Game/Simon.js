let id,userBox,userArr=[],j,wrong = 0,num = 0;
let box1 = document.getElementById('1');
box1.addEventListener('click',function(){
    let bgcolor = box1.style.backgroundColor;
    setTimeout(()=>{
        box1.style.backgroundColor = "white";
    },0);
    setTimeout(()=>{
        box1.style.backgroundColor = bgcolor;
    },350);
    id = 1;
    userArr.push(id);
});
let box2 = document.getElementById('2');
box2.addEventListener('click',function(){
    let bgcolor = box2.style.backgroundColor;
    setTimeout(()=>{
        box2.style.backgroundColor = "white";
    },0);
    setTimeout(()=>{
        box2.style.backgroundColor = bgcolor;
    },350);
    id = 2;
    userArr.push(id);
});
let box3 = document.getElementById('3');
box3.addEventListener('click',function(){
    let bgcolor = box3.style.backgroundColor;
    setTimeout(()=>{
        box3.style.backgroundColor = "white";
    },0);
    setTimeout(()=>{
        box3.style.backgroundColor = bgcolor;
    },350);
    id = 3;
    userArr.push(id);
});
let box4 = document.getElementById('4');
box4.addEventListener('click',function(){
    let bgcolor = box4.style.backgroundColor;
    setTimeout(()=>{
        box4.style.backgroundColor = "white";
    },0);
    setTimeout(()=>{
        box4.style.backgroundColor = bgcolor;
    },350);
    id = 4;
    userArr.push(id);
});
let btn = document.querySelector('button');
let arr = [],i = 0,k = 0;
btn.addEventListener('click',function(){
    btn.style.display = "none";
    let p = document.querySelector('p');
    p.innerText = 'Level 1';
    let outTime = 0;
    function outLoop(){
        let outInterval = setInterval(()=>{
            if(wrong<=num && num!=0){
                wrong = 0;
                num = 0;
                clearInterval(outInterval);
                return
            }
            let random = Math.floor(Math.random()*4)+1;
            arr.push(random);
            i = 0;
            while(arr[i]){
                let box = document.getElementById(arr[i]);
                let bgcolor = box.style.backgroundColor;
                setTimeout(()=>{
                    box.style.backgroundColor = "white";
                },350+i*1000);
                setTimeout(()=>{
                    box.style.backgroundColor = bgcolor;
                },800+i*1000);
                i++;
            }
            j = 0;
            let inTime = 5000*(arr.length);
            function inLoop(){
                let interval = setInterval(()=>{
                    if((arr.length==4 || arr.length==9) && (arraycmp(arr,userArr))){
                        let id1 = setInterval(()=>{
                            console.log('waiting...');
                            if(j==2 || j==7){
                                clearInterval(id1);
                            }
                        },3000);
                    }
                    if(arr[j]==userArr[j]){
                        if(j==arr.length-1){
                            let p = document.querySelector('p');
                            p.innerText = 'Level '+(j+2);
                            console.log(userArr+' '+k);
                            k++;
                            userArr = [];
                        }
                    }
                    else{
                        if(!userArr[0]){
                            inTime = 5000*(arr.length);
                            interval = clearInterval(interval);
                            if(j!=8){
                                if(j==3){
                                    setTimeout(()=>{
                                        inLoop();
                                    },5000);
                                }
                            }
                        }else{
                            alert(`Well Done!!...\nYour Score is ${k}`);
                            k = 0;
                            num++;
                            clearInterval(interval);
                            clearInterval(outInterval);
                            let p = document.querySelector('p');
                            p.innerText = 'Welcome to Simon Game';
                            btn.style.display = 'block' ;
                            arr = [];
                            userArr = [];
                            j=0;
                            i=0;
                            return
                        }
                        clearInterval(interval);
                        clearInterval(outInterval);
                    };
                    if(wrong<num){
                        wrong = num;
                        clearInterval(interval);
                        clearInterval(outInterval);
                        return
                    }
                    j++;
                },inTime);
            }
            if(j==2){
                setTimeout(()=>{
                    inLoop();
                },5000);
            }
            else{
                inLoop();
            }
            outTime = 10000*(arr.length);
            outInterval = clearInterval(outInterval);
            outLoop();
            
        },outTime);
    }
    if(j!=8 && arraycmp(arr,userArr) && userArr[0]==null){
        outLoop();
        console.log('printing');
    }
    else if(!arraycmp(arr,userArr)){
        clearInterval(outInterval);
        alert("done!!...");
        return
    }
    else{
        clearInterval(outInterval);
        alert("done!!...");
        return
    }
});
console.log('outside button');
function arraycmp(arr1,arr2){
    let c = 0;
    while(arr1[c]){
        if(arr1[c]!=arr2[c]){
            return false;
        }
        c = c + 1;
    }
    return true;
}