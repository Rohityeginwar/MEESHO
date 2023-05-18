function validatemail(){
    let emailid = document.getElementById('emailid').value;
    let emailout = document.getElementById('emailout');

    if(emailid.trim().length == 0){
        emailout.innerText =`Please enter valid Email ID`
    }
    else{
        if(emailid.match("^([a-zA-Z0-9])+@([a-zA-Z0-9])/.([com])$") == null){
            out.innerText=""
        }
        else{
            emailout.innerText =`ex:aksh@gmail.com`
        }
    }
}

function openotp(){
    document.getElementById('otp').style.visibility = 'visible'
    document.getElementById('form').style.visibility = 'hidden'
    /*let random = document.getElementById('random')
    let math = Math.ceil(Math.random()*1000);
    random.innerText = `your otp is ${math}`
    prompt("please enter otp")*/
}


function rate(){
    let rate = document.getElementById('rate').value;
    if(rate.match("^([0-9])$") == null ){
        let random = document.getElementById('random')
        random.innerText = ""
    }
}