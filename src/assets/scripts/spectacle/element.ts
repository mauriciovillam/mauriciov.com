import anime from 'animejs/lib/anime.es';
import Scenario from "./scenario";
import { AnimeAnimParams } from 'animejs';

interface Style
{
    [key: string]: any;
}

export default class ScenarioElement {
    scenario: Scenario;

    className: string;

    style: Style;

    domElement?: HTMLDivElement;

    animation: AnimeAnimParams;

    constructor(scenario: Scenario, className: string, animation: AnimeAnimParams, style: Style) {
        this.scenario = scenario;
        this.className = className;
        this.animation = animation;
        this.style = style;
        this.draw();
    }

    /**
     * Draw the element in the scenario.
     */
    draw(): void {
        this.domElement = document.createElement("div");
        this.domElement.classList.add(...this.className.split(' '))

        Object.entries(this.style).forEach(([key, value]) => {
            (<any>this.domElement.style)[key] = value;
        });

        this.scenario.spectacle.domElement.append(this.domElement)
    }
}