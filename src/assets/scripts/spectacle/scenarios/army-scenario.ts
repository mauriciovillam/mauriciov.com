import Scenario from "../scenario"
import Spectacle from '../spectacle'
import ScenarioElement from '../element'
import anime from 'animejs/lib/anime.es'

export default class ArmyScenario implements Scenario {
    className = 'army';

    spectacle!: Spectacle;

    animations: Array<object>;

    elements: Array<ScenarioElement>;

    draw(): void {
        const soldierAnimation = {
            translateX: -(window.screen.width),
            duration: 20000,
            easing: 'linear'
        };

        const cloudAnimation = {
            translateX: (window.screen.width),
            duration: 10000,
            easing: 'linear'
        };

        const soldiers = [
            new ScenarioElement(this, 'element--soldier color-black', soldierAnimation, {bottom: '5%', right: '10%'}),
            new ScenarioElement(this, 'element--soldier color-blue', soldierAnimation, {bottom: '23%', right: '5%'}),
            new ScenarioElement(this, 'element--soldier color-red', soldierAnimation, {bottom: '2%', right: '-5%'}),
            new ScenarioElement(this, 'element--soldier color-yellow', soldierAnimation, {bottom: '20%', right: '-15%'}),
            new ScenarioElement(this, 'element--soldier color-green', soldierAnimation, {bottom: '15%', right: '-30%'}),
            new ScenarioElement(this, 'element--cloud', cloudAnimation, {})
        ]

        this.elements = soldiers;
    }

    play(): void {
        this.elements.forEach((element: ScenarioElement) => {
            const configuration = element.animation
            configuration.targets = element.domElement
            anime(configuration)
        })
    }

    hide(): void {

    }
}