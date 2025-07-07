// Select the input field and all buttons
const input = document.querySelector(".Content input");
const buttons = document.querySelectorAll(".Button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        
        if (value === "=") {
        try {
            input.value = eval(input.value);
        } catch {
            input.value = "Error";
        }
        } else if (value.toLowerCase() === "c") {
        input.value = "";
        } else {
        input.value += value;
        }
    });
    });
