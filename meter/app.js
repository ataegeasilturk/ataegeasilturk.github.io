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
  minuteTag.innerText = "00";
  secondTag.innerText = "00";
  msTag.innerText = "00";
  time.ms = 00;
  time.sn = 00;
  time.dk = 00;
}

function stop() {
  time.stopped = 1;
  ssButton.innerHTML =
    '<a class="btn btn-success" id="start-btn" onclick="start()">Start</a>';
}
function start() {
  time.stopped = 0;
  ssButton.innerHTML =
    '<a class="btn btn-primary" id="stop-btn" onclick="stop()">Stop</a>';
}

let saveCount;

function save() {
  let min;
  let second;
  let ss;
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
  saveCount=+1;
  saveList = document.getElementById("savings");
  saveList.innerHTML = `${saveList.innerHTML}<li class="list-group-item d-flex justify-content-center" style="font-size:1.5rem;" id="save" onclick="clearSave()"><a href="#" data-toggle="tooltip" data-placement="top" title="Click to delete!">${min}:${second}:${ss}</a></li>`;
};

function clearSave() {
  // saveList = document.getElementById("savings");
  // saveList.innerHTML = " ";
  $("#save").click(function(){
    this.remove()
  });
  };
