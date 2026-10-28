/**
 * Blocs pour piloter un feu tricolore type Kitronik STOP:bit
 * Broches utilisées : Rouge = P0, Orange = P1, Vert = P2
 */

//% color="#FF0000" icon="\uf28b"
namespace feu_tricolore {

    // ==========================================
    // ENUMS (Menus déroulants)
    // ==========================================

    /**
     * Enum pour les couleurs du feu
     */
    export enum CouleurFeu {
        //% block="rouge"
        Rouge = 0,
        //% block="orange"
        Orange = 1,
        //% block="vert"
        Vert = 2
    }

    /**
     * Enum pour l'état de la LED (allumé/éteint)
     */
    export enum EtatLED {
        //% block="allumé"
        Allume = 1,
        //% block="éteint"
        Eteint = 0
    }

    /**
     * Enum pour les états globaux du feu tricolore
     */
    export enum EtatFeu {
        //% block="Stop"
        Stop = 0,
        //% block="Prêt à avancer"
        PretAAvancer = 1,
        //% block="Avancez"
        Avancez = 2,
        //% block="Prêt à s'arrêter"
        PretASarreter = 3
    }

    // ==========================================
    // BLOCS SIMPLES (Allumer / Éteindre)
    // ==========================================

    /**
     * Allume le feu rouge
     */
    //% block="Allumer feu rouge"
    //% weight=100
    export function allumerRouge(): void {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }

    /**
     * Éteint le feu rouge
     */
    //% block="Éteindre feu rouge"
    //% weight=99
    export function eteindreRouge(): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }

    /**
     * Allume le feu orange
     */
    //% block="Allumer feu orange"
    //% weight=98
    export function allumerOrange(): void {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }

    /**
     * Éteint le feu orange
     */
    //% block="Éteindre feu orange"
    //% weight=97
    export function eteindreOrange(): void {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }

    /**
     * Allume le feu vert
     */
    //% block="Allumer feu vert"
    //% weight=96
    export function allumerVert(): void {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }

    /**
     * Éteint le feu vert
     */
    //% block="Éteindre feu vert"
    //% weight=95
    export function eteindreVert(): void {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    /**
     * Éteint tous les feux
     */
    //% block="Éteindre tous les feux"
    //% weight=80
    export function toutEteindre(): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    // ==========================================
    // BLOCS COMPOSÉS (États du feu)
    // ==========================================

    /**
     * Met le feu à l'état STOP (rouge)
     */
    //% block="État du feu : STOP"
    //% weight=90
    export function etatStop(): void {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    /**
     * Met le feu à l'état PRÊT (rouge + orange)
     */
    //% block="État du feu : PRÊT"
    //% weight=89
    export function etatPret(): void {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    /**
     * Met le feu à l'état AVANCEZ (vert)
     */
    //% block="État du feu : AVANCEZ"
    //% weight=88
    export function etatAvancez(): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }

    /**
     * Met le feu à l'état RALENTIR (orange)
     */
    //% block="État du feu : RALENTIR"
    //% weight=87
    export function etatRalentir(): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    // ==========================================
    // BLOCS AVANCÉS (Avec menus déroulants)
    // ==========================================

    /**
     * Contrôle une LED spécifique du feu tricolore
     */
    //% block="Allumer/éteindre feu $couleur à $etat"
    //% weight=70
    export function controlerLED(couleur: CouleurFeu, etat: EtatLED): void {
        let pin = DigitalPin.P0;
        if (couleur === CouleurFeu.Orange) {
            pin = DigitalPin.P1;
        } else if (couleur === CouleurFeu.Vert) {
            pin = DigitalPin.P2;
        }
        pins.digitalWritePin(pin, etat === EtatLED.Allume ? 1 : 0);
    }

    /**
     * Règle l'état global du feu tricolore via un menu déroulant
     */
    //% block="régler l'état du feu à $etat"
    //% weight=95
    export function reglerEtatFeu(etat: EtatFeu): void {
        switch (etat) {
            case EtatFeu.Stop:
                pins.digitalWritePin(DigitalPin.P0, 1)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P2, 0)
                break;
            case EtatFeu.PretAAvancer:
                pins.digitalWritePin(DigitalPin.P0, 1)
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.digitalWritePin(DigitalPin.P2, 0)
                break;
            case EtatFeu.Avancez:
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P2, 1)
                break;
            case EtatFeu.PretASarreter:
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.digitalWritePin(DigitalPin.P2, 0)
                break;
        }
    }
}
