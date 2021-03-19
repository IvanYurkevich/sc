let a = {
    'Russia':'Moskow',
    'Belarus' : 'Minsk',
    'Poland' : 'Warsaw',
    'Germany':'Berlin',
    'France':'Paris',
    

};
function getArr (a, block, block2){ 
    let out1 = ' ';
    let out2 = ' ';
    for(let key in a){
        out1 += key+'<br>';
        out2 += a[key]+'<br>';
    }
   document.querySelector(block).innerHTML = out1 ;
   document.querySelector(block2).innerHTML = out2;

}
    
function f1(){
    let iLand = document.querySelector('.setLand').value;
    let iCap = document.querySelector('.setCap').value;
    a[iLand] = iCap;
    getArr(a, '.country', '.capital');
}
document.querySelector('.setBtn').onclick = f1;

function f2(){
    let i = document.querySelector('.i1');
    // let b = prompt('Ввидите страну,пожалуйста');
    let out = ' ';
    for(let key in a){       
        if (i.value==key){
            document.querySelector('.getCap').innerHTML =a[key];
            break;
        }
        else if( i.value !== key){
            document.querySelector('.getCap').innerHTML ="нет информации о стране";
        }
    }
}
document.querySelector('.getBtn').onclick = f2; 
document.querySelector('.getCap').innerHTML =' ';

function f3 () {
   console.log(a);
   let span = document.createElement('span');
   span.innerHTML = 'see at CONSOLE';
   let list = document.querySelector('.all');
   list.appendChild(span);
   if (list.firstChild){
    list.removeChild(list.firstChild);
  }
}
document.querySelector('.all').onclick = f3;

function f4(){
    let b = prompt('wgfwerg');
    for (let key in a){
        if ( b== key ){
            delete a[key];  
          }
    }
   
    console.log(a);
} 
document.querySelector('.deleteBtn').onclick = f4;
