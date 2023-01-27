if (window.scrollY == 0) {
    document.querySelector('.navbar').classList.remove('navbar-opacity') ;
} else {
    document.querySelector('.navbar').classList.add('navbar-opacity') ;
}


document.addEventListener("scroll", (event) => {
    if (window.scrollY == 0) {
        document.querySelector('.navbar').classList.remove('navbar-opacity') ;
    } else {
        document.querySelector('.navbar').classList.add('navbar-opacity') ;
    }
})