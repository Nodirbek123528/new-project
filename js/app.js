const headerLink = document.querySelectorAll('.header-link')
const headerButtonMenu = document.querySelector('.header-button-menu')
const headerMenu = document.querySelector('.header-menu')
const newIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1)"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>`
const oldIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1)"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>`


function closeAllDropdowns(){
    for(let el of headerLink){
        el.classList.remove('active');            
        el.nextElementSibling.classList.remove('active');            
    }
}


function headerMenuOpen(){
    headerButtonMenu.classList.add('active')
    headerMenu.classList.add('active')
    headerButtonMenu.innerHTML = newIcon
}

function headerMenuClose(){
    headerButtonMenu.classList.remove('active')
    headerMenu.classList.remove('active')
    headerButtonMenu.innerHTML = oldIcon
}

for(let item of headerLink){
    item.addEventListener('click', function(){
        let dropdown = item.nextElementSibling
        let dropdownBg = dropdown.querySelector('.dropdown-bg');
        if(item.classList.contains('active')){
            item.classList.remove('active');
            dropdown.classList.remove('active');
        }else{
            closeAllDropdowns()
            headerMenuClose()
            item.classList.add('active');
            dropdown.classList.add('active');
        }

        dropdownBg.addEventListener('click', function(){
            item.classList.remove('active');
            dropdown.classList.remove('active');
        })
    })
}


headerButtonMenu.addEventListener('click', function(){
    if(headerButtonMenu.classList.contains('active')){
        headerMenuClose()
    }else{
        closeAllDropdowns()
        headerMenuOpen()
    }
})