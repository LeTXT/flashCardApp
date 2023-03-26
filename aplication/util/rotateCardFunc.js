export const rotateCardFunc = (refArrow, refCard) => {
    toSpinArrow(refArrow)

    toSpinCard(refCard)

    // setNextState((prev) => prev + 1)
    // // or current (current) => current + 1
}

function toSpinArrow(ref) {

    ref.style.transition = '1s'
    ref.style.transform = 'rotate(180deg)'

    setTimeout(() => {
        ref.style.transition = '0s'
        ref.style.transform = 'rotate(0deg)'
    }, 1000)

}

export let rotate = [0]

function toSpinCard(ref) {
    if(rotate[0] === 0) {
        ref.style.transform = 'rotateY(180deg)'
        return rotate[0] = 180
    }

    if(rotate[0] === 180) {
        ref.style.transform = 'rotateY(0deg)'
        return rotate[0] = 0
    }
}
