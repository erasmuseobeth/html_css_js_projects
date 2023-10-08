const ShowMenu = (headerToggle, navbarId) => {
    const toggleBtn = document.getElementById(headerToggle);
    nav = document.getElementById(navbarId);
    const close = document.getElementById('x');

    if (headerToggle && navbarId) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
            toggleBtn.classList.toggle('close')
            close.classList.toggle('close')
        })
    }
}

ShowMenu('toggle', 'navbar')

const linkcolor = document.querySelector('.nav_link');

function colorLink() {
    linkcolor.forEach(link => link.classList.remove('active'))
    this.classlist.add('active')
}

linkcolor.forEach(link => link.addEventListener('click', colorLink))



