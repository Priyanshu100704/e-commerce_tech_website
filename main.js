// Sign In/Up Modal Logic
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const signInModal = document.getElementById('signInModal');
const signUpModal = document.getElementById('signUpModal');
const closeSignIn = document.getElementById('closeSignIn');
const closeSignUp = document.getElementById('closeSignUp');

// Open modals
if(signInBtn && signInModal) {
  signInBtn.onclick = () => { signInModal.style.display = 'block'; };
}
if(signUpBtn && signUpModal) {
  signUpBtn.onclick = () => { signUpModal.style.display = 'block'; };
}
// Close modals
if(closeSignIn && signInModal) {
  closeSignIn.onclick = () => { signInModal.style.display = 'none'; };
}
if(closeSignUp && signUpModal) {
  closeSignUp.onclick = () => { signUpModal.style.display = 'none'; };
}
// Close when clicking outside modal content
window.onclick = function(event) {
  if(event.target === signInModal) signInModal.style.display = 'none';
  if(event.target === signUpModal) signUpModal.style.display = 'none';
};

// Simple Toast/Modal for Navbar Actions
function showToast(message) {
  let toast = document.createElement('div');
  toast.className = 'nav-toast';
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

const homeNav = document.getElementById('homeNav');
const aboutNav = document.getElementById('aboutNav');
const productNav = document.getElementById('productNav');
const contactNav = document.getElementById('contactNav');

if(homeNav) homeNav.onclick = () => showToast('Welcome Home!');
if(aboutNav) aboutNav.onclick = () => showToast('About Us: Learn more about our mission.');
if(productNav) productNav.onclick = () => showToast('Browse Products: Check out our latest tech!');
if(contactNav) contactNav.onclick = () => showToast('Contact Us: We are here to help!');
