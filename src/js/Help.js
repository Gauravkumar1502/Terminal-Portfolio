import commands  from '../../data/Commands.json';
import { UniversalFunction } from "./UniversalFunction.js";

export class Help{
    toString(){
        return commands.map(command => `<p class="two-col"> <span class='keyword'>${command.name}
        </span><span>${command.description}</span></p>`).join("");
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}
