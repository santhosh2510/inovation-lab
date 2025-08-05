<!DOCTYPE html>
<html>
<head>
  <title>Basic Calculator</title>
</head>
<body>
  <script>
    let choice;
    do {
        // Show menu
        choice = prompt(
            "Basic Calculator Menu:\n" +
            "1. Add\n" +
            "2. Subtract\n" +
            "3. Multiply\n" +
            "4. Divide\n" +
            "5. Exit\n" +
            "Enter your choice (1-5):"
        );

        // Handle Cancel on main menu
        if (choice === null) {
            alert("Canceled. Exiting calculator.");
            break;
        }

        switch (choice) {
            case "1":
            case "2":
            case "3":
            case "4":
                // Get inputs
                let num1 = prompt("Enter the first number:");
                if (num1 === null) continue;

                let num2 = prompt("Enter the second number:");
                if (num2 === null) continue;

                num1 = parseFloat(num1);
                num2 = parseFloat(num2);

                // Validate numbers
                if (isNaN(num1) || isNaN(num2)) {
                    alert("Invalid input! Please enter numeric values.");
                    continue; // Go back to the menu
                }

                let result;

                if (choice === "1") {
                    result = num1 + num2;
                    alert(`Result: ${num1} + ${num2} = ${result}`);
                } else if (choice === "2") {
                    result = num1 - num2;
                    alert(`Result: ${num1} - ${num2} = ${result}`);
                } else if (choice === "3") {
                    result = num1 * num2;
                    alert(`Result: ${num1} * ${num2} = ${result}`);
                } else if (choice === "4") {
                    if (num2 === 0) {
                        alert("Error: Cannot divide by zero.");
                    } else {
                        result = num1 / num2;
                        alert(`Result: ${num1} / ${num2} = ${result}`);
                    }
                }
                break;

            case "5":
                alert("Exiting calculator. Goodbye!");
                break;

            default:
                alert("Invalid choice! Please enter a number between 1 and 5");
                continue;
        }

        if (choice === "5") {
            break;
        }

    } while (true);
  </script>
</body>
</html>
