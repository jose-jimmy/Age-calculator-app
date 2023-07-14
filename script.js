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
const updateText = function () {
  userMonth.value = ("00" + userMonth.value).slice(-2);
};

const updateText2 = function () {
  userDay.value = ("00" + userDay.value).slice(-2);
};

userMonth.addEventListener("Keyup", updateText);
userDay.addEventListener("Keyup", updateText2);

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
    dayError.innerHTML = "There are only 29 days";
    label1.classList.add("active");
    document.getElementById("day").classList.add("error-Active");
  } else {
    calDate();
  }
}

//This function checks the validity of the user input
function valiDate() {
  var userDay = document.getElementById("day").valueAsNumber;
  var userMonth = parseInt(document.getElementById("month").value);
  var userYear = parseInt(document.getElementById("year").value);

  var userDayError = document.getElementById("day");
  var userMonthError = document.getElementById("month");
  var userYearError = document.getElementById("year");
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
  } else if (
    (userMonth === 1 ||
      userMonth === 3 ||
      userMonth === 5 ||
      userMonth === 7 ||
      userMonth === 8 ||
      userMonth === 10 ||
      userMonth === 12) &&
    userDay > 31
  ) {
    showError();
    label1.classList.add("active");
    userDayError.classList.add("error-Active");
  } else if (
    (userMonth === 4 ||
      userMonth === 6 ||
      userMonth === 9 ||
      userMonth === 11) &&
    userDay > 30
  ) {
    showError();
    label1.classList.add("active");
    userDayError.classList.add("error-Active");
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

      label1.classList.add("active");
      label2.classList.add("active");
      label3.classList.add("active");

      userDayError.classList.add("error-Active");
      userMonthError.classList.add("error-Active");
      userYearError.classList.add("error-Active");
    } else if (userYear === currentYear && userMonth > currentMonth) {
      dayError.textContent = "Must be a valid day";
      monthError.textContent = "Must be a valid month";
      yearError.textContent = "Must be in the past";

      label1.classList.add("active");
      label2.classList.add("active");
      label3.classList.add("active");

      userDayError.classList.add("error-Active");
      userMonthError.classList.add("error-Active");
      userYearError.classList.add("error-Active");
    } else if (
      userYear === currentYear &&
      userMonth === currentMonth &&
      userDay > currentDay
    ) {
      dayError.textContent = "Must be a valid day";
      monthError.textContent = "Must be a valid month";
      yearError.textContent = "Must be in the past";

      label1.classList.add("active");
      label2.classList.add("active");
      label3.classList.add("active");

      userDayError.classList.add("error-Active");
      userMonthError.classList.add("error-Active");
      userYearError.classList.add("error-Active");
    } else if (userMonth > 12 && userDay > 31) {
      dayError.textContent = "Must be a valid day";
      monthError.textContent = "Must be a valid month";

      label1.classList.add("active");
      label2.classList.add("active");

      userDayError.classList.add("error-Active");
      userMonthError.classList.add("error-Active");
    } else if (userYear > currentYear) {
      yearError.textContent = "Must be in the past";
      label3.classList.add("active");
      userYearError.classList.add("error-Active");
    } else if (userMonth > 12) {
      monthError.textContent = "Must be a valid month";
      label2.classList.add("active");
      userMonthError.classList.add("error-Active");
    } else if (
      (userMonth === 1 ||
        userMonth === 3 ||
        userMonth === 5 ||
        userMonth === 7 ||
        userMonth === 8 ||
        userMonth === 10 ||
        userMonth === 12) &&
      userDay > 31
    ) {
      dayError.textContent = "There are only 31 days";
    } else if (
      (userMonth === 4 ||
        userMonth === 6 ||
        userMonth === 9 ||
        userMonth === 11) &&
      userDay > 30
    ) {
      dayError.textContent = "There are only 30 days";
    } else if (userDay > 31) {
      dayError.textContent = "Must be a valid day";
    } else if (userMonth === 2 && userDay > 28) {
      dayError.innerHTML = "There are only 28 days";
      label1.classList.add("active");
      userDayError.classList.add("error-Active");
    }
  }
}

//This function calculates the users age
function calDate() {
  //Gets input from user and converts it from string to number using .valueAsNumber
  var userDay = document.getElementById("day").valueAsNumber;
  var userMonth = document.getElementById("month").valueAsNumber;
  var userYear = document.getElementById("year").valueAsNumber;

  //current date
  const date = new Date(0);
  const currentDay = date.getUTCDate();
  const currentMonth = date.getUTCMonth();
  const currentYear = date.getUTCFullYear();

  //resulting dates
  var resultingMonth,
    resultingDay,
    resultingYear = 0;

  //calculates the users age
  const birthDate = new Date(`${userYear}-${userMonth}-${userDay}`);
  const diff = new Date(Date.now() - birthDate.getTime());

  resultingYear = Math.abs(diff.getUTCFullYear() - currentYear);
  resultingMonth = Math.abs(diff.getUTCMonth() - currentMonth);
  resultingDay = Math.abs(diff.getUTCDate() - currentDay);

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
}

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
