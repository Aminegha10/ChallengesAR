const readline = require("readline");
// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Collection to store contacts
let contacts = [];
// Function to add a contact
function addContact() {
  rl.question("Enter the name of the contact: ", (name) => {
    rl.question("Enter the phone number of the contact: ", (phone) => {
      contacts.push({ name, phone });
      console.log(
        `Contact '${name}' with phone number '${phone}' added successfully.`
      );
      mainMenu();
    });
  });
}
// Function to view all contacts
function viewContacts() {
  console.log("All contacts:");
  contacts.forEach((contact) => {
    console.log(`Name: ${contact.name}, Phone: ${contact.phone}`);
  });
  mainMenu();
}

// Function to search for a contact
function searchContact() {
  rl.question(
    "Enter the name of the contact you want to search for: ",
    (searchName) => {
      const foundContact = contacts.find(
        (contact) => contact.name === searchName
      );
      if (foundContact) {
        console.log(
          `Contact found: Name: ${foundContact.name}, Phone: ${foundContact.phone}`
        );
      } else {
        console.log(`Contact with name '${searchName}' not found.`);
      }
      mainMenu();
    }
  );
}

// Function to display the main menu
function mainMenu() {
  console.log("\nMain Menu:");
  console.log("1. Add a contact");
  console.log("2. View all contacts");
  console.log("3. Search for a contact");
  console.log("4. Exit");

  rl.question("Enter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        addContact();
        break;
      case "2":
        viewContacts();
        break;
      case "3":
        searchContact();
        break;
      case "4":
        console.log("Exiting application...");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        mainMenu();
    }
  });
}
// Start the application
console.log("Welcome to the Contact Management System!");
mainMenu();
