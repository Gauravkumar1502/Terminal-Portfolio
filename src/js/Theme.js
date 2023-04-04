export class Theme{
    constructor(options){
        // options is an array of flags and values passed to the theme command 
        // like --name dark-forest OR --name dark-forest --list OR --help
        this.options = options;
        this.listOfThemes = ["dark-forest", "dark-ocean", "dark-space", "dark-night", 
        "dark-cave", "dark-sea", "light-vanilla", "light-haze", "light-day", "light-sky"];
        this.cmd = this.parseCommand();
    }

    parseCommand(){
        let parts = this.options.split(" ");
        if(parts.length > 2) {
            let output = document.createElement("div");
            output.classList.add("error");
            output.innerHTML = `theme: too many arguments.<br>type 'theme --help' for help.`;
            let commandElements = document.getElementsByClassName("command");
            commandElements[commandElements.length - 1].appendChild(output);
            return;            
        }
        if(this.options == ""){
            this.list();
            return;
        }
        switch(parts[0]){
            case "--name":
                this.setTheme(parts[1]);
                break;
            case "--list":
                this.list();
                break;
            case "--help":
                this.help();
                break;
            default:
                let output = document.createElement("div");
                let commandElements = document.getElementsByClassName("command");
                output.classList.add("error");
                output.innerHTML = `theme: '${parts[0]}' is not a valid argument.<br>type 'theme --help' for help.`;
                commandElements[commandElements.length - 1].appendChild(output);
                break;
        }
    }

    setTheme(theme){
        let output = document.createElement("div");
        let commandElements = document.getElementsByClassName("command");
        if(this.listOfThemes.includes(theme)){
            document.querySelector("body").className = theme;
            output.classList.add("output");
            output.innerHTML = `theme: theme set to ${theme}`;
        }else{
            output.classList.add("error");
            output.innerHTML = `theme: '${theme}' is not a valid theme.<br>
            type 'theme --list' to see the list of themes.`;
        }
        commandElements[commandElements.length - 1].appendChild(output);
    }

    list(){
        let output = document.createElement("div");
        output.classList.add("output");
        output.innerHTML = `List of available themes:<br>${this.listOfThemes.join("<br>")}`;
        let commandElements = document.getElementsByClassName("command");
        commandElements[commandElements.length - 1].appendChild(output);
    }

    help(){
        let output = document.createElement("div");
        output.classList.add("output");
        output.innerHTML = `theme: sets the theme of the terminal.<br>
        usage: theme [option] [value]<br>
        options:<br>
        --name [theme name] sets the theme to the given theme name.<br>
        --list lists all the available themes.<br>
        --help shows this help message.`;
        let commandElements = document.getElementsByClassName("command");
        commandElements[commandElements.length - 1].appendChild(output);
    }

}

