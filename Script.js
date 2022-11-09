const naik=document.querySelector('.naik');
const turun=document.querySelector('.turun');
const penumpang=document.querySelector('.skor');
let bg=document.querySelector('.bg');
const uang=document.querySelector('.uang');
const video=document.querySelector('video');
let skor=0;
let bayar=0;


naik.addEventListener('click',function(){
    skor++;
penumpang.innerHTML=skor;
bg.style.visibility='hidden';
});

turun.addEventListener('click',function(){
    if(skor==0){
    alert('penumpang kosong');
    
}else{
    skor--;
    bayar=bayar+2000;
    penumpang.innerHTML=skor;
    uang.innerHTML=bayar;
    bg.style.visibility='visible';
}
});
