import { Controller } from "./Controller.js";

let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
document.querySelector("body")
.setAttribute("class", isDark ? "dark-forest" : "light-vanilla");

const commandContainer = document.getElementsByClassName("terminal")[0];
let commandInput;

function getTime(date) {
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const meridian = hours >= 12 ? 'PM' : 'AM';
  return `${hours}:${minutes}:${seconds} ${meridian}`;
}

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
  commandContainer.appendChild(Command);
  commandInput = document.getElementById("command_input");
  commandInput.focus();
  commandInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      commandInput.readOnly = true;
      if(commandInput.value.trim() != ""){
        let controller = new Controller(commandInput.value.trim());
        let output = document.createElement("div");
        if(controller.error != ""){
          output.classList.add("error");
          output.innerHTML = controller.error;
          Command.appendChild(output);
          console.log(controller.error);
        }else{
          output.classList.add("output");
          output.innerHTML = controller.output;
          Command.appendChild(output);
          console.log(controller.output);
        }
      }
      commandInput.removeAttribute("id");
      addCommand();
      // remove previous event listener
      commandInput.onkeydown = null;
    }
  });
}

addCommand();