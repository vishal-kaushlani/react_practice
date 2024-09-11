function customRender(element ,container){
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    // domElement.setAttribute('href',element.props.href)
    // domElement.setAttribute('target',element.props.target)

    for(const prop in reactElement.props){
        if(prop == reactElement.children) continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
    
    // container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
        children : 'click me to visit google'
    }
    
}

const mainContainer = document.getElementById('root')
// console.log(mainContainer)

customRender(reactElement, mainContainer)