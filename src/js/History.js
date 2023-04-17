import {UniversalFunction} from './UniversalFunction.js';
export class History{
    constructor(){
        const historyData = localStorage.getItem('history');
        this.history = historyData ? JSON.parse(historyData) : [];
        this.index = this.history.length;
    }

    add(command){
        if(this.history.length > 0 && this.history[this.history.length-1] === command){
            return;
        }
        this.history.push(command);
        this.index++;
        localStorage.setItem('history', JSON.stringify(this.history));
    }

    up(){
        if(this.index > 0){
            document.getElementById("command_input").value =(this.history[--this.index]);
        }
    }

    down(){
        if(this.index < this.history.length-1){
            document.getElementById("command_input").value =(this.history[++this.index]);
        }
    }
    
    resetIndex(){
        this.index = this.history.length;
    }

    toString(){
        return '<p class="two-col"><span>Id</span><span>Command</span></p>' 
        + this.history.map((command, index) => 
            `<p class="two-col"><span>${index+1}</span><span>${command}</span></p>`
        ).join('');
    }

    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}