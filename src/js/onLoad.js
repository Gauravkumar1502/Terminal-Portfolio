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
      <span class="os">╭─  </span>
      <span class="user">guest@ </span>
      <span class="host">gaurav-services.com  </span>
      <span class="path">~</span>
    </div>
    <div>
      <span class="time">   ${getTime(new Date())} </span>
    </div>
  </div>
  <div class="line2">
    <span class="user_type"> ╰─ $ </span>
    <textarea class="command_input "id="command_input"></textarea>
  </div>
  `;
  commandContainer.appendChild(Command);
  commandInput = document.getElementById("command_input");
  commandInput.focus();
  commandInput.style.height = "auto";
  commandInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      commandInput.readOnly = true;
      commandInput.onkeydown = null;
      commandInput.removeAttribute("id");
      addCommand();
    }
    commandInput.style.height = commandInput.scrollHeight + "px";
  });
}



addCommand();