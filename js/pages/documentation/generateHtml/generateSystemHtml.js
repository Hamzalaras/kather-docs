
const endpointsConfig = [
    {
        id: "system-endpoint-get-health",
        title: "Get system health status",
        method: "GET /health",
        optParams: null,
        exampleRequest: "/health",
        response: {
            "status": "healthy",
            "service": "kather-api",
            "version": "1.0.0",
            "timestamp": "2026-06-27T12:31:28.000Z",
            "uptimeSeconds": 142
        }
    },
    {
        id: "system-endpoint-get-ready",
        title: "Get system readiness status",
        method: "GET /ready",
        optParams: null,
        exampleRequest: "/ready",
        response: {
            "status": "ready",
            "service": "kather-api",
            "version": "1.0.0",
            "timestamp": "2026-06-27T12:31:28.000Z",
            "checks": {
                "database": {
                    "status": "ok",
                    "latencyMs": 14
                },
                "redis": {
                    "status": "ok",
                    "latencyMs": 5
                }
            }
        }
    }
];

const generateEndpointHtml = ({ id, title, method, optParams, exampleRequest, response }) => {
    const optParamsSection = optParams 
        ? `<p id="${id}-optParams" class="text-sm text-slate-600 leading-relaxed">
                    <strong class="text-slate-700">Optional params:</strong> ${optParams}
                </p>`
        : '';

    return `
        <div id="${id}" class="mb-4">
            <p id="${id}-more" class="w-full flex justify-between items-center bg-[#1B2A4A] text-[#E8D5B0] p-4 font-medium rounded-xl cursor-pointer select-none hover:bg-opacity-95 transition-all">
                <span>${title}</span>
                <span class="text-xs opacity-80">▼</span>
            </p>
            <div id="${id}-docs" class="hidden p-5 border-x border-b border-slate-200/80 rounded-b-xl space-y-4 bg-slate-50/50">
                <p id="${id}-method" class="text-sm font-medium text-slate-800">
                    <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded font-semibold mr-1">${method}</span>
                </p>
                ${optParamsSection}
                <div id="${id}-example" class="space-y-2">
                    <p class="text-sm text-slate-600">
                        <strong class="text-slate-700">Example request:</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-xs">${exampleRequest}</code>
                    </p>
                    <p class="text-sm font-medium text-slate-700 pt-2">Response:</p>
                    <pre id="${id}-example-response" class="block max-h-80 w-full overflow-auto bg-[#111C32] text-slate-200 p-4 rounded-lg font-mono text-xs md:text-sm border border-slate-800 scrollbar-thin"><code>${JSON.stringify(response, null, 4)}</code></pre>
                </div>
            </div>
        </div>
    `;
};

export const generateSystemHtml = () => {
    return `
            <div id="system-endpoint" class="max-w-5xl mx-auto p-4 md:p-6 font-sans text-slate-800">
                <h4 id="system-endpoint-title" class="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-2">System Endpoints</h4>
                <p id="system-endpoint-explanation" class="text-sm text-slate-600 mb-6 leading-relaxed">
                    Check the operational status and response times of the application services. Provides simple endpoints to verify overall system health and ensure that both the database and cache backends are online and ready.
                </p>
                <div class="space-y-3">
                    ${endpointsConfig.map(config => generateEndpointHtml(config)).join('')}
                </div>
            </div>
    `;
};