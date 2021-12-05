document.addEventListener('DOMContentLoaded', () => {

    const inputfield1 = document.getElementById("celsius");
    const inputfield2 = document.getElementById("fahrenheit");
    const myform = document.getElementById("my-form");


    document.getElementById("celsius").oninput = () => {

        inputfield2.value = +(inputfield1.value * 9 / 5 + 32).toFixed(2);

        if (inputfield1.value <= 150 && inputfield1.value >= -50) {
            $('#div').animate({height: parseInt(inputfield1.value) + 66})
        } else {
            $('#div').animate({height: 66})
        }

        // if(inputfield1.value <= 0) {
        //     myform.style.background = "blue";
        // }
        // else  if(inputfield1.value > 0 && inputfield1.value < 100) {
        //     myform.style.background = "yellow";
        // }
        // else if(inputfield1.value > 100 ) {
        //     myform.style.background = "red";
        // }
    }

    document.getElementById("fahrenheit").oninput = () => {

        inputfield1.value = +((inputfield2.value - 32) * 5 / 9).toFixed(2);

        if (inputfield1.value <= 150 && inputfield1.value >= -50) {
            $('#div').animate({height: parseInt(inputfield1.value) + 66})
        } else {
            $('#div').animate({height: 66})
        }
    }
})