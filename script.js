document.getElementById('zone').addEventListener('change', updatePlantingTime);
document.getElementById('vegetable').addEventListener('change', updatePlantingTime);
document.getElementById('flower').addEventListener('change', updatePlantingTime);

// Data for Planting Times (you can add more vegetables and flowers)
const plantingTimes = {
    "tomato": {
        "3": "Mid May to Early June",
        "4": "Late May",
        "5": "Last two weeks of May",
        "6": "Late May to June",
        "7": "Late May",
        "8": "Early June"
    },
    "cucumber": {
        "3": "Late May",
        "4": "Late May to June",
        "5": "Late May",
        "6": "Early June",
        "7": "May to Early June",
        "8": "Early June"
    },
    "lettuce": {
        "3": "Late April to May",
        "4": "May",
        "5": "Late April to May",
        "6": "April to May",
        "7": "March to April",
        "8": "March to April"
    },
    // Add more vegetables...
    "black-eyed-susan": {
        "3": "Late April to Early May",
        "4": "Mid April to Early May",
        "5": "April to May",
        "6": "Mid April to May",
        "7": "Mid April to Early May",
        "8": "March to Early April"
    },
    "cone-flower": {
        "3": "Early to Mid May",
        "4": "Late April to May",
        "5": "Mid April to May",
        "6": "April to May",
        "7": "March to April",
        "8": "March"
    },
    // Add more flowers...
};

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

function updatePlantingTime() {
    const zone = document.getElementById('zone').value;
    const vegetable = document.getElementById('vegetable').value;
    const flower = document.getElementById('flower').value;
    
    let plantingTime = "";
    if (vegetable && plantingTimes[vegetable] && plantingTimes[vegetable][zone]) {
        plantingTime = plantingTimes[vegetable][zone];
    } else if (flower && plantingTimes[flower] && plantingTimes[flower][zone]) {
        plantingTime = plantingTimes[flower][zone];
    }

    document.getElementById('planting-time').textContent = plantingTime || "Please select a zone and a plant.";
}
