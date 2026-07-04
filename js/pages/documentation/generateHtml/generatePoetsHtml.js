
const endpointsConfig = [
    {
        id: "poets-endpoint-get-poets-list",
        title: "Get poets list",
        method: "GET /v1/poets or /poets",
        optParams: "offset, limit, era, country, gender, sort, q and meta.",
        exampleRequest: "/v1/poets?limit=1 or /poets?limit=1",
        response: {
            "status": "success",
            "data": [
                {
                    "id": 1,
                    "name_en": "Um-Hakim-Al-Kharijiyya",
                    "name_ar": "أم حكيم الخارجية",
                    "era": {
                        "id": 7,
                        "name_en": "umayyad-era",
                        "name_ar": "العصر الأموي"
                    },
                    "country": null,
                    "gender": "female",
                    "created_at": "2026-06-14T16:32:57.634Z",
                    "poem_count": 2
                }
            ],
            "pagination": {
                "offset": 0,
                "page": 1,
                "limit": 1,
                "total": 2351,
                "total_pages": 2351,
                "has_more": true
            },
            "links": {
                "self": "/v1/poets?limit=1&offset=0",
                "next": "/v1/poets?limit=1&offset=1",
                "prev": null,
                "random": "/v1/poets/random"
            },
            "meta": {
                "filters": {}
            }
        }
    },
    {
        id: "poets-endpoint-get-poet-by-id",
        title: "Get poet by ID",
        method: "GET /v1/poets/:id or /poets/:id",
        optParams: "None.",
        exampleRequest: "/v1/poets/2088 or /poets/2088",
        response: {
            "status": "success",
            "data": {
                "id": 2088,
                "name_en": "Mutanabi",
                "name_ar": "المتنبي",
                "era": {
                    "id": 3,
                    "name_en": "abbasid-era",
                    "name_ar": "العصر العباسي"
                },
                "country": null,
                "gender": "male",
                "created_at": "2026-06-14T16:32:57.789Z",
                "poem_count": 323,
                "bio": "أبو الطيب المتنبي (303هـ – 354هـ / 915م – 965م)\\nهو أحمد بن الحسين بن الحسن بن عبدالصمد الجعفي الكوفي الكندي، من أعظم شعراء العرب على مر العصور، واشتهر بلقبه \"المتنبي\". ولد في الكوفة في حي يعرف بـ\"كندة\"، فنسب إليه. عرف بالشاعر الحكيم، وصاحب الحكم البليغة والأمثال السائرة والمعاني المبتكرة، حتى قيل إنه أشعر الإسلاميين.\\n\\nنشأ في الشام، ثم تنقل في بادية السماوة بين الكوفة والشام يطلب الأدب والعربية وأخبار الناس، وقال الشعر وهو صبي. ادعى النبوة في البادية، فتبعه أناس، وقبل أن ينتشر أمره قبض عليه لؤلؤ، أمير حمص ونائب الإخشيد، فسجنه حتى رجع عن دعواه وتاب.\\n\\nفي سنة 337هـ وفد على سيف الدولة الحمداني في حلب، فمدحه ونال حظوة كبيرة عنده. ثم انتقل إلى مصر ومدح كافور الإخشيدي، وطمع في ولاية منه، فلما لم يحقق له كافور مطلبه، غضب المتنبي وهجاه بأشعار شهيرة، ثم غادر مصر قاصدا العراق.\\n\\nقرأ عليه الناس ديوانه في العراق، وزار بلاد فارس فمر بأرجان، ومدح ابن العميد، وكان بينهما مساجلات أدبية. ثم انتقل إلى شيراز ومدح عضد الدولة البويهي، وعاد بعدها قاصدا بغداد ثم الكوفة. وفي طريقه إلى هناك، اعترضه فاتك بن أبي جهل الأسدي، خال ضبة بن يزيد الأسدي الذي هجاه المتنبي في قصيدته البائية المعروفة، فدار قتال بين الطرفين قتل فيه المتنبي مع ابنه محسد وغلامه مفلح، وذلك في النعمانية قرب دير العاقول على الضفة الغربية من سواد بغداد.\\n\\nخلف المتنبي ديوانا شعريا ضخما شرح شرحا وافيا، وضمن الصاحب ابن عباد مجموعة من أمثاله وحكمه في كتاب \"نخبة من أمثال المتنبي وحكمه\". وقد تنافس العلماء والكتاب قديما وحديثا في دراسته، ومن أبرز من كتب عنه:\\n\\nالجرجاني في \"الوساطة بين المتنبي وخصومه\"\\n\\nالحاتمي في \"الرسالة الموضحة في سرقات أبي الطيب وساقط شعره\"\\n\\nالبديعي في \"الصبح المنبي عن حيثية المتنبي\"\\n\\nالصاحب ابن عباد في \"الكشف عن مساوئ شعر المتنبي\"\\n\\nالثعالبي في \"ما له وما عليه\"\\n\\nالمتيم الإفريقي في \"الانتصار المنبي عن فضل المتنبي\"\\n\\nعبد الوهاب عزام في \"ذكرى أبي الطيب بعد ألف عام\"\\n\\nشفيق جبري، وطه حسين في \"مع المتنبي\" (جزآن)\\n\\nمحمد عبد المجيد، محمد مهدي علام، محمد كمال حلمي، فؤاد البستاني، محمود محمد شاكر، وزكي المحاسني في مؤلفات مستقلة تناولت حياته وشعره وفلسفته الأدبية."
            },
            "links": {
                "self": "/v1/poets/2088",
                "poems": "/v1/poets/2088/poems",
                "stats": "/v1/poets/2088/stats",
                "random": "/v1/poets/random"
            }
        }
    },
    {
        id: "poets-endpoint-get-poet-poems",
        title: "Get poet poems",
        method: "GET /v1/poets/:id/poems or /poets/:id/poems",
        optParams: "offset, limit, sort, topic, poem_type, sea, quafia and q.",
        exampleRequest: "/v1/poets/2034/poems?q=أراك عصي الدمع or /poets/2034/poems?q=أراك عصي الدمع",
        response: {
            "status": "success",
            "poet": {
                "id": 2034,
                "name_en": "abu-firas-al-hamdani",
                "name_ar": "أبو فراس الحمداني",
                "era": {
                    "id": 3,
                    "name_en": "abbasid-era",
                    "name_ar": "العصر العباسي"
                },
                "country": null,
                "gender": "male",
                "created_at": "2026-06-14T16:32:57.789Z",
                "poem_count": 53
            },
            "poems": [
                {
                    "id": 4649,
                    "name": "يا من يصد الطرف عني",
                    "poet_id": 2034,
                    "topic": { "id": 14, "name_en": "longing", "name_ar": "شوق" },
                    "type": { "id": 1, "name_en": "amudi", "name_ar": "عمودية" },
                    "sea": { "id": 13, "name_en": "el-tawil", "name_ar": "الطويل" },
                    "quafia": null,
                    "order": 22,
                    "created_at": "2026-06-14T16:33:15.299Z",
                    "line_count": 51
                }
            ],
            "pagination": { "offset": 0, "page": 1, "limit": 1, "total": 1, "total_pages": 1, "has_more": false },
            "links": { "self": "/v1/poets/2034/poems", "poet": "/v1/poets/2034", "stats": "/v1/poets/2034/stats", "random": "/v1/poems/random" }
        }
    },
    {
        id: "poets-endpoint-get-poet-stats",
        title: "Get poet stats",
        method: "GET /v1/poets/:id/stats or /poets/:id/stats",
        optParams: "None.",
        exampleRequest: "/v1/poets/2033/stats or /poets/2033/stats",
        response: {
            "status": "success",
            "data": {
                "id": 2033,
                "name_en": "yozid-bin-mouawiya",
                "name_ar": "يزيد بن معاوية",
                "era": {
                    "id": 7,
                    "name_en": "umayyad-era",
                    "name_ar": "العصر الأموي"
                },
                "country": null,
                "gender": "male",
                "created_at": "2026-06-14T16:32:58.578Z",
                "poem_count": 51,
                "poems_count": 51,
                "lines_count": 382,
                "top_topics": [
                    {
                        "name_en": "general",
                        "name_ar": "عامه",
                        "poem_count": 50
                    },
                    {
                        "name_en": "ghazal",
                        "name_ar": "غزل",
                        "poem_count": 1
                    }
                ],
                "top_seas": [
                    {
                        "name_en": "el-tawil",
                        "name_ar": "الطويل",
                        "poem_count": 23
                    },
                    {
                        "name_en": "bassit",
                        "name_ar": "البسيط",
                        "poem_count": 5
                    },
                    {
                        "name_en": "el-wafer",
                        "name_ar": "الوافر",
                        "poem_count": 4
                    },
                    {
                        "name_en": "el-kamel",
                        "name_ar": "الكامل",
                        "poem_count": 4
                    },
                    {
                        "name_en": "el-khafif",
                        "name_ar": "الخفيف",
                        "poem_count": 3
                    }
                ]
            },
            "links": {
                "self": "/v1/poets/2033/stats",
                "poet": "/v1/poets/2033",
                "poems": "/v1/poets/2033/poems"
            }
        }
    },
    {
        id: "poets-endpoint-get-random-poet",
        title: "Get random poet",
        method: "GET /v1/poets/random or /poets/random",
        optParams: "era, country, gender and q.",
        exampleRequest: "/v1/poets/random?gender=male or /poets/random?gender=male",
        response: {
            "status": "success",
            "data": {
                "id": 1549,
                "name_en": "Shabib-bin-Al-Barasa",
                "name_ar": "شبيب بن البرصاء",
                "era": {
                    "id": 7,
                    "name_en": "umayyad-era",
                    "name_ar": "العصر الأموي"
                },
                "country": null,
                "gender": "male",
                "created_at": "2026-06-14T16:32:58.375Z",
                "poem_count": 28,
                "bio": "شيب بن يزيد جمرة بن عوف بن أبي حارثة المري. شاعر إسلامي بدوي لم يحضر إلا وافدا  أو منتجعا، عنيف الهجاء، اشتهر بنسبته إلى أمه أمامة  (أو قرصافة) بنت الحارث بن عوف المري المنعوتة بالبرصاء،  لبياضها لا لبرص فيها. قيل: إن النبي صلى الله عليه وسلم هم بأن يتزوجها، أدرك إمارة عثمان في المدينة، وعده الجمحي في الطبقة الثامنة من الإسلاميين، وقال صاحب الخزانة: كان شريفا سيدا في قومه من شعراء الدولة الأموية."
            },
            "links": {
                "self": "/v1/poets/random",
                "poet": "/v1/poets/1549",
                "poems": "/v1/poets/1549/poems",
                "stats": "/v1/poets/1549/stats"
            },
            "meta": {
                "filters": {
                    "gender": "male"
                }
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

export const generatePoetsHtml = () => {
    return `
            <div id="poets-endpoint" class="max-w-5xl mx-auto p-4 md:p-6 font-sans text-slate-800">
                <h4 id="poets-endpoint-title" class="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-2">Poets Endpoints</h4>
                <p id="poets-endpoint-explanation" class="text-sm text-slate-600 mb-6 leading-relaxed">
                    Explore and query a structured registry of over 2,000 poets. These endpoints enable comprehensive discovery across historical eras, countries of origin, and genders, using fast trigram substring indexes for optimized lookups.
                </p>
                <div class="space-y-3">
                    ${endpointsConfig.map(config => generateEndpointHtml(config)).join('')}
                </div>
            </div>
    `;
};