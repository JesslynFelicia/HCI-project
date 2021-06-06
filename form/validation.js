function validateForm() {
    var uname = document.forms["preregis"]["username"].value;
    var email = document.forms["preregis"]["email"].value;
    var password = document.forms["preregis"]["password"].value;
    var date = document.forms["preregis"]["date"].value;
    var errors = [];

    function checkmail(email) {
        var flag = 0;

        if (!email) {
            errors.push("Email must be filled");
            return;
        }

        for (var i = 0; i < email.length; i++) {
            if (email[i] == '@') {
                flag = 1;
            }

            if (email[i] == '@' && email[i + 1] == '.') {
                errors.push("'@' and '.' can't be adjoin");
                return;
            }

        }
        if (flag == 0) {
            errors.push("Must have @");
        }
        if (!email.endsWith('.com') && !email.endsWith('co.id')) {
            errors.push("Email must ends with .com or .co.id");
            return;
        }


    }

    function checkuname(uname) {
        if (uname == "") {
            errors.push("Username must be filled");
            return;
        }

        for (var i = 0; i < uname.length; i++) {

            if ((uname[i] < 'A' || uname[i] > 'z') && (uname[i] < '0' || uname[i] > '9')) {
                errors.push("Username must be alphanumeric");
                return;
            }
        }
    }

    console.log(date);
    var today = new Date();
    var todayyear = today.getFullYear();
    var birthdate = date.split("-");
    var age = todayyear - birthdate[0];
    console.log("birthdate " + birthdate);
    console.log("age" + age);
    if (!date) {
        alert("please insert your birthdate");
        return false;
    }
    var month = today.getMonth() - birthdate[1];
    console.log("month " + month);
    if (month < 0 || (month === 0 && today.getDate() <= birthdate[2])) {

        age--;
    }
    console.log(age);


    checkmail(email);
    checkuname(uname);



    if (8 > password.length) {
        console.log(password.length);
        errors.push("Password must be more than 8 characters");

    }

    if (age < 13) {
        errors.push("You must be 13 years old or older");
    }



    if (!document.getElementById('nationality').value) {
        errors.push("Please choose your nationality");
    }

    if (document.getElementById("agreement to user terms").checked == false) {
        errors.push("Please check the agreement");
    }

    if (errors.length > 0) {
        console.log(errors.length);
        document.getElementById("eror").innerHTML = errors.join('<br>')
        return false;
    } else {
        return true;
    }

}