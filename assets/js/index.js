var menu = document.getElementsByClassName('overlay-menu')[0];

menu.addEventListener("mouseover", function() {
    this.children[0].innerHTML = '<img src="assets/image/home.svg" width="45px" height="auto" alt="home">Home';
    this.children[1].innerHTML = '<img src="assets/image/project.svg" width="45px" height="auto" alt="home">Project';
    this.children[2].innerHTML = '<img src="assets/image/cv.svg" width="45px" height="auto" alt="home">CV';
});

menu.addEventListener("mouseout", function() {
    this.children[0].innerHTML = '<img src="assets/image/home.svg" width="45px" height="auto" alt="home">';
    this.children[1].innerHTML = '<img src="assets/image/project.svg" width="45px" height="auto" alt="home">';
    this.children[2].innerHTML = '<img src="assets/image/cv.svg" width="45px" height="auto" alt="home">';
});