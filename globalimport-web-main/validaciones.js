// Toggle menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});

// ========================================================
// VALIDACIONES DE FORMULARIO
// ========================================================

// ========================
// VALIDACIONES DE DATOS PERSONALES
// ========================

// Validar Nombre Completo
function validateFullName(value) {
    const nameRegex = /^[a-zA-Z\s]{3,60}$/;
    if (!value || value.trim() === '') {
        return { valid: false, message: 'El nombre completo no puede estar vacío.' };
    }
    if (!nameRegex.test(value)) {
        return { valid: false, message: 'El nombre debe contener solo letras y espacios, entre 3 y 60 caracteres.' };
    }
    return { valid: true, message: '' };
}

// Validar Fecha de Nacimiento (mayor de 18 años)
function validateDOB(value) {
    if (!value || value.trim() === '') {
        return { valid: false, message: 'La fecha de nacimiento no puede estar vacía.' };
    }
    const birthDate = new Date(value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    if (age < 18) {
        return { valid: false, message: 'Debes tener al menos 18 años para registrarte.' };
    }
    return { valid: true, message: '' };
}

// Validar RUT Chileno (7-8 dígitos)
function validateRUT(value) {
    if (!value || value.trim() === '') {
        return { valid: false, message: 'El RUT no puede estar vacío.' };
    }
    const rutRegex = /^[0-9]{7,8}$/;
    if (!rutRegex.test(value)) {
        return { valid: false, message: 'El RUT debe contener solo números, entre 7 y 8 dígitos.' };
    }
    return { valid: true, message: '' };
}

// Validar Género (debe estar seleccionado)
function validateGender() {
    const genderOptions = document.querySelectorAll('input[name="gender"]');
    const isSelected = Array.from(genderOptions).some(option => option.checked);
    if (!isSelected) {
        return { valid: false, message: 'Debes seleccionar un género.' };
    }
    return { valid: true, message: '' };
}

// Validar Nacionalidad (no puede ser vacío)
function validateNationality(value) {
    if (!value || value.trim() === '') {
        return { valid: false, message: 'Debes seleccionar una nacionalidad.' };
    }
    return { valid: true, message: '' };
}

// ========================
// VALIDACIONES DE CONTACTO Y ACCESO
// ========================

// Validar Email
function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || value.trim() === '') {
        return { valid: false, message: 'El email no puede estar vacío.' };
    }
    if (!emailRegex.test(value)) {
        return { valid: false, message: 'El email no tiene un formato válido (ejemplo@dominio.com).' };
    }
    return { valid: true, message: '' };
}

// Validar Confirmación de Email
function validateEmailConfirm(email, emailConfirm) {
    if (!emailConfirm || emailConfirm.trim() === '') {
        return { valid: false, message: 'Debes confirmar tu email.' };
    }
    if (email !== emailConfirm) {
        return { valid: false, message: 'Los emails no coinciden.' };
    }
    return { valid: true, message: '' };
}

