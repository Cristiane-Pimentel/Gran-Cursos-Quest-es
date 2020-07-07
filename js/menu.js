document.querySelector('.menu-abrir').onclick = function() {
    document.documentElement.classList.add('menu-ativo');
};

document.querySelector('.menu-fechar').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
};

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};


document.querySelector('.menu-abrir-perfil').onclick = function() {
    document.documentElement.classList.add('menu-ativo-perfil');
};

document.querySelector('.menu-fechar-perfil').onclick = function() {
    document.documentElement.classList.remove('menu-ativo-perfil');
};

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo-perfil');
    }
};
