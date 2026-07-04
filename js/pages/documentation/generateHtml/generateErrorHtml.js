const errorCategoriesConfig = [
    {
        id: "errors-validation",
        title: "Validation Errors",
        httpStatus: "400 Bad Request",
        description: "These errors occur when request parameters or query values are invalid or out of range.",
        errorsConfig: [
            {
                id: "error-absent-id",
                code: "ABSENT_ID",
                message: "Id must be specified",
                trigger: "When an endpoint requires an ID parameter (like /poets/:id) but no ID is provided.",
                example: "GET /v1/poets/ (missing :id parameter)",
                response: {
                    status: "error",
                    message: "Id must be specified",
                    code: "ABSENT_ID",
                    timestamp: "2026-06-27T12:31:28.000Z"
                }
            },
            {
                id: "error-invalid-id",
                code: "INVALID_ID",
                message: "Id must be an integer",
                trigger: "When an ID parameter is provided but is not a valid integer.",
                example: "GET /v1/poets/abc123 or GET /v1/poets/12.5",
                response: {
                    status: "error",
                    message: "Id must be an integer",
                    code: "INVALID_ID",
                    timestamp: "2026-06-27T12:31:28.000Z"
                }
            },
            {
                id: "error-id-out-of-range",
                code: "ID_OUT_OF_RANGE",
                message: "Id is out of range",
                trigger: "When an ID is provided but is less than 1 (IDs must be positive integers).",
                example: "GET /v1/poets/0 or GET /v1/poets/-5",
                response: {
                    status: "error",
                    message: "Id is out of range",
                    code: "ID_OUT_OF_RANGE",
                    timestamp: "2026-06-27T12:31:28.000Z"
                }
            },
            {
                id: "error-invalid-offset",
                code: "INVALID_OFFSET",
                message: "Offset must be an integer or must be a non-negative integer",
                trigger: "When the offset query parameter is not an integer or is negative.",
                example: "GET /v1/poems?offset=abc or GET /v1/poems?offset=-1",
                response: {
                    status: "error",
                    message: "Offset must be an integer",
                    code: "INVALID_OFFSET",
                    timestamp: "2026-06-27T12:31:28.000Z"
                }
            },
            {
                id: "error-invalid-limit",
                code: "INVALID_LIMIT",
                message: "Limit must be an integer",
                trigger: "When the limit query parameter is not an integer.",
                example: "GET /v1/poems?limit=fifty",
                response: {
                    status: "error",
                    message: "Limit must be an integer",
                    code: "INVALID_LIMIT",
                    timestamp: "2026-06-27T12:31:28.000Z"
                }
            },
            {
                id: "error-limit-out-of-range",
                code: "LIMIT_OUT_OF_RANGE",
                message: "Limit is out of range",
                trigger: "When limit is less than 1 or exceeds the maximum allowed limit (typically 100).",
                example: "GET /v1/poems?limit=0 or GET /v1/poems?limit=500",
                response: {
                    status: "error",
                    message: "Limit is out of range",
                    code: "LIMIT_OUT_OF_RANGE",
                    timestamp: "2026-06-27T12:31:28.000Z"
                }
            },
            {
                id: "error-invalid-meta",
                code: "INVALID_META",
                message: "Invalid meta value",
                trigger: "When the meta query parameter is provided but has an invalid value (must be 'true' or 'false').",
                example: "GET /v1/poems?meta=yes or GET /v1/poems?meta=1",
                response: {
                    status: "error",
                    message: "Invalid meta value",
                    code: "INVALID_META",
                    timestamp: "2026-06-27T12:31:28.000Z"
                }
            },
            {
                id: "error-search-query-too-long",
                code: "SEARCH_QUERY_TOO_LONG",
                message: "Search query is too long",
                trigger: "When the search query (q parameter) exceeds the maximum allowed length.",
                example: "GET /v1/poems?q=[very_long_string_exceeding_limit]",
                response: {
                    status: "error",
                    message: "Search query is too long",
                    code: "SEARCH_QUERY_TOO_LONG",
                    timestamp: "2026-06-27T12:31:28.000Z"
                }
            },
            {
                id: "error-invalid-sort",
                code: "INVALID_SORT",
                message: "Invalid sort value",
                trigger: "When the sort query parameter is provided but has an invalid value.",
                example: "GET /v1/poems?sort=unknown_field",
                response: {
                    status: "error",
                    message: "Invalid sort value",
                    code: "INVALID_SORT",
                    timestamp: "2026-06-27T12:31:28.000Z"
                }
            }
        ]
    },
    {
        id: "errors-not-found",
        title: "Not Found Errors",
        httpStatus: "404 Not Found",
        description: "These errors occur when a requested resource does not exist in the database.",
        errorsConfig: [
            {
                id: "error-poet-not-found",
                code: "POET_NOT_FOUND",
                message: "Poet not found or No poet matched the provided filters",
                trigger: "When requesting a poet by ID that doesn't exist, or when using filters that match no poets.",
                example: "GET /v1/poets/999999 or GET /v1/poets/random?gender=unknown",
                response: {
                    status: "error",
                    message: "Poet not found",
                    code: "POET_NOT_FOUND",
                    timestamp: "2026-06-27T12:31:28.000Z"
                }
            },
            {
                id: "error-poem-not-found",
                code: "POEM_NOT_FOUND",
                message: "Poem not found or No poem matched the provided filters",
                trigger: "When requesting a poem by ID that doesn't exist, or when using filters that match no poems.",
                example: "GET /v1/poems/999999 or GET /v1/poems/random?topic=invalid",
                response: {
                    status: "error",
                    message: "Poem not found",
                    code: "POEM_NOT_FOUND",
                    timestamp: "2026-06-27T12:31:28.000Z"
                }
            },
            {
                id: "error-line-not-found",
                code: "LINE_NOT_FOUND",
                message: "Line not found or No line matched the provided filters",
                trigger: "When requesting a line by ID that doesn't exist, or when using filters that match no lines.",
                example: "GET /v1/lines/999999 or GET /v1/lines/random?sea=invalid",
                response: {
                    status: "error",
                    message: "Line not found",
                    code: "LINE_NOT_FOUND",
                    timestamp: "2026-06-27T12:31:28.000Z"
                }
            },
            {
                id: "error-offset-exceeds-total",
                code: "OFFSET_EXCEEDS_TOTAL",
                message: "Offset exceeds total number of items",
                trigger: "When the offset parameter is greater than or equal to the total count of available items.",
                example: "GET /v1/poems?offset=5000000 (when total poems < 5000000)",
                response: {
                    status: "error",
                    message: "Offset exceeds total number of items",
                    code: "OFFSET_EXCEEDS_TOTAL",
                    timestamp: "2026-06-27T12:31:28.000Z"
                }
            }
        ]
    },
    {
        id: "errors-server",
        title: "Server Errors",
        httpStatus: "5xx Server Error",
        description: "These errors occur when there is a problem on the server side.",
        errorsConfig: [
            {
                id: "error-internal-server-error",
                code: "INTERNAL_SERVER_ERROR",
                message: "An unexpected error occurred",
                trigger: "When an unhandled exception or unexpected error occurs on the server.",
                example: "Various scenarios that cause unexpected server errors",
                response: {
                    status: "error",
                    message: "An unexpected error occurred",
                    code: "INTERNAL_SERVER_ERROR",
                    timestamp: "2026-06-27T12:31:28.000Z"
                }
            },
            {
                id: "error-redis-error",
                code: "REDIS_ERROR",
                message: "Redis connection error",
                trigger: "When there is a failure connecting to or communicating with Redis cache.",
                example: "Redis server is down or unreachable",
                response: {
                    status: "error",
                    message: "Redis connection error",
                    code: "REDIS_ERROR",
                    timestamp: "2026-06-27T12:31:28.000Z"
                }
            }
        ]
    },
    {
        id: "errors-rate-limit",
        title: "Rate Limiting Errors",
        httpStatus: "429 Too Many Requests",
        description: "These errors occur when rate limits are exceeded.",
        errorsConfig: [
            {
                id: "error-rate-limit-exceeded",
                code: "RATE_LIMIT_EXCEEDED",
                message: "Rate limit exceeded",
                trigger: "When a client exceeds the maximum number of requests allowed within a time window.",
                example: "Making more than the allowed requests per minute",
                response: {
                    status: "error",
                    message: "Rate limit exceeded",
                    code: "RATE_LIMIT_EXCEEDED",
                    timestamp: "2026-06-27T12:31:28.000Z",
                    retryAfter: "60"
                }
            }
        ]
    }
];