// Validar Contraseña (mínimo 8 caracteres, 1 mayúscula, 1 número, 1 carácter especial)
function validatePassword(value) {
    if (!value || value.trim() === '') {
        return { valid: false, message: 'La contraseña no puede estar vacía.' };
    }
    if (value.length < 8) {
        return { valid: false, message: 'La contraseña debe tener al menos 8 caracteres.' };
    }
    if (!/[A-Z]/.test(value)) {
        return { valid: false, message: 'La contraseña debe contener al menos 1 letra mayúscula.' };
    }
    if (!/[0-9]/.test(value)) {
        return { valid: false, message: 'La contraseña debe contener al menos 1 número.' };
    }
    if (!/[!@#$%^&*]/.test(value)) {
        return { valid: false, message: 'La contraseña debe contener al menos 1 carácter especial (!@#$%^&*).' };
    }
    return { valid: true, message: '' };
}

// Validar Confirmación de Contraseña
function validatePasswordConfirm(password, passwordConfirm) {
    if (!passwordConfirm || passwordConfirm.trim() === '') {
        return { valid: false, message: 'Debes confirmar tu contraseña.' };
    }
    if (password !== passwordConfirm) {
        return { valid: false, message: 'Las contraseñas no coinciden.' };
    }
    return { valid: true, message: '' };
}

// Validar Teléfono (solo dígitos y +, -, espacios. Mínimo 8 dígitos numéricos)
function validatePhone(value) {
    if (!value || value.trim() === '') {
        return { valid: false, message: 'El teléfono no puede estar vacío.' };
    }
    const phoneRegex = /^[\d\s+\-]{8,}$/;
    const digitsOnly = value.replace(/\D/g, '');
    if (!phoneRegex.test(value)) {
        return { valid: false, message: 'El teléfono solo puede contener dígitos, +, - y espacios.' };
    }
    if (digitsOnly.length < 8) {
        return { valid: false, message: 'El teléfono debe tener al menos 8 dígitos.' };
    }
    return { valid: true, message: '' };
}

// ========================
// VALIDACIONES DE DIRECCIÓN
// ========================

function validateCountry(value) {
    if (!value || value.trim() === '') {
        return { valid: false, message: 'El país no puede estar vacío.' };
    }
    return { valid: true, message: '' };
}

function validateState(value) {
    if (!value || value.trim() === '') {
        return { valid: false, message: 'La provincia/estado no puede estar vacío.' };
    }
    return { valid: true, message: '' };
}

function validateCity(value) {
    const cityRegex = /^[a-zA-Z\s]{2,}$/;
    if (!value || value.trim() === '') {
        return { valid: false, message: 'La ciudad no puede estar vacía.' };
    }
    if (!cityRegex.test(value)) {
        return { valid: false, message: 'La ciudad debe contener solo letras y espacios, mínimo 2 caracteres.' };
    }
    return { valid: true, message: '' };
}

function validateStreet(value) {
    if (!value || value.trim() === '') {
        return { valid: false, message: 'La calle y número no pueden estar vacíos.' };
    }
    if (value.trim().length < 5) {
        return { valid: false, message: 'La calle y número deben tener al menos 5 caracteres.' };
    }
    return { valid: true, message: '' };
}

function validatePostalCode(value) {
    const postalCodeRegex = /^[a-zA-Z0-9]{4,10}$/;
    if (!value || value.trim() === '') {
        return { valid: false, message: 'El código postal no puede estar vacío.' };
    }
    if (!postalCodeRegex.test(value)) {
        return { valid: false, message: 'El código postal debe ser alfanumérico, entre 4 y 10 caracteres.' };
    }
    return { valid: true, message: '' };
}

function validateAdditionalInstructions(value) {
    if (value && value.trim() !== '' && value.length > 200) {
        return { valid: false, message: 'Las instrucciones adicionales no pueden superar 200 caracteres.' };
    }
    return { valid: true, message: '' };
}

// ========================
// FUNCIONES AUXILIARES
// ========================

// Función mejorada para mostrar/ocultar mensajes de error y agregar clases CSS
function showError(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + '-error');
    
    if (errorDiv) {
        if (errorMessage) {
            errorDiv.textContent = errorMessage;
            errorDiv.style.display = 'block';
            // Agregar clase campo-error
            if (field) {
                field.classList.remove('campo-ok');
                field.classList.add('campo-error');
            }
        } else {
            errorDiv.style.display = 'none';
            errorDiv.textContent = '';
            // Remover clase campo-error
            if (field) {
                field.classList.remove('campo-error');
                field.classList.add('campo-ok');
            }
        }
    }
}

