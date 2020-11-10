var titles = ["hyieV1", "hyieV1.", "hyieV1.g", "hyieV1.gi", "hyieV1.git", "hyieV1.gith", "hyieV1.githu", "hyieV1.github", "hyieV1.github.", "hyieV1.github.i", "hyieV1.github.io", "hyieV1|github.io", "hyieV1|ithub.io", "hyieV1|thub.io", "hyieV1|hub.io", "hyieV1|ub.io", "hyieV1|b.io", "hyieV1|.io", "hyieV1|io", "hyieV1|o", "hyieV1|", "hyieV1"]

var iScroll = -1;

function scrollTitle() {
    if(iScroll < titles.length - 1) {
        iScroll++;
    } else {
        iScroll = 0;
    }
    document.title = titles[iScroll];
    
    setTimeout("scrollTitle()", 500);
}
scrollTitle();