

const content_dir = 'contents/'
const config_file = 'config.yml'
const section_names = ['home', 'publications', 'awards']

// Theme management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const themeIcon = document.getElementById('theme-icon');
    const profilePhoto = document.getElementById('profile-photo');

    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        if (themeIcon) {
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
        }
        if (profilePhoto) {
            profilePhoto.src = 'static/assets/img/photo_white.png';
        }
    } else {
        if (themeIcon) {
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
        }
        if (profilePhoto) {
            profilePhoto.src = 'static/assets/img/photo_black.png';
        }
    }
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const profilePhoto = document.getElementById('profile-photo');

    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.remove('bi-sun-fill');
        themeIcon.classList.add('bi-moon-fill');
        if (profilePhoto) {
            profilePhoto.src = 'static/assets/img/photo_white.png';
        }
    } else {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.remove('bi-moon-fill');
        themeIcon.classList.add('bi-sun-fill');
        if (profilePhoto) {
            profilePhoto.src = 'static/assets/img/photo_black.png';
        }
    }
}

// Initialize theme on page load
initTheme();

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Theme toggle button
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // Yaml
    fetch(content_dir + config_file)
        .then(response => response.text())
        .then(text => {
            const yml = jsyaml.load(text);
            Object.keys(yml).forEach(key => {
                try {
                    document.getElementById(key).innerHTML = yml[key];
                } catch {
                    console.log("Unknown id and value: " + key + "," + yml[key].toString())
                }

            })
        })
        .catch(error => console.log(error));


    // Marked
    marked.use({ mangle: false, headerIds: false })
    section_names.forEach((name, idx) => {
        fetch(content_dir + name + '.md')
            .then(response => response.text())
            .then(markdown => {
                const html = marked.parse(markdown);
                document.getElementById(name + '-md').innerHTML = html;
            }).then(() => {
                // MathJax
                MathJax.typeset();
            })
            .catch(error => console.log(error));
    })

}); 
