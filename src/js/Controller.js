import {Theme} from "./Theme.js";
import { About } from "./About.js";
import { Help } from "./Help.js";
import { History } from "./History.js";
import { Resume } from "./Resume.js";
import { UniversalFunction } from "./UniversalFunction.js";

export class Controller{
    constructor(InputedCommand){ 
        this.InputedCommand = InputedCommand;
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
                new Theme(this.InputedCommand.substring(cmd.length).trim().toLowerCase());
                break;
            case "history":
                new History().updateDOM();
                break;
            case "clear":
                document.querySelector("#terminal").innerHTML = "";
                break;
            case "resume":
                new Resume(this.InputedCommand.substring(cmd.length).trim().toLowerCase());
                break;
            case "exit":
                new UniversalFunction().updateElement("div", "error", 
                "Due to security reasons, you can't close this window using the 'exit' command.");
                // window.open(location, '_self').close();
                // window.close();
                break;
            default:
                let errMsg = `${cmd}: The term '${cmd}' is not recognized as a name of a command.<br>type 'help' to see the list of available commands.`;
                new UniversalFunction().updateElement("div", "error", errMsg);
                break;
        }
    }
}