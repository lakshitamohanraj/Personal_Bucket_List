let blist=new Array();
const addbutton=document.querySelector('#addButton');
const resetbutton=document.querySelector('#resetButton');

let displaylist=document.getElementById('about');
const tickbutton=document.querySelector('#tick')
addbutton.addEventListener('click',()=>{
const item=document.querySelector('input').value;
         blist.push(item);
       displaylist.innerText=item;

})
 tickbutton.addEventListener('click',()=>{
        // for(let i =0;i<blist.length;i++){
        //     if(blist[i]==displaylist.innerText){
        //         blist.pop();
        //     }
        // }
       
        blist.pop();
        if((blist.length-1)==-1) {
            displaylist.innerText="Congrats🥳 you have completed ur bucklet list";
        }
        else{
        displaylist.innerText=blist[blist.length-1];
        }

 })

resetbutton.addEventListener('click',()=>{
        //      for(let i =0;i<blist.length;i++){
        //         blist.pop(); 
        // }
        blist=[];
        displaylist.innerText="none";
})