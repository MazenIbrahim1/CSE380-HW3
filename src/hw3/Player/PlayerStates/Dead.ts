import GameEvent from "../../../Wolfie2D/Events/GameEvent";
import { GameEventType } from "../../../Wolfie2D/Events/GameEventType";
import { HW3Events } from "../../HW3Events";
import { PlayerTweens } from "../PlayerController";
import PlayerState from "./PlayerState";

/**
 * The Dead state for the player's FSM AI. 
 */
export default class Dead extends PlayerState {

    // Trigger the player's death animation when we enter the dead state
    public onEnter(options: Record<string, any>): void {
        let dyingAudio = this.owner.getScene().getDyingAudioKey();
        let levelMusic = this.owner.getScene().getLevelMusicKey();
        let level2Music = this.owner.getScene().getLevel2MusicKey();
        this.emitter.fireEvent(GameEventType.PLAY_SOUND, {key: dyingAudio, loop: false, holdReferance: false});
        this.emitter.fireEvent(GameEventType.STOP_SOUND, {key: levelMusic, loop: false, holdReferance: false});
        this.emitter.fireEvent(GameEventType.STOP_SOUND, {key: level2Music, loop: false, holdReferance: false});
    }

    // Ignore all events from the rest of the game
    public handleInput(event: GameEvent): void { }

    // Empty update method - if the player is dead, don't update anything
    public update(deltaT: number): void {}

    public onExit(): Record<string, any> { return {}; }
    
}