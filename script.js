document.getElementById('zone').addEventListener('change', updatePlantingTime);
document.getElementById('vegetable').addEventListener('change', updatePlantingTime);
document.getElementById('flower').addEventListener('change', updatePlantingTime);

// Full Data for Planting Times (Vegetables and Flowers)
const plantingTimes = {
    "tomato": {
        "1": "Late May to Early June",
        "2": "Mid May",
        "3": "Mid May to Early June",
        "4": "Late May",
        "5": "Last two weeks of May",
        "6": "Late May to June",
        "7": "Late May",
        "8": "Early June",
        "9": "Early June",
        "10": "Early June",
        "11": "Mid June",
        "12": "Early June",
        "13": "Mid June"
    },
    "cucumber": {
        "1": "Late May",
        "2": "Late May to June",
        "3": "Late May",
        "4": "Late May",
        "5": "Late May to June",
        "6": "Early June",
        "7": "May to Early June",
        "8": "Early June",
        "9": "Early June",
        "10": "Mid June",
        "11": "Mid June",
        "12": "Early June",
        "13": "Mid June"
    },
    "lettuce": {
        "1": "Late April to May",
        "2": "Mid April to May",
        "3": "Late April to May",
        "4": "May",
        "5": "Late April to May",
        "6": "April to May",
        "7": "March to April",
        "8": "March to April",
        "9": "February to March",
        "10": "February",
        "11": "February",
        "12": "March",
        "13": "April"
    },
    "carrot": {
        "1": "Early April to May",
        "2": "Mid April to May",
        "3": "Late April to May",
        "4": "Late April to May",
        "5": "Early May",
        "6": "Late April to May",
        "7": "Early May",
        "8": "April to May",
        "9": "March to April",
        "10": "March to April",
        "11": "February to March",
        "12": "February to March",
        "13": "March"
    },
    "bell-pepper": {
        "1": "Late May to Early June",
        "2": "Late May",
        "3": "Mid May",
        "4": "Mid May",
        "5": "Last two weeks of May",
        "6": "Late May to June",
        "7": "Late May",
        "8": "Early June",
        "9": "Early June",
        "10": "Early June",
        "11": "Mid June",
        "12": "Early June",
        "13": "Mid June"
    },
    "zucchini": {
        "1": "Late May",
        "2": "Late May to June",
        "3": "Late May",
        "4": "Late May",
        "5": "Late May to June",
        "6": "Early June",
        "7": "May to Early June",
        "8": "Early June",
        "9": "Early June",
        "10": "Mid June",
        "11": "Mid June",
        "12": "Early June",
        "13": "Mid June"
    },
    "spinach": {
        "1": "Late March to April",
        "2": "Mid March to April",
        "3": "March to April",
        "4": "April",
        "5": "Late March to April",
        "6": "March to April",
        "7": "February to March",
        "8": "February to March",
        "9": "January to February",
        "10": "January to February",
        "11": "January",
        "12": "February",
        "13": "February"
    },
    "beans": {
        "1": "Late May",
        "2": "Late May to June",
        "3": "Late May",
        "4": "Late May",
        "5": "Late May to June",
        "6": "Early June",
        "7": "May to Early June",
        "8": "Early June",
        "9": "Early June",
        "10": "Mid June",
        "11": "Mid June",
        "12": "Early June",
        "13": "Mid June"
    },
    "peas": {
        "1": "Late March to April",
        "2": "Mid March to April",
        "3": "March to April",
        "4": "April",
        "5": "Late March to April",
        "6": "March to April",
        "7": "February to March",
        "8": "February to March",
        "9": "January to February",
        "10": "January to February",
        "11": "January",
        "12": "February",
        "13": "February"
    },
    "black-eyed-susan": {
        "1": "Late April to Early May",
        "2": "Mid April to Early May",
        "3": "Late April to Early May",
        "4": "Mid April to May",
        "5": "April to May",
        "6": "Mid April to May",
        "7": "Mid April to Early May",
        "8": "April to May",
        "9": "April to May",
        "10": "March to April",
        "11": "March",
        "12": "March",
        "13": "April"
    },
    "cone-flower": {
        "1": "Early to Mid May",
        "2": "Late April to May",
        "3": "Mid April to May",
        "4": "April to May",
        "5": "Mid April to May",
        "6": "April to May",
        "7": "March to April",
        "8": "March to April",
        "9": "February to March",
        "10": "February",
        "11": "February",
        "12": "March",
        "13": "April"
    },
    "daylilies": {
        "1": "Late April to May",
        "2": "Mid April to May",
        "3": "April to May",
        "4": "Late April to May",
        "5": "Late April to May",
        "6": "April to May",
        "7": "March to April",
        "8": "March to April",
        "9": "February to March",
        "10": "February",
        "11": "February",
        "12": "March",
        "13": "April"
    },
    "lavender": {
        "1": "Late May to Early June",
        "2": "Mid May to June",
        "3": "Mid May",
        "4": "Early June",
        "5": "Late May to June",
        "6": "Early June",
        "7": "Mid June",
        "8": "Late May",
        "9": "Early June",
        "10": "Late June",
        "11": "Mid June",
        "12": "Early June",
        "13": "June"
    },
    "peony": {
        "1": "Late April to Early May",
        "2": "Mid April to May",
        "3": "Mid April to May",
        "4": "Early May",
        "5": "Late April to May",
        "6": "Early May",
        "7": "Mid May",
        "8": "Late May",
        "9": "Mid May",
        "10": "Early June",
        "11": "Mid June",
        "12": "Early June",
        "13": "June"
    },
    "hosta": {
        "1": "Late May",
        "2": "Late May",
        "3": "Early June",
        "4": "Mid May",
        "5": "Late May",
        "6": "Early June",
        "7": "Early June",
        "8": "Mid June",
        "9": "Mid June",
        "10": "Early July",
        "11": "Late June",
        "12": "Late June",
        "13": "July"
    },
    "bleeding-heart": {
    "1": "Late April to May",
    "2": "Mid April to May",
    "3": "Early May",
    "4": "Mid April to May",
    "5": "Late April to May",
    "6": "Early May",
    "7": "Mid May",
    "8": "Late May",
    "9": "Mid May",
    "10": "Early June",
    "11": "Mid June",
    "12": "Early June",
    "13": "June"
},
"shasta-daisy": {
    "1": "Early to Mid May",
    "2": "Late April to May",
    "3": "Mid April to May",
    "4": "Early May",
    "5": "Late April to May",
    "6": "Early May",
    "7": "Mid May",
    "8": "Late May",
    "9": "Mid May",
    "10": "Early June",
    "11": "Mid June",
    "12": "Early June",
    "13": "June"
},
"bee-balm": {
    "1": "Late April to May",
    "2": "Mid April to May",
    "3": "Early May",
    "4": "Mid April to May",
    "5": "Late April to May",
    "6": "Early May",
    "7": "Mid May",
    "8": "Late May",
    "9": "Mid May",
    "10": "Early June",
    "11": "Mid June",
    "12": "Early June",
    "13": "June"
},
"astilbe": {
    "1": "Late May to Early June",
    "2": "Mid May to June",
    "3": "Early June",
    "4": "Mid May",
    "5": "Late May",
    "6": "Early June",
    "7": "Mid June",
    "8": "Late June",
    "9": "Early June",
    "10": "Mid July",
    "11": "Late June",
    "12": "Late June",
    "13": "July"
},
"phlox": {
    "1": "Mid May to June",
    "2": "Late April to May",
    "3": "Early May",
    "4": "Mid April to May",
    "5": "Late April to May",
    "6": "Early May",
    "7": "Mid May",
    "8": "Late May",
    "9": "Mid May",
    "10": "Early June",
    "11": "Mid June",
    "12": "Early June",
    "13": "June"
},
"coral-bells": {
    "1": "Late April to May",
    "2": "Mid April to May",
    "3": "Early May",
    "4": "Mid April to May",
    "5": "Late April to May",
    "6": "Early May",
    "7": "Mid May",
    "8": "Late May",
    "9": "Mid May",
    "10": "Early June",
    "11": "Mid June",
    "12": "Early June",
    "13": "June"
},
"sedum": {
    "1": "Late April to May",
    "2": "Mid April to May",
    "3": "Early May",
    "4": "Mid April to May",
    "5": "Late April to May",
    "6": "Early May",
    "7": "Mid May",
    "8": "Late May",
    "9": "Mid May",
    "10": "Early June",
    "11": "Mid June",
    "12": "Early June",
    "13": "June"
},
"columbine": {
    "1": "Mid April to May",
    "2": "Late April to May",
    "3": "Early May",
    "4": "Mid April to May",
    "5": "Late April to May",
    "6": "Early May",
    "7": "Mid May",
    "8": "Late May",
    "9": "Mid May",
    "10": "Early June",
    "11": "Mid June",
    "12": "Early June",
    "13": "June"
},
"iris": {
    "1": "Late April to May",
    "2": "Mid April to May",
    "3": "Early May",
    "4": "Mid April to May",
    "5": "Late April to May",
    "6": "Early May",
    "7": "Mid May",
    "8": "Late May",
    "9": "Mid May",
    "10": "Early June",
    "11": "Mid June",
    "12": "Early June",
    "13": "June"
},
"yarrow": {
    "1": "Late April to May",
    "2": "Mid April to May",
    "3": "Early May",
    "4": "Mid April to May",
    "5": "Late April to May",
    "6": "Early May",
    "7": "Mid May",
    "8": "Late May",
    "9": "Mid May",
    "10": "Early June",
    "11": "Mid June",
    "12": "Early June",
    "13": "June"
},
"lupine": {
    "1": "Late April to May",
    "2": "Mid April to May",
    "3": "Early May",
    "4": "Mid April to May",
    "5": "Late April to May",
    "6": "Early May",
    "7": "Mid May",
    "8": "Late May",
    "9": "Mid May",
    "10": "Early June",
    "11": "Mid June",
    "12": "Early June",
    "13": "June"
},
"russian-sage": {
    "1": "Late May to Early June",
    "2": "Mid May to June",
    "3": "Early June",
    "4": "Mid May",
    "5": "Late May",
    "6": "Early June",
    "7": "Mid June",
    "8": "Late June",
    "9": "Early June",
    "10": "Mid July",
    "11": "Late June",
    "12": "Late June",
    "13": "July"
},
"garden-phlox": {
    "1": "Late April to May",
    "2": "Mid April to May",
    "3": "Early May",
    "4": "Mid April to May",
    "5": "Late April to May",
    "6": "Early May",
    "7": "Mid May",
    "8": "Late May",
    "9": "Mid May",
    "10": "Early June",
    "11": "Mid June",
    "12": "Early June",
    "13": "June"
}

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

    console.log("Planting Times Object: ", plantingTimes);  // Check if the object is loaded
    console.log(`Selected Zone: ${zone}`);
    console.log(`Selected Vegetable: ${vegetable}`);
    console.log(`Selected Flower: ${flower}`);

    let plantingTime = "";

    if (zone && (vegetable || flower)) {
        console.log("Planting times:", plantingTimes);

        if (vegetable) {
            console.log(`Vegetable selected: ${vegetable}`);
            if (plantingTimes[vegetable] && plantingTimes[vegetable][zone]) {
                plantingTime = plantingTimes[vegetable][zone];
            }
        }

        if (flower) {
            console.log(`Flower selected: ${flower}`);
            if (plantingTimes[flower] && plantingTimes[flower][zone]) {
                plantingTime = plantingTimes[flower][zone];
            }
        }
    }

    console.log(`Final Planting Time: ${plantingTime}`);

    document.getElementById('planting-time').textContent = plantingTime || "Please select a valid zone and plant.";
}
