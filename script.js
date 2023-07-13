//Input fields
var userDay = document.getElementById("day");
var userMonth = document.getElementById("month");
var userYear = document.getElementById("year");

const calculateBtn = document.getElementById("calculate-btn");

//Error fields
var dayError = document.getElementById("error-day");
var monthError = document.getElementById("error-month");
var yearError = document.getElementById("error-year");

var label1 = document.querySelectorAll("label")[0];
var label2 = document.querySelectorAll("label")[1];
var label3 = document.querySelectorAll("label")[2];

// this function ensures that user month input < 10 is prepended with a 0
var updateText = function () {
  userMonth.value = ("00" + userMonth.value).slice(-2);
};

var updateText2 = function () {
  userDay.value = ("00" + userDay.value).slice(-2);
};

userMonth.addEventListener("Keyup", updateText, false);
userDay.addEventListener("Keyup", updateText2, false);

userDay.addEventListener("input", (e) => {
  dayError.textContent = "";
  userDay.classList.remove("error-Active");
  label1.classList.remove("active");
});
userMonth.addEventListener("input", (e) => {
  monthError.textContent = "";
  userMonth.classList.remove("error-Active");
  label2.classList.remove("active");
});
userYear.addEventListener("input", (e) => {
  yearError.textContent = "";
  userYear.classList.remove("error-Active");
  label3.classList.remove("active");
});

//The submit event listener
calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const isInvalid = userDay.value.length === 0;
  const isInvalid1 = userMonth.value.length === 0;
  const isInvalid2 = userYear.value.length === 0;

  //This checks and displays appropriate error message depending on the empty input field
  if (isInvalid && isInvalid1 && isInvalid2) {
    userDay.classList.add("error-Active");
    userMonth.classList.add("error-Active");
    userYear.classList.add("error-Active");

    label1.classList.add("active");
    label2.classList.add("active");
    label3.classList.add("active");

    dayError.textContent = "This field is required";
    monthError.textContent = "This field is required";
    yearError.textContent = "This field is required";
  } else if (isInvalid && isInvalid1) {
    label1.classList.add("active");
    label2.classList.add("active");

    userDay.classList.add("error-Active");
    userMonth.classList.add("error-Active");

    dayError.textContent = "This field is required";
    monthError.textContent = "This field is required";
  } else if (isInvalid && isInvalid2) {
    label1.classList.add("active");
    label3.classList.add("active");

    userDay.classList.add("error-Active");
    userYear.classList.add("error-Active");

    dayError.textContent = "This field is required";
    yearError.textContent = "This field is required";
  } else if (isInvalid1 && isInvalid2) {
    label2.classList.add("active");
    label3.classList.add("active");

    userMonth.classList.add("error-Active");
    userYear.classList.add("error-Active");

    monthError.textContent = "This field is required";
    yearError.textContent = "This field is required";
  } else if (isInvalid) {
    label1.classList.add("active");
    userDay.classList.add("error-Active");
    dayError.textContent = "This field is required";
  } else if (isInvalid1) {
    label2.classList.add("active");
    userMonth.classList.add("error-Active");
    monthError.textContent = "This field is required";
  } else if (isInvalid2) {
    label3.classList.add("active");
    userYear.classList.add("error-Active");
    yearError.textContent = "This field is required";
  } else {
    leapYear();
  }
});
function reload() {
  location.reload();
  userDay.value = "";
  userMonth.value = "";
  userYear.value = "";
}

//Leap Year function
function leapYear() {
  var userYear = parseInt(document.getElementById("year").value);
  if (userYear % 4 === 0 && userYear % 100 !== 0) {
    leapYearTest();
  } else if (userYear % 100 === 0 && userYear % 400 === 0) {
    leapYearTest();
  } else {
    valiDate();
  }
}

//checks if the entered month is february
function leapYearTest() {
  var userMonth = parseInt(document.getElementById("month").value);
  if (userMonth === 2) {
    leapYearError();
  } else {
    valiDate();
  }
}

//checks if the entered day is greater than 29
function leapYearError() {
  var userDay = document.getElementById("day").valueAsNumber;
  if (userDay > 29) {
    dayError.innerHTML = "Must be a valid day";
  } else {
    calDate();
  }
}

