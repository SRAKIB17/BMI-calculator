function getId(id){
    const idname = document.getElementById(id);
    return idname
}

getId('Weight').addEventListener('keyup', calculate)
getId('Height').addEventListener('keyup', calculate)

getId('Weight').addEventListener('change', calculate)
getId('Height').addEventListener('change', calculate)

function calculate(){
    const kg = getId('Weight').value;
    const mt = getId('Height').value;
    const profile = getId('profile');
    if((kg.length != 0 && mt.length != 0) && (kg != 0 && mt != 0)){
        const BMI = kg/Math.pow(mt,2);
        getId('result-bmi').innerText ='BMI:'+ BMI.toFixed(4);
        if(BMI < 18.5){
            profile.innerHTML = 
            ` <span class="zone1">UnderWeight Zone</span><br>
            <img src="./imgaes/m-1.jpg" alt="" class="bmi-image">
            <img src="./imgaes/w-1.jpg" alt="" class="bmi-image">`

        }
        else if(BMI >= 18.5 && BMI <25){
            profile.innerHTML = 
            ` <span class="zone2">Normal Zone</span><br>
            <img src="./imgaes/m-2.jpg" alt="" class="bmi-image">
            <img src="./imgaes/w-2.jpg" alt="" class="bmi-image">`
        }
        else if(BMI>=25 && BMI <30 ){
            profile.innerHTML = 
            `<span class="zone3">Overweight Zone</span><br>
            <img src="./imgaes/m-3.jpg" alt="" class="bmi-image">
            <img src="./imgaes/w-3.jpg" alt="" class="bmi-image">`
        }
        else if (BMI >= 30 && BMI <35){
            profile.innerHTML = 
            `<span class="zone4">Obese Zone</span><br>
            <img src="./imgaes/m-4.jpg" alt="" class="bmi-image">
            <img src="./imgaes/w-4.jpg" alt="" class="bmi-image">`
        }
        else if(BMI>= 35){
            profile.innerHTML = 
            `<span class="zone5">Extremly Obese Zone</span><br>
            <img src="./imgaes/m-5.jpg" alt="" class="bmi-image">
            <img src="./imgaes/w-5.jpg" alt="" class="bmi-image">`
        }
    }
    else{
        getId('result-bmi').innerText = 'please enter both value'
        profile.innerHTML = 'Not found Your profile'

    }
    
}
getId('clear').addEventListener('click',function(){
    getId('Weight').value = ''
    getId('Height').value = ''
    getId('result-bmi').innerText = ''
})

getId('foot').addEventListener('keyup',function(event){
    const foot = parseFloat(event.target.value);
    getId('convert-meter').value = foot* 0.3048
    
})

getId('foot').addEventListener('change',function(event){
    const foot = parseFloat(event.target.value);
    getId('convert-meter').value = foot* 0.3048
    
})

getId('copy').addEventListener('click',function(){
    getId('convert-meter').select()
    document.execCommand('copy')
})