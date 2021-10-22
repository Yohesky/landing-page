let projects = [
    {
        name: 'Online Baking',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, error!',
        image: 'https://inovatik.com/zinc/images/project-1.jpg',
        id: 'business'
    },
    {
        name: 'Loans Company',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, error!',
        image: 'https://inovatik.com/zinc/images/project-2.jpg',
        id: 'business'
    },
    {
        name: 'Refinance Firm',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, error!',
        image: 'https://inovatik.com/zinc/images/project-3.jpg',
        id: 'business'
    },
    {
        name: 'Financial Products',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, error!',
        image: 'https://inovatik.com/zinc/images/project-4.jpg',
        id: 'marketing'
    },
    {
        name: 'Credit Cards',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, error!',
        image: 'https://inovatik.com/zinc/images/project-5.jpg',
        id: 'marketing'
    },
    {
        name: 'Software Robots',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, error!',
        image: 'https://inovatik.com/zinc/images/project-6.jpg',
        id: 'marketing'
    },
    {
        name: 'Company Control',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, error!',
        image: 'https://inovatik.com/zinc/images/project-7.jpg',
        id: 'design'
    },
    {
        name: 'Audit Reports',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, error!',
        image: 'https://inovatik.com/zinc/images/project-8.jpg',
        id: 'design'
    },
    ,
    {
        name: 'Big Business',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, error!',
        image: 'https://inovatik.com/zinc/images/project-9.jpg',
        id: 'design'
    }
]

let anchors = [
    {
        id: 'design',
        name: 'Desing'
    },
    {
        id: 'marketing',
        name: 'Marketing'
    },
    {
        id: 'business',
        name: 'Business'
    },
]

const renderAnchors = _ => {
    let section3 = document.getElementById('section3')
    anchors.forEach(anchor => {
        let element = document.createElement('div')
        let dinamycAnchor = document.createElement('p')
        let text = document.createTextNode(`${anchor.name}`)
        dinamycAnchor.appendChild(text)
        dinamycAnchor.id = anchor.id
        dinamycAnchor.addEventListener('click', handleClicks, false)
        element.appendChild(dinamycAnchor)
        section3.appendChild(element)
    })
}

const handleClicks = (e, search) => {
    let id = null
    let copyArr = []
    if(e){
        id = e.target.id
    }else{
        id = search
    }
    let section4 = document.getElementById('section4')
    removeAllChildNodes(section4);
    
    
    if(e){
        copyArr = projects.filter(project => project.id === id)
    }else{
        copyArr = projects.filter(project => project.id === id)
    }
    copyArr.forEach(proj => {
        let card = document.createElement('div')
        card.className = "animate__animated animate__fadeIn"
        let parrafo = document.createElement('p')
        let parrafoTitle = document.createElement('p')
        parrafoTitle.className = "bold"
        parrafoTitle.innerText = proj.name
        parrafo.innerText = proj.desc
        let imagen = document.createElement('img')
        imagen.src = proj.image
        card.appendChild(imagen)
        card.appendChild(parrafoTitle)
        card.appendChild(parrafo)
        section4.appendChild(card)
    })

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


renderAnchors()
handleClicks(null, 'design')
