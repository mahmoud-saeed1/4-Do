const _0x47fdcb = _0x1b40;
(function (_0x1d148e, _0x251a63) {
  const _0x3f913a = _0x1b40,
    _0x2b27ae = _0x1d148e();
  while (!![]) {
    try {
      const _0x46123c =
        (parseInt(_0x3f913a(0xf5)) / 0x1) *
          (-parseInt(_0x3f913a(0x118)) / 0x2) +
        parseInt(_0x3f913a(0x123)) / 0x3 +
        -parseInt(_0x3f913a(0x11d)) / 0x4 +
        (parseInt(_0x3f913a(0xf6)) / 0x5) * (parseInt(_0x3f913a(0xe9)) / 0x6) +
        -parseInt(_0x3f913a(0xfd)) / 0x7 +
        (parseInt(_0x3f913a(0x124)) / 0x8) *
          (-parseInt(_0x3f913a(0xf0)) / 0x9) +
        parseInt(_0x3f913a(0xf2)) / 0xa;
      if (_0x46123c === _0x251a63) break;
      else _0x2b27ae["push"](_0x2b27ae["shift"]());
    } catch (_0x57add1) {
      _0x2b27ae["push"](_0x2b27ae["shift"]());
    }
  }
})(_0x941a, 0xcb085),
  (document[_0x47fdcb(0x117)] = function (_0x566c92) {
    const _0x388c6b = _0x47fdcb;
    if (Event[_0x388c6b(0xee)] == 0x7b) return ![];
    if (
      _0x566c92[_0x388c6b(0xf4)] &&
      _0x566c92[_0x388c6b(0x108)] &&
      _0x566c92[_0x388c6b(0xee)] == "I"[_0x388c6b(0x10f)](0x0)
    )
      return ![];
    if (
      _0x566c92[_0x388c6b(0xf4)] &&
      _0x566c92["shiftKey"] &&
      _0x566c92[_0x388c6b(0xee)] == "J"[_0x388c6b(0x10f)](0x0)
    )
      return ![];
    if (
      _0x566c92["ctrlKey"] &&
      _0x566c92[_0x388c6b(0x108)] &&
      _0x566c92["keyCode"] == "U"[_0x388c6b(0x10f)](0x0)
    )
      return ![];
  });
let input = document[_0x47fdcb(0xfc)](_0x47fdcb(0x126)),
  addBtn = document["getElementById"]("add-btn"),
  selections = document["querySelector"](".selection-box"),
  taskBox = document[_0x47fdcb(0x107)](_0x47fdcb(0x11c)),
  box = document[_0x47fdcb(0x107)](_0x47fdcb(0x10b)),
  taskDiv1 = document["querySelector"](".taskDiv1"),
  taskDiv2 = document[_0x47fdcb(0x107)](_0x47fdcb(0xef)),
  taskDiv3 = document[_0x47fdcb(0x107)](_0x47fdcb(0x127)),
  taskDiv4 = document[_0x47fdcb(0x107)](_0x47fdcb(0x116)),
  importantUrgent_div = document[_0x47fdcb(0xfc)](_0x47fdcb(0xfb)),
  importantNotUrgent_div = document["getElementById"](_0x47fdcb(0xf7)),
  notImportantUrgent_div = document["getElementById"]("not-important-urgent"),
  notImportantNotUrgent_div = document["getElementById"](_0x47fdcb(0x11e)),
  deleteAllBtn = document[_0x47fdcb(0x11a)](_0x47fdcb(0x10e)),
  selectedOption,
  taskIndex,
  mood = "add",
  checkbox = document[_0x47fdcb(0x11a)](_0x47fdcb(0x120));
localStorage[_0x47fdcb(0x100)](_0x47fdcb(0xf9)) != null
  ? (taskData = JSON[_0x47fdcb(0x10d)](
      localStorage[_0x47fdcb(0x100)](_0x47fdcb(0xf9))
    ))
  : (taskData = []);
