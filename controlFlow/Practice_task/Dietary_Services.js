// Define user roles
let userRole = "Enrolled Member";
let accessLevel;
switch (userRole) {
    case "Employee":
        accessLevel = "Access to Dietary Services";
        break;
    case "Enrolled Member":
        accessLevel = "Access to Dietary Services, and one-on-one interaction with a dietician";
        break;
    case "Subscriber":
        accessLevel = "Access to facilitate Dietary Services only";
        break;
        case "Non-Subscriber":
            accessLevel = "Please enroll or subscribe to avail Dietary Services";
            break;
        default:
            accessLevel = "Unknown role";
}
// Print message to user
console.log(`User role: ${userRole}`);
console.log(`Access level: ${accessLevel}`);
// Check if user is eligible for Dietary Services
let userMessage;
if (userRole === "Employee" || userRole === "Enrolled Member" || userRole === "Subscriber") {
    userMessage = `As a ${userRole}, you are eligible for: ${accessLevel}`;
} else if (userRole === "Non-Subscriber") {
    userMessage = `As a ${userRole}, you need to enroll or subscribe first to avail this facility.`;
} else {
    userMessage = "Invalid user role.";
}

console.log(userMessage);