import { reloadWebApp } from '../../systems/navigation/pathManipulation.js'

export const fatalErrorHandler = () => {
    reloadWebApp({ targetPath: '/404.html' });
};