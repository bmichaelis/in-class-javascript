let greetingElm = document.getElementById("greeting");
greetingElm.innerText = "Hello World!";

let apples = 2.99;
let carrots = 1.59;
let milk = 2.3;

let checkout = apples * 2 + carrots * 5 + milk;

let total = checkout + checkout * 0.07;

let checkoutElm = document.getElementById("checkout");

checkoutElm.innerText = "Subtotal: $" + checkout + ", " + "Total: $" + total;

// in class exercise

let classRoom = {
  monitorCount: 23,
  isClassInSession: true,
  roomId: "N314",
  students: [
    "Caleb",
    "Anders",
    "Brandon",
    "Nick",
    "Sam",
    "Tarren",
    "Taylin",
    "Heyden",
    "Sam",
    "MacKayla",
    "Gideon",
    "Brayden",
  ],
  location: {
    buildingAddress: "345 Ashton Blvd",
    floor: 3,
    side: "South",
  },
};
