function solve() {
    let moviesScreen = document.querySelector('#movies > ul')
    let archiveScreen = document.querySelector('#archive > ul')

    const form = document.getElementById('container');

    let [name, hall, price, addBtn] = Array.from(form.children)

    addBtn.addEventListener('click', onScreen)

    function onScreen(e) {
        e.preventDefault()

        if (name.value && hall.value && price.value && !isNaN(price.value)) {
        let movieLi = document.createElement('li')

        let movieHeader = document.createElement('span')
        movieHeader.textContent = `${name.value}`

        let movieHall = document.createElement('strong')
        movieHall.textContent = `Hall: ${hall.value}`

        let movieDiv = document.createElement('div')
        let moviePrice = document.createElement('strong')
        moviePrice.textContent = `${Number(price.value).toFixed(2)}`

        let buttonInput = document.createElement('input')
        buttonInput.setAttribute('placeholder', 'Tickets Sold')
        
        let buttonArchive = document.createElement('button')
        buttonArchive.textContent = 'Archive'
        buttonArchive.addEventListener('click', () => {
            e.preventDefault()
            if (buttonInput.value && !isNaN(buttonInput.value)) {
                let archiveLi = document.createElement('li')

                let archiveSpan = document.createElement('span')
                archiveSpan.textContent = `${movieHeader.textContent}`

                let archivePrice = document.createElement('strong')
                archivePrice.textContent = `Total amount: ${(+buttonInput.value * +moviePrice.textContent).toFixed(2)}`

                let deleteButton = document.createElement('button')
                deleteButton.textContent = 'Delete'
                deleteButton.addEventListener('click', () => {
                    archiveLi.remove()
                })

                archiveLi.appendChild(archiveSpan)
                archiveLi.appendChild(archivePrice)
                archiveLi.appendChild(deleteButton)

                archiveScreen.appendChild(archiveLi)

            }
        })

        movieDiv.appendChild(moviePrice)
        movieDiv.appendChild(buttonInput)
        movieDiv.appendChild(buttonArchive)
        
        movieLi.appendChild(movieHeader)
        movieLi.appendChild(movieHall)
        movieLi.appendChild(movieDiv)

        moviesScreen.appendChild(movieLi)

        }
    }
}