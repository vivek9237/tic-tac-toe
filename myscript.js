function addDelay(_0x75a2x2) {
  document.getElementById(_0x75a2x2).style.WebkitTransition = "all 0.20s";
  document.getElementById(_0x75a2x2).style.transition = "all 0.20s";
}
function animateBox(_0x75a2x2, _0x75a2x4) {
  document.getElementById(_0x75a2x2).style.width = _0x75a2x4;
  document.getElementById(_0x75a2x2).style.height = _0x75a2x4;
}
function changeColor(_0x75a2x6, _0x75a2x7) {
  document.getElementById("gameboard").style.borderColor = _0x75a2x6;
  document.getElementById("snackbar").style.color = _0x75a2x7;
}
function myFunctionWon() {
  var _0x75a2x9 = document.getElementById("snackbar2");
  _0x75a2x9.className = "show";
  setTimeout(function () {
    _0x75a2x9.className = _0x75a2x9.className.replace("show", "");
  }, 1e5);
}
function myFunction() {
  var _0x75a2x9 = document.getElementById("snackbar");
  _0x75a2x9.className = "show";
  var _0x75a2xb = new Audio("tone/points.mp3");
  _0x75a2xb.play();
  setTimeout(function () {
    _0x75a2x9.className = _0x75a2x9.className.replace("show", "");
  }, 1200);
}
function getvalue(_0x75a2xd) {
  var _0x75a2xe = window.location.search;
  var _0x75a2xf = _0x75a2xe.replace("?", "").split("&");
  for (var _0x75a2x10 = 0; _0x75a2x10 < _0x75a2xf.length; _0x75a2x10++) {
    var _0x75a2x9 = _0x75a2xf[_0x75a2x10].split("=");
    if (_0x75a2x9[0] == _0x75a2xd) {
      return _0x75a2x9[1];
    }
  }
  ;
  return 0;
}
function inatializePage() {
  var _0x75a2xb = new Audio("tone/click.mp3");
  var _0x75a2x12 = new Audio("tone/points.mp3");
  var _0x75a2x13 = getvalue("boxlength");
  var _0x75a2x14 = getvalue("boxheight");
  var _0x75a2x15 = getvalue("player");
  if (isNaN(_0x75a2x13) || isNaN(_0x75a2x14) || isNaN(_0x75a2x15)) {
    window.location = "index.html";
  } else {
    if (_0x75a2x13 > 8 || _0x75a2x13 < 4 || _0x75a2x14 > 8 || _0x75a2x14 < 4 || _0x75a2x15 > 3 || _0x75a2x15 < 2) {
      window.location = "index.html";
    } else {
      doAfterinitialization(_0x75a2x13, _0x75a2x14, _0x75a2x15);
    }
  }
}
function doAfterinitialization(_0x75a2x13, _0x75a2x14, _0x75a2x15) {
  initailiseScoreboard(_0x75a2x15);
  initailiseGameboard(_0x75a2x13, _0x75a2x14);
}
function initailiseScoreboard(_0x75a2x15) {
  var _0x75a2x18 = document.getElementById("scoreboard");
  var _0x75a2x19 = [];
  var _0x75a2x1a = _0x75a2x18.insertRow(0);
  for (var _0x75a2x10 = 0; _0x75a2x10 < _0x75a2x15 * 2; _0x75a2x10 += 2) {
    var _0x75a2x1b = _0x75a2x1a.insertCell(_0x75a2x10);
    _0x75a2x1b.innerHTML = "Player-" + (_0x75a2x10 / 2 + 1);
    _0x75a2x19[_0x75a2x10] = _0x75a2x1a.insertCell(_0x75a2x10 + 1);
    _0x75a2x19[_0x75a2x10].innerHTML = "0";
  }
}
function initailiseGameboard(_0x75a2x13, _0x75a2x14) {
  var _0x75a2x18 = document.getElementById("gameboard");
  for (var _0x75a2x10 = 0; _0x75a2x10 < _0x75a2x14; _0x75a2x10++) {
    var _0x75a2x1a = _0x75a2x18.insertRow(_0x75a2x10);
    for (var _0x75a2x1d = 0; _0x75a2x1d < _0x75a2x13; _0x75a2x1d++) {
      var _0x75a2x1e = _0x75a2x1a.insertCell(_0x75a2x1d);
      pos1 = "" + _0x75a2x10 + _0x75a2x1d;
      _0x75a2x1e.setAttribute("id", pos1);
      _0x75a2x1e.setAttribute("title", "-1");
      var _0x75a2x1f = window.innerWidth - 50;
      var _0x75a2x20 = window.innerHeight - 150;
      var _0x75a2x4 = 0;
      if (_0x75a2x1f > _0x75a2x20) {
        _0x75a2x4 = _0x75a2x20 / _0x75a2x14;
      } else {
        _0x75a2x4 = _0x75a2x1f / _0x75a2x13;
      }
      ;
      _0x75a2x1e.innerHTML = '<input type="button" style="padding:0; margin:0; width:' + _0x75a2x4 + "px; height:" + _0x75a2x4 + 'px;border: none;cursor: pointer; background-color:black;" name="-1" onclick="Changeandcalc(title)" title="' + _0x75a2x10 + _0x75a2x1d + '" value="">';
    }
  }
}
function Changeandcalc(_0x75a2x22) {
  var _0x75a2x15 = countplayer();
  changeValue(_0x75a2x22, _0x75a2x15);
  var _0x75a2x23 = generateboard();
  var _0x75a2x24 = calulateScore(_0x75a2x23, parseInt(_0x75a2x15));
  updatescore(_0x75a2x24);
}
function updatescore(_0x75a2x24) {
  var _0x75a2x26 = [];
  var _0x75a2x18 = document.getElementById("scoreboard");
  var _0x75a2x1a = _0x75a2x18.rows[0];
  var _0x75a2x1d = 0;
  var _0x75a2x27 = false;
  var _0x75a2x28 = document.getElementById("winner");
  var _0x75a2x29 = -1;
  var _0x75a2x2a = -1;
  for (var _0x75a2x10 = 1; _0x75a2x10 < _0x75a2x1a.cells.length; _0x75a2x10 += 2) {
    if (_0x75a2x28.innerHTML.trim() != "" && _0x75a2x29 < _0x75a2x24[_0x75a2x1d]) {
      _0x75a2x2a = _0x75a2x1d;
      _0x75a2x29 = _0x75a2x24[_0x75a2x1d];
    }
    ;
    if (_0x75a2x1a.cells[_0x75a2x10].innerHTML != _0x75a2x24[_0x75a2x1d]) {
      var _0x75a2x2b = document.getElementById("snackbar");
      _0x75a2x2b.innerHTML = "+" + (_0x75a2x24[_0x75a2x1d] - _0x75a2x1a.cells[_0x75a2x10].innerHTML);
      myFunction();
    }
    ;
    _0x75a2x1a.cells[_0x75a2x10].innerHTML = _0x75a2x24[_0x75a2x1d];
    _0x75a2x1d++;
  }
  ;
  for (var _0x75a2x10 = 0; _0x75a2x10 < _0x75a2x24.length; _0x75a2x10++) {
    _0x75a2x26[_0x75a2x10] = 0;
    if (_0x75a2x29 == _0x75a2x24[_0x75a2x10] && _0x75a2x2a != _0x75a2x10) {
      _0x75a2x27 = true;
    }
    ;
    if (_0x75a2x29 == _0x75a2x24[_0x75a2x10]) {
      _0x75a2x26[_0x75a2x10]++;
    }
  }
  ;
  if (_0x75a2x28.innerHTML.trim() != "") {
    if (_0x75a2x27) {
      _0x75a2x28.innerHTML = "Draw between ";
      for (var _0x75a2x10 = 0; _0x75a2x10 < _0x75a2x26.length; _0x75a2x10++) {
        if (_0x75a2x26[_0x75a2x10] == 1) {
          _0x75a2x28.innerHTML = _0x75a2x28.innerHTML + _0x75a2x1a.cells[(_0x75a2x10 + 1) * 2 - 2].innerHTML + " &amp; ";
        }
      }
      ;
      _0x75a2x28.innerHTML = _0x75a2x28.innerHTML.substring(0, _0x75a2x28.innerHTML.length - 6);
    } else {
      _0x75a2x28.innerHTML = _0x75a2x1a.cells[(_0x75a2x2a + 1) * 2 - 2].innerHTML + " Won!!!";
    }
    ;
    var _0x75a2x2c = document.getElementById("snackbar2");
    _0x75a2x2c.innerHTML = _0x75a2x28.innerHTML;
    myFunctionWon();
  }
}
function generateboard() {
  var _0x75a2x18 = document.getElementById("gameboard");
  var _0x75a2x23 = [];
  for (var _0x75a2x10 = 0; _0x75a2x10 < _0x75a2x18.rows.length; _0x75a2x10++) {
    var _0x75a2x2e = [];
    var _0x75a2x1a = _0x75a2x18.rows[_0x75a2x10];
    for (var _0x75a2x1d = 0; _0x75a2x1d < _0x75a2x1a.cells.length; _0x75a2x1d++) {
      _0x75a2x2e[_0x75a2x1d] = parseInt(_0x75a2x1a.cells[_0x75a2x1d].getAttribute("title"));
    }
    ;
    _0x75a2x23[_0x75a2x10] = _0x75a2x2e;
  }
  ;
  return _0x75a2x23;
}
function changeValue(_0x75a2x22, _0x75a2x30) {
  var _0x75a2x31 = document.getElementById(_0x75a2x22);
  var _0x75a2x32 = document.getElementById("player");
  var _0x75a2x15 = _0x75a2x32.innerHTML;
  _0x75a2x31.setAttribute("title", _0x75a2x15);
  var _0x75a2x13 = getvalue("boxlength");
  var _0x75a2x14 = getvalue("boxheight");
  var _0x75a2x1f = window.innerWidth - 50;
  var _0x75a2x20 = window.innerHeight - 150;
  var _0x75a2x4 = 0;
  if (_0x75a2x1f > _0x75a2x20) {
    _0x75a2x4 = _0x75a2x20 / _0x75a2x14;
  } else {
    _0x75a2x4 = _0x75a2x1f / _0x75a2x13;
  }
  ;
  _0x75a2x31.innerHTML = '<img src="img/' + _0x75a2x15 + '.PNG" id=id' + _0x75a2x22 + ' align="middle" height="0px" width="0px" style="display: block;padding:0; margin:0;margin-left:auto;margin-right:auto;border-radius: 50%;"/>';
  addDelay("id" + _0x75a2x22);
  var _0x75a2xb = new Audio("tone/click.mp3");
  _0x75a2xb.play();
  setTimeout(function () {
    animateBox("id" + _0x75a2x22, _0x75a2x4 + "px");
  }, 1);
  window.navigator.vibrate(50);
  if (_0x75a2x15 == 0) {
    changeColor("#ea8579", "#84d8ab");
  } else {
    if (_0x75a2x15 == 1 && _0x75a2x30 == 2) {
      changeColor("#84d8ab", "#ea8579");
    } else {
      if (_0x75a2x15 == 1 && _0x75a2x30 == 3) {
        changeColor("#f2f098", "#ea8579");
      } else {
        if (_0x75a2x15 == 2) {
          changeColor("#84d8ab", "#f2f098");
        }
      }
    }
  }
  ;
  _0x75a2x15 = parseInt(_0x75a2x15) + 1;
  if (parseInt(_0x75a2x15) >= parseInt(_0x75a2x30)) {
    _0x75a2x15 = 0;
  }
  ;
  _0x75a2x32.innerHTML = _0x75a2x15;
}
function countplayer() {
  var _0x75a2x18 = document.getElementById("scoreboard");
  var _0x75a2x15 = _0x75a2x18.rows[0].cells.length / 2;
  return _0x75a2x15;
}
function calulateScore(_0x75a2x35, _0x75a2x15) {
  var _0x75a2x36 = _0x75a2x35.length;
  var _0x75a2x37 = _0x75a2x35[0].length;
  var _0x75a2x24 = [0, 0, 0];
  var _0x75a2x38 = 0;
  for (var _0x75a2x10 = 0; _0x75a2x10 < _0x75a2x36; _0x75a2x10++) {
    for (var _0x75a2x1d = 0; _0x75a2x1d < _0x75a2x37; _0x75a2x1d++) {
      if (_0x75a2x35[_0x75a2x10][_0x75a2x1d] != -1 && _0x75a2x35[_0x75a2x10][_0x75a2x1d] < _0x75a2x15) {
        _0x75a2x38++;
        if (_0x75a2x1d <= _0x75a2x37 - 3) {
          if (_0x75a2x35[_0x75a2x10][_0x75a2x1d] == _0x75a2x35[_0x75a2x10][_0x75a2x1d + 1] && _0x75a2x35[_0x75a2x10][_0x75a2x1d] == _0x75a2x35[_0x75a2x10][_0x75a2x1d + 2]) {
            _0x75a2x24[_0x75a2x35[_0x75a2x10][_0x75a2x1d]]++;
          }
        }
        ;
        if (_0x75a2x10 <= _0x75a2x36 - 3 && _0x75a2x1d <= _0x75a2x37 - 3) {
          if (_0x75a2x35[_0x75a2x10][_0x75a2x1d] == _0x75a2x35[_0x75a2x10 + 1][_0x75a2x1d + 1] && _0x75a2x35[_0x75a2x10][_0x75a2x1d] == _0x75a2x35[_0x75a2x10 + 2][_0x75a2x1d + 2]) {
            _0x75a2x24[_0x75a2x35[_0x75a2x10][_0x75a2x1d]]++;
          }
        }
        ;
        if (_0x75a2x10 + 2 < _0x75a2x36) {
          if (_0x75a2x35[_0x75a2x10][_0x75a2x1d] == _0x75a2x35[_0x75a2x10 + 1][_0x75a2x1d] && _0x75a2x35[_0x75a2x10][_0x75a2x1d] == _0x75a2x35[_0x75a2x10 + 2][_0x75a2x1d]) {
            _0x75a2x24[_0x75a2x35[_0x75a2x10][_0x75a2x1d]]++;
          }
        }
        ;
        if (_0x75a2x10 + 2 < _0x75a2x36 && _0x75a2x1d - 2 >= 0) {
          if (_0x75a2x35[_0x75a2x10][_0x75a2x1d] == _0x75a2x35[_0x75a2x10 + 1][_0x75a2x1d - 1] && _0x75a2x35[_0x75a2x10][_0x75a2x1d] == _0x75a2x35[_0x75a2x10 + 2][_0x75a2x1d - 2]) {
            _0x75a2x24[_0x75a2x35[_0x75a2x10][_0x75a2x1d]]++;
          }
        }
      }
    }
  }
  ;
  if (_0x75a2x38 == _0x75a2x36 * _0x75a2x37) {
    var _0x75a2x29 = document.getElementById("winner");
    _0x75a2x29.innerHTML = "uuu";
  }
  ;
  return _0x75a2x24;
}
