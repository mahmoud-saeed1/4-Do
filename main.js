/*~~~~~~~~$ main data $~~~~~~~~*/
let input = document.getElementById("input");
let addBtn = document.getElementById("add-btn");
let selections = document.querySelector(".selection-box");
let taskBox = document.querySelector(".taskBox");
let boxs = document.querySelectorAll(".box");
let excelBtn = document.querySelector(".excel-btn");
let drag = null;

/*~~~~~~~~$ task div containers "contains task info" $~~~~~~~~*/
let taskDiv1 = document.querySelector(".taskDiv1");
let taskDiv2 = document.querySelector(".taskDiv2");
let taskDiv3 = document.querySelector(".taskDiv3");
let taskDiv4 = document.querySelector(".taskDiv4");

/*~~~~~~~~$ task boxes $~~~~~~~~*/
let importantUrgent_div = document.getElementById("important-urgent");
let importantNotUrgent_div = document.getElementById("important-not-urgent");
let notImportantUrgent_div = document.getElementById("not-important-urgent");
let notImportantNotUrgent_div = document.getElementById(
  "not-important-not-urgent"
);

/*~~~~~~~~$ delete all btn $~~~~~~~~*/
let deleteAllBtn = document.querySelectorAll(".deleteAll");

/*~~~~~~~~$ main global variables $~~~~~~~~*/
let selectedOption;
let taskIndex; //? global index to use it in update function
let mood = "add";

/*~~~~~~~~$ get data from local storage $~~~~~~~~*/
if (localStorage.getItem("tasks") != null) {
  tasksData = JSON.parse(localStorage.getItem("tasks"));
} else {
  tasksData = [];
}

/*~~~~~~~~$ get selected option $~~~~~~~~*/
selections.addEventListener("change", function (e) {
  selectedOption = e.target.value;
});

