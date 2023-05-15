function uploadCoupon() {
    document.getElementById('coupon').style.visibility= 'visible';
    document.getElementById('main').style.opacity='0.7';
}
function closecoupon() {
    document.getElementById('coupon').style.visibility= 'hidden';
    document.getElementById('main').style.opacity = '1';
}

function switchicon(){
    let displayimage = document.getElementById('moon')
    if(displayimage.src.match('moon-stars-fill.svg')){
        displayimage.src='sun.svg'
    }
    else{
        displayimage.src='moon-stars-fill.svg'
    }
}
function switchmode(){
    let mybody=document.body;
    mybody.classList.toggle('mode');
}

function validatefname(){
    let fname = document.getElementById('fname').value;
    let fout = document.getElementById('fout');
    let fdiv = document.getElementById('fdiv');

    if(fname.trim().length == 0){
        fout.innerText = "Please Enter Firstname"
        fdiv.classList.add('has-error')
    }
    else{
        fout.innerText=`${fname}`
        fdiv.classList.remove('has-error')
        fdiv.classList.add('has-success')
    }
}
function validateemail(){
    let mail = document.getElementById('mail').value;
    let eout = document.getElementById('eout')
    if(mail.trim().length == 0){
        eout.innerText = "Type E-mail Id"
    }
    else{
        if(mail.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)/.([com])$") == null ){
            eout.innerText = ""
        }
        else{
            eout.innerText = "Type valid ID"
        }
    }
}

function signin(){
    document.getElementById('log').style.visibility = 'visible'
    document.getElementById('main').style.visibility = '0.6'
}
function logout(){
    document.getElementById('log').style.visibility = 'hidden'
    document.getElementById('main').style.visibility = '1'
}

