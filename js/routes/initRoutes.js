import { routes } from './routes.js';

export const initRoutes = () => {
    routes.set('#/', async () => (await import('../pages/home/home.js')).initHomePageRoute());
    routes.set('#/documentation', async () => (await import('../pages/documentation/documentation.js')).initDocumentationPageRoute());
    routes.set('#/play-ground', async () => (await import('../pages/playGround/playGround.js')).initDocumentationPageRoute());
    routes.set('#/about', async () => (await import('../pages/about/about.js')).initDocumentationPageRoute());
};
