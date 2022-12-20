const inputs = document.querySelectorAll("input"),
      button = document.querySelector("button");

// console.log(inputs, button); // to see the indez of inputs


// iterate over all inputs
inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    // This code gets the current input element and stores it in the currentInput variable
    // This code get the next sibling element of the current input element and stores it in the nextInput variable
    // This code get the previous sibling element of the current input element and stores it in the prevInput variable
    const currentInput = input,
          nextInput = input.nextElementSibling,
          prevInput = input.previousElementSibling;

    // if the value has mote than one character then clear it
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }
    // if the next input is disable and the current value is not empty
    // enable the next input and focus it
    if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    // if the backspace is pressed
    if (e.key === "Backspace"){
      // iterate over all inputs again
      inputs.forEach((input, index2) => {
        // if the index1 of the current input is less than or equal to the index2 of the input in the ouer loop
        // and the previous element exists, et the disabled attribute on the input and focus on the previous element
        if (index1 <= index2 && prevInput){
          input.setAttribute("disabled", true);
          currentInput.value = "";
          prevInput.focus();
        }
      })
    }
    // if the fourth input (which index number is 3) is not empty and has no desable attribute then
    // add active class if not then remove the active class.
    if (!inputs[3].disabled && inputs[3].value !== ""){
      button.classList.add("active");
      return;
    }
    button.classList.remove("active");
  });
});

// focus the first input which index is 0 on window load
window.addEventListener("load", () => inputs[0].focus());