// Mostrar fortaleza de contraseña
function showPasswordStrength(password) {
    const strengthDiv = document.getElementById('password-strength');
    if (!strengthDiv) return;
    
    if (!password) {
        strengthDiv.innerHTML = '';
        return;
    }
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    
    let strengthText = '';
    let strengthColor = '';
    
    switch(strength) {
        case 0:
        case 1:
            strengthText = 'Débil';
            strengthColor = '#dc3545';
            break;
        case 2:
            strengthText = 'Regular';
            strengthColor = '#ffc107';
            break;
        case 3:
            strengthText = 'Buena';
            strengthColor = '#17a2b8';
            break;
        case 4:
            strengthText = 'Fuerte';
            strengthColor = '#28a745';
            break;
    }
    
    strengthDiv.innerHTML = `<span style="color: ${strengthColor}; font-weight: bold;">Fortaleza de contraseña: ${strengthText}</span>`;
}

// Mostrar pantalla de éxito
function showSuccessScreen(firstName) {
    const form = document.querySelector('form');
    const successContainer = document.getElementById('success-container');
    const userName = document.getElementById('user-name');
    
    if (form && successContainer && userName) {
        form.style.display = 'none';
        userName.textContent = firstName;
        successContainer.style.display = 'flex';
        // Scroll al inicio
        window.scrollTo(0, 0);
    }
}

// ========================
// INICIALIZACIÓN
// ========================

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // CAMPOS DE DATOS PERSONALES
    const fullNameField = document.getElementById('full-name');
    const dobField = document.getElementById('dob');
    const rutField = document.getElementById('rut');
    const genderOptions = document.querySelectorAll('input[name="gender"]');
    const nationalityField = document.getElementById('nationality');
    
    // CAMPOS DE CONTACTO Y ACCESO
    const emailField = document.getElementById('email');
    const emailConfirmField = document.getElementById('email-confirm');
    const passwordField = document.getElementById('password');
    const passwordConfirmField = document.getElementById('password-confirm');
    const phoneField = document.getElementById('phone');
    
    // CAMPOS DE DIRECCIÓN
    const countryField = document.getElementById('country');
    const stateField = document.getElementById('state');
    const cityField = document.getElementById('city');
    const streetField = document.getElementById('street');
    const postalCodeField = document.getElementById('postal-code');
    const additionalInstructionsField = document.getElementById('additional-instructions');
    const charCounter = document.getElementById('char-counter');
    
    // ========== VALIDACIONES EN TIEMPO REAL - DATOS PERSONALES ==========
    
    if (fullNameField) {
        fullNameField.addEventListener('blur', function() {
            const validation = validateFullName(this.value);
            showError('full-name', validation.valid ? '' : validation.message);
        });
        fullNameField.addEventListener('input', function() {
            const validation = validateFullName(this.value);
            if (validation.valid) showError('full-name', '');
        });
    }
    
    if (dobField) {
        dobField.addEventListener('blur', function() {
            const validation = validateDOB(this.value);
            showError('dob', validation.valid ? '' : validation.message);
        });
        dobField.addEventListener('change', function() {
            const validation = validateDOB(this.value);
            showError('dob', validation.valid ? '' : validation.message);
        });
    }
    
    if (rutField) {
        rutField.addEventListener('blur', function() {
            const validation = validateRUT(this.value);
            showError('rut', validation.valid ? '' : validation.message);
        });
        rutField.addEventListener('input', function() {
            const validation = validateRUT(this.value);
            if (validation.valid) showError('rut', '');
        });
    }
    
    if (genderOptions.length > 0) {
        genderOptions.forEach(option => {
            option.addEventListener('change', function() {
                const validation = validateGender();
                showError('gender', validation.valid ? '' : validation.message);
            });
        });
    }
    
    if (nationalityField) {
        nationalityField.addEventListener('change', function() {
            const validation = validateNationality(this.value);
            showError('nationality', validation.valid ? '' : validation.message);
        });
    }
    
    // ========== VALIDACIONES EN TIEMPO REAL - CONTACTO Y ACCESO ==========
    
    if (emailField) {
        emailField.addEventListener('blur', function() {
            const validation = validateEmail(this.value);
            showError('email', validation.valid ? '' : validation.message);
        });
        emailField.addEventListener('input', function() {
            const validation = validateEmail(this.value);
            if (validation.valid) showError('email', '');
        });
    }
    
    if (emailConfirmField) {
        emailConfirmField.addEventListener('blur', function() {
            const emailValue = emailField ? emailField.value : '';
            const validation = validateEmailConfirm(emailValue, this.value);
            showError('email-confirm', validation.valid ? '' : validation.message);
        });
        emailConfirmField.addEventListener('input', function() {
            const emailValue = emailField ? emailField.value : '';
            const validation = validateEmailConfirm(emailValue, this.value);
            if (validation.valid) showError('email-confirm', '');
        });
    }
    
    if (passwordField) {
        passwordField.addEventListener('input', function() {
            showPasswordStrength(this.value);
            const validation = validatePassword(this.value);
            showError('password', validation.valid ? '' : validation.message);
        });
        passwordField.addEventListener('blur', function() {
            const validation = validatePassword(this.value);
            showError('password', validation.valid ? '' : validation.message);
        });
    }
    
    if (passwordConfirmField) {
        passwordConfirmField.addEventListener('blur', function() {
            const passwordValue = passwordField ? passwordField.value : '';
            const validation = validatePasswordConfirm(passwordValue, this.value);
            showError('password-confirm', validation.valid ? '' : validation.message);
        });
        passwordConfirmField.addEventListener('input', function() {
            const passwordValue = passwordField ? passwordField.value : '';
            const validation = validatePasswordConfirm(passwordValue, this.value);
            if (validation.valid) showError('password-confirm', '');
        });
    }
    
    if (phoneField) {
        phoneField.addEventListener('blur', function() {
            const validation = validatePhone(this.value);
            showError('phone', validation.valid ? '' : validation.message);
        });
        phoneField.addEventListener('input', function() {
            const validation = validatePhone(this.value);
            if (validation.valid) showError('phone', '');
        });
    }
    
    // ========== VALIDACIONES EN TIEMPO REAL - DIRECCIÓN ==========
    
    if (countryField) {
        countryField.addEventListener('change', function() {
            const validation = validateCountry(this.value);
            showError('country', validation.valid ? '' : validation.message);
        });
    }
    
    if (stateField) {
        stateField.addEventListener('blur', function() {
            const validation = validateState(this.value);
            showError('state', validation.valid ? '' : validation.message);
        });
        stateField.addEventListener('input', function() {
            const validation = validateState(this.value);
            if (validation.valid) showError('state', '');
        });
    }
    
    if (cityField) {
        cityField.addEventListener('blur', function() {
            const validation = validateCity(this.value);
            showError('city', validation.valid ? '' : validation.message);
        });
        cityField.addEventListener('input', function() {
            const validation = validateCity(this.value);
            if (validation.valid) showError('city', '');
        });
    }
    
    if (streetField) {
        streetField.addEventListener('blur', function() {
            const validation = validateStreet(this.value);
            showError('street', validation.valid ? '' : validation.message);
        });
        streetField.addEventListener('input', function() {
            const validation = validateStreet(this.value);
            if (validation.valid) showError('street', '');
        });
    }
    
    if (postalCodeField) {
        postalCodeField.addEventListener('blur', function() {
            const validation = validatePostalCode(this.value);
            showError('postal-code', validation.valid ? '' : validation.message);
        });
        postalCodeField.addEventListener('input', function() {
            const validation = validatePostalCode(this.value);
            if (validation.valid) showError('postal-code', '');
        });
    }
    
    if (additionalInstructionsField) {
        additionalInstructionsField.addEventListener('input', function() {
            const currentLength = this.value.length;
            charCounter.textContent = currentLength + '/200';
            const validation = validateAdditionalInstructions(this.value);
            showError('additional-instructions', validation.valid ? '' : validation.message);
        });
        charCounter.textContent = '0/200';
    }
    
    // ========== VALIDACIÓN AL ENVIAR FORMULARIO ==========
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // VALIDAR DATOS PERSONALES
            if (fullNameField) {
                const validation = validateFullName(fullNameField.value);
                if (!validation.valid) {
                    showError('full-name', validation.message);
                    isValid = false;
                } else {
                    showError('full-name', '');
                }
            }
            
            if (dobField) {
                const validation = validateDOB(dobField.value);
                if (!validation.valid) {
                    showError('dob', validation.message);
                    isValid = false;
                } else {
                    showError('dob', '');
                }
            }
            
            if (rutField) {
                const validation = validateRUT(rutField.value);
                if (!validation.valid) {
                    showError('rut', validation.message);
                    isValid = false;
                } else {
                    showError('rut', '');
                }
            }
            
            const genderValidation = validateGender();
            if (!genderValidation.valid) {
                showError('gender', genderValidation.message);
                isValid = false;
            } else {
                showError('gender', '');
            }
            
            if (nationalityField) {
                const validation = validateNationality(nationalityField.value);
                if (!validation.valid) {
                    showError('nationality', validation.message);
                    isValid = false;
                } else {
                    showError('nationality', '');
                }
            }
            
            // VALIDAR CONTACTO Y ACCESO
            if (emailField) {
                const validation = validateEmail(emailField.value);
                if (!validation.valid) {
                    showError('email', validation.message);
                    isValid = false;
                } else {
                    showError('email', '');
                }
            }
            
            if (emailConfirmField) {
                const emailValue = emailField ? emailField.value : '';
                const validation = validateEmailConfirm(emailValue, emailConfirmField.value);
                if (!validation.valid) {
                    showError('email-confirm', validation.message);
                    isValid = false;
                } else {
                    showError('email-confirm', '');
                }
            }
            
            if (passwordField) {
                const validation = validatePassword(passwordField.value);
                if (!validation.valid) {
                    showError('password', validation.message);
                    isValid = false;
                } else {
                    showError('password', '');
                }
            }
            
            if (passwordConfirmField) {
                const passwordValue = passwordField ? passwordField.value : '';
                const validation = validatePasswordConfirm(passwordValue, passwordConfirmField.value);
                if (!validation.valid) {
                    showError('password-confirm', validation.message);
                    isValid = false;
                } else {
                    showError('password-confirm', '');
                }
            }
            
            if (phoneField) {
                const validation = validatePhone(phoneField.value);
                if (!validation.valid) {
                    showError('phone', validation.message);
                    isValid = false;
                } else {
                    showError('phone', '');
                }
            }
            
            // VALIDAR DIRECCIÓN
            if (countryField) {
                const validation = validateCountry(countryField.value);
                if (!validation.valid) {
                    showError('country', validation.message);
                    isValid = false;
                } else {
                    showError('country', '');
                }
            }
            
            if (stateField) {
                const validation = validateState(stateField.value);
                if (!validation.valid) {
                    showError('state', validation.message);
                    isValid = false;
                } else {
                    showError('state', '');
                }
            }
            
            if (cityField) {
                const validation = validateCity(cityField.value);
                if (!validation.valid) {
                    showError('city', validation.message);
                    isValid = false;
                } else {
                    showError('city', '');
                }
            }
            
            if (streetField) {
                const validation = validateStreet(streetField.value);
                if (!validation.valid) {
                    showError('street', validation.message);
                    isValid = false;
                } else {
                    showError('street', '');
                }
            }
            
            if (postalCodeField) {
                const validation = validatePostalCode(postalCodeField.value);
                if (!validation.valid) {
                    showError('postal-code', validation.message);
                    isValid = false;
                } else {
                    showError('postal-code', '');
                }
            }
            
            if (additionalInstructionsField) {
                const validation = validateAdditionalInstructions(additionalInstructionsField.value);
                if (!validation.valid) {
                    showError('additional-instructions', validation.message);
                    isValid = false;
                } else {
                    showError('additional-instructions', '');
                }
            }
            
            // SI TODO ES VÁLIDO, MOSTRAR PANTALLA DE ÉXITO
            if (isValid) {
                const firstName = fullNameField.value.split(' ')[0];
                showSuccessScreen(firstName);
            }
        });
    }
});
