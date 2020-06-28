import Scenario from "../scenario"
import Spectacle from '../spectacle'
import ScenarioElement from '../element'
import anime from 'animejs/lib/anime.es'

export default class CelestialScenario implements Scenario {
    className = 'celestial';

    spectacle!: Spectacle;

    animations: Array<object>;

    elements: Array<ScenarioElement>;

    draw(): void {
        const cloudAnimation = {
            translateX: {
                value: -(window.screen.width),
                duration: 20000
            },
        }

        const parallaxAnimation = (duration: number) => {
            return {top: {
                value: 0,
                duration:3000 * duration,
                delay:2500,
                easing: () => {
                    return (Math.random() >= .5) ? 'easeInOutExpo' : 'easeInOutSine'
                }
            }}
        }

        this.elements = [
            new ScenarioElement(this, 'element--stars', cloudAnimation, {}),
            //new ScenarioElement(this, 'element--layer_11', parallaxAnimation, {}),
            new ScenarioElement(this, 'element--layer_10', parallaxAnimation(1), {}),
            new ScenarioElement(this, 'element--layer_9', parallaxAnimation(1.2), {}),
            new ScenarioElement(this, 'element--layer_8', parallaxAnimation(1.5), {}),
            new ScenarioElement(this, 'element--layer_7', parallaxAnimation(1.7), {}),
            new ScenarioElement(this, 'element--layer_6', parallaxAnimation(2.8), {}),
            new ScenarioElement(this, 'element--layer_5', parallaxAnimation(2.3), {}),
            new ScenarioElement(this, 'element--layer_4', parallaxAnimation(2.4), {}),
            new ScenarioElement(this, 'element--layer_3', parallaxAnimation(2.55), {}),
            new ScenarioElement(this, 'element--layer_2', parallaxAnimation(2.65), {}),
            new ScenarioElement(this, 'element--layer_1', parallaxAnimation(2.75), {})
        ];
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