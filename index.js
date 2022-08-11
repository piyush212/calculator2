let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => { 
        buttonText = e.target.innerText;
        
         if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(document.getElementById('screen').value);
            localStorage.setItem("res", screen.value);
        }
        else if(buttonText=='←'){
            var number=screen.value;
            var newnumber=number.substring(0,number.length-1);
            screen.value=newnumber;
        }
        else {
        screen.value += buttonText;
            // screen.value = screenValue;
        }

       
    })
}

