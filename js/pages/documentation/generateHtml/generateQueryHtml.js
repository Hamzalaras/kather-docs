const queryParametersConfig = [
    {
        id: "params-pagination",
        title: "Pagination Parameters",
        description: "Control result pagination and page size for list endpoints.",
        parametersConfig: [
            {
                id: "param-offset",
                name: "offset",
                type: "integer",
                required: false,
                default: "0",
                description: "Number of items to skip before returning results. Must be non-negative."
            },
            {
                id: "param-limit",
                name: "limit",
                type: "integer",
                required: false,
                default: "endpoint-specific",
                description: "Maximum number of items to return in the response. Must be between 1 and 50."
            }
        ]
    },
    {
        id: "params-search-meta",
        title: "Search & Metadata Parameters",
        description: "Control search functionality and metadata inclusion in responses.",
        parametersConfig: [
            {
                id: "param-q",
                name: "q",
                type: "string",
                required: false,
                default: "none",
                description: "Search query string for fuzzy matching across poet names, poem titles, and line content. Supports both Arabic and English text. UTF-8 safe with trigram indexing."
            },
            {
                id: "param-meta",
                name: "meta",
                type: "string",
                required: false,
                default: "false",
                description: "When set to 'true', 'full', or 'all', includes metadata such as filter information in the response. Useful for UI state management. Set to 'false' or 'unset' to omit."
            },
            {
                id: "param-sort",
                name: "sort",
                type: "string",
                required: false,
                default: "endpoint-specific",
                description: "Sort results by a specific field. Use field name for ascending order or prefix with '-' for descending (e.g., 'order' or '-order'). Exact valid values depend on the endpoint."
            }
        ]
    },
    {
        id: "params-filters-common",
        title: "Common Filters",
        description: "Filter results by poet and poem attributes. These filters are available across multiple endpoints.",
        parametersConfig: [
            {
                id: "param-era-id",
                name: "era",
                type: "integer",
                required: false,
                default: "none",
                description: "Filter by historical era (e.g., pre-islamic-era, umayyad-era, abbasid-era). Get available eras from /v1/catalog/eras endpoint."
            },
            {
                id: "param-country-id",
                name: "country",
                type: "integer",
                required: false,
                default: "none",
                description: "Filter by poet's country of origin. Get available countries from /v1/catalog/countries endpoint."
            },
            {
                id: "param-gender",
                name: "gender",
                type: "string",
                required: false,
                default: "none",
                description: "Filter poets by gender. Valid values: 'male' or 'female'."
            },
            {
                id: "param-topic-id",
                name: "topic",
                type: "integer",
                required: false,
                default: "none",
                description: "Filter poems by topic (e.g., love, war, praise). Get available topics from /v1/catalog/topics endpoint."
            },
            {
                id: "param-sea-id",
                name: "sea",
                type: "integer",
                required: false,
                default: "none",
                description: "Filter by poetic meter/sea (el-tawil, el-bassit, etc.). Get available seas from /v1/catalog/seas endpoint."
            },
            {
                id: "param-quafia-id",
                name: "quafia",
                type: "integer",
                required: false,
                default: "none",
                description: "Filter by rhyme/quafia (e.g., قافية النون). Get available quawafi from /v1/catalog/quawafi endpoint."
            }
        ]
    },
    {
        id: "params-filters-poem-specific",
        title: "Poem-Specific Filters",
        description: "Additional filters available when querying poems.",
        parametersConfig: [
            {
                id: "param-poem-type",
                name: "poem_type",
                type: "integer",
                required: false,
                default: "none",
                description: "Filter poems by type (e.g., amudi, prose, tafila, foreign). Get available poem types from /v1/catalog/poemsTypes endpoint."
            }
        ]
    },
    {
        id: "params-filters-line-specific",
        title: "Line-Specific Filters",
        description: "Additional filters available when querying poem lines.",
        parametersConfig: [
            {
                id: "param-line-type",
                name: "line_type",
                type: "integer",
                required: false,
                default: "none",
                description: "Filter lines by type. Supported values are 0, 1, 2, or 3 (e.g. 0 for undefined, 1 for first hemistich, 2 for second hemistich, 3 for free verse)."
            }
        ]
    }
];

