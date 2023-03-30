const formInputs = document.querySelectorAll(".form-input");
const allLabels = document.querySelectorAll("label");


let inputs = [];
let labels = [];


formInputs.forEach((eachInput) => {
    inputs.push(eachInput.value);
});
allLabels.forEach((eachLabel) =>{
    labels.push(eachLabel.innerHTML)
});


for (let i= 0; i < inputs.length; i++){
    console.log(`${labels[i]} ${inputs[i]}`)
};