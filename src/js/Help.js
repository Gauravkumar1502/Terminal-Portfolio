import commands  from '../../data/Commands.json' assert { type: "json" };
import { UniversalFunction } from "./UniversalFunction.js";

export class Help{
    constructor(){
        this.options = options;
        // this.cmd = this.parseCommand();
    }

    // parseCommand(){
    //     let parts = this.options.split(" ");
    //     if(this.options !== ""){
    //         console.log(this.options);
    //         let errMsg = `help: too many arguments.<br>type 'help' for help.`;
    //         new UniversalFunction().updateElement("div", "error", errMsg);
    //         return;
    //     }
    //     this.updateDOM();
    // }

    toString(){
        return commands.map(command => `<p class="two-col"> <span class='keyword'>${command.name}
        </span><span>${command.description}</span></p>`).join("");
    }

    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}