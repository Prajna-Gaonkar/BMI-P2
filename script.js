document.getElementById("height").addEventListener("input",function(){
    let height = document.getElementById("height").value;
    document.getElementById("heightValue").textContent = height+" cm";
});

document.getElementById("weight").addEventListener("input",function(){
    let weight = document.getElementById("weight").value;
    document.getElementById("weightValue").textContent = weight+" kg";
});


function calculateBMI(){
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);
    let age=Number(document.getElementById("age").value);
    let gender = document.querySelector('input[name="gender"]:checked')?.value;

    let suggestion = "";

    if(age < 18){

        suggestion =
        "BMI results for children should be interpreted carefully.";
    }
    else if(age < 60){

        suggestion =
        "Maintain a balanced diet and regular exercise.";
    }
    else{

        suggestion =
        "Regular health checkups are recommended for seniors.";
    }


    if(gender === "Male"){

    suggestion +=
    " Protein-rich diet and strength training can help maintain fitness.";
    }

    else if(gender === "Female"){

        suggestion +=
        "Iron-rich foods and balanced nutrition are important.";
    }


    let bmi = weight / ((height/100) **2);

    document.getElementById("bmiValue").textContent = "Your BMI is : "+bmi.toFixed(2);

    let result = "";

    if (bmi < 18.5) {
        result = "⚠️ Underweight";
    }
    else if (bmi < 24.9) {
        result = "✅ Normal Weight";
    }
    else if (bmi < 29.9) {
        result = "⚠️ Overweight";
    }
    else {
        result = "❌ Obese";
    }

    document.getElementById("res").innerText = result;
    
    document.getElementById("suggestions").innerText = suggestion;
    const indicator = document.getElementById("indicator");

    if (bmi < 18.5) {

        indicator.style.left = "10%";
        indicator.style.borderColor = "#3498db";
    }

    else if (bmi < 24.9) {

        indicator.style.left = "40%";
        indicator.style.borderColor = "#2ecc71";
    }

    else if (bmi < 29.9) {

        indicator.style.left = "65%";
        indicator.style.borderColor = "#f1c40f";
    }

    else {

        indicator.style.left = "90%";
        indicator.style.borderColor = "#e74c3c";
    }
    }