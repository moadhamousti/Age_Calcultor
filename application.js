const form = document.querySelector("form");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const dayOutput = document.getElementById("DD");
const monthOutput = document.getElementById("MM");
const yearOutput = document.getElementById("YY");

 

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);
    
    if (!day || !month || !year || month > 12 || day > 31) {
        alert("Invalid input. Please enter valid values.");
        return;
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const yearsDiff = currentYear - year - (currentMonth < month || (currentMonth === month && currentDay < day) ? 1 : 0);
    const monthsDiff = (currentMonth - month + 12) % 12;
    const daysDiff = (currentDay - day + 31) % 31;

    dayOutput.textContent = daysDiff;
    monthOutput.textContent = monthsDiff;
    yearOutput.textContent = yearsDiff;
});
