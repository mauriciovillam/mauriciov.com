import Spectacle from "./spectacle";
import ScenarioElement from "./element";

export default interface Scenario {
    className: string;
    
    spectacle: Spectacle;

    elements: Array<ScenarioElement>;

    /**
     * Draw the scene and its corresponding elements.
     */
    draw(): void;

    /**
     * Start playing the scene animations.
     */
    play(): void;

    /**
     * Hide the scene and its corresponding elements.
     */
    hide(): void;
}