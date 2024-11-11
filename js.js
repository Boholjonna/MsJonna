

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