const generateErrorDetailHtml = ({ id, code, message, trigger, example, response }) => {
    return `
        <div id="${id}" class="mb-4">
            <p id="${id}-more" class="w-full flex justify-between items-center bg-[#1B2A4A] text-[#E8D5B0] p-4 font-medium rounded-xl cursor-pointer select-none hover:bg-opacity-95 transition-all">
                <span>${code}</span>
                <span class="text-xs opacity-80">▼</span>
            </p>
            <div id="${id}-docs" class="hidden p-5 border-x border-b border-slate-200/80 rounded-b-xl space-y-4 bg-slate-50/50">
                <p id="${id}-message" class="text-sm text-slate-600 leading-relaxed">
                    <strong class="text-slate-700">Message:</strong> ${message}
                </p>
                <p id="${id}-trigger" class="text-sm text-slate-600 leading-relaxed">
                    <strong class="text-slate-700">Trigger:</strong> ${trigger}
                </p>
                <div id="${id}-example" class="space-y-2">
                    <p class="text-sm text-slate-600">
                        <strong class="text-slate-700">Example:</strong> <code class="bg-slate-100 px-1 py-0.5 rounded text-xs">${example}</code>
                    </p>
                </div>
                <div>
                    <p class="text-sm font-medium text-slate-700 mb-2">Response:</p>
                    <pre id="${id}-example-response" class="block max-h-80 w-full overflow-auto bg-[#111C32] text-slate-200 p-4 rounded-lg font-mono text-xs md:text-sm border border-slate-800 scrollbar-thin"><code>${JSON.stringify(response, null, 4)}</code></pre>
                </div>
            </div>
        </div>
    `;
};

