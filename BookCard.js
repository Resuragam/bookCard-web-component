class BookCard extends HTMLElement {
    constructor() {
        super()

        // 通过生成DOM元素方式
        // const container = document.createElement('div')
        // container.className = 'container'
        //
        // const image = document.createElement('img')
        // image.className = 'image'
        // image.src = "https://file.ituring.com.cn/LargeCover/23047b0f0134221867e2"
        //
        // const title = document.createElement('p')
        // title.className = 'title'
        // title.textContent = 'Python编程：从入门到实践（第3版）'
        //
        // const author = document.createElement('p')
        // author.className = 'author'
        // author.textContent = '[美]埃里克·马瑟斯（Eric Matthes）'
        //
        // const translator = document.createElement('p')
        // translator.className = 'translator'
        // translator.textContent = '袁国忠'
        //
        // container.append(image, title, author, translator)

        // 通过注册组件调用该模板

        // Shadow DOM 进行DOM样式隔离
        this.attachShadow({ mode: 'open' })

        const templateElem = document.getElementById('book-card-template')
        const clonedElem = templateElem.content.cloneNode(true)

        clonedElem.querySelector('.container > .image').src = this.getAttribute('data-image')
        clonedElem.querySelector('.container > .title').textContent = this.getAttribute('data-title')
        clonedElem.querySelector('.container > .author').textContent = this.getAttribute('data-author')
        clonedElem.querySelector('.container > .translator').textContent = this.getAttribute('data-translator')

        clonedElem.querySelector('.container > .action').addEventListener('click', () => {
            alert('hello world')
        })
        
        this.shadowRoot.appendChild(clonedElem)

    }
}

customElements.define('book-card', BookCard)