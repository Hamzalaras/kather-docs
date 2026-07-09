



export const hashLinksHandler = ({ eventObject }) => {
    eventObject.preventDefault();
    const targetId = eventObject.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;
    targetElement.scrollIntoView({ behavior: 'smooth' });
};