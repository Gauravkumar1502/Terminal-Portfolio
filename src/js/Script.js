import { Controller } from "./Controller.js";
import { History } from "./History.js";

// set theme
let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
document.querySelector("body")
.setAttribute("class", isDark ? "dark-forest" : "light-vanilla");

// get terminal element
const terminal = document.getElementById("terminal");

// create history object
const history = new History();

function addCommand() {
  let Command = document.createElement("div");
  Command.classList.add("command");
  Command.innerHTML = `
  <div class="line1">
    <div>
      <span class="os">╭─ </span>
      <span class="user">guest@</span>
      <span class="host">gaurav-services.com</span>
      <span class="path">~</span>
    </div>
    <div>
      <span class="time">  ${getTime(new Date())}</span>
    </div>
  </div>
  <div class="line2">
    <span class="user_type">╰─ $ </span>
    <input type="text" class="command_input "id="command_input">
  </div>
  `;
  terminal.appendChild(Command);
  let commandInput = document.getElementById("command_input");
  commandInput.focus();

  commandInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      commandInput.readOnly = true;
      if(commandInput.value.trim() != ""){
        history.add(commandInput.value.trim());
        let controller = new Controller(commandInput.value.trim());
      }
      // remove previous event listener
      commandInput.onkeydown = null;
      commandInput.setAttribute("tabindex", "-1");
      commandInput.removeAttribute("id");
      history.resetIndex();

      addCommand();
    }else if(event.key === "ArrowUp"){
      history.up();
    }else if(event.key === "ArrowDown"){
      history.down();
    }
  });
}

function getTime(date) {
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const meridian = hours >= 12 ? 'PM' : 'AM';
  return `${hours}:${minutes}:${seconds} ${meridian}`;
}

addCommand();