const generateErrorCategoryHtml = ({ id, title, httpStatus, description, errorsConfig }) => {
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
                <p id="${id}-http-status" class="text-sm">
                    <strong class="text-slate-700">HTTP Status:</strong> <code class="bg-slate-100 px-2 py-1 rounded text-xs font-semibold">${httpStatus}</code>
                </p>
                <div id="${id}-errors" class="space-y-2 mt-4 ml-2">
                    ${errorsConfig.map(error => generateErrorDetailHtml(error)).join('')}
                </div>
            </div>
        </div>
    `;
};

export const generateErrorsHtml = () => {
    return `
        <div id="errors-documentation" class="max-w-5xl mx-auto p-4 md:p-6 font-sans text-slate-800">
            <h3 id="errors-title" class="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-3">Error Handling</h3>
            <p id="errors-intro" class="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                The API uses standard HTTP status codes to indicate the success or failure of an API request. Error responses include a status field set to "error", a descriptive message, and an error code that identifies the specific error type. This guide details all possible errors and how to handle them.
            </p>

            <div class="bg-blue-50/40 border border-blue-200/60 rounded-xl p-4 mb-6">
                <h4 class="text-sm font-bold uppercase tracking-wider text-blue-800 mb-2">Response Format</h4>
                <p class="text-sm text-slate-600 leading-relaxed mb-3">All error responses follow this format:</p>
                <pre class="block max-h-60 w-full overflow-auto bg-[#111C32] text-slate-200 p-3 rounded-lg font-mono text-xs border border-slate-800"><code>{
    "status": "error",
    "message": "Human-readable error message",
    "code": "ERROR_CODE",
    "timestamp": "2026-06-27T12:31:28.000Z"
}</code></pre>
            </div>

            <div class="space-y-3">
                ${errorCategoriesConfig.map(category => generateErrorCategoryHtml(category)).join('')}
            </div>

            <div class="bg-amber-50/40 border border-amber-200/60 rounded-xl p-4 mt-8">
                <h4 class="text-sm font-bold uppercase tracking-wider text-amber-800 mb-2">Best Practices</h4>
                <ul class="text-sm text-slate-600 space-y-2 list-inside list-disc">
                    <li>Always check the HTTP status code first to determine the error category</li>
                    <li>Use the error code to programmatically handle specific errors</li>
                    <li>For rate limit errors (429), check the Retry-After header for backoff timing</li>
                    <li>Implement exponential backoff for retryable errors (5xx and 429)</li>
                    <li>Log error codes and messages for debugging and monitoring</li>
                </ul>
            </div>
        </div>
    `;
};