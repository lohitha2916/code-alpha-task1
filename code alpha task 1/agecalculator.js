function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) {
        document.getElementById('result').innerText = "Please enter your date of birth.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is: ${age} years`;
}