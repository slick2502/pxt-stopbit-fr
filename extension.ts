/**
 * Blocs pour piloter un feu tricolore type Kitronik STOP:bit
 * Broches utilisées : Rouge = P0, Orange = P1, Vert = P2
 */

//% color="#0f9c11" icon="\uf28b"
namespace feu_tricolore {

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
     * Enum pour l'état de la LED
     */
    export enum EtatLED {
        //% block="allumé"
        Allume = 1,
        //% block="éteint"
        Eteint = 0
    }

    /**
     * Enum pour les états du feu tricolore
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

    /**
     * Allume le feu rouge
     */
    //% block="allumer feu rouge"
    //% weight=100
    export function allumerRouge(): void {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }

    /**
     * Éteint le feu rouge
     */
    //% block="éteindre feu rouge"
    //% weight=99
    export function eteindreRouge(): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }

    /**
     * Allume le feu orange
     */
    //% block="allumer feu orange"
    //% weight=98
    export function allumerOrange(): void {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }

    /**
     * Éteint le feu orange
     */
    //% block="éteindre feu orange"
    //% weight=97
    export function eteindreOrange(): void {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }

    /**
     * Allume le feu vert
     */
    //% block="allumer feu vert"
    //% weight=96
    export function allumerVert(): void {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }

    /**
     * Éteint le feu vert
     */
    //% block="éteindre feu vert"
    //% weight=95
    export function eteindreVert(): void {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    /**
     * Met le feu à l'état STOP (rouge)
     */
    //% block="état du feu : STOP"
    //% weight=90
    export function etatStop(): void {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    /**
     * Met le feu à l'état PRÊT (rouge + orange)
     */
    //% block="état du feu : PRÊT"
    //% weight=89
    export function etatPret(): void {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    /**
     * Met le feu à l'état AVANCEZ (vert)
     */
    //% block="état du feu : AVANCEZ"
    //% weight=88
    export function etatAvancez(): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }

    /**
     * Met le feu à l'état RALENTIR (orange)
     */
    //% block="état du feu : RALENTIR"
    //% weight=87
    export function etatRalentir(): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    /**
     * Éteint tous les feux
     */
    //% block="éteindre tous les feux"
    //% weight=80
    export function toutEteindre(): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    /**
     * Contrôle une LED spécifique du feu tricolore
     */
    //% block="passer le feu $couleur à $etat"
    //% weight=70
    export function controlerLED(couleur: CouleurFeu, etat: EtatLED): void {
        switch (couleur) {
            case CouleurFeu.Rouge:
                pins.digitalWritePin(DigitalPin.P0, etat === EtatLED.Allume ? 1 : 0)
                break
            case CouleurFeu.Orange:
                pins.digitalWritePin(DigitalPin.P1, etat === EtatLED.Allume ? 1 : 0)
                break
            case CouleurFeu.Vert:
                pins.digitalWritePin(DigitalPin.P2, etat === EtatLED.Allume ? 1 : 0)
                break
        }
    }

    /**
     * Règle l'état global du feu tricolore
     */
    //% block="régler l'état du feu à $etat"
    //% weight=95
    export function reglerEtatFeu(etat: EtatFeu): void {
        switch (etat) {
            case EtatFeu.Stop:
                pins.digitalWritePin(DigitalPin.P0, 1)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P2, 0)
                break
            case EtatFeu.PretAAvancer:
                pins.digitalWritePin(DigitalPin.P0, 1)
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.digitalWritePin(DigitalPin.P2, 0)
                break
            case EtatFeu.Avancez:
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P2, 1)
                break
            case EtatFeu.PretASarreter:
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.digitalWritePin(DigitalPin.P2, 0)
                break
        }
    }
}
