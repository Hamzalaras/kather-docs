
const endpointsConfig = [
    {
        id: "poems-endpoint-get-poems-list",
        title: "Get poems list",
        method: "GET /v1/poems or /poems",
        optParams: "offset, limit, poetId, era, country, gender, quafia, sea, topic, sort, poemType, q and meta.",
        exampleRequest: "/v1/poems?limit=1&offset=6767 or /poems?limit=1&offset=6767",
        response: {
            "status": "success",
            "data": [
                {
                    "id": 29232,
                    "name": "الشعر لي",
                    "poet_id": 980,
                    "topic": { "id": 16, "name_en": "general", "name_ar": "عامه" },
                    "type": { "id": 2, "name_en": "prose", "name_ar": "نثرية" },
                    "sea": null,
                    "quafia": null,
                    "order": 73,
                    "created_at": "2026-06-14T16:33:06.054Z",
                    "line_count": 11,
                    "poet": {
                        "id": 980,
                        "name_en": "Abdullah-Al‑Shurbaji",
                        "name_ar": "عبدالله الشوربجي",
                        "era": { "id": 11, "name_en": "new", "name_ar": "العصر الحديث" },
                        "country": { "id": 15, "name_en": "egypt", "name_ar": "مصر" },
                        "gender": "male",
                        "created_at": "2026-06-14T16:32:58.047Z",
                        "poem_count": 100
                    }
                }
            ],
            "pagination": { "offset": 6767, "page": 6768, "limit": 1, "total": 124178, "total_pages": 124178, "has_more": true },
            "links": { "self": "/v1/poems?limit=1&offset=6767", "next": "/v1/poems?limit=1&offset=6768", "prev": "/v1/poems?limit=1&offset=6766", "random": "/v1/poems/random" },
            "meta": { "filters": {} }
        }
    },
    {
        id: "poems-endpoint-get-poem-by-id",
        title: "Get poem by id",
        method: "GET /v1/poems/:id or /poems/:id",
        optParams: "offset, limit.",
        exampleRequest: "/v1/poems/12460?limit=1 or /poems/12460?limit=1",
        response: {
            "status": "success",
            "data": {
                "poem": {
                    "id": 12460,
                    "name": "واحر قلباه ممن قلبه شبم",
                    "poet_id": 2088,
                    "topic": { "id": 17, "name_en": "reproach", "name_ar": "عتاب" },
                    "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" },
                    "sea": { "id": 4, "name_en": "bassit", "name_ar": "البسيط" },
                    "quafia": { "id": 32, "name_en": "q-م", "name_ar": "قافية الميم (م)" },
                    "order": 104,
                    "created_at": "2026-06-14T16:32:59.705Z",
                    "line_count": 76,
                    "poet": {
                        "id": 2088,
                        "name_en": "Mutanabi",
                        "name_ar": "المتنبي",
                        "era": { "id": 3, "name_en": "abbasid-era", "name_ar": "العصر العباسي" },
                        "country": null,
                        "gender": "male",
                        "created_at": "2026-06-14T16:32:57.789Z",
                        "poem_count": 323
                    }
                },
                "lines": [
                    { "id": 2984158, "content": "واحرَّ قَلباهُ مِمَّن قَلبُهُ شَبِمُ", "content_nd": "واحر قلباه ممن قلبه شبم", "line_type": 3, "order": 1, "created_at": "2026-06-14T16:51:50.769Z" }
                ],
                "pagination": { "offset": 0, "page": 1, "limit": 1, "total": 76, "total_pages": 76, "has_more": true }
            },
            "links": { "self": "/v1/poems/12460?limit=1&offset=0&poem_id=12460", "lines": "/v1/poems/12460/lines?limit=1&offset=0&poem_id=12460", "context": "/v1/poems/12460/context", "random": "/v1/poems/random", "poet": "/v1/poets/2088" },
            "meta": { "filters": {} }
        }
    },
    {
        id: "poems-endpoint-get-poem-lines",
        title: "Get poem lines",
        method: "GET /v1/poems/:id/lines or /poems/:id/lines",
        optParams: "offset, limit, sort, lineType and q.",
        exampleRequest: "/v1/poems/25177/lines?limit=1&offset=14 or /poems/25177/lines?limit=1&offset=14",
        response: {
            "status": "success",
            "poem": {
                "id": 25177,
                "name": "ألا هبي بصحنك فاصبحين",
                "poet_id": 2347,
                "topic": { "id": 4, "name_en": "mu'allaqat", "name_ar": "المعلقات" },
                "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" },
                "sea": { "id": 27, "name_en": "el-wafer", "name_ar": "الوافر" },
                "quafia": { "id": 33, "name_en": "q-ن", "name_ar": "قافية النون (ن)" },
                "order": 11,
                "created_at": "2026-06-14T16:33:04.373Z",
                "line_count": 206,
                "poet": {
                    "id": 2347,
                    "name_en": "amr-ibn-kulthum",
                    "name_ar": "عمرو بن كلثوم",
                    "era": { "id": 1, "name_en": "pre-islamic-era", "name_ar": "العصر الجاهلي" },
                    "country": null,
                    "gender": "male",
                    "created_at": "2026-06-14T16:32:57.882Z",
                    "poem_count": 44
                }
            },
            "data": [
                { "id": 3371511, "content": "وَإِنَّا سَوْفَ تُدْرِكُنَا المَنَايَا", "content_nd": "وإنا سوف تدركنا المنايا", "line_type": 3, "order": 15, "created_at": "2026-06-14T16:55:06.241Z" }
            ],
            "pagination": { "offset": 14, "page": 15, "limit": 1, "total": 206, "total_pages": 206, "has_more": true },
            "links": { "self": "/v1/poems/25177/lines?limit=1&offset=14&poem_id=25177", "next": "/v1/poems/25177/lines?limit=1&offset=15&poem_id=25177", "prev": "/v1/poems/25177/lines?limit=1&offset=13&poem_id=25177", "poem": "/v1/poems/25177", "context": "/v1/poems/25177/context" },
            "meta": { "filters": {} }
        }
    },
    {
        id: "poems-endpoint-get-poem-context",
        title: "Get poem context",
        method: "GET /v1/poems/:id/context or /poems/:id/context",
        optParams: "none.",
        exampleRequest: "/v1/poems/1/context or /poems/1/context",
        response: {
            "status": "success",
            "data": {
                "poem": { "id": 1, "name": "أحمل رأسا قد سئمت حمله", "poet_id": 1, "topic": { "id": 16, "name_en": "general", "name_ar": "عامه" }, "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" }, "sea": { "id": 9, "name_en": "el-rijz", "name_ar": "الرجز" }, "quafia": null, "order": 1, "created_at": "2026-06-14T16:32:58.665Z", "line_count": 3 },
                "poet": { "id": 1, "name_en": "Um-Hakim-Al-Kharijiyya", "name_ar": "أم حكيم الخارجية", "era": { "id": 7, "name_en": "umayyad-era", "name_ar": "العصر الأموي" }, "country": null, "gender": "female", "created_at": "2026-06-14T16:32:57.634Z", "poem_count": 2 },
                "previous": null,
                "next": { "id": 2, "name": "ألا إن وجها حسن الله خلقه", "poet_id": 1, "topic": { "id": 26, "name_en": "pride", "name_ar": "فخر" }, "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" }, "sea": { "id": 13, "name_en": "el-tawil", "name_ar": "الطويل" }, "quafia": { "id": 26, "name_en": "q-ع", "name_ar": "قافية العين (ع)" }, "order": 2, "created_at": "2026-06-14T16:32:58.665Z", "line_count": 4 },
                "related_by_poet": [
                    { "id": 2, "name": "ألا إن وجها حسن الله خلقه", "poet_id": 1, "topic": { "id": 26, "name_en": "pride", "name_ar": "فخر" }, "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" }, "sea": { "id": 13, "name_en": "el-tawil", "name_ar": "الطويل" }, "quafia": { "id": 26, "name_en": "q-ع", "name_ar": "قافية العين (ع)" }, "order": 2, "created_at": "2026-06-14T16:32:58.665Z", "line_count": 4 }
                ],
                "related_by_topic": [
                    { "id": 10, "name": "تعرض للحمى نوال وإنما", "poet_id": 8, "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" }, "sea": { "id": 13, "name_en": "el-tawil", "name_ar": "الطويل" }, "quafia": { "id": 31, "name_en": "q-ل", "name_ar": "قافية اللام (ل)" }, "order": 1, "created_at": "2026-06-14T16:32:58.665Z", "line_count": 4, "poet": { "id": 8, "name_en": "Umm-al-Ziba-al-Kilabiyya", "name_ar": "أم الظباء الكلابية", "era": { "id": 2, "name_en": "islamic-era", "name_ar": "العصر الإسلامي" }, "country": null, "gender": "female", "created_at": "2026-06-14T16:32:57.634Z", "poem_count": 1 } },
                    { "id": 11, "name": "ما أبة ما أبة", "poet_id": 9, "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" }, "sea": { "id": 64, "name_en": "manhouk-el-monsareh", "name_ar": "منهوك المنسرح" }, "quafia": null, "order": 1, "created_at": "2026-06-14T16:32:58.665Z", "line_count": 4, "poet": { "id": 9, "name_en": "Hind-bint-Abi-Sufyan", "name_ar": "هند بنت أبي سفيان", "era": { "id": 2, "name_en": "islamic-era", "name_ar": "العصر الإسلامي" }, "country": null, "gender": "female", "created_at": "2026-06-14T16:32:57.634Z", "poem_count": 1 } },
                    { "id": 14, "name": "أمير المؤمنين جزيت خيرا", "poet_id": 12, "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" }, "sea": { "id": 27, "name_en": "el-wafer", "name_ar": "الوافر" }, "quafia": { "id": 33, "name_en": "q-ن", "name_ar": "قافية النون (ن)" }, "order": 1, "created_at": "2026-06-14T16:32:58.665Z", "line_count": 12, "poet": { "id": 12, "name_en": "Umm-Khalaf-al-Kilabiyya", "name_ar": "أم خلف الكلابية", "era": { "id": 2, "name_en": "islamic-era", "name_ar": "العصر الإسلامي" }, "country": null, "gender": "female", "created_at": "2026-06-14T16:32:57.634Z", "poem_count": 1 } },
                    { "id": 41, "name": "ألا فاسقياني من شرابكما الوردي", "poet_id": 27, "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" }, "sea": { "id": 13, "name_en": "el-tawil", "name_ar": "الطويل" }, "quafia": { "id": 16, "name_en": "q-د", "name_ar": "قافية الدال (د)" }, "order": 1, "created_at": "2026-06-14T16:32:58.665Z", "line_count": 4, "poet": { "id": 27, "name_en": "Umm-Hakim-bint-Yahya", "name_ar": "أم حكيم بنت يحيى", "era": { "id": 2, "name_en": "islamic-era", "name_ar": "العصر الإسلامي" }, "country": null, "gender": "female", "created_at": "2026-06-14T16:32:57.634Z", "poem_count": 1 } },
                    { "id": 51, "name": "وما بعد مرداس وعروة بيننا", "poet_id": 33, "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" }, "sea": { "id": 13, "name_en": "el-tawil", "name_ar": "الطويل" }, "quafia": { "id": 32, "name_en": "q-م", "name_ar": "قافية الميم (م)" }, "order": 1, "created_at": "2026-06-14T16:32:58.665Z", "line_count": 4, "poet": { "id": 33, "name_en": "Umm-al-Jarrah-al-Adawiyya", "name_ar": "أم الجراح العدوية", "era": { "id": 2, "name_en": "islamic-era", "name_ar": "العصر الإسلامي" }, "country": null, "gender": "female", "created_at": "2026-06-14T16:32:57.634Z", "poem_count": 1 } }
                ],
                "related_by_sea": [
                    { "id": 12, "name": "أعطي عبيدا من شييخ ذي عجر", "poet_id": 10, "topic": { "id": 24, "name_en": "satire", "name_ar": "هجاء" }, "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" }, "quafia": null, "order": 1, "created_at": "2026-06-14T16:32:58.665Z", "line_count": 5, "poet": { "id": 10, "name_en": "Zaynab-bint-Arfata", "name_ar": "زينب بنت عرفطة", "era": { "id": 2, "name_en": "islamic-era", "name_ar": "العصر الإسلامي" }, "country": null, "gender": "female", "created_at": "2026-06-14T16:32:57.634Z", "poem_count": 1 } },
                    { "id": 58, "name": "أشبه روس نفرا كراما", "poet_id": 37, "topic": { "id": 22, "name_en": "praise", "name_ar": "مدح" }, "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" }, "quafia": null, "order": 1, "created_at": "2026-06-14T16:32:58.665Z", "line_count": 9, "poet": { "id": 37, "name_en": "Adiyah-bint-Farah", "name_ar": "عادية بنت فرعة", "era": { "id": 1, "name_en": "pre-islamic-era", "name_ar": "العصر الجاهلي" }, "country": null, "gender": "female", "created_at": "2026-06-14T16:32:57.634Z", "poem_count": 1 } },
                    { "id": 65, "name": "يا رب رب البيت والحجاج", "poet_id": 43, "topic": { "id": 16, "name_en": "general", "name_ar": "عامه" }, "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" }, "quafia": null, "order": 1, "created_at": "2026-06-14T16:32:58.665Z", "line_count": 7, "poet": { "id": 43, "name_en": "Maitha-al-Mujashiiyyah", "name_ar": "ميثاء المجاشعية", "era": { "id": 1, "name_en": "pre-islamic-era", "name_ar": "العصر الجاهلي" }, "country": null, "gender": "female", "created_at": "2026-06-14T16:32:57.634Z", "poem_count": 1 } },
                    { "id": 68, "name": "أصبح جعد وأبو الموزون", "poet_id": 46, "topic": { "id": 24, "name_en": "satire", "name_ar": "هجاء" }, "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" }, "quafia": { "id": 33, "name_en": "q-ن", "name_ar": "قافية النون (ن)" }, "order": 1, "created_at": "2026-06-14T16:32:58.665Z", "line_count": 4, "poet": { "id": 46, "name_en": "Umm-Ghaylan-bint-Jarir", "name_ar": "أم غيلان بنت جرير", "era": { "id": 1, "name_en": "pre-islamic-era", "name_ar": "العصر الجاهلي" }, "country": null, "gender": "female", "created_at": "2026-06-14T16:32:57.634Z", "poem_count": 1 } },
                    { "id": 76, "name": "بثابت بن جابر بن سفيان", "poet_id": 52, "topic": { "id": 10, "name_en": "elegy", "name_ar": "رثاء" }, "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" }, "quafia": { "id": 33, "name_en": "q-ن", "name_ar": "قافية النون (ن)" }, "order": 1, "created_at": "2026-06-14T16:32:58.665Z", "line_count": 4, "poet": { "id": 52, "name_en": "Umayma-Umm-Taabbata-Sharran", "name_ar": "أميمة أم تأبط شرا", "era": { "id": 1, "name_en": "pre-islamic-era", "name_ar": "العصر الجاهلي" }, "country": null, "gender": "female", "created_at": "2026-06-14T16:32:57.634Z", "poem_count": 2 } }
                ]
            },
            "links": { "self": "/v1/poems/1/context", "poem": "/v1/poems/1", "lines": "/v1/poems/1/lines", "poet": "/v1/poets/1", "random": "/v1/poems/random" }
        }
    },
    {
        id: "poems-endpoint-get-random-poem",
        title: "Get random poem",
        method: "GET /v1/poems/random or /poems/random",
        optParams: "limit, poetId, era, country, gender, quafia, sea, topic, poemType and q.",
        exampleRequest: "/v1/poems/random?gender=female&limit=1 or /poems/random?gender=female&limit=1",
        response: {
            "status": "success",
            "data": {
                "poem": {
                    "id": 828,
                    "name": "مذ غبت عني أخذت الروح مني إذ",
                    "poet_id": 154,
                    "topic": { "id": 14, "name_en": "longing", "name_ar": "شوق" },
                    "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" },
                    "sea": null,
                    "quafia": { "id": 16, "name_en": "q-د", "name_ar": "قافية الدال (د)" },
                    "order": 66,
                    "created_at": "2026-06-14T16:32:58.733Z",
                    "line_count": 8,
                    "poet": {
                        "id": 154,
                        "name_en": "Maryana-Marrash",
                        "name_ar": "مريانا مراش",
                        "era": { "id": 11, "name_en": "new", "name_ar": "العصر الحديث" },
                        "country": { "id": 10, "name_en": "syria", "name_ar": "سوريا" },
                        "gender": "female",
                        "created_at": "2026-06-14T16:32:57.634Z",
                        "poem_count": 82
                    }
                },
                "lines": [
                    { "id": 22479, "content": "مذ غبت عني أخذت الروح مني إذ", "content_nd": "مذ غبت عني أخذت الروح مني إذ", "line_type": 3, "order": 1, "created_at": "2026-06-14T16:33:32.850Z" }
                ]
            },
            "links": { "self": "/v1/poems/random?gender=female", "poem": "/v1/poems/828", "lines": "/v1/poems/828/lines", "context": "/v1/poems/828/context", "poet": "/v1/poets/154" },
            "meta": { "filters": { "gender": "female" } }
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

export const generatePoemsHtml = () => {
    return `
            <div id="poems-endpoint" class="max-w-5xl mx-auto p-4 md:p-6 font-sans text-slate-800">
                <h4 id="poems-endpoint-title" class="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-2">Poems Endpoints</h4>
                <p id="poems-endpoint-explanation" class="text-sm text-slate-600 mb-6 leading-relaxed">
                    Access and query individual verses from a massive corpus of more than 3 million lines. Supports line-type filtering alongside a specialized diacritic-stripped search fallback mechanism when no diacritics are provided.
                </p>
                <div class="space-y-3">
                    ${endpointsConfig.map(config => generateEndpointHtml(config)).join('')}
                </div>
            </div>
    `;
};