// array
import { words } from "./words"
import { wordsOffline } from "../arrayOffline/wordsOffline"

let touchStart
let cardNumber = 0

export const handleTouchStart = (e) => {
    touchStart = e.nativeEvent.locationX
    return true
}

export const handleTouchEnd = (e, set) => {

    let locationX = e.nativeEvent.locationX

    if(touchStart > locationX && cardNumber !== words?.length - 1) {
        cardNumber++
    }

    if(cardNumber === words?.length - 1) {
        cardNumber = 0
    }

    if(touchStart < locationX && cardNumber !== 0) {
        cardNumber--
    }

    if(cardNumber === 0) {
        cardNumber = words?.length - 1
    }
    set(cardNumber)

}