class BookCard extends HTMLElement {
    constructor() {
        super()

        const container = document.createElement('div')
        container.className = 'container'

        const image = document.createElement('img')
        image.className = 'image'
        image.src = "https://file.ituring.com.cn/LargeCover/23047b0f0134221867e2"

        const title = document.createElement('p')
        title.className = 'title'
        title.textContent = 'Python编程：从入门到实践（第3版）'

        const author = document.createElement('p')
        author.className = 'author'
        author.textContent = '[美]埃里克·马瑟斯（Eric Matthes）'

        const translator = document.createElement('p')
        translator.className = 'translator'
        translator.textContent = '袁国忠'
        
        container.append(image, title, author, translator)

        this.appendChild(container)
    }
}

customElements.define('book-card', BookCard)