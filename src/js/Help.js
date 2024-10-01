import { UniversalFunction } from "./UniversalFunction.js";

const commands = [
    { "name": "help", "description": "You are here already and you obviously know what this does. 🤔" },
    { "name": "about", "description": "Display information about me. 👨‍💻" },
    { "name": "whoami", "description": "The paradox of \"Who am I?\" is: we never know, but, we constantly find out. 🤔" },
    { "name": "clear", "description": "Clear the terminal. 🧹" },
    {"name": "history", "description": "Display history of commands. 📜"},
    {"name": "exit", "description": "Exit the terminal. 🚪"},
    { "name": "theme", "description": "Change the theme of the terminal.", 
        "options": [
            { "option": "--name [theme-name]", "description": "Change the theme to the given theme name." },
            { "option": "--list", "description": "List all the themes." }
        ]
    },
    { "name": "connect", "description": "Display all the social networks. 📱", 
        "options": [
            {  "option": "--goto [social-network]", "description": "Go to the given social network." },
            {  "option": "--list", "description": "List all the social networks." }
        ]
    },
    { "name": "contact", "description": "Display contact information. 📞", 
        "options": [
            {  "option": "--goto [contact-method]", "description": "Go to the given contact method." },
            {  "option": "--list", "description": "List all the contact methods." }
        ]
    },
    { "name": "skills", "description": "Display skills. 👨‍💻"},
    { "name": "projects", "description": "Display projects. 👨‍💻" },
    { "name": "resume", "description": "Display resume. 📄", 
        "options": [
            {"option": "--download", "description": "Download the resume. 📥"}
        ]
    },
    { "name": "education", "description": "Display education. 👨‍🎓" },
    { "name": "experience", "description": "Display experience. 👨‍💼" },
    { "name": "certifications", "description": "Display certifications. 🏆" },
    { "name": "awards", "description": "Display awards. 🏆" },
    { "name": "game", "description": "Display available games. 🎮", "options": [
        {"option": "--play <game-name>", "description": "Play the given game."},
        {"option": "--list", "description": "List all the games."}]
    }
];

export class Help{
    toString(){
        return commands.map(command => `<p class="two-col"> <span class='keyword'>${command.name}
        </span><span>${command.description}</span></p>`).join("");
    }
    
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}
