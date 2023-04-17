import { UniversalFunction } from "./UniversalFunction.js";

export class Contact{
    toString(){
        return `<p class="two-col">
                    <span class='keyword'>Phone</span>
                    <span><a href="tel:+919039351758">+91 9039351758</a></span>
                    <span class='keyword'>Email</span>
                    <span><a href="mailto:gaurav.kumar.deve@gmail.com">gaurav.kumar.deve@gmail.com</a></span>
                    <span class='keyword'>Whatsapp</span>
                    <span><a href="https://wa.me/919039351758" target="_blank">+91 9039351758</a></span>
                    <span class='keyword'>Telegram</span>
                    <span><a href="https://t.me/Gauravkumar1502" target="_blank">@Gauravkumar1502</a></span>
                </p>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}