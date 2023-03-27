// array
import { words } from "./words"
import { wordsOffline } from "../arrayOffline/wordsOffline"

let touchStart
let cardNumber = 0
let initialValueMove = 'notValue'
let resultCalcLocation

export const handleTouchStart = (e) => {
    touchStart = e.nativeEvent.locationX
  
    return true
}

export const handleTouchEnd = (e, set, setMove) => {

    setMove(resultCalcLocation)
    initialValueMove = 'notValue'

    let locationX = e.nativeEvent.locationX

    if(touchStart < locationX) {
        if(cardNumber === 0) {
            cardNumber = words[0] ? words?.length - 1 : wordsOffline?.length - 1
            set(cardNumber)
            return
        }
        cardNumber--
        set(cardNumber)
        return
    }

    if(touchStart > locationX) {
        if(words[0] ? cardNumber === words?.length - 1 : cardNumber === wordsOffline?.length - 1 ) {
            cardNumber = 0
            set(cardNumber)
            return
        }
        cardNumber++
        set(cardNumber)
        return
    }

}


let moveTest

export const handleTouchMove = (e, set) => {
    // let moveLocationX = e.nativeEvent.locationX
    // let eTest = e.nativeEvent.pageX

    // if(initialValueMove === 'notValue') {
    //     initialValueMove = e.nativeEvent.pageX
    //     return
    // }
    // if(eTest > initialValueMove) {
    //     set(prev => prev + 1)
    //     return
    // }

    // if(eTest < initialValueMove) {
    //     set(prev => prev - 1)
    //     return
    // }
    
    

}

export function findCardWidth(e, set) {
    containerWidth = e.nativeEvent.layout.width
    cardWidth = 250

    resultCalcLocation = (containerWidth - cardWidth) / 2
    set(resultCalcLocation)
    return
} 