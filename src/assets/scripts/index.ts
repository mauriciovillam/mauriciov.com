import ArmyScenario from './spectacle/scenarios/army-scenario'
import Spectacle from './spectacle/spectacle'
import CelestialScenario from './spectacle/scenarios/celestial-scenario'

const spectacle = new Spectacle([
    new CelestialScenario,
    //new ArmyScenario
])

spectacle.start()