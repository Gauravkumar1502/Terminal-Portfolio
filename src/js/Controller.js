import {Theme} from "./Theme.js";

export class Controller{
    constructor(command){
        this.command = command;
        this.error = "";
        this.output = "";
        this.parseCommand();
    }

    parseCommand(){
        let cmd = this.command.split(" ")[0].toLowerCase();
        switch(cmd){
            case "theme":
                // send only remaining string
                console.log("theme" + this.command.substring(cmd.length).trim().toLowerCase());
                let theme = new Theme(this.command.substring(cmd.length).trim().toLowerCase());
                this.error = theme.error;
                this.output = theme.output;
                break;
            case "help":
                break;
            case "clear":
                document.querySelector(".terminal").innerHTML = "";
                break;
            default:
                this.error = `${cmd}: The term '${cmd}' is not recognized as a name of a command.
                type 'help' to see the list of commands.`;
                break;
        }
    }
    // parseCommand(){
    //     let cmd = {};
    //     let parts = this.command.split(" ");
    //     cmd.command = parts[0];
    //     cmd.options = {};
    //     for(let i=1; i<parts.length; i++){
    //         if(parts[i].startsWith("--")){
    //             let key = parts[i];
    //             let value = parts[i+1];
    //             cmd.options[key] = {
    //                 key: key,
    //                 value: value
    //             }
    //             i++;
    //         }else{
    //             this.error = `${parts[0]}: The term '${parts[0]}' is not recognized as a name of a command.
    //             type 'help' to see the list of commands.`;
    //             return;
    //         }

    //     }
    //     this.evaluateCommand(cmd);
    // }

    // evaluateCommand(cmd){
    //     switch(cmd.command.toLowerCase()){
    //         case "theme":
    //             console.log("theme");
    //             // theme class accepts an array of flags and array values
    //             let theme = new Theme(cmd.options);
    //             break;
    //         case "help":
    //             console.log("help");
    //             break;
    //         default:
    //             console.log("default");
    //             break;
    //     }
    // }
}