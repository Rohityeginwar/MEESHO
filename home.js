
function uploadCoupon() {
    document.getElementById('coupon').style.visibility= 'visible';
    document.getElementById('main').style.opacity='0.1'
}
function closecoupon() {
    document.getElementById('coupon').style.visibility= 'hidden';
    document.getElementById('main').style.opacity = '1';
}
function changeimage(){
    let displayimage = document.getElementById('moon')
    if(displayimage.src.match('moon-stars-fill.svg')){
        displayimage.src='sun.svg'
    }
    else{
        displayimage.src='moon-stars-fill.svg';
    }
}
function changemode(){
    let mybody= document.body;
    mybody.classList.toggle('changemode')
}