//This is the Set and Map code example

let valid_users = new Set();

valid_users.add('Bob');
valid_users.add("Ralph");
valid_users.add("Miles");
valid_users.add("Bob");
valid_users.add("eMBee");
valid_users.add("Bob");

console.log(valid_users);

function alters_my_input(a,b) {
  a.push("Mwa-ha-ha");
  b = "the world is mine!";
}

// This is the References and Values code example
let my_array = ["La", "De", "Da"],
  my_string = "Hello, Friend!";

  alters_my_input(my_array, my_string);

  console.log(my_array);
  console.log(my_string);
