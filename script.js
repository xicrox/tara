function toggleDateType() {
    const isChecked = document.getElementById("date-type").checked;
    const nextSection = document.getElementById("next-section");
    const locationSection = document.getElementById("location-section");
    const virtualSection = document.getElementById("virtual-date-section");
  
    if (isChecked) {
      locationSection.style.display = "none";
      virtualSection.style.display = "block";
      nextSection.style.display = "none";
    } else {
      virtualSection.style.display = "none";
      locationSection.style.display = "block";
      nextSection.style.display = "block";
    }
  }
  
  // Show next section after choosing the date type
  function nextSection(section) {
    document.getElementById(section + "-section").style.display = "block";
    document.getElementById(section + "-section").scrollIntoView({ behavior: 'smooth' });
    document.getElementById(section + '-section').previousElementSibling.style.display = 'none';
  }
  
  // Meal suggestions based on choice
  function chooseMeal(mealType) {
    const mealSuggestions = {
      'Breakfast': { food: 'Pancakes', image: 'pancakes.jpg' },
      'Lunch': { food: 'Sandwich', image: 'sandwich.jpg' },
      'Dinner': { food: 'Steak', image: 'steak.jpg' },
      'Snacks': { food: 'Cookies', image: 'cookies.jpg' },
    };
  
    const suggestion = mealSuggestions[mealType];
    document.getElementById('meal-suggestion').innerText = suggestion.food;
    document.getElementById('meal-image').src = suggestion.image;
    document.getElementById('meal-suggestions').style.display = 'block';
  }
  
  // Virtual activities
  function chooseVirtualActivity(activity) {
    alert("You're ready for your virtual date! Enjoy your " + activity + "!");
  }
  
  // Restart the date planner
  function restart() {
    location.reload();
  }
  