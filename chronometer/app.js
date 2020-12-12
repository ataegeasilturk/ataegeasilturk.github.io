let secondTag = document.getElementById("second-num");
let msTag = document.getElementById("ms-num");
let minuteTag = document.getElementById("minute-num");
let ssButton = document.getElementById("start-stop");
let time = {
  sn: 00,
  dk: 00,
  ms: 00,
  stopped: 1,
};

const darkMode = document.querySelector("#toggle-darkmode");
let colorMode = localStorage.getItem("darkMode");

document.addEventListener("DOMContentLoaded", function (event) {
  const body = document.querySelector("body");
  const card = document.querySelectorAll(".card");
  let colorMode = localStorage.getItem("darkMode");
  if (colorMode == 1) {
    try {
      body.classList.add("dark-mode");
      card.forEach(function (cardElement) {
        cardElement.classList.add("dark-mode");
      });
      darkMode.classList = "btn btn-light";
      darkMode.innerHTML = '<i class="fas fa-sun" id="toggle-darkmode" alt="Click to toggle dark mode!"></i>';
    } catch (e) {
      console.info("An error occurred while turning dark mode on. Please try again later.")
      console.info(`Error: ${e}`)
    }
  } else if (colorMode == 0 || colorMode == null) {
    try {
      body.classList.remove("dark-mode");
      card.forEach(function (cardElement) {
        cardElement.classList.remove("dark-mode");
      });
      darkMode.classList = "btn btn-dark";
      darkMode.innerHTML = '<i class="fas fa-moon" id="toggle-darkmode" alt="Click to toggle dark mode!"></i>';
      localStorage.setItem("darkMode", 0);
    } catch (e) {
      console.info("An error occurred while turning dark mode on. Please try again later.")
      console.info(`Error: ${e}`)
    }
  } else {
    console.error("An error occurred while turning dark mode on. Please report this issue from GitHub.")
  }
});

setInterval(function () {
  if (time.stopped) return;
  msTag.innerText = time.ms + 1;
  time.ms = time.ms + 1;
  if (time.ms == 100) {
    time.ms = 0;
    time.sn = time.sn + 1;
    if (time.sn < 10) {
      secondTag.innerText = `0${time.sn}`;
      if (time.dk < 10) {
        document.title = `0${time.dk}:0${time.sn} | Chronometer`;
        minuteTag.innerText = `0${time.dk}`;
      }
    } else {
      if (time.dk < 10) {
        document.title = `0${time.dk}:${time.sn} | Chronometer`;
        secondTag.innerText = `${time.sn}`;
        minuteTag.innerText = `0${time.dk}`;
      } else {
        document.title = `${time.dk}:${time.sn} | Chronometer`;
        secondTag.innerText = `${time.sn}`;
      }
    }
  }
  if (time.sn == 60) {
    time.sn = 00;
    time.dk = time.dk + 1;
    time.ms = 00;
    if (time.dk < 10) {
      dkTag.innerText = `0${time.dk}`;
    } else {
      minuteTag.innerText = time.dk;
      secondTag.innerText = time.sn;
      msTag.innerText = time.ms;
    }
  }
}, 10);

function reset() {
  console.log(`Chronometer successfully reseted at ${time.dk}:${time.sn}`);
  minuteTag.innerText = "00";
  secondTag.innerText = "00";
  msTag.innerText = "00";
  time.ms = 00;
  time.sn = 00;
  time.dk = 00;
};

function stop() {
  time.stopped = 1;
  ssButton.innerHTML =
    '<a class="btn btn-success" id="start-btn" onclick="start()">Start</a>';
};

function start() {
  time.stopped = 0;
  ssButton.innerHTML =
    '<a class="btn btn-primary" id="stop-btn" onclick="stop()">Stop</a>';
};

let saveCount = 0;
const saveList = document.getElementById("savings");
const nothingHere = document.querySelector("#nothing-here")

