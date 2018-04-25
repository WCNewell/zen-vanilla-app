const soundsElement = document.querySelector('#sounds');

(async () => {
    const sounds = await getSounds()
    addSoundsToPage(sounds)
})()


async function getSounds() {
    const response = await fetch('/sounds.json')
    const json = await response.json()
    return json
}

function addSoundsToPage(sounds) {
    sounds.forEach(sound => {
        const soundDiv = document.createElement('div')
        soundDiv.className = 'sound'
        const soundTitle = document.createElement('h2')
        soundTitle.textContent = sound.title
        soundDiv.appendChild(soundTitle)
        const playButton = document.createElement('button')
        playButton.textContent = '▶️'
        soundDiv.appendChild(playButton)

        const player = document.createElement('audio')
        player.setAttribute('src', `${sound.src}`)

        soundDiv.appendChild(player)

        playButton.addEventListener('click', () => {
            if (player.paused) {
                player.play()
                } else {
                player.pause()
            }    
        })
        soundsElement.appendChild(soundDiv)
    })
}