


export const globalDomElements = {
    mainContainer: document.querySelector('#main-container'),
    static: {
        staticContainer: document.querySelector('#static-container'),
        popup: {
            popupContainer: document.querySelector('#popup-container'),
            popupTitle: document.querySelector('#popup-container > #popup-title'),
            popupContent: document.querySelector('#popup-container > #popup-content'),
        },
        navBar: {
            navBarContainer: document.querySelector('#nav-bar-container'),
            navBarLinks: document.querySelectorAll('#nav-bar-container > .nav-bar-links'),
        },
    },
    dynamic: {
        dynamicContainer: document.querySelector('#dynamic-container'),
    },
};