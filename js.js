

// down below is the algorithm behind switching panels based on the clicked button


// Function to handle panel visibility and store active panel in localStorage
function showPanel(panelId) {
  // Hide all panels
  const panels = document.querySelectorAll('.p0, .p1, .p2, .p3, .p4');
  panels.forEach(function(element) {
      element.style.display = 'none'; // Hide all panels by default
  });

  // Display the selected panel
  const showElement = document.querySelector(`.${panelId}`);
  showElement.style.display = 'block';

  // Store the active panel ID in localStorage
  localStorage.setItem('activePanel', panelId);

  // Reset button colors to white
  const buttons = document.querySelectorAll('#b1, #b2, #b3, #homeIcon');
  buttons.forEach(function(button) {
      button.style.color = 'white';
  });

  // Highlight the active button
  if (panelId === 'p1') {
      document.getElementById('homeIcon').style.color = 'aqua';
  } else if (panelId === 'p2') {
      document.getElementById('b1').style.color = 'aqua';
  } else if (panelId === 'p3') {
      document.getElementById('b2').style.color = 'aqua';
  } else if (panelId === 'p4') {
      document.getElementById('b3').style.color = 'aqua';
  }
}

// Event listeners for each button
document.getElementById('homeIcon').addEventListener('click', function() {
  showPanel('p1');
});
document.getElementById('b1').addEventListener('click', function() {
  showPanel('p2');
});
document.getElementById('b2').addEventListener('click', function() {
  showPanel('p3');
});
document.getElementById('b3').addEventListener('click', function() {
  showPanel('p4');
});




//------------------------------------------------------------------------------

  
// Function to handle panel click and store the active panel in localStorage
// this ensures that when the browser is refreshed the panel clicked stays
// Function to handle panel click and store the active panel in localStorage
function showPanel(panelId) {
    // Hide all panels
    const panels = document.querySelectorAll('.p1, .p2, .p3, .p4');
    panels.forEach(function(element) {
        element.style.display = 'none'; // Hide elements by setting display to 'none'
    });

    // Show the selected panel
    const showElement = document.querySelector(`.${panelId}`);
    showElement.style.display = 'block'; // Ensure the selected panel is visible

    // Store the active panel ID in localStorage
    localStorage.setItem('activePanel', panelId);

    // Change font color of the displayed panel (optional, adjust as needed)
    showElement.style.color = 'aqua';

    // Update button colors to reflect the active panel
    const buttons = document.querySelectorAll('#b1, #b2, #b3, #homeIcon');
    buttons.forEach(function(button) {
        button.style.color = 'white'; // Reset button colors
    });

    // Highlight the active button
    if (panelId === 'p1') {
        document.getElementById('homeIcon').style.color = 'aqua';
    } else if (panelId === 'p2') {
        document.getElementById('b1').style.color = 'aqua';
    } else if (panelId === 'p3') {
        document.getElementById('b2').style.color = 'aqua';
    } else if (panelId === 'p4') {
        document.getElementById('b3').style.color = 'aqua';
    }
}

// Event listeners for each button
document.getElementById('homeIcon').addEventListener('click', function() {
    showPanel('p1');
});

document.getElementById('b1').addEventListener('click', function() {
    showPanel('p2');
});

document.getElementById('b2').addEventListener('click', function() {
    showPanel('p3');
});

document.getElementById('b3').addEventListener('click', function() {
    showPanel('p4');
});

// On page load, retrieve the active panel from localStorage
window.onload = function() {
    const activePanel = localStorage.getItem('activePanel');
    
    // If there is an active panel in localStorage, display it
    if (activePanel) {
        showPanel(activePanel);
    } else {
        // Default to showing Panel 1 if no active panel is saved
        showPanel('p1');
    }
};

//------------------------------------------------------





// Function to adjust layout for mobile devices
function adjustForMobile() {
  if (window.innerWidth <= 1024) {  // Condition for screens up to 1024px (including large phones and tablets)
      // For mobile, reset margins, padding, and positions
      const panels = document.querySelectorAll('.p0, .p1, .p2, .p3, .p4');
      panels.forEach(panel => {
          panel.style.position = 'fixed';  // Position panels as fixed on mobile
          panel.style.top = '0';
          panel.style.left = '0';
          panel.style.width = '100vw';  // Full screen width
          panel.style.height = '100vh';  // Full screen height
          panel.style.margin = '0';      // Reset margin
          panel.style.padding = '0';     // Reset padding
          panel.style.zIndex = 'auto';  // Ensure they are in the correct stacking order
          panel.style.display = 'block'; // Make all panels visible in mobile view
      });

      // Stack panels with p0 in front and others in the back (z-index control)
      document.querySelector('.p0').style.zIndex = '100';  // p0 in front
      document.querySelector('.p1').style.zIndex = '90';   // p1 behind p0
      document.querySelector('.p2').style.zIndex = '80';   // p2 behind p1
      document.querySelector('.p3').style.zIndex = '70';   // p3 behind p2
      document.querySelector('.p4').style.zIndex = '60';   // p4 behind p3
  } else {
      // Reset for desktop: Use the default layout
      const panels = document.querySelectorAll('.p0, .p1, .p2, .p3, .p4');
      panels.forEach(panel => {
          panel.style.position = '';  // Reset to default position (absolute or static)
          panel.style.top = '';
          panel.style.left = '';
          panel.style.width = '';
          panel.style.height = '';
          panel.style.margin = '';
          panel.style.padding = '';
          panel.style.zIndex = '';  // Reset z-index
          panel.style.display = ''; // Reset display settings
      });
  }
}

// Run the function when the page loads
window.onload = adjustForMobile;

// Also, listen for window resize to adjust dynamically when switching between mobile and desktop views
window.addEventListener('resize', adjustForMobile);