const generateParameterDetailHtml = ({ id, name, type, required, default: defaultVal, description }) => {
    const requiredBadge = required 
        ? '<span class="inline-block bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded font-semibold mr-1">Required</span>'
        : '<span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded font-semibold mr-1">Optional</span>';

    return `
        <div id="${id}" class="mb-3 p-4 border border-slate-200/60 rounded-lg bg-white">
            <div class="flex items-start justify-between mb-2">
                <div>
                    <p class="text-sm font-mono font-semibold text-slate-900">${name}</p>
                    <div class="flex items-center gap-2 mt-1">
                        ${requiredBadge}
                        <span class="inline-block bg-slate-100 text-slate-700 text-xs px-2 py-0.5 rounded font-mono">${type}</span>
                    </div>
                </div>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed mb-2">${description}</p>
            <p class="text-xs text-slate-500">
                <strong class="text-slate-600">Default:</strong> ${defaultVal}
            </p>
        </div>
    `;
};

const generateParameterGroupHtml = ({ id, title, description, parametersConfig }) => {
    return `
        <div id="${id}" class="mb-4">
            <p id="${id}-more" class="w-full flex justify-between items-center bg-[#1B2A4A] text-[#E8D5B0] p-4 font-medium rounded-xl cursor-pointer select-none hover:bg-opacity-95 transition-all">
                <span>${title}</span>
                <span class="text-xs opacity-80">▼</span>
            </p>
            <div id="${id}-docs" class="hidden p-5 border-x border-b border-slate-200/80 rounded-b-xl space-y-4 bg-slate-50/50">
                <p id="${id}-description" class="text-sm text-slate-600 leading-relaxed">
                    ${description}
                </p>
                <div id="${id}-parameters" class="space-y-3 mt-4">
                    ${parametersConfig.map(param => generateParameterDetailHtml(param)).join('')}
                </div>
            </div>
        </div>
    `;
};

export const generateQueryParametersHtml = () => {
    return `
        <div id="query-params" class="max-w-5xl mx-auto p-4 md:p-6 font-sans text-slate-800">
            <h3 id="query-params-title" class="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-3">Query Parameters</h3>
            <p id="query-params-intro" class="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                The KATHER API supports flexible filtering, pagination, and search across endpoints. Query parameters are optional unless specified otherwise and can be combined to narrow results. All parameters are case-insensitive for string values, and IDs must be positive integers.
            </p>

            <div class="bg-blue-50/40 border border-blue-200/60 rounded-xl p-4 mb-6">
                <h4 class="text-sm font-bold uppercase tracking-wider text-blue-800 mb-2">Query Format</h4>
                <p class="text-sm text-slate-600 leading-relaxed mb-3">Parameters are passed as URL query strings. Multiple values can be combined using the ampersand (&) separator:</p>
                <pre class="block max-h-40 w-full overflow-auto bg-[#111C32] text-slate-200 p-3 rounded-lg font-mono text-xs border border-slate-800"><code>GET /v1/poets?era=3&country=1&gender=male&limit=20&offset=0
GET /v1/poems?topic=1&sea=1&sort=-order&limit=10&q=love</code></pre>
            </div>

            <div class="space-y-3">
                ${queryParametersConfig.map(group => generateParameterGroupHtml(group)).join('')}
            </div>

            <div class="bg-amber-50/40 border border-amber-200/60 rounded-xl p-4 mt-8">
                <h4 class="text-sm font-bold uppercase tracking-wider text-amber-800 mb-2">Notes</h4>
                <ul class="text-sm text-slate-600 space-y-2 list-inside list-disc">
                    <li>Providing empty or unset values for filter parameters will filter and return records where that specific attribute is null for that filter.</li>
                    <li>Filter values must exactly match one of the target properties (id, name_ar, name_en) or match its recognized aliases.</li>
                    <li>Search queries (q parameter) support partial matching with UTF-8 safe Arabic and English text.</li>
                    <li>When sorting with a minus prefix (e.g., -order), results are returned in descending order.</li>
                    <li>Combining multiple filters applies AND logic (all conditions must be met).</li>
                    <li>Pagination defaults to endpoint-specific limits (maximum 50 items) and offset=0 if not specified.</li>
                </ul>
            </div>
        </div>
    `;
};