export const speakWord = (ref) => {

    strokeHeight(ref)

    let value = document.querySelector('.word').innerText

    console.log(value)

    let word = new SpeechSynthesisUtterance(value);

    word.lang = 'en-US'
    word.rate = 0.5

    word.onend = function() {
        console.log('finish')
        finishMovimentAnimation(ref)
    }

    speechSynthesis.speak(word);
}

function strokeHeight(ref) {

    for(let value of ref.children) {

        value.classList?.add('animationAdd')

    }

}

function finishMovimentAnimation(ref) {

    for(let value of ref.children) {

        value.classList?.remove('animationAdd')

    }
}
