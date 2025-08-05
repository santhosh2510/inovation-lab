// Global array to hold tasks (global scope)
let tasks = [];

// 1) Function to add a single task and call a callback
const addTask = (task, callback) => {
    tasks.push(task);  // Add task to the array
    console.log(`Task "${task}" added.`);
    callback();         // Call the callback function
};

// 2) Callback function that prints all current tasks
const printTasks = () => {
    console.log("Current Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
};

// 4) Function using arbitrary arguments (rest parameter) to add multiple tasks
const addMultipleTasks = (...newTasks) => {
    newTasks.forEach(task => tasks.push(task));
    console.log(`${newTasks.length} tasks added.`);
};

// 5) Demonstrate variable scope
const scopeDemo = () => {
    let message = "I am inside the function";  // local scope
    console.log(message);
};

let message = "I am outside the function";     // global scope
console.log(message);  // Logs global message
scopeDemo();           // Logs local message

// DEMO:

// Adding one task with a callback
addTask("Buy groceries", printTasks);

// Adding multiple tasks
addMultipleTasks("Clean the room", "Pay bills", "Call mom");
printTasks();
