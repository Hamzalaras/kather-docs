
const endpointsConfig = [
    {
        id: "lines-endpoint-get-lines-list",
        title: "Get lines list",
        method: "GET /v1/lines or /lines",
        optParams: "offset, limit, poetId, poemId, era, country, gender, quafia, sea, topic, sort, poemType, lineType, q and meta.",
        exampleRequest: "/v1/lines?limit=1&sort=-order or /lines?limit=1&sort=-order",
        response: {
            "status": "success",
            "data": [
                {
                    "id": 1332572,
                    "content": "تبعوهم من بعد بالاحسان",
                    "content_nd": "تبعوهم من بعد بالاحسان",
                    "line_type": 3,
                    "order": 11608,
                    "created_at": "2026-06-14T16:40:45.688Z",
                    "poem": {
                        "id": 69334,
                        "name": "حكم المحبة ثابت الأركان ( نونية)",
                        "poet_id": 1766,
                        "topic": {
                            "id": 16,
                            "name_en": "general",
                            "name_ar": "عامه"
                        },
                        "type": {
                            "id": 1,
                            "name_en": "amudi",
                            "name_ar": "عمودية"
                        },
                        "sea": {
                            "id": 15,
                            "name_en": "el-kamel",
                            "name_ar": "الكامل"
                        },
                        "quafia": {
                            "id": 33,
                            "name_en": "q-ن",
                            "name_ar": "قافية النون (ن)"
                        },
                        "order": 2,
                        "created_at": "2026-06-14T16:33:17.670Z",
                        "line_count": 11608,
                        "poet": {
                            "id": 1766,
                            "name_en": "Ibn-Qayyim-al-Jawziyya",
                            "name_ar": "ابن قيم الجوزية",
                            "era": {
                                "id": 9,
                                "name_en": "mamluk-era",
                                "name_ar": "العصر المملوكي"
                            },
                            "country": null,
                            "gender": "male",
                            "created_at": "2026-06-14T16:32:58.449Z",
                            "poem_count": 2
                        }
                    }
                }
            ],
            "pagination": {
                "offset": 0,
                "page": 1,
                "limit": 1,
                "total": 3379151,
                "total_pages": 3379151,
                "has_more": true
            },
            "links": {
                "self": "/v1/lines?sort=-order&limit=1&offset=0",
                "next": "/v1/lines?sort=-order&limit=1&offset=1",
                "prev": null,
                "random": "/v1/lines/random?sort=-order"
            },
            "meta": {
                "filters": {
                    "sort": "-order"
                }
            }
        }
    },
    {
        id: "lines-endpoint-get-line-by-id",
        title: "Get line by id",
        method: "GET /v1/lines/:id or /lines/:id",
        optParams: "None.",
        exampleRequest: "/v1/lines/3329812 or /lines/3329812",
        response: {
            "status": "success",
            "data": {
                "id": 3329812,
                "content": "قَتَلنَنا ثُمَّ لَم يُحيِينَ قَتلانا",
                "content_nd": "قتلننا ثم لم يحيين قتلانا",
                "line_type": 3,
                "order": 72,
                "created_at": "2026-06-14T16:54:46.257Z",
                "poem": {
                    "id": 23225,
                    "name": "بان الخليط ولو طوعت ما بانا",
                    "poet_id": 2241,
                    "topic": {
                        "id": 16,
                        "name_en": "general",
                        "name_ar": "عامه"
                    },
                    "type": {
                        "id": 1,
                        "name_en": "amudi",
                        "name_ar": "عمودية"
                    },
                    "sea": {
                        "id": 4,
                        "name_en": "bassit",
                        "name_ar": "البسيط"
                    },
                    "quafia": {
                        "id": 33,
                        "name_en": "q-ن",
                        "name_ar": "قافية النون (ن)"
                    },
                    "order": 290,
                    "created_at": "2026-06-14T16:33:02.380Z",
                    "line_count": 136,
                    "poet": {
                        "id": 2241,
                        "name_en": "jarir",
                        "name_ar": "جرير",
                        "era": {
                            "id": 7,
                            "name_en": "umayyad-era",
                            "name_ar": "العصر الأموي"
                        },
                        "country": null,
                        "gender": "male",
                        "created_at": "2026-06-14T16:32:57.789Z",
                        "poem_count": 295
                    }
                }
            },
            "links": {
                "self": "/v1/lines/3329812",
                "poem": "/v1/poems/23225",
                "poet": "/v1/poets/2241",
                "random": "/v1/lines/random"
            }
        }
    },
    {
        id: "lines-endpoint-get-random-line",
        title: "Get random line",
        method: "GET /v1/lines/random or /lines/random",
        optParams: "poetId, poemId, era, country, gender, quafia, sea, topic, poemType, lineType and q.",
        exampleRequest: "/v1/lines/random or /lines/random",
        response: {
            "status": "success",
            "data": {
                "id": 2032213,
                "content": "مقسومتين بين هذا الورى",
                "content_nd": "مقسومتين بين هذا الورى",
                "line_type": 3,
                "order": 3,
                "created_at": "2026-06-14T16:45:46.246Z",
                "poem": {
                    "id": 95776,
                    "name": "أرى جنانا حسنت حورها",
                    "poet_id": 1925,
                    "topic": {
                        "id": 21,
                        "name_en": "short",
                        "name_ar": "قصيره"
                    },
                    "type": {
                        "id": 1,
                        "name_en": "amudi",
                        "name_ar": "عمودية"
                    },
                    "sea": {
                        "id": 11,
                        "name_en": "el-sari3",
                        "name_ar": "السريع"
                    },
                    "quafia": {
                        "id": 18,
                        "name_en": "q-ر",
                        "name_ar": "قافية الراء (ر)"
                    },
                    "order": 294,
                    "created_at": "2026-06-14T16:33:23.863Z",
                    "line_count": 4,
                    "poet": {
                        "id": 1925,
                        "name_en": "jamil-sidqi-al-zahawi",
                        "name_ar": "جميل صدقي الزهاوي",
                        "era": {
                            "id": 5,
                            "name_en": "ottoman-era",
                            "name_ar": "العصر العثماني"
                        },
                        "country": null,
                        "gender": "male",
                        "created_at": "2026-06-14T16:32:58.578Z",
                        "poem_count": 373
                    }
                }
            },
            "links": {
                "self": "/v1/lines/random",
                "line": "/v1/lines/2032213",
                "poem": "/v1/poems/95776",
                "poet": "/v1/poets/1925"
            },
            "meta": {
                "filters": {}
            }
        }
    }
];

const generateEndpointHtml = ({ id, title, method, optParams, exampleRequest, response }) => {
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
                <p id="${id}-optParams" class="text-sm text-slate-600 leading-relaxed">
                    <strong class="text-slate-700">Optional params:</strong> ${optParams}
                </p>
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

export const generateLinesHtml = () => {
    return `
        <div id="lines-endpoint" class="max-w-5xl mx-auto p-4 md:p-6 font-sans text-slate-800">
            <h4 id="lines-endpoint-title" class="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-2">Lines Endpoints</h4>
            <p id="lines-endpoint-explanation" class="text-sm text-slate-600 mb-6 leading-relaxed">
                Access and query individual verses from a massive corpus of more than 3 million lines. Supports line-type filtering alongside a specialized diacritic-stripped search fallback mechanism when no diacritics are provided.
            </p>
            <div class="space-y-3">
                ${endpointsConfig.map(config => generateEndpointHtml(config)).join('')}
            </div>
        </div>
    `;
};