//This function checks the validity of the user input
function valiDate() {
  var userDay = document.getElementById("day").valueAsNumber;
  var userMonth = parseInt(document.getElementById("month").value);
  var userYear = parseInt(document.getElementById("year").value);

  //current date
  var date = new Date();
  var currentDay = date.getDate();
  var currentMonth = date.getMonth() + 1;
  var currentYear = date.getUTCFullYear();

  if (userYear > currentYear && userMonth > 12 && userDay > 31) {
    showError();
  } else if (userYear === currentYear && userMonth > currentMonth) {
    showError();
  } else if (
    userYear === currentYear &&
    userMonth === currentMonth &&
    userDay > currentDay
  ) {
    showError();
  } else if (userYear > currentYear) {
    showError();
  } else if (userMonth > 12 && userDay > 31) {
    showError();
  } else if (userMonth > 12) {
    showError();
  } else if (userMonth === 2 && userDay < 29) {
    calDate();
  } else if (
    userMonth === 4 ||
    userMonth === 6 ||
    userMonth === 9 ||
    (userMonth === 11 && userDay < 31)
  ) {
    calDate();
  } else if (
    userMonth === 1 ||
    userMonth === 3 ||
    userMonth === 5 ||
    userMonth === 7 ||
    userMonth === 8 ||
    userMonth === 10 ||
    (userMonth === 12 && userDay < 32)
  ) {
    calDate();
  } else {
    showError();
  }

  //This function handles the custom error message
  function showError() {
    if (userYear > currentYear && userMonth > 12 && userDay > 31) {
      dayError.textContent = "Must be a valid day";
      monthError.textContent = "Must be a valid Month";
      yearError.textContent = "Must be in the past";
    } else if (userYear === currentYear && userMonth > currentMonth) {
      dayError.textContent = "Must be a valid day";
      monthError.textContent = "Must be a valid month";
      yearError.textContent = "Must be in the past";
    } else if (
      userYear === currentYear &&
      userMonth === currentMonth &&
      userDay > currentDay
    ) {
      dayError.textContent = "Must be a valid day";
      monthError.textContent = "Must be a valid month";
      yearError.textContent = "Must be in the past";
    } else if (userMonth > 12 && userDay > 31) {
      dayError.textContent = "Must be a valid day";
      monthError.textContent = "Must be a valid month";
    } else if (userYear > currentYear) {
      yearError.textContent = "Must be in the past";
    } else if (userMonth > 12) {
      monthError.textContent = "Must be a valid month";
    } else if (userDay > 31) {
      dayError.textContent = "Must be a valid day";
    } else if (userMonth === 2 && userDay > 28) {
      dayError.innerHTML = "Must be a valid day";
    }
  }
}

//This function calculates the users age
function calDate() {
  //Gets input from user and converts it from string to number using .valueAsNumber
  var userDay = document.getElementById("day").valueAsNumber;
  var userMonth = document.getElementById("month").valueAsNumber;
  var userYear = document.getElementById("year").valueAsNumber;

  //store the number of days in each month in an array
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  //current date
  var date = new Date();
  var currentDay = date.getDate();
  var currentMonth = date.getMonth() + 1;
  var currentYear = date.getUTCFullYear();

  //resulting dates
  var resultingMonth = 0;
  var resultingDay = 0;
  var resultingYear = 0;

  if (userMonth === currentMonth && userDay === currentDay) {
    resultingYear = currentYear - userYear;
  } else if (userMonth === currentMonth && userDay < currentDay) {
    resultingYear = currentYear - userYear;
    resultingDay = Math.abs(currentDay - userDay);
  } else if (userMonth === currentMonth && userDay > currentDay) {
    resultingDay = daysInMonth[currentMonth - 1] - (userDay - currentDay);
    resultingMonth = 12 - userMonth + (currentMonth - 1);
    resultingYear = currentYear - 1 - userYear;
  } else if (currentMonth > userMonth) {
    if (userDay === 1) {
      resultingDay = currentDay - 1;
      resultingMonth = currentMonth - userMonth;
    } else if (userDay === daysInMonth[userMonth - 1]) {
      resultingDay = currentDay;
      resultingMonth = currentMonth - 1 - userMonth;
    } else if (userDay < currentDay) {
      resultingDay = currentDay - userDay;
      resultingMonth = currentMonth - 1 - userMonth;
    } else {
      var sum6 = 0;
      sum6 = daysInMonth[userMonth - 2] - userDay;
      resultingDay = sum6 + currentDay;
      resultingMonth = currentMonth - 1 - userMonth;
    }

    resultingYear = currentYear - userYear;
  } else if (currentMonth < userMonth) {
    if (userDay === 1) {
      resultingDay = currentDay;
      resultingMonth = 12 - userMonth + currentMonth;
    } else if (userDay === daysInMonth[userMonth - 1]) {
      resultingDay = currentDay;
      resultingMonth = 12 - userMonth + (currentMonth - 1);
    } else {
      var sum3 = 0;
      sum3 = daysInMonth[currentMonth - 1] - userDay;
      resultingDay = sum3 + currentDay;
      resultingMonth = 12 - userMonth + (currentMonth - 1);
    }
    resultingYear = currentYear - 1 - userYear;
  }

  //output message
  let text1 = document.getElementById("outputYear");
  let text2 = document.getElementById("outputMonth");
  let text3 = document.getElementById("outputDay");
  const load = () => {
    animate(text1, 0, resultingYear, 1000);
    animate(text2, 0, resultingMonth, 1000);
    animate(text3, 100, resultingDay, 1000);
  };
  load();
  reset1();
}

var reset1 = function () {
  setTimeout(function () {
    calculateBtn.reset();
  }, 10000);
};

// Animation function

function animate(obj, initVal, lastVal, duration) {
  var obj;
  let startTime = null;

  //get the current timestamp and assign it to the currentTime variable
  let currentTime = Date.now();

  //pass the current timestamp to the step function
  const step = (currentTime) => {
    //if the start time is null, assign the current time to startTime
    if (!startTime) {
      startTime = currentTime;
    }

    //calculate the value to be used in calculating the number to be displayed
    const progress = Math.min((currentTime - startTime) / duration, 1);

    //calculate what to be displayed using the value gotten above
    obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

    //checking to make sure the counter does not exceed the last value
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
  };
  //start animating
  window.requestAnimationFrame(step);
}
