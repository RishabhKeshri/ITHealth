// dashboard.js

// Function to show a specific dashboard tab
function showTab(tabId) {
    const tabs = document.querySelectorAll('.dashboard-tab');
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
  }
  
  // Initially display the "Video Consultation" tab
  document.addEventListener('DOMContentLoaded', () => {
    showTab('video');
  });
  
  // Simulate starting a video consultation
  function startVideo() {
    alert('Starting video consultation...');
    // Integrate with your WebRTC or video API here
  }
  
  // Simulate fetching real-time vitals
  function fetchVitals() {
    // Dummy data for simulation
    const vitals = {
      heartRate: 70,
      bloodPressure: '120/80',
      oxygenLevel: '98%'
    };
    const display = document.getElementById('vitalsDisplay');
    display.innerHTML = `<p>Heart Rate: ${vitals.heartRate} bpm</p>
                         <p>Blood Pressure: ${vitals.bloodPressure}</p>
                         <p>Oxygen Level: ${vitals.oxygenLevel}</p>`;
  }
  
  // Simulate sending an emergency alert
  function sendEmergencyAlert() {
    alert('Emergency alert sent to caregivers and doctors!');
  }
  
  // Simulate viewing health records
  function viewRecords() {
    const display = document.getElementById('recordsDisplay');
    display.innerHTML = `<p>Displaying your secure health records...</p>`;
    // Integrate with your backend API to fetch records
  }
  