document.addEventListener('DOMContentLoaded', () => {

    const inputfield1 = document.getElementById("celsius");
    const inputfield2 = document.getElementById("fahrenheit");

    document.getElementById("celsius").oninput = () => {

        inputfield2.value = +(inputfield1.value * 9 / 5 + 32).toFixed(2);

        if (inputfield1.value <= 150 && inputfield1.value >= -50) {
            $('#div').animate({height: parseInt(inputfield1.value) + 66});
        } else if (inputfield1.value > 150) {
            $('#div').animate({height: 216});
        } else {
            $('#div').animate({height: 16});
        }
    }

    document.getElementById("fahrenheit").oninput = () => {

        inputfield1.value = +((inputfield2.value - 32) * 5 / 9).toFixed(2);

        if (inputfield1.value <= 150 && inputfield1.value >= -50) {
            $('#div').animate({height: parseInt(inputfield1.value) + 66})
        } else if (inputfield1.value > 150) {
            $('#div').animate({height: 216});
        } else {
            $('#div').animate({height: 16})
        }
    }
})