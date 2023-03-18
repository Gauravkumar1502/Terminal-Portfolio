const commandContainer = document.getElementsByClassName("terminal")[0];
let commandInput;

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
      <span class="time">   15:25:53 </span>
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
  console.log(commandInput.scrollHeight);
  commandInput.style.height = "auto";
  commandInput.addEventListener("keyup", (event) => {
  console.log("1");
    if (event.keyCode === 13) {
      console.log(commandInput.value);
      console.log(commandInput.value.split(" "));
      commandInput.readOnly = true;
      commandInput.onkeydown = null;
      commandInput.removeAttribute("id");
      addCommand();
    }
    commandInput.style.height = commandInput.scrollHeight + "px";
  });
}

addCommand();