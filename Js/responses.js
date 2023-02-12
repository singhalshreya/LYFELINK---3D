function getBotResponse(input) {
  
    if (input == "Hello") {
        return "Hello there! How can I help you?";
    } else if (input == "What does lyfelink do") {
        return "Lyfelink is an onine 3D sustainable rental platform that shows 3D view of properties. What to explore?";
    } else if (input == "Yes") {
        return "Register/Sign in first.";
    } else if (input == "Done") {
        return "Search for the location you want a property in. Download the app and view the property.";
    }else if (input == "Okay") {
        return "Anything else?";
    }else if (input == "No") {
        return "Have a great time exploring!";
    }else if (input == "Goodbye") {
        return "Talk to you later!";
    }else {
        return "Try asking something else!";
    }
       
}