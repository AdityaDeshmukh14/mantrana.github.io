// Function to send whatsapp text

function openWhatsApp() {

    let phoneNumber = "9819041024";  // Replace with your phone number
    let message = "Hello, I want to inquire about your services.";


    let encodedMessage = encodeURIComponent(message);
    let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Function for Testimonial Carousel 

document.addEventListener("DOMContentLoaded", () => {
    showTestimonial(0); // Set initial state
});


let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

function showTestimonial(n) {
    testimonials.forEach((testimonial, index) => {
        testimonial.classList.remove('active');
        dots[index].classList.remove('active');
        if (index === n) {
            testimonial.classList.add('active');
            dots[n].classList.add('active');
        }
    });
}

function currentSlide(n) {
    currentTestimonialIndex = n - 1; 
    showTestimonial(currentTestimonialIndex);
}

function nextSlide() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
}

setInterval(nextSlide, 6000);


function toggleOtherField() {
    const subjectDropdown = document.getElementById('subject');
    const otherField = document.getElementById('other-field');
    if (subjectDropdown.value === 'Other') {
        otherField.style.display = 'block';
    } else {
        otherField.style.display = 'none';
        document.getElementById('other-subject').value = ''; // Clear the "Other" field
    }
}

function toggleOtherFieldReference() {
    const referenceDropdown = document.getElementById('reference');
    const otherField = document.getElementById('other-reference-field');
    if (referenceDropdown.value === 'Other') {
        otherField.style.display = 'block';
    } else {
        otherField.style.display = 'none';
        document.getElementById('other-reference').value = ''; // Clear the "Other" field
    }
}