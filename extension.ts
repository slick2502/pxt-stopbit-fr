/**
 * Blocs pour piloter un feu tricolore type Kitronik STOP:bit
 * Broches utilisées : Rouge = P0, Orange = P1, Vert = P2
 */

//% color="#FF0000" icon="\uf28b"
namespace feu_tricolore {

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
    //% block="allumer/éteindre feu %couleur à %etat"
    //% weight=70
    export function controlerLED(couleur: CouleurFeu, etat: EtatLED): void {
        switch (couleur) {
            case CouleurFeu.Rouge:
                pins.digitalWritePin(DigitalPin.P0, etat === EtatLED.Allumé ? 1 : 0)
                break
            case CouleurFeu.Orange:
                pins.digitalWritePin(DigitalPin.P1, etat === EtatLED.Allumé ? 1 : 0)
                break
            case CouleurFeu.Vert:
                pins.digitalWritePin(DigitalPin.P2, etat === EtatLED.Allumé ? 1 : 0)
                break
        }
    }

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
        Allumé = 1,
        //% block="éteint"
        Éteint = 0
    }
    
    /**
     * Enum pour les états du feu tricolore
     */
    export enum ÉtatFeu {
        //% block="Stop"
        Stop = 0,
        //% block="Prêt à avancer"
        PrêtÀAvancer = 1,
        //% block="Avancez"
        Avancez = 2,
        //% block="Prêt à s'arrêter"
        PrêtÀSarrêter = 3
    }

    /**
     * Règle l'état global du feu tricolore
     */
    //% block="régler l'état du feu à $etat"
    //% weight=95
    export function réglerÉtatFeu(état: ÉtatFeu): void {
        switch (état) {
            case ÉtatFeu.Stop:
                // Rouge seul
                pins.digitalWritePin(DigitalPin.P0, 1)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P2, 0)
                break
            case ÉtatFeu.PrêtÀAvancer:
                // Rouge + Orange
                pins.digitalWritePin(DigitalPin.P0, 1)
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.digitalWritePin(DigitalPin.P2, 0)
                break
            case ÉtatFeu.Avancez:
                // Vert seul
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P2, 1)
                break
            case ÉtatFeu.PrêtÀSarrêter:
                // Orange seul
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.digitalWritePin(DigitalPin.P2, 0)
                break
        }
    }
}
