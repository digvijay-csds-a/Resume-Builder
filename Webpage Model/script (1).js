function newWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    let weOb = document.getElementById("we");
    let weAddButton = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButton);
}
function newAqField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    let meOb = document.getElementById("aq");
    let aqaddButton = document.getElementById("aqaddButton");
    meOb.insertBefore(newNode, aqaddButton);
}
//generating CV

function generateCV() {
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1")
    nameT1.innerHTML = nameField;
    //direct
    document.getElementById("nameT2").innerHTML = nameField;
    //contact
    let numberField = document.getElementById("numberField").value;
    let contactT = document.getElementById("contactT")
    contactT.innerHTML = numberField;
    //adress
    let adressField = document.getElementById("adressField").value;
    let adressT = document.getElementById("adressT")
    adressT.innerHTML = adressField;
    //insta
    let instaField = document.getElementById("instaField").value;
    let instaT = document.getElementById("instaT")
    instaT.innerHTML = instaField;
    //facebook
    let facebookField = document.getElementById("facebookField").value;
    let fbT = document.getElementById("fbT")
    fbT.innerHTML = facebookField;
    //linkdine
    let linkedinField = document.getElementById("linkedinField").value;
    let linkedT = document.getElementById("linkedT")
    linkedT.innerHTML = linkedinField;
    //objective
    let objectiveField = document.getElementById("objectiveField").value;
    let objectiveT = document.getElementById("objectiveT")
    objectiveT.innerHTML = objectiveField;

    //work experience
    let woField = document.getElementById("woField").value;
    let weT = document.getElementById("weT")
    weT.innerHTML = woField;
    //academic
    let aoField = document.getElementById("aoField").value;
    let aqT = document.getElementById("aqT")
    aqT.innerHTML = aoField;


    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-generator').style.display = 'block';


}
//print CV
function printCV() {
    window.print()
}


