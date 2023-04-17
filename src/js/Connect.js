import { UniversalFunction } from "./UniversalFunction.js";

export class Connect{
    toString(){
        return `<p class="two-col">
                    <span class='keyword'>GitHub</span>
                    <span><a href="https://github.com/Gauravkumar1502" target="_blank">github.com/Gauravkumar1502</a></span>
                    <span class='keyword'>LeetCode</span>
                    <span><a href="https://leetcode.com/GauravKumar15" target="_blank">leetcode.com/GauravKumar15/</a></span>
                    <span class='keyword'>HackerRank</span>
                    <span><a href="https://www.hackerrank.com/gauravkumar15021" target="_blank">hackerrank.com/gauravkumar15021</a></span>
                    <span class='keyword'>LinkedIn</span>
                    <span><a href="https://www.linkedin.com/in/gaurav-kumar-3b9132154" target="_blank">linkedin.com/in/gaurav-kumar-3b9132154/</a></span>
                    <span class='keyword'>Twitter</span>
                    <span><a href="https://twitter.com/Gauravkuma_r" target="_blank">twitter.com/Gauravkuma_r</a></span>
                    <span class='keyword'>Instagram</span>
                    <span><a href="https://www.instagram.com/gauravkuma.r/" target="_blank">instagram.com/gauravkuma.r</a></span>
                </p>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}