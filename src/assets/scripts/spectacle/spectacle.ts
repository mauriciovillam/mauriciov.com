import Scenario from "./scenario";

export default class Spectacle {
    scenarios: Array<Scenario>;

    domElement: HTMLElement;

    currentScenario?: Scenario;

    constructor(scenarios: Array<Scenario>) {
        this.scenarios = scenarios;

        this.scenarios.forEach((scenario: Scenario) => {
            scenario.spectacle = this;
        })

        this.domElement = document.getElementById('spectacle');
    }

    /**
     * Start the spectacle!
     */
    start() {
        let scenario = this.scenarios[0];

        const run = (scenario: Scenario, next: number) => {
            if (this.currentScenario) {
                this.currentScenario.hide();
                this.domElement.classList.remove(`scenario--${this.currentScenario.className}`)
            }

            scenario.draw();
            this.domElement.classList.add(`scenario--${scenario.className}`)
            scenario.play();

            this.currentScenario = scenario;

            if (typeof (<any>this.scenarios)[next] !== 'undefined') {
                setTimeout(() => run(this.scenarios[next], next+1), 12000)
            }
        };

        run(scenario, 1)
    }
}