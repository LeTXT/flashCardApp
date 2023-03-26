// array
import { words } from "./words"
import { rotate } from "./rotateCardFunc"
import { wordsOffline } from "../arrayOffline/wordsOffline"

// variable
let valueStart
let limit = 0
let indexState = 0

export const nextCardFunc2 = (e, set) => {
    if(e.type === "touchstart") {
        set((prev) => prev + 1)
    }
    // if(e.type === 'touchstart') {
    //     valueStart = e.touches[0].clientX
    //     return
    // }

    // if(e.type === 'touchend') {
    //     let touchClientX = e.changedTouches[0].clientX
        
    //     if(valueStart > touchClientX) {
    //         if(indexState === words?.length - 1) {
    //             indexState = 0
    //             set(0)
    //             return
    //         }
    //         indexState++
    //         set((prev) => prev + 1)
    //         return
    //     }

    //     if(valueStart < touchClientX) {
    //         if(indexState === 0) {
    //             indexState = words?.length - 1
    //             set(words?.length - 1)
    //             return
    //         }
    //         indexState--
    //         set((prev) => prev - 1)
    //         return
    //     }

    // }
}
