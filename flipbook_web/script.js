
const pages = Array.from(document.querySelectorAll('.page'));
let current = 1;
const total = 29;
function showPage(n){
    if(n < 1) n = 1;
    if(n > total) n = total;
    current = n;
    pages.forEach(p => p.classList.remove('top','flipped'));
    for(let i=0;i<pages.length;i++){
        const p = pages[i];
        const pnum = i+1;
        if(pnum < current){
            p.classList.add('flipped');
            p.classList.remove('hidden');
        } else if(pnum === current){
            p.classList.add('top');
            p.classList.remove('hidden');
            p.classList.remove('flipped');
        } else {
            p.classList.remove('top');
            p.classList.remove('flipped');
            p.classList.remove('hidden');
        }
    }
    document.getElementById('pagenum').textContent = current + ' / ' + total;
}
document.getElementById('prev').addEventListener('click', ()=> showPage(current-1));
document.getElementById('next').addEventListener('click', ()=> showPage(current+1));
// keyboard
document.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowLeft') showPage(current-1);
    if(e.key === 'ArrowRight') showPage(current+1);
});
// init: hide all except first
pages.forEach((p,i)=> {
    if(i !== 0) p.classList.add('hidden');
});
showPage(1);
