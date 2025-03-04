// Fetch the planting times data from the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    plantingTimes = data;  // Store the fetched data
    console.log("Planting Times Loaded:", plantingTimes); // Debugging

    // Dynamically populate the vegetable dropdown
    const vegetableSelect = document.getElementById('vegetable');
    const flowerSelect = document.getElementById('flower');

    // Clear previous options
    vegetableSelect.innerHTML = '';
    flowerSelect.innerHTML = '';

    // Add the default option (Select a Vegetable)
    vegetableSelect.innerHTML += '<option value="">Select a Vegetable</option>';
    flowerSelect.innerHTML += '<option value="">Select a Flower</option>';

    // Populate the vegetable dropdown
    for (const vegetable in plantingTimes) {
      vegetableSelect.innerHTML += `<option value="${vegetable}">${capitalizeFirstLetter(vegetable)}</option>`;
    }

    // Populate the flower dropdown with the flowers we are using
    const flowers = [
      "daylilies", "lavender", "cone-flower", "black-eyed-susan", "astilbe", 
      "hosta", "peony", "shasta-daisy", "sedum", "coral-bells"
    ];

    for (const flower of flowers) {
      flowerSelect.innerHTML += `<option value="${flower}">${capitalizeFirstLetter(flower.replace("-", " "))}</option>`;
    }

  })
  .catch(error => {
    console.error("Error loading the planting times data:", error);
  });

// Capitalize the first letter of each word in a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Disable vegetable or flower dropdown based on selection
document.getElementById('vegetable').addEventListener('change', function() {
  if (this.value !== "") {
    document.getElementById('flower').disabled = true;
  } else {
    document.getElementById('flower').disabled = false;
  }
});

document.getElementById('flower').addEventListener('change', function() {
  if (this.value !== "") {
    document.getElementById('vegetable').disabled = true;
  } else {
    document.getElementById('vegetable').disabled = false;
  }
});

// Function to update the planting time based on selected zone and plant
document.getElementById('zone').addEventListener('change', updatePlantingTime);
document.getElementById('vegetable').addEventListener('change', updatePlantingTime);
document.getElementById('flower').addEventListener('change', updatePlantingTime);

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
