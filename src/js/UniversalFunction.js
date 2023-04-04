export class UniversalFunction{
    updateElement(elementTag, elementClass, elementContent){
        let element = document.createElement(elementTag);
        element.classList.add(elementClass);
        element.innerHTML = elementContent;
        let commandElements = document.getElementsByClassName("command");
        commandElements[commandElements.length - 1].appendChild(element);
    }
}