import { API_PREFIX_V1, SERVER } from '../../../constants/http.js';

const introConfig = {
    title: "KATHER Documentation",
    introText: "KATHER is a REST API for exploring a curated Arabic poetry dataset, covering more than 3 million lines across 2,000+ poets and 120,000+ poems. It provides structured access to poets, poems, individual lines, and catalog metadata such as eras, countries, poetic seas, quawafi, and topics, with fast discovery powered by PostgreSQL trigram search. Arabic text is preserved as UTF-8 throughout, and search is designed for browsing and fuzzy matching rather than strict linguistic analysis.",
    rateLimit: {
        title: "Rate Limit",
        text: "Rate limiting is backed by Redis when available. If you exceed the allowed number of requests within a given window, the API will respond with a 429 Too Many Requests error. Check the response headers for retry timing before making further requests."
    },
    baseUrl: {
        title: "Base URL",
        url1: `${SERVER}`,
        url2: `${SERVER}/${API_PREFIX_V1}`
    }
};

const navigationLinks = [
    {
        href: "#query-params",
        label: "Parameters: query parameters"
    },
    {
        href: "#system-endpoint",
        label: "Parameters: system endpoints"
    },
    {
        href: "#catalog-endpoint",
        label: "Catalog: catalog endpoints"
    },
    {
        href: "#poets-endpoint",
        label: "Poets: poets endpoints"
    },
    {
        href: "#poems-endpoint",
        label: "Poems: poems endpoints"
    },
    {
        href: "#lines-endpoint",
        label: "Lines: lines endpoints"
    }
];

const generateNavigationLink = ({ href, label }) => {
    return `
                    <li>
                        <a href="${href}" class="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#1B2A4A] hover:bg-slate-50/50 transition-all text-sm font-medium text-slate-700 hover:text-[#1B2A4A] group">
                            <span>${label}</span>
                            <span class="text-slate-400 group-hover:translate-x-0.5 transition-transform text-xs">→</span>
                        </a>
                    </li>
    `;
};

export const generateIntroductionHtml = () => {
    return `
        <header id="documentation-introduction" class="max-w-5xl mx-auto p-4 md:p-6 font-sans text-slate-800 space-y-8">
            <div id="intro" class="border-b border-slate-200 pb-6">
                <h3 id="intro-title" class="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-3">${introConfig.title}</h3>
                <p id="intro-text" class="text-sm md:text-base text-slate-600 leading-relaxed">
                    ${introConfig.introText}
                </p>
            </div>

            <div id="rate-limit" class="p-4 bg-amber-50/40 border border-amber-200/60 rounded-xl">
                <h4 id="rate-limit-title" class="text-sm font-bold uppercase tracking-wider text-amber-800 mb-1">${introConfig.rateLimit.title}</h4>
                <p id="rate-limit-text" class="text-sm text-slate-600 leading-relaxed">
                    ${introConfig.rateLimit.text}
                </p>
            </div>

            <div id="base-url" class="space-y-2">
                <h4 id="base-url-title" class="text-base font-semibold text-slate-900">${introConfig.baseUrl.title}</h4>
                <p id="base-url-text" class="inline-block bg-[#111C32] text-slate-200 px-4 py-3 rounded-xl font-mono text-xs md:text-sm border border-slate-800 shadow-sm whitespace-normal break-all">
                    ${introConfig.baseUrl.url1} <span class="text-slate-500 font-sans mx-1.5">or</span> ${introConfig.baseUrl.url2}
                </p>
            </div>

            <div id="links" class="space-y-3">
                <h4 id="links-title" class="text-base font-semibold text-slate-900">Quick Navigation</h4>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    ${navigationLinks.map(link => generateNavigationLink(link)).join('')}
                </ul>
            </div>
        </header>
    `;
};