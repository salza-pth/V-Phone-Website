
function validateForm(event) {
    event.preventDefault();
    

    const fullName = document.getElementById('fullName').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    

    document.getElementById('nameError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    
    let isValid = true;


    if (fullName.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters long';
        isValid = false;
    } else {
        let hasOnlyLetters = true;
        for (let i = 0; i < fullName.length; i++) {
            let char = fullName.charAt(i);
            if (char !== ' ' && (char < 'a' || char > 'z') && (char < 'A' || char > 'Z')) {
                hasOnlyLetters = false;
                break;
            }
        }
        if (!hasOnlyLetters) {
            document.getElementById('nameError').textContent = 'Name can only contain letters and spaces';
            isValid = false;
        }
    }

    
    if (!gender) {
        document.getElementById('genderError').textContent = 'Please select your gender';
        isValid = false;
    }

    
    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long';
        isValid = false;
    } else {
        let hasNumber = false;
        for (let i = 0; i < password.length; i++) {
            if (password.charAt(i) >= '0' && password.charAt(i) <= '9') {
                hasNumber = true;
                break;
            }
        }
        if (!hasNumber) {
            document.getElementById('passwordError').textContent = 'Password must contain at least one number';
            isValid = false;
        }
    }

    
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    
    if (isValid) {
        alert('Registration successful!');
        document.getElementById('registerForm').reset();
    }

    return false;
}
