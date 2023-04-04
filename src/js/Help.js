import commands  from '../../data/Commands.json' assert { type: "json" };

export class Help{
    toString(){
        return commands.map(command => `<p class="help-out"> <span class='keyword'>${command.name}
        </span><span>${command.description}</span></p>`).join("");
    }
    updateDOM(){
        let output = document.createElement("div");
        output.classList.add("output");
        output.innerHTML = this.toString();
        let commandElements = document.getElementsByClassName("command");
        commandElements[commandElements.length - 1].appendChild(output);
    }
}