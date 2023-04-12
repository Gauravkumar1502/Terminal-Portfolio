export class UniversalFunction{
    updateElement(elementTag, elementClasses, elementContent){
        const  element = document.createElement(elementTag);
        elementClasses.split(" ").forEach((className) => {
            element.classList.add(className);
        });
        element.innerHTML = elementContent;
        const  commandElements = document.getElementsByClassName("command");
        commandElements[commandElements.length - 1].appendChild(element);
    }
}