function _0x941a() {
  const _0x17ceee = [
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22task\x22\x20id=\x22",
    "filter",
    "Add",
    "keyCode",
    ".taskDiv2",
    "2403eQJNIo",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22btns\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x22\x20id=\x22delete-btn\x22>Delete</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x22\x20id=\x22update-btn\x22>Update</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "17777660PzbxWJ",
    "style",
    "ctrlKey",
    "16LwxcDG",
    "910185SAXIeb",
    "important-not-urgent",
    "add",
    "tasks",
    "footer",
    "important-urgen",
    "getElementById",
    "1734747Hceecd",
    "\x22\x20state=\x22notDone\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22checkTask\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>",
    "value",
    "getItem",
    "smooth",
    "display",
    "change",
    "parentElement",
    "none",
    "target",
    "querySelector",
    "shiftKey",
    "forEach",
    "innerHTML",
    ".box",
    "important-urgent",
    "parse",
    ".deleteAll",
    "charCodeAt",
    "block",
    "\x20By:\x20Mahmoud\x20Saeed",
    "onclick",
    "stringify",
    "Enter\x20A\x20Task\x20Please\x20!",
    "&copy;\x20",
    ".taskDiv4",
    "onkeydown",
    "6892GJHNxN",
    "delete-btn",
    "querySelectorAll",
    "addEventListener",
    ".taskBox",
    "1313376YwpbJT",
    "not-important-not-urgent",
    "log",
    ".checkTask\x20input",
    "title",
    "setItem",
    "344961qfDrRn",
    "34696IwDHQx",
    "findIndex",
    "input",
    ".taskDiv3",
    "type",
    "now",
    "24ongRjP",
    "update-btn",
  ];
  _0x941a = function () {
    return _0x17ceee;
  };
  return _0x941a();
}
selections[_0x47fdcb(0x11b)](_0x47fdcb(0x103), function (_0x30c705) {
  const _0x207669 = _0x47fdcb;
  selectedOption = _0x30c705[_0x207669(0x106)][_0x207669(0xff)];
}),
  (addBtn[_0x47fdcb(0x112)] = function () {
    const _0x4cf14d = _0x47fdcb;
    if (input[_0x4cf14d(0xff)] !== "") {
      let _0x5b19e0 = input[_0x4cf14d(0xff)];
      input[_0x4cf14d(0xff)] = "";
      selectedOption === undefined && (selectedOption = _0x4cf14d(0x10c));
      let _0x19cfd2 = {
        type: selectedOption,
        title: _0x5b19e0,
        id: Date[_0x4cf14d(0xe8)](),
        compeleted: ![],
      };
      mood === _0x4cf14d(0xf8)
        ? taskData["push"](_0x19cfd2)
        : ((taskData[taskIndex][_0x4cf14d(0x121)] = _0x5b19e0),
          (taskData[taskIndex]["type"] = selectedOption),
          (mood = _0x4cf14d(0xf8)),
          (addBtn[_0x4cf14d(0x10a)] = _0x4cf14d(0xed))),
        localStorage[_0x4cf14d(0x122)](
          _0x4cf14d(0xf9),
          JSON[_0x4cf14d(0x113)](taskData)
        ),
        displayTask();
    } else alert(_0x4cf14d(0x114));
  }),
  displayTask();
