function getId(id){
    const idname = document.getElementById(id);
    return idname
}
// get html code 
function images(id){
    const profile = ['UnderWeight Zone','Normal Zone','Overweight Zone','Obese Zone','Extremly Obese']
    const image = 
        ` <span class="zone${id}">${profile[id-1]}</span><br>
        <img src="./imgaes/m-${id}.jpg" alt="" class="bmi-image">
        <img src="./imgaes/w-${id}.jpg" alt="" class="bmi-image">`
    return image
}


getId('Weight').addEventListener('keyup', calculate);
getId('Height').addEventListener('keyup', calculate);
;
getId('Weight').addEventListener('change', calculate);
getId('Height').addEventListener('change', calculate);

getId('foot').addEventListener('keyup',function(event){
    footCalc(event.target.value)
})

getId('foot').addEventListener('change',function(event){
    footCalc(event.target.value)
})

function calculate(){
    const kg = getId('Weight').value;
    const mt = getId('Height').value;
    const profile = getId('profile');
    if((kg.length != 0 && mt.length != 0) && (kg != 0 && mt != 0)){
        const BMI = kg/Math.pow(mt,2);
        getId('result-bmi').innerText ='BMI:'+ BMI.toFixed(4);
        if(BMI < 18.5){
            profile.innerHTML = images(1);

        }
        else if(BMI >= 18.5 && BMI <25){
            profile.innerHTML = images(2);
        }
        else if(BMI>=25 && BMI <30 ){
            profile.innerHTML = images(3);
        }
        else if (BMI >= 30 && BMI <35){
            profile.innerHTML = images(4);
        }
        else if(BMI>= 35){
            profile.innerHTML = images(5);
        }
    }
    else{
        getId('result-bmi').innerText = 'please enter both value'
        profile.innerHTML = 'Not found Your profile'

    }
    
}
// clear button 
getId('clear').addEventListener('click',function(){
    getId('Weight').value = ''
    getId('Height').value = ''
    getId('result-bmi').innerText = ''
    getId('profile').innerHTML = ''
    getId('foot').value = ''
})



// foot calculate
function footCalc(getFoot){
    if(getFoot != ''){
        const getFootArray = getFoot.split('.');
        let inch = 0;
        if(getFootArray.length == 2){
            inch = getFootArray[1];
        }
        inch = inch/12;
        const foot = parseFloat(getFootArray[0])+inch;
        // getId('convert-meter').value = foot* 0.3048;
        getId('Height').value = foot* 0.3048;
    }
    calculate()
}

// getId('copy').addEventListener('click',function(){
//     getId('convert-meter').select()
//     document.execCommand('copy')
// })