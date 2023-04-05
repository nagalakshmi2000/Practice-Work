let clientName = document.getElementById("clientId");
clientName.addEventListener("focusout", client);
clientDetails = document.getElementById("letter");
function client() {
    console.log(typeof (clientName.value))
    // console.log(inputtxt.target)
    var clientData = /^[A-Za-z]{5,50}$/;
    // console.log(inputtxt.value);
    // console.log(letters.test(inputtxt.target.value));
    if (clientData.test(clientName.value)) {
        clientDetails.innerHTML = "Valid";
        clientDetails.style.color = "green";
    }
    else if (clientName.value.toString() === "".toString()) {
        clientDetails.innerHTML = "Required";
        clientDetails.style.color = "red";
    }
    else {
        clientDetails.innerHTML = "Only Alphabets are allowed between 5 and 50";
        clientDetails.style.color = "dark red";
        // document.getElementById("clientId").style.border = "2px solid red";
    }
}
// console.log(client_name);
let companyNameId = document.getElementById("companyId");
company = document.getElementById("company-data");
companyNameId.addEventListener("focusout", companyName);
function companyName() {
    var companyData = /^[a-zA-Z]{5,50}$/;
    if (companyData.test(companyNameId.value)) {
        company.innerHTML = "valid";
        company.style.color = "green";
    }
    else {
        if (companyNameId.value.toString() === "".toString()) {
            company.innerHTML = "Required";
            company.style.color = "red";
        }
        else {
            company.innerHTML = "Minimum of 5 to 50 Chracters"
            company.style.color = "dark red";
        }
    }
}
let departments = document.getElementById("departmentId");
departmentName = document.getElementById("departmentNameId");
departments.addEventListener("focusout", departmentNameId);
function departmentNameId() {
    if (departments.value.toString() === "".toString()) {
        departmentName.innerHTML = "Required";
        departmentName.style.color = "Red";
    }
    else {
        departmentName.innerHTML = "Valid";
        departmentName.style.color = "green";
    }
}
let mailRadioButton = document.getElementById("radio-mail");
mailRadioButton.addEventListener("click", () => {
    document.getElementById("email-id").parentElement.parentElement.style.display = "flex";
    document.getElementById("phone-id").parentElement.parentElement.style.display = "none";
});
var phoneRadioButton = document.getElementById("radio-phone");
phoneRadioButton.addEventListener('click', () => {
    document.getElementById("email-id").parentElement.parentElement.style.display = "none";
    document.getElementById("phone-id").parentElement.parentElement.style.display = "flex";
});
var mail = document.getElementById("email-id");
email = document.getElementById("emailIdName");
mail.addEventListener("focusout", emailName)
function emailName() {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailFormat.test(mail.value)) {
        email.innerHTML = "Valid";
    }
    else {
        if (mail.value.toString() === "".toString()) {
            email.innerHTML = "Required";
        }
        else {
            email.innerHTML = "Invalid";
        }
    }
}
var phone = document.getElementById("phone-id");
phoneIdName = document.getElementById("phoneid-data");
phone.addEventListener("focusout", phoneName);
function phoneName() {
    var phoneformat = /^[9]\d{9}$/;
    if (phoneformat.test(phone.value)) {
        phoneIdName.innerHTML = "Valid";
    }
    else {
        if (phone.value.toString() === "".toString()) {
            phoneIdName.innerHTML = "Required";
        }
        else {
            phoneIdName.innerHTML = "Invalid";
        }
    }
}
var street = document.getElementById("address");
streetName = document.getElementById("street-address");
street.addEventListener("focusout", streetNameValue)
function streetNameValue() {
    console.log("ghasj");
    if (street.value.toString() === "".toString()) {
        streetName.innerHTML = "Required";
        streetName.style.color = "Red";
        streetName.style.marginLeft = "14px";
    }
    else {
        streetName.innerHTML = "Valid";
        streetName.style.color = "green";
        streetName.style.marginLeft = "14px";
    }
}
var addressline = document.getElementById("addresslineName");
addressLineId = document.getElementById("addressline");
addressline.addEventListener("focusout", addressLineField)
function addressLineField() {
    if (addressline.value.toString() === "".toString()) {
        addressLineId.innerHTML = "Required";
        addressLineId.style.color = "Red";
        addressLineId.style.marginLeft = "14px";
    }
    else {
        addressLineId.innerHTML = "Valid";
        addressLineId.style.color = "green";
        addressLineId.style.marginLeft = "14px";
    }
}
var cityName = document.getElementById("cityAddress");
cityNameId = document.getElementById("city-address");
document.addEventListener("focusout", cityAddress)
function cityAddress() {
    if (cityName.value.toString() === "".toString()) {
        cityNameId.innerHTML = "Required";
        cityNameId.style.color = "Red";
        cityNameId.style.marginLeft = "14px";
        // document.getElementById("state_address").style.display="none";
        // document.getElementById("Zipcode").style.display="none";
    }
    else {
        cityNameId.innerHTML = "Valid";
        cityNameId.style.color = "green";
        cityNameId.style.marginLeft = "14px";
        // document.getElementById("state_address").style.display="none";
        // document.getElementById("Zipcode").style.display="none";
    }
}
var region = document.getElementById("state-address");
regionName = document.getElementById("stateAddressId");
document.addEventListener("focusout", stateName)
function stateName() {
    if (region.value.toString() === "".toString()) {
        regionName.innerHTML = "Required";
        regionName.style.color = "Red";
        regionName.style.marginLeft = "14px";
    }
    else {
        regionName.innerHTML = "Valid";
        regionName.style.color = "green";
        regionName.style.marginLeft = "14px";
    }
}
var zipCodeName = document.getElementById("postalcode");
zipCodeNameId = document.getElementById("Zipcode");
document.addEventListener("focusout", postalCode)
function postalCode() {
    var postalCodeName = /^[0-9]{6}$/;
    if (postalCodeName.test(zipCodeName.value)) {
        zipCodeNameId.innerHTML = "Valid";
        zipCodeNameId.style.color = "green";
    }
    else {
        if (zipCodeName.value.toString() === "".toString()) {
            zipCodeNameId.innerHTML = "Required";
            zipCodeNameId.style.color = "Red";
            zipCodeNameId.style.marginLeft = "14px";
        }
        else {
            zipCodeNameId.innerHTML = "Invalid";
            zipCodeNameId.style.color = "red";
            zipCodeNameId.style.marginLeft = "14px";
        }
    }
}
var countryId = document.getElementById("couselect");
countryName = document.getElementById("country");
countryId.addEventListener("focusout", countryField);
function countryField() {
    if (countryId.value.toString() === "".toString()) {
        // console.log("required");
        countryName.innerHTML = "Required";
        countryName.style.color = "Red";
        countryName.style.marginLeft = "15px";
    }
    else {
        countryName.innerHTML = "Valid";
        countryName.style.color = "green";
        countryName.style.marginLeft = "15px";
    }
}
var companyWebsite = document.getElementById("websites");
websiteId = document.getElementById("company-website");
document.addEventListener("focusout", websiteField)
function websiteField() {
    var data = companyWebsite.value;
    var result = data.startsWith("https");
    if (result) {
        websiteId.innerHTML = "Valid";
        websiteId.style.color = "green";
    }
    else if (companyWebsite.value.toString() === "".toString()) {
        websiteId.innerHTML = "Required";
        websiteId.style.color = "Red";
    }
    else {
        websiteId.innerHTML = "Invalid";
        websiteId.style.color = "Red";
    }
}
let billingName = document.getElementById("dateId");
let dateNameId = document.getElementById("calender");
billingName.addEventListener("focusout", function () {
    let dateValue = new Date();
    let dd = dateValue.getDate();
    let mm = dateValue.getMonth() + 1;
    let yy = dateValue.getFullYear();
    let inputdatevalue = billingName.value;
    let datearray = inputdatevalue.split("-");
    var billingData = document.getElementById("billing");
    billingData.value = inputdatevalue;
    if (datearray[0] >= yy && datearray[1] >= mm && datearray[2] >= dd) {
        dateNameId.innerHTML = "Selected";
        // console.log("true");
    }
    else {
        if (inputdatevalue.toString() === "".toString()) {
            dateNameId.innerHTML = "Required";
        }
        else {
            dateNameId.innerHTML = "Invalid";
        }
    }
});
var additionalInformation = document.getElementById("additionalName");
let additionalId = document.getElementById("addtionalNameId");
document.addEventListener("focusout", additionalName);
function additionalName() {
    // console.log((add_info.value.length > 1) && (add_info.value.length <= 200));
    if ((additionalInformation.value.length > 1) && (additionalInformation.value.length <= 200)) {

        additionalId.innerHTML = "Valid";
        additionalId.style.color = "green";
    }
    else {
        if (additionalInformation.value.toString() === "".toString()) {
            additionalId.innerHTML = "Required";
            additionalId.style.color = "Red";
        }
        else {
            additionalId.innerHTML = "Invalid";
            additionalId.style.color = "red";
        }
    }
}
// For localStorage
let clients = [];
let submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
   
    let clientobject = {
        clientName: clientName.value,
        companyName: companyNameId.value,
        department: departments.value,
        contactWay1: mail.value,
        contactWay2: phone.value,
        companyAddress: companyAddressField(),
        billingdate: billing.value
    }
    function companyAddressField() {

        return (street.value + " " + addressline.value + " " + cityName.value + " " + region.value + " " + zipCodeName.value + " " + countryId.value);
    }

    if (clientName.value !== "" && companyNameId.value !== "" && departments.value !== "" && (mail.value !== "" || phone.value !== "") && street.value !== "" && addressline.value !== "" && cityName.value !== "" && region.value !== "" && zipCodeName.value !== "" && countryId.value !== "") {

        clients.push(clientobject);
        console.log(clientobject)
        let myjson = JSON.stringify(clients);
        localStorage.setItem("testjson", myjson);
        let data = localStorage.getItem("testjson");
        let object = JSON.parse(data);
        let tbody = document.querySelector("#tablebody");
        tbody.innerHTML ="";
        object.forEach(element => {
            console.log(element);
            tbody.innerHTML +=
                `<tr>
        <td>${element.clientName}</td>
        <td>${element.companyName}</td>
        <td>${element.department}</td>
        <td>${element.contactWay1}${element.contactWay2}</td>                   
        <td>${element.companyAddress}</td>        
        <td>${element.billingdate}</td>   
        </tr>     
        `
        });
    }
    else {
        alert("Please enter Something");
    }
    document.clientForm.reset();
    let errorMessage = document.querySelectorAll(".showError");
    errorMessage.forEach(element=>{element.innerHTML="";})
})
