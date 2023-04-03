import {Theme} from "./Theme.js";
import { About } from "./About.js";
import { Help } from "./Help.js";

export class Controller{
    constructor(InputedCommand){ 
        this.InputedCommand = InputedCommand;
        this.error = "";
        this.output = "";
        this.parseCommand();
    }

    parseCommand(){
        let cmd = this.InputedCommand.split(" ")[0].toLowerCase();
        switch(cmd){
            case "help":
                new Help().updateDOM();
                break;
            case "about":
                new About().updateDOM();
                break;
            case "theme":
                let theme = new Theme(this.InputedCommand.substring(cmd.length).trim().toLowerCase());
                this.error = theme.error;
                this.output = theme.output;
                break;
            case "clear":
                document.querySelector(".terminal").innerHTML = "";
                break;
            default:
                this.error = `${cmd}: The term '${cmd}' is not recognized as a name of a command. \n type 'help' to see the list of commands.`;
                break;
        }
    }
}