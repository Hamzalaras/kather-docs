import { generateIntroductionHtml } from './generateIntroductionHtml.js';
import { generateQueryParametersHtml } from './generateQueryHtml.js';
import { generateSystemHtml } from './generateSystemHtml.js';
import { generateCatalogHtml } from './generateCatalogHtml.js';
import { generatePoetsHtml } from './generatePoetsHtml.js';
import { generatePoemsHtml } from './generatePoemsHtml.js';
import { generateLinesHtml } from './generateLinesHtml.js';
import { generateErrorsHtml } from './generateErrorHtml.js';


export const generateDocumentationPageHtml = () => {
    return `
        <main id="documentation-container" class="animate-page-in max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
            ${generateIntroductionHtml()}
            <section id="documentation-main" class="mt-12">
                ${generateQueryParametersHtml()}
                ${generateSystemHtml()}
                ${generateCatalogHtml()}
                ${generatePoetsHtml()}
                ${generatePoemsHtml()}
                ${generateLinesHtml()}
                ${generateErrorsHtml()}
            </section>
        </main>
    `;
};