function displayTask() {
  const _0x24d876 = _0x47fdcb;
  (taskDiv1["innerHTML"] = ""),
    (taskDiv2[_0x24d876(0x10a)] = ""),
    (taskDiv3[_0x24d876(0x10a)] = ""),
    (taskDiv4[_0x24d876(0x10a)] = ""),
    taskData[_0x24d876(0x109)]((_0x3331c5, _0x139186) => {
      const _0x459b4 = _0x24d876;
      let _0x38a3b9 =
        _0x459b4(0xeb) +
        _0x3331c5["id"] +
        "\x22\x20class=\x22" +
        _0x3331c5[_0x459b4(0xe7)] +
        _0x459b4(0xfe) +
        _0x3331c5[_0x459b4(0x121)] +
        _0x459b4(0xf1);
      if (_0x3331c5[_0x459b4(0xe7)] === _0x459b4(0x10c))
        taskDiv1[_0x459b4(0x10a)] += _0x38a3b9;
      else {
        if (_0x3331c5[_0x459b4(0xe7)] === _0x459b4(0xf7))
          (taskDiv2[_0x459b4(0x10a)] += _0x38a3b9),
            (deleteAllBtn[0x1][_0x459b4(0xf3)][_0x459b4(0x102)] =
              _0x459b4(0x110));
        else {
          if (_0x3331c5["type"] === "not-important-urgent")
            (taskDiv3[_0x459b4(0x10a)] += _0x38a3b9),
              (deleteAllBtn[0x2][_0x459b4(0xf3)][_0x459b4(0x102)] =
                _0x459b4(0x110));
          else
            _0x3331c5["type"] === _0x459b4(0x11e) &&
              ((taskDiv4[_0x459b4(0x10a)] += _0x38a3b9),
              (deleteAllBtn[0x3]["style"]["display"] = _0x459b4(0x110)));
        }
      }
    });
}
function _0x1b40(_0x5babb2, _0xd561bc) {
  const _0x941a5 = _0x941a();
  return (
    (_0x1b40 = function (_0x1b40d0, _0x484c7a) {
      _0x1b40d0 = _0x1b40d0 - 0xe7;
      let _0x296369 = _0x941a5[_0x1b40d0];
      return _0x296369;
    }),
    _0x1b40(_0x5babb2, _0xd561bc)
  );
}
taskBox[_0x47fdcb(0x11b)]("click", function (_0x119d95) {
  const _0x1db231 = _0x47fdcb;
  if (_0x119d95[_0x1db231(0x106)]["id"] === _0x1db231(0x119)) {
    let _0x512899 =
        _0x119d95[_0x1db231(0x106)][_0x1db231(0x104)][_0x1db231(0x104)],
      _0x4a6aed = _0x512899["id"];
    (taskData = taskData[_0x1db231(0xec)]((_0xd4d4b) => {
      return _0xd4d4b["id"] != _0x4a6aed;
    })),
      localStorage[_0x1db231(0x122)](
        _0x1db231(0xf9),
        JSON[_0x1db231(0x113)](taskData)
      ),
      displayTask();
  }
}),
  taskBox[_0x47fdcb(0x11b)]("click", function (_0x4ef46f) {
    const _0xab9894 = _0x47fdcb;
    if (_0x4ef46f[_0xab9894(0x106)]["id"] === _0xab9894(0xea)) {
      let _0x1cee96 =
          _0x4ef46f[_0xab9894(0x106)][_0xab9894(0x104)][_0xab9894(0x104)],
        _0x1cd6a7 = _0x1cee96["id"];
      (taskIndex = taskData[_0xab9894(0x125)]((_0x1b087f) => {
        return _0x1b087f["id"] == _0x1cd6a7;
      })),
        (input[_0xab9894(0xff)] = taskData[taskIndex][_0xab9894(0x121)]),
        (selectedOption = taskData[taskIndex][_0xab9894(0xe7)]),
        (mood = "update"),
        (addBtn[_0xab9894(0x10a)] = "Update"),
        scroll({ top: 0x0, behavior: _0xab9894(0x101) });
    }
  }),
  deleteAllBtn[_0x47fdcb(0x109)]((_0x5d5266) => {
    _0x5d5266["addEventListener"]("click", function (_0x1291d8) {
      const _0x29a651 = _0x1b40;
      let _0x50a36c = _0x1291d8[_0x29a651(0x106)]["parentElement"],
        _0x553a3c = _0x50a36c["id"];
      console[_0x29a651(0x11f)](_0x553a3c),
        (taskData = taskData[_0x29a651(0xec)]((_0x5e97bd) => {
          return _0x5e97bd["type"] != _0x553a3c;
        })),
        (_0x1291d8[_0x29a651(0x106)][_0x29a651(0xf3)]["display"] =
          _0x29a651(0x105)),
        localStorage["setItem"]("tasks", JSON[_0x29a651(0x113)](taskData)),
        displayTask();
    });
  });
const footer = document[_0x47fdcb(0xfc)](_0x47fdcb(0xfa)),
  currentYear = new Date()["getFullYear"]();
footer["innerHTML"] = _0x47fdcb(0x115) + currentYear + _0x47fdcb(0x111);
