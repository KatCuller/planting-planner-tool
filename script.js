document.getElementById('zone').addEventListener('change', updatePlantingTime);
document.getElementById('vegetable').addEventListener('change', updatePlantingTime);
document.getElementById('flower').addEventListener('change', updatePlantingTime);

let plantingTimes = {};  // Will store the JSON data

// Fetch the planting times data from the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    plantingTimes = data;  // Store the fetched data
    console.log("Planting Times Loaded:", plantingTimes); // Debugging
  })
  .catch(error => {
    console.error("Error loading the planting times data:", error);
  });

function updatePlantingTime() {
    const zone = document.getElementById('zone').value;
    const vegetable = document.getElementById('vegetable').value;
    const flower = document.getElementById('flower').value;

    let plantingTime = "";

    // Ensure both vegetable and flower are checked and valid
    if (zone && (vegetable || flower)) {
        if (vegetable && plantingTimes[vegetable] && plantingTimes[vegetable][zone]) {
            plantingTime = plantingTimes[vegetable][zone];
        } else if (flower && plantingTimes[flower] && plantingTimes[flower][zone]) {
            plantingTime = plantingTimes[flower][zone];
        }
    }

    // Display the planting time
    document.getElementById('planting-time').textContent = plantingTime || "Please select a valid zone and plant.";
}
