const submit = document.querySelector("#submit");

submit.addEventListener('click', submitted);

function submitted(e) {
    e.preventDefault();

    let isValid = true;

    // Grabbing all the input values
    const dayInput = document.getElementById('day');
    const dayLabel = document.querySelector("label[for='day']");
    const day = dayInput.value;

    const monthInput = document.getElementById('month');
    const monthLabel = document.querySelector("label[for='month']");
    const month = monthInput.value;

    const yearInput = document.getElementById('year');
    const yearLabel = document.querySelector("label[for='year']");
    const year = yearInput.value;
    
    // Day validation
    const dayError = document.querySelector(".day-error");
    const dayNum = Number(day);

    if (day === "") {
        dayError.textContent = "This field is required";
        isValid = false;
        dayInput.classList.add("input-error");
        dayLabel.classList.add("input-error");
    } else if (isNaN(dayNum)) {
        dayError.textContent = "Must be a valid day"; 
        isValid = false;
        dayInput.classList.add("input-error");
        dayLabel.classList.add("input-error");
    } else if (dayNum < 1 || dayNum > 31) {
        dayError.textContent = "Must be a valid day";
        isValid = false;
        dayInput.classList.add("input-error");
        dayLabel.classList.add("input-error");
    } else {
        dayError.textContent = "";
        dayInput.classList.remove("input-error");
        dayLabel.classList.remove("input-error");
    }
    
    // Month validation
    const monthError = document.querySelector(".month-error");
    const monthNum = Number(month);
    
    if (month === "") {
        monthError.textContent = "This field is required";
        isValid = false;
        monthInput.classList.add("input-error");
        monthLabel.classList.add("input-error");
    } else if (isNaN(monthNum)) {
       monthError.textContent = "Must be a valid month"; 
       isValid = false;
       monthInput.classList.add("input-error");
       monthLabel.classList.add("input-error");
    } else if (monthNum < 1 || monthNum > 12) {
        monthError.textContent = "Must be a valid month";
        isValid = false;
        monthInput.classList.add("input-error");
        monthLabel.classList.add("input-error");
    } else {
        monthError.textContent = "";
        monthInput.classList.remove("input-error");
        monthLabel.classList.remove("input-error");
    }

    // Year validation
    const currentYear = new Date().getFullYear();
    const yearError = document.querySelector(".year-error")
    const yearNum = Number(year);

    if (year === "") {
        yearError.textContent = "This field is required";
        isValid = false;
        yearInput.classList.add("input-error");
        yearLabel.classList.add("input-error");
    } else if (isNaN(yearNum)) {
       yearError.textContent = "Must be a valid year"; 
       isValid = false;
       yearInput.classList.add("input-error");
       yearLabel.classList.add("input-error");
    } else if (yearNum > currentYear) {
       yearError.textContent = "Must be in the past";
       isValid = false;
       yearInput.classList.add("input-error");
       yearLabel.classList.add("input-error");
    } else if (yearNum < 1900) {
       yearError.textContent = "Must be a valid year";
       isValid = false;
       yearInput.classList.add("input-error");
       yearLabel.classList.add("input-error");
    } else {
        yearError.textContent = "";
        yearInput.classList.remove("input-error");
        yearLabel.classList.remove("input-error");
    }

    // testDate check
    if (isValid) {
        const testDate = new Date(yearNum, monthNum - 1, dayNum);
        if (testDate.getMonth() !== monthNum - 1 || testDate.getDate() !== dayNum) {
            dayError.textContent = "Must be a valid date";
            isValid = false;
            dayInput.classList.add("input-error");
            dayLabel.classList.add("input-error");
            monthInput.classList.add("input-error");
            monthLabel.classList.add("input-error");
            yearInput.classList.add("input-error");
            yearLabel.classList.add("input-error");
        }

        // Age calculation
        const present = new Date();
        const presentDay = present.getDate();
        const presentMonth = present.getMonth();
        const presentYear = present.getFullYear();
        let days = presentDay - dayNum;
        let months = presentMonth - (monthNum - 1);
        let years = presentYear - yearNum;

    if (days < 0) {
         const daysInPrevMonth = new Date(presentYear, presentMonth, 0).getDate();
         days = daysInPrevMonth + days;
         months = months - 1
        }
    if (months < 0) {
        months = months + 12;
        years = years - 1;
    }

    const dayResult = document.querySelector(".day-result")
    const monthResult = document.querySelector(".month-result")
    const yearResult = document.querySelector(".year-result")

    // Animations
    let dayCount = 0;
    
    const dayTimer = setInterval(() => {
    dayCount = dayCount + 1;
    dayResult.textContent = dayCount;
    
    if (dayCount >= days) {
        clearInterval(dayTimer);
    }
    }, 50);

    let monthCount = 0;

    const monthTimer = setInterval(() => {
    monthCount = monthCount + 1;
    monthResult.textContent = monthCount;
    
    if (monthCount >= months) {
        clearInterval(monthTimer);
    }
    }, 50);

    let yearCount = 0;

    const yearTimer = setInterval(() => {
    yearCount = yearCount + 1;
    yearResult.textContent = yearCount;
    
    if (yearCount >= years) {
        clearInterval(yearTimer);
    }
    }, 50);
    
    }
    
}


