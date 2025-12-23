//Dark Mode
const colorModeBtn = document.getElementById('darkMode');

colorModeBtn.onclick = function() {
    document.body.classList.toggle('darkTheme');
    // Change button text based on mode chosen
    if (document.body.classList.contains('darkTheme')) {
        this.textContent = "Light Mode";
    } else {
        this.textContent = "Dark Mode";
    }
};

// Read details
const expandButtons = document.querySelectorAll('.toggle-text-btn');

expandButtons.forEach(button => {
    button.addEventListener('click', function() {
        const textPanel = this.nextElementSibling;
        
        if (textPanel.style.display === "block") {
            textPanel.style.display = "none";
            this.textContent = "Read Details";
        } else {
            textPanel.style.display = "block";
            this.textContent = "Hide Details";
        }
    });
});

// Alert
function popMessage() {
    alert("Exploring our future technology trends...");
}

// Automated Slideshow
let currentPos = 0;
runSlider();

function runSlider() {
    let x;
    let allSlides = document.getElementsByClassName("mySlides");
    
    for (x = 0; x < allSlides.length; x++) {
        allSlides[x].style.display = "none";  
    }
    
    currentPos++;
    if (currentPos > allSlides.length) { 
        currentPos = 1; 
    }    
    
    allSlides[currentPos - 1].style.display = "block";  
    setTimeout(runSlider, 4500); // Change image every 4.5 seconds
}