/*~~~~~~~~$ task validation $~~~~~~~~*/
function validateInput() {
  let task = input.value;
  // regex support only english and arabic letters and numbers
  let regex = /^[(a-zA-Zء-ي\d)]+(?: [a-zA-Zء-ي\d',.-]+)*$/;

  if (task === "" || !regex.test(task)) {
    alert("Enter A Valid Task Please ! \n only characters and numbers allowed");
    return false;
  }
  return true;
}

/*~~~~~~~~$ take task from user $~~~~~~~~*/
addBtn.onclick = function () {
  let validtask = validateInput();

  if (validtask) {
    let task = input.value;
    input.value = "";

    //? put default value if user didn't select any option
    if (selectedOption === undefined) {
      selectedOption = "important-urgent";
    }

    //? create object to store task info
    let obj = {
      type: selectedOption,
      title: task,
      id: crypto.randomUUID(),
      status: "",
    };

    //? check if mood is add or update (to add or update task)
    if (mood === "add") {
      tasksData.push(obj);
    } else {
      tasksData[taskIndex].title = task;
      tasksData[taskIndex].type = selectedOption;
      mood = "add";
      addBtn.innerHTML = "Add";
    }
    //? save task to local storage
    localStorage.setItem("tasks", JSON.stringify(tasksData));
  }

  // ? display task
  displayTask();
};

/*~~~~~~~~$ drag and drop $~~~~~~~~*/
function dragAndDropItem() {
  let tasks = document.querySelectorAll(".task");

  tasks.forEach((task) => {
    task.addEventListener("dragstart", function (event) {
      event.dataTransfer.setData("text/plain", this.id);

      const obj = tasksData.filter((ele) => ele.id === this.id)[0];
      drag = obj;
      task.style.opacity = "0.5";
    });

    task.addEventListener("dragend", function () {
      drag = null;
      task.style.opacity = "1";
    });

    boxs.forEach((box) => {
      box.addEventListener("dragover", function (event) {
        event.preventDefault();
        if (this.id === "important-urgent") {
          this.style.background = "rgb(215, 6, 6)";
          this.querySelector("h2").style.color = "#fff";
          this.querySelector(".deleteAll").style.color = "rgb(215, 6, 6)";
          this.querySelector(".deleteAll").style.background = "#fff";
        } else if (this.id === "important-not-urgent") {
          this.style.background = "rgb(8, 136, 8)";
          this.querySelector("h2").style.color = "#fff";
          this.querySelector(".deleteAll").style.color = "rgb(215, 6, 6)";
          this.querySelector(".deleteAll").style.background = "#fff";
        } else if (this.id === "not-important-urgent") {
          this.style.background = "rgb(237, 158, 10)";
          this.querySelector("h2").style.color = "#fff";
          this.querySelector(".deleteAll").style.color = "rgb(215, 6, 6)";
          this.querySelector(".deleteAll").style.background = "#fff";
        } else if (this.id === "not-important-not-urgent") {
          this.style.background = "#bfbaba";
          this.querySelector("h2").style.color = "#000";
          this.querySelector(".deleteAll").style.color = "rgb(215, 6, 6)";
          this.querySelector(".deleteAll").style.background = "#fff";
        }
      });

      box.addEventListener("dragleave", function () {
        if (this.id === "important-urgent") {
          this.style.background = "transparent";
          this.querySelector("h2").style.color = "rgb(215, 6, 6)";
          this.querySelector(".deleteAll").style.color = "white";
          this.querySelector(".deleteAll").style.background = "rgb(195, 7, 7)";
        } else if (this.id === "important-not-urgent") {
          this.style.background = "transparent";
          this.querySelector("h2").style.color = "rgb(8, 136, 8)";
          this.querySelector(".deleteAll").style.color = "white";
          this.querySelector(".deleteAll").style.background = "rgb(195, 7, 7)";
        } else if (this.id === "not-important-urgent") {
          this.style.background = "transparent";
          this.querySelector("h2").style.color = "rgb(237, 158, 10)";
          this.querySelector(".deleteAll").style.color = "white";
          this.querySelector(".deleteAll").style.background = "rgb(195, 7, 7)";
        } else if (this.id === "not-important-not-urgent") {
          this.style.background = "transparent";
          this.querySelector("h2").style.color = "#bfbaba";
          this.querySelector(".deleteAll").style.color = "white";
          this.querySelector(".deleteAll").style.background = "rgb(195, 7, 7)";
        }
      });

      box.addEventListener("drop", function (event) {
        newObj = {
          ...drag,
          type: box.id,
        };

        const draggedId = event.dataTransfer.getData("text/plain");

        tasksData.forEach((item, index) => {
          if (item.id === newObj.id) {
            tasksData[index] = newObj;
          }
        });

        localStorage.setItem("tasks", JSON.stringify(tasksData));

        if (this.id === "important-urgent") {
          this.style.background = "transparent";
          this.querySelector("h2").style.color = "rgb(215, 6, 6)";
          this.querySelector(".deleteAll").style.color = "white";
          this.querySelector(".deleteAll").style.background = "rgb(195, 7, 7)";
        } else if (this.id === "important-not-urgent") {
          this.style.background = "transparent";
          this.querySelector("h2").style.color = "rgb(8, 136, 8)";
          this.querySelector(".deleteAll").style.color = "white";
          this.querySelector(".deleteAll").style.background = "rgb(195, 7, 7)";
        } else if (this.id === "not-important-urgent") {
          this.style.background = "transparent";
          this.querySelector("h2").style.color = "rgb(237, 158, 10)";
          this.querySelector(".deleteAll").style.color = "white";
          this.querySelector(".deleteAll").style.background = "rgb(195, 7, 7)";
        } else if (this.id === "not-important-not-urgent") {
          this.style.background = "transparent";
          this.querySelector("h2").style.color = "#bfbaba";
          this.querySelector(".deleteAll").style.color = "white";
          this.querySelector(".deleteAll").style.background = "rgb(195, 7, 7)";
        }

        displayTask();
      });
    });
  });
}

/*~~~~~~~~$ enable update, delete , delete all btns and checkbox after updating mood $~~~~~~~~*/
function enableTaskAndBtns() {
  //? enable update and delete btns for all tasks
  let updateBtn = document.querySelectorAll("#update-btn");
  let deleteBtn = document.querySelectorAll("#delete-btn");
  updateBtn.forEach((element) => {
    element.style.pointerEvents = "auto";
    element.style.opacity = "1";
  });
  deleteBtn.forEach((element) => {
    element.style.pointerEvents = "auto";
    element.style.opacity = "1";
  });

  //? enable delete all only for all tasks
  deleteAllBtn.forEach((element) => {
    element.style.pointerEvents = "auto";
    element.style.opacity = "1";
  });

  //? enable checkbox only for all tasks
  let checkbox = document.querySelectorAll(".checkTask");
  checkbox.forEach((element) => {
    element.style.pointerEvents = "auto";
  });
}

/*~~~~~~~~$ display task function $~~~~~~~~*/
function displayTask() {
  taskDiv1.innerHTML = "";
  taskDiv2.innerHTML = "";
  taskDiv3.innerHTML = "";
  taskDiv4.innerHTML = "";

  tasksData.forEach((element) => {
    let data = `
      <div class="task ${element?.type} ${element?.status}" id="${
      element?.id
    }" draggable="true">
      <div class="task-info">
      <input type="checkbox" class="checkTask" id="checkTask" ${
        element?.status && "checked"
      }/>
      <p class="task-title">${element?.title}</p>
      </div>
        
        <div class="btns">
          <button class="btn" id="delete-btn">delete</button>
          <button class="btn" id="update-btn">update</button>
        </div>
      </div>
    `;

    if (element?.type === "important-urgent") {
      taskDiv1.innerHTML += data;
    } else if (element?.type === "important-not-urgent") {
      taskDiv2.innerHTML += data;
    } else if (element?.type === "not-important-urgent") {
      taskDiv3.innerHTML += data;
    } else if (element?.type === "not-important-not-urgent") {
      taskDiv4.innerHTML += data;
    }

    showDeleteAllBtn();
    enableTaskAndBtns();
    dragAndDropItem();
  });
}

displayTask();

/*~~~~~~~~$ show delete all btns $~~~~~~~~*/
function showDeleteAllBtn() {
  let tasksDivs = [taskDiv1, taskDiv2, taskDiv3, taskDiv4];
  tasksDivs.forEach((element, index) => {
    if (element.innerHTML === "") {
      deleteAllBtn[index].style.display = "none";
    } else {
      deleteAllBtn[index].style.display = "block";
    }
  });
}

/*~~~~~~~~$ update task $~~~~~~~~*/
taskBox.addEventListener("click", function (e) {
  if (e.target.id === "update-btn") {
    let task = e.target.parentElement.parentElement;
    let taskId = task.id;
    taskIndex = tasksData.findIndex((element) => {
      return element.id == taskId;
    });
    input.value = tasksData[taskIndex].title;
    selectedOption = tasksData[taskIndex].type;
    mood = "update";
    addBtn.innerHTML = "Update";
    scroll({
      top: 0,
      behavior: "smooth",
    });

    // ! disable all btns and checkbox while updating mood
    disableTaskAndBtns();
  }
});

/*~~~~~~~~$ delete task $~~~~~~~~*/
taskBox.addEventListener("click", function (e) {
  if (e.target.id === "delete-btn") {
    let task = e.target.parentElement.parentElement;
    let taskId = task.id;
    task.classList.add("fall");
    task.addEventListener("transitionend", function () {
      tasksData = tasksData.filter((element) => {
        return element.id != taskId;
      });

      localStorage.setItem("tasks", JSON.stringify(tasksData));
      displayTask();
    });
  }
});

/*~~~~~~~~$ delete all tasks in a section with fall animation before delete and remove delete all btn at the end $~~~~~~~~*/
deleteAllBtn.forEach((element, index) => {
  element.addEventListener("click", function () {
    let tasks = document.querySelectorAll(`.taskDiv${index + 1} .task`);
    tasks.forEach((task) => {
      task.classList.add("fall");
      task.addEventListener("transitionend", function () {
        tasksData = tasksData.filter((element) => {
          return element.id != task.id;
        });

        localStorage.setItem("tasks", JSON.stringify(tasksData));
        displayTask();
      });
    });

    // remove delete all btn
    element.style.display = "none";
  });
});

/*~~~~~~~~$ disable update, delete , delete all btns and checkbox while updating mode $~~~~~~~~*/
function disableTaskAndBtns() {
  //? disable update and delete btns for all tasks
  let updateBtn = document.querySelectorAll("#update-btn");
  let deleteBtn = document.querySelectorAll("#delete-btn");
  updateBtn.forEach((element) => {
    element.style.pointerEvents = "none";
    element.style.opacity = "0.5";
  });
  deleteBtn.forEach((element) => {
    element.style.pointerEvents = "none";
    element.style.opacity = "0.5";
  });

  //? disable delete all only for all tasks
  deleteAllBtn.forEach((element) => {
    element.style.pointerEvents = "none";
    element.style.opacity = "0.5";
  });

  //? disable checkbox only for all tasks
  let checkbox = document.querySelectorAll(".checkTask");
  checkbox.forEach((element) => {
    element.style.pointerEvents = "none";
  });
}

/*~~~~~~~~$ checked task fuctionality $~~~~~~~~*/
taskBox.addEventListener("click", function (e) {
  if (e.target.id === "checkTask") {
    let task = e.target.parentElement.parentElement;
    let taskId = task.id;
    let taskIndex = tasksData.findIndex((element) => {
      return element.id == taskId;
    });

    if (tasksData[taskIndex].status === "done") {
      tasksData[taskIndex].status = "";
      task.classList.remove("done");
    } else {
      tasksData[taskIndex].status = "done";
      task.classList.add("done");
    }

    // ? make checked task at the end of the list with animation
    let checkedTask = tasksData.splice(taskIndex, 1);
    tasksData.push(checkedTask[0]);

    localStorage.setItem("tasks", JSON.stringify(tasksData));

    displayTask();
  }
});

/*~~~~~~~~$ exportToExcel $~~~~~~~~*/
function exportToExcel(fileName, data) {
  // Create a new Workbook
  const workbook = XLSX.utils.book_new();

  // Convert the array of objects into a worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Add the worksheet to the Workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Generate the Excel file in binary form
  const excelData = XLSX.write(workbook, { type: "binary" });

  // Convert the binary Excel data to a Blob
  const blob = new Blob([s2ab(excelData)], {
    type: "application/octet-stream",
  });

  // Create a download link for the Blob
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", `${fileName}.xlsx`);

  // Append the link to the DOM and trigger the download
  document.body.appendChild(link);
  link.click();

  // Clean up by removing the link
  document.body.removeChild(link);
}

// Function to convert s to an array buffer
function s2ab(s) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xff;
  }
  return buf;
}

excelBtn.onclick = () => {
  if (tasksData.length) {
    exportToExcel("my_tasks", tasksData);
  } else {
    alert("there is no tasks to export it, please add some tasks");
  }
};

/*~~~~~~~~$ copyrights functionality $~~~~~~~~*/
const footer = document.getElementById("footer");
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} all rights reserved, build with all <span style="font-size: 1.8rem;">&#9825;</span> by </small>
<a href="https://wa.me/+201224884609" id="site-dev" target="_blank">Mahmoud Saeed</a>`;