function save() {
  if (saveCount >= 20) {
    alert("Max save limit 20 reached.")
    return
  } else {
    let second;
    let ss;
    let min;
    if (time.dk < 10) {
      min = `0${time.dk}`
    } else {
      min = `${time.dk}`
    };

    if (time.sn < 10) {
      second = `0${time.sn}`;
    } else {
      second = `${time.sn}`;
    };

    if (time.ms < 10) {
      ss = `0${time.ms}`;
    } else {
      ss = `${time.ms}`;
    };
    console.log(saveCount);
    if (saveCount == 0) {
      if (colorMode == 1) {
        nothingHere.remove();
        saveList.innerHTML = `<li class="list-group-item d-flex justify-content-center li-dark" style="font-size:1.5rem;" id="save"><span class="li-dark">${min}:${second}:${ss}</span><a href="#" class="delete-item" style="margin-left: 0.8rem;"><i class="fa fa-remove" style="color:#ebebeb;"></i></a></li>`
        saveCount = 1;
      } else {
        nothingHere.remove();
        saveList.innerHTML = `<li class="list-group-item d-flex justify-content-center" style="font-size:1.5rem;" id="save"><span>${min}:${second}:${ss}</span><a href="#" class="delete-item" style="margin-left: 0.8rem;"><i class="fa fa-remove"></i></a></li>`
        saveCount = 1;
      }
    } else {
      if (colorMode == 1) {
        saveCount = saveCount + 1;
        // saveList.innerHTML = `${saveList.innerHTML}<li class="list-group-item d-flex justify-content-center" style="font-size:1.5rem;" id="save"><a href="#" data-toggle="tooltip" data-placement="top" title="Click to delete!">${min}:${second}:${ss}</a></li>`;
        saveList.innerHTML = `${saveList.innerHTML}<li class="list-group-item d-flex justify-content-center li-dark" style="font-size:1.5rem;" id="save"><span class="li-dark">${min}:${second}:${ss}</span><a href="#" class="delete-item" style="margin-left: 0.8rem;"><i class="fa fa-remove" style="color:#ebebeb;"></i></a></li>`;
      } else {
        saveCount = saveCount + 1;
        // saveList.innerHTML = `${saveList.innerHTML}<li class="list-group-item d-flex justify-content-center" style="font-size:1.5rem;" id="save"><a href="#" data-toggle="tooltip" data-placement="top" title="Click to delete!">${min}:${second}:${ss}</a></li>`;
        saveList.innerHTML = `${saveList.innerHTML}<li class="list-group-item d-flex justify-content-center" style="font-size:1.5rem;" id="save"><span>${min}:${second}:${ss}</span><a href="#" class="delete-item" style="margin-left: 0.8rem;"><i class="fa fa-remove"></i></a></li>`;

      }
    }
    console.log(`Save limit ${saveCount}/20`)
  };
};

function clearAllSave() {
  if (saveCount == 0) {
    console.log("You have nothing to reset!")
    saveList.innerHTML = '<h5 class="text-center" style="margin-bottom:25px;" id="nothing-here">You have nothing to reset!</h5>';
    setTimeout(function () {
      saveList.innerHTML = '<h5 class="text-center" style="margin-bottom:25px;" id="nothing-here">You are not saved anything yet!</h5>';
    }, 2000)
    return
  }
  if (confirm("Are you sure you want to reset saves?")) {
    saveList.innerHTML = '<h5 class="text-center" style="margin-bottom:25px;" id="nothing-here">You are not saved anything yet!</h5>';
    saveCount = 0;
  } else {
    console.log("Reseting all saves canceled.")
  }

};

// ??????? Easter Eggs ???????

document.addEventListener("DOMContentLoaded", function (e) {
  document.addEventListener("keydown", function (e) {
    let key = e.key

    if (key == " ") {
      if (time.stopped) {
        start();
      } else if (!time.stopped) {
        stop();
      };
    } else if (key == "Delete") {
      reset();
    } else if (key == "Enter") {
      save();
    } else {
      console.log(`Nothing is assigned to "${key}" key.`)
    };
  });
});

document.querySelector("body").addEventListener("click", function (e) {
  let target = e.target;
  if (!target.parentElement.className.includes("delete-item")) return;
  target.parentElement.parentElement.remove();
  saveCount = saveCount - 1;
  console.log(saveCount)
  if (!saveCount == 0) return;
  saveList.innerHTML = '<h5 class="text-center" style="margin-bottom:25px;" id="nothing-here">You have nothing to reset!</h5>';
});

darkMode.addEventListener("click", function (event) {
  const body = document.querySelector("body");
  const card = document.querySelectorAll(".card");
  if (colorMode == 0 || colorMode == null) {
    try {
      body.classList.add("dark-mode");
      card.forEach(function (cardElement) {
        cardElement.classList.add("dark-mode");
      });
      darkMode.classList = "btn btn-light";
      darkMode.innerHTML = '<i class="fas fa-sun" id="toggle-darkmode" alt="Click to toggle dark mode!"></i>';
      localStorage.setItem("darkMode", 1);
    } catch (e) {
      console.info("An error occurred while turning dark mode on. Please try again later.")
      console.error(e)
    }
  } else if (colorMode == 1) {
    try {
      body.classList.remove("dark-mode");
      card.forEach(function (cardElement) {
        cardElement.classList.remove("dark-mode");
      });
      darkMode.classList = "btn btn-dark";
      darkMode.innerHTML = '<i class="fas fa-moon" id="toggle-darkmode" alt="Click to toggle dark mode!"></i>';
      localStorage.setItem("darkMode", 0);
    } catch (e) {
      console.info("An error occurred while turning dark mode on. Please try again later.")
      console.error(e)
    }
  } else {
    console.error(`An error occurred. Please report this issue from github.com/ataegeasilturk`)
  }
});