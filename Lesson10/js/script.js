localStorage.setItem("name", "Kristin");
const a = localStorage.getItem("name");
console.log(a);

function check() { 
    let val = document.getElementsByName("radio");
    if (val[0].checked) {
        console.log("Жіноча");
    } else { 
        console.log("Чоловіча");
    }
};

const form = document.querySelector(".form");
const nameInput = document.querySelector(".inputName");
const lastNameInput = document.querySelector(".inputLastName");
const age = document.querySelector("#age");
const male = document.getElementsByName("radio");

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) { 
    event.preventDefault();
    const info = {
        name: nameInput.value,
        lastName: lastNameInput.value,
        age: age.value,
        male: male[0].checked,
    };
    console.log(info);
    localStorage.setItem("info", JSON.stringify(info));
    // localStorage.setItem("info", info);
}

const b = localStorage.getItem('info');
console.log(b)

if (localStorage.getItem('info')) { 
    const ls = JSON.parse(localStorage.getItem("info"));
    nameInput.value = ls.name;
    lastNameInput.value = ls.lastName;
}

const form1 = document.querySelector("#form1");
let formData = {};

form1.addEventListener('input', function (event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));

});

if (localStorage.getItem("formData")) { 
    formData = JSON.parse(localStorage.getItem("formData"));
    for (let key in formData) { 
        form1.elements[key].value = formData[key];
    }
}