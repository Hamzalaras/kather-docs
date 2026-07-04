
const endpointsConfig = [
    {
        id: "catalog-endpoint-get-catalog",
        title: "Get catalog",
        method: "GET /v1/catalog or /catalog",
        optParams: "None.",
        exampleRequest: "/v1/catalog or /catalog",
        response: {
            "status": "success",
            "data": {
                    "eras": [
                        {
                            "id": 1,
                            "name_ar": "العصر الجاهلي",
                            "name_en": "pre-islamic-era",
                            "aliases": [
                                "جاهلي",
                                "الجاهلي"
                            ]
                        }
                    ],
                    "countries": [
                        {
                            "id": 1,
                            "name_ar": "الإمارات",
                            "name_en": "uae",
                            "aliases": [
                                "الامارات",
                                "الإمارات العربية المتحدة",
                                "الامارات العربية المتحدة",
                                "ae"
                            ]
                        }
                    ],
                    "quawafi": [
                        {
                            "id": 1,
                            "name_ar": "قافية الألف (ا)",
                            "name_en": "q-ا",
                            "aliases": [
                                "ا",
                                "alif"
                            ]
                        }
                    ],
                    "seas": [
                        {
                            "id": 1,
                            "name_ar": "أحذ الكامل",
                            "name_en": "ahd-el-kamel",
                            "aliases": [
                                "احذ الكامل",
                                "أحذ كامل",
                                "احذ كامل",
                                "ahd al kamel",
                                "ahd al-kamel"
                            ]
                        }        
                    ],
                    "topics": [
                        {
                            "id": 1,
                            "name_ar": "ابتهال",
                            "name_en": "supplication",
                            "aliases": [
                                "ابتهال",
                                "إبتهال",
                                "دعاء",
                                "التماس",
                                "إلتماس",
                                "prayer",
                                "invocation",
                                "plea",
                                "entreaty",
                                "dua"
                            ]
                        }
                    ],
                    "poemsTypes": [
                        {
                            "id": 1,
                            "name_ar": "عمودية",
                            "name_en": "amudi",
                            "aliases": [
                                "عموديه",
                                "الشعر العمودي",
                                "شعر عمودي",
                                "العمودي",
                                "عمودي",
                                "classic",
                                "classical",
                                "traditional",
                                "al amudi",
                                "el amudi",
                                "monorhymed",
                                "vertical"
                            ]
                        }
                    ]
            },
            "meta": {
                "collections": 6,
                "counts": {
                    "eras": 11,
                    "countries": 21,
                    "quawafi": 36,
                    "seas": 65,
                    "topics": 29,
                    "poemsTypes": 4
                }
            },
            "links": {
                "self": "/v1/catalog",
                "eras": "/v1/catalog/eras",
                "countries": "/v1/catalog/countries",
                "quawafi": "/v1/catalog/quawafi",
                "seas": "/v1/catalog/seas",
                "topics": "/v1/catalog/topics"
            }
        }
    },
    {
        id: "catalog-endpoint-get-eras",
        title: "Get eras",
        method: "GET /v1/catalog/eras or /catalog/eras",
        optParams: "None.",
        exampleRequest: "/v1/catalog/eras or /catalog/eras",
        response: {
            "status": "success",
            "data": [
                {
                    "id": 1,
                    "name_ar": "العصر الجاهلي",
                    "name_en": "pre-islamic-era",
                    "aliases": [
                        "جاهلي",
                        "الجاهلي"
                    ]
                },
                {
                    "id": 2,
                    "name_ar": "العصر الإسلامي",
                    "name_en": "islamic-era",
                    "aliases": [
                        "العصر الإسلامي",
                        "إسلامي",
                        "اسلامي",
                        "الإسلامي",
                        "الاسلامي"
                    ]
                },
                {
                    "id": 3,
                    "name_ar": "العصر العباسي",
                    "name_en": "abbasid-era",
                    "aliases": [
                        "عباسي",
                        "العباسي"
                    ]
                },
                {
                    "id": 4,
                    "name_ar": "العصر الأيوبي",
                    "name_en": "ayubi-era",
                    "aliases": [
                        "العصر الايوبي",
                        "أيوبي",
                        "ايوبي",
                        "الأيوبي",
                        "الايوبي"
                    ]
                },
                {
                    "id": 5,
                    "name_ar": "العصر العثماني",
                    "name_en": "ottoman-era",
                    "aliases": [
                        "عثماني",
                        "العثماني"
                    ]
                },
                {
                    "id": 6,
                    "name_ar": "عصر المخضرمون",
                    "name_en": "veteran-era",
                    "aliases": [
                        "مخضرمون",
                        "المخضرمون",
                        "عصر المخضرمين",
                        "مخضرمين",
                        "المخضرمين"
                    ]
                },
                {
                    "id": 7,
                    "name_ar": "العصر الأموي",
                    "name_en": "umayyad-era",
                    "aliases": [
                        "العصر الاموي",
                        "أموي",
                        "اموي",
                        "الأموي",
                        "الاموي"
                    ]
                },
                {
                    "id": 8,
                    "name_ar": "العصر الأندلسي",
                    "name_en": "andalusian-era",
                    "aliases": [
                        "العصر الاندلسي",
                        "أندلسي",
                        "اندلسي",
                        "الأندلسي",
                        "الاندلسي"
                    ]
                },
                {
                    "id": 9,
                    "name_ar": "العصر المملوكي",
                    "name_en": "mamluk-era",
                    "aliases": [
                        "مملوكي",
                        "المملوكي"
                    ]
                },
                {
                    "id": 10,
                    "name_ar": "العصر الفاطمي",
                    "name_en": "fatimi-era",
                    "aliases": [
                        "فاطمي",
                        "الفاطمي"
                    ]
                },
                {
                    "id": 11,
                    "name_ar": "العصر الحديث",
                    "name_en": "new",
                    "aliases": [
                        "modern-era",
                        "حديث",
                        "الحديث"
                    ]
                }
            ],
            "meta": {
                "collection": "eras",
                "count": 11
            },
            "links": {
                "self": "/v1/catalog/eras",
                "collection": "/v1/catalog"
            }
        }
    },
    {
        id: "catalog-endpoint-get-countries",
        title: "Get countries",
        method: "GET /v1/catalog/countries or /catalog/countries",
        optParams: "None.",
        exampleRequest: "/v1/catalog/countries or /catalog/countries",
        response: {
            "status": "success",
            "data": [
                {
                    "id": 1,
                    "name_ar": "الإمارات",
                    "name_en": "uae",
                    "aliases": [
                        "الامارات",
                        "الإمارات العربية المتحدة",
                        "الامارات العربية المتحدة",
                        "ae"
                    ]
                },
                {
                    "id": 2,
                    "name_ar": "البحرين",
                    "name_en": "bahrain",
                    "aliases": [
                        "بحرين",
                        "مملكة البحرين",
                        "bh"
                    ]
                },
                {
                    "id": 3,
                    "name_ar": "الجزائر",
                    "name_en": "algeria",
                    "aliases": [
                        "جزائر",
                        "الجمهورية الجزائرية",
                        "dz"
                    ]
                },
                {
                    "id": 4,
                    "name_ar": "السعودية",
                    "name_en": "arabia",
                    "aliases": [
                        "سعودية",
                        "المملكة العربية السعودية",
                        "sa"
                    ]
                },
                {
                    "id": 5,
                    "name_ar": "السودان",
                    "name_en": "sudan",
                    "aliases": [
                        "سودان",
                        "جمهورية السودان",
                        "sd"
                    ]
                },
                {
                    "id": 6,
                    "name_ar": "العراق",
                    "name_en": "iraq",
                    "aliases": [
                        "عراق",
                        "جمهورية العراق",
                        "iq"
                    ]
                },
                {
                    "id": 7,
                    "name_ar": "المغرب",
                    "name_en": "morocco",
                    "aliases": [
                        "مغرب",
                        "المملكة المغربية",
                        "ma"
                    ]
                },
                {
                    "id": 8,
                    "name_ar": "اليمن",
                    "name_en": "yemen",
                    "aliases": [
                        "يمن",
                        "الجمهورية اليمنية",
                        "ye"
                    ]
                },
                {
                    "id": 9,
                    "name_ar": "تونس",
                    "name_en": "tunisia",
                    "aliases": [
                        "التونسية",
                        "الجمهورية التونسية",
                        "tn"
                    ]
                },
                {
                    "id": 10,
                    "name_ar": "سوريا",
                    "name_en": "syria",
                    "aliases": [
                        "سورية",
                        "الجمهورية العربية السورية",
                        "sy"
                    ]
                },
                {
                    "id": 11,
                    "name_ar": "عمان",
                    "name_en": "oman",
                    "aliases": [
                        "عُمان",
                        "سلطنة عمان",
                        "om"
                    ]
                },
                {
                    "id": 12,
                    "name_ar": "فلسطين",
                    "name_en": "palestine",
                    "aliases": [
                        "دولة فلسطين",
                        "ps"
                    ]
                },
                {
                    "id": 13,
                    "name_ar": "لبنان",
                    "name_en": "lebanon",
                    "aliases": [
                        "الجمهورية اللبنانية",
                        "lb"
                    ]
                },
                {
                    "id": 14,
                    "name_ar": "ليبيا",
                    "name_en": "libya",
                    "aliases": [
                        "الدولة الليبية",
                        "ly"
                    ]
                },
                {
                    "id": 15,
                    "name_ar": "مصر",
                    "name_en": "egypt",
                    "aliases": [
                        "جمهورية مصر العربية",
                        "eg"
                    ]
                },
                {
                    "id": 16,
                    "name_ar": "الأردن",
                    "name_en": "jordan",
                    "aliases": [
                        "الاردن",
                        "أردن",
                        "اردن",
                        "المملكة الأردنية الهاشمية",
                        "jo"
                    ]
                },
                {
                    "id": 17,
                    "name_ar": "الكويت",
                    "name_en": "kuwait",
                    "aliases": [
                        "كويت",
                        "دولة الكويت",
                        "kw"
                    ]
                },
                {
                    "id": 18,
                    "name_ar": "قطر",
                    "name_en": "qatar",
                    "aliases": [
                        "دولة قطر",
                        "qa"
                    ]
                },
                {
                    "id": 19,
                    "name_ar": "موريتانيا",
                    "name_en": "mauritania",
                    "aliases": [
                        "الجمهورية الإسلامية الموريتانية",
                        "mr"
                    ]
                },
                {
                    "id": 20,
                    "name_ar": "الصومال",
                    "name_en": "somalia",
                    "aliases": [
                        "صومال",
                        "جمهورية الصومال الفيدرالية",
                        "so"
                    ]
                },
                {
                    "id": 21,
                    "name_ar": "السنغال",
                    "name_en": "senegal",
                    "aliases": [
                        "سنغال",
                        "جمهورية السنغال",
                        "sn"
                    ]
                }
            ],
            "meta": {
                "collection": "countries",
                "count": 21
            },
            "links": {
                "self": "/v1/catalog/countries",
                "collection": "/v1/catalog"
            }
        }
    },
    {
        id: "catalog-endpoint-get-quawafi",
        title: "Get quawafi",
        method: "GET /v1/catalog/quawafi or /catalog/quawafi",
        optParams: "None.",
        exampleRequest: "/v1/catalog/quawafi or /catalog/quawafi",
        response: {
            "status": "success",
            "data": [
                {
                    "id": 1,
                    "name_ar": "قافية الألف (ا)",
                    "name_en": "q-ا",
                    "aliases": [
                        "ا",
                        "alif"
                    ]
                },
                {
                    "id": 2,
                    "name_ar": "قافية ألف الهمزة (أ)",
                    "name_en": "q-أ",
                    "aliases": [
                        "أ",
                        "alif hamza"
                    ]
                },
                {
                    "id": 3,
                    "name_ar": "قافية الألف (إ)",
                    "name_en": "q-إ",
                    "aliases": [
                        "إ",
                        "alif hamza kasra"
                    ]
                },
                {
                    "id": 4,
                    "name_ar": "قافية ألف المدة (آ)",
                    "name_en": "q-آ",
                    "aliases": [
                        "آ",
                        "alif madda"
                    ]
                },
                {
                    "id": 5,
                    "name_ar": "قافية الهمزة (ء)",
                    "name_en": "q-ء",
                    "aliases": [
                        "ء",
                        "hamza"
                    ]
                },
                {
                    "id": 6,
                    "name_ar": "قافية ياء همزة (ئ)",
                    "name_en": "q-ئ",
                    "aliases": [
                        "ئ",
                        "hamza 'ala ya"
                    ]
                },
                {
                    "id": 7,
                    "name_ar": "قافية واو همزة (ؤ)",
                    "name_en": "q-ؤ",
                    "aliases": [
                        "ؤ",
                        "hamza 'ala waw"
                    ]
                },
                {
                    "id": 8,
                    "name_ar": "قافية الياء (ى)",
                    "name_en": "q-ى",
                    "aliases": [
                        "ى",
                        "alif maqsura"
                    ]
                },
                {
                    "id": 9,
                    "name_ar": "قافية الباء (ب)",
                    "name_en": "q-ب",
                    "aliases": [
                        "ب",
                        "baa"
                    ]
                },
                {
                    "id": 10,
                    "name_ar": "قافية التاء (ت)",
                    "name_en": "q-ت",
                    "aliases": [
                        "ت",
                        "taa"
                    ]
                },
                {
                    "id": 11,
                    "name_ar": "قافية التاء المربوطة (ة)",
                    "name_en": "q-ة",
                    "aliases": [
                        "ة",
                        "taa marbuta"
                    ]
                },
                {
                    "id": 12,
                    "name_ar": "قافية الثاء (ث)",
                    "name_en": "q-ث",
                    "aliases": [
                        "ث",
                        "thaa"
                    ]
                },
                {
                    "id": 13,
                    "name_ar": "قافية الجيم (ج)",
                    "name_en": "q-ج",
                    "aliases": [
                        "ج",
                        "jeem"
                    ]
                },
                {
                    "id": 14,
                    "name_ar": "قافية الحاء (ح)",
                    "name_en": "q-ح",
                    "aliases": [
                        "ح",
                        "haa"
                    ]
                },
                {
                    "id": 15,
                    "name_ar": "قافية الخاء (خ)",
                    "name_en": "q-خ",
                    "aliases": [
                        "خ",
                        "khaa"
                    ]
                },
                {
                    "id": 16,
                    "name_ar": "قافية الدال (د)",
                    "name_en": "q-د",
                    "aliases": [
                        "د",
                        "daal"
                    ]
                },
                {
                    "id": 17,
                    "name_ar": "قافية الذال (ذ)",
                    "name_en": "q-ذ",
                    "aliases": [
                        "ذ",
                        "thaal"
                    ]
                },
                {
                    "id": 18,
                    "name_ar": "قافية الراء (ر)",
                    "name_en": "q-ر",
                    "aliases": [
                        "ر",
                        "raa"
                    ]
                },
                {
                    "id": 19,
                    "name_ar": "قافية الزاى (ز)",
                    "name_en": "q-ز",
                    "aliases": [
                        "ز",
                        "zaay"
                    ]
                },
                {
                    "id": 20,
                    "name_ar": "قافية الشين (ش)",
                    "name_en": "q-ش",
                    "aliases": [
                        "ش",
                        "sheen"
                    ]
                },
                {
                    "id": 21,
                    "name_ar": "قافية السين (س)",
                    "name_en": "q-س",
                    "aliases": [
                        "س",
                        "seen"
                    ]
                },
                {
                    "id": 22,
                    "name_ar": "قافية الصاد (ص)",
                    "name_en": "q-ص",
                    "aliases": [
                        "ص",
                        "saad"
                    ]
                },
                {
                    "id": 23,
                    "name_ar": "قافية الضاد (ض)",
                    "name_en": "q-ض",
                    "aliases": [
                        "ض",
                        "daad"
                    ]
                },
                {
                    "id": 24,
                    "name_ar": "قافية الطاء (ط)",
                    "name_en": "q-ط",
                    "aliases": [
                        "ط",
                        "taa-strident"
                    ]
                },
                {
                    "id": 25,
                    "name_ar": "قافية الظاء (ظ)",
                    "name_en": "q-ظ",
                    "aliases": [
                        "ظ",
                        "zaa"
                    ]
                },
                {
                    "id": 26,
                    "name_ar": "قافية العين (ع)",
                    "name_en": "q-ع",
                    "aliases": [
                        "ع",
                        "ayn"
                    ]
                },
                {
                    "id": 27,
                    "name_ar": "قافية الغين (غ)",
                    "name_en": "q-غ",
                    "aliases": [
                        "غ",
                        "ghayn"
                    ]
                },
                {
                    "id": 28,
                    "name_ar": "قافية الفاء (ف)",
                    "name_en": "q-ف",
                    "aliases": [
                        "ف",
                        "faa"
                    ]
                },
                {
                    "id": 29,
                    "name_ar": "قافية القاف (ق)",
                    "name_en": "q-ق",
                    "aliases": [
                        "ق",
                        "qaaf"
                    ]
                },
                {
                    "id": 30,
                    "name_ar": "قافية الكاف (ك)",
                    "name_en": "q-ك",
                    "aliases": [
                        "ك",
                        "kaaf"
                    ]
                },
                {
                    "id": 31,
                    "name_ar": "قافية اللام (ل)",
                    "name_en": "q-ل",
                    "aliases": [
                        "ل",
                        "laam"
                    ]
                },
                {
                    "id": 32,
                    "name_ar": "قافية الميم (م)",
                    "name_en": "q-م",
                    "aliases": [
                        "م",
                        "meem"
                    ]
                },
                {
                    "id": 33,
                    "name_ar": "قافية النون (ن)",
                    "name_en": "q-ن",
                    "aliases": [
                        "ن",
                        "noon"
                    ]
                },
                {
                    "id": 34,
                    "name_ar": "قافية الهاء (ه)",
                    "name_en": "q-ه",
                    "aliases": [
                        "ه",
                        "haa-soft"
                    ]
                },
                {
                    "id": 35,
                    "name_ar": "قافية الواو (و)",
                    "name_en": "q-و",
                    "aliases": [
                        "و",
                        "waw"
                    ]
                },
                {
                    "id": 36,
                    "name_ar": "قافية الياء (ي)",
                    "name_en": "q-ي",
                    "aliases": [
                        "ي",
                        "yaa"
                    ]
                }
            ],
            "meta": {
                "collection": "quawafi",
                "count": 36
            },
            "links": {
                "self": "/v1/catalog/quawafi",
                "collection": "/v1/catalog"
            }
        }
    },
    {
        id: "catalog-endpoint-get-seas",
        title: "Get seas",
        method: "GET /v1/catalog/seas or /catalog/seas",
        optParams: "None.",
        exampleRequest: "/v1/catalog/seas or /catalog/seas",
        response: {
            "status": "success",
            "data": [
                {
                    "id": 1,
                    "name_ar": "أحذ الكامل",
                    "name_en": "ahd-el-kamel",
                    "aliases": [
                        "احذ الكامل",
                        "أحذ كامل",
                        "احذ كامل",
                        "ahd al kamel",
                        "ahd al-kamel"
                    ]
                },
                {
                    "id": 2,
                    "name_ar": "أحذ المديد",
                    "name_en": "ahd-el-madid",
                    "aliases": [
                        "احذ المديد",
                        "أحذ مديد",
                        "احذ مديد",
                        "ahd al madid",
                        "ahd al-madid"
                    ]
                },
                {
                    "id": 3,
                    "name_ar": "أحذ الوافر",
                    "name_en": "ahd-el-wafer",
                    "aliases": [
                        "احذ الوافر",
                        "أحذ وافر",
                        "احذ وافر",
                        "ahd al wafer",
                        "ahd al-wafer"
                    ]
                },
                {
                    "id": 4,
                    "name_ar": "البسيط",
                    "name_en": "bassit",
                    "aliases": [
                        "بسيط",
                        "بحر البسيط",
                        "al-bassit",
                        "al bassit",
                        "bahr al-basit"
                    ]
                },
                {
                    "id": 5,
                    "name_ar": "التفعيله",
                    "name_en": "el-taf3ila",
                    "aliases": [
                        "التفعيلية",
                        "التفعلة",
                        "تفعيلة",
                        "al-taf'ila",
                        "al tafila",
                        "tafeela"
                    ]
                },
                {
                    "id": 6,
                    "name_ar": "الخبب",
                    "name_en": "el-khbb",
                    "aliases": [
                        "خبب",
                        "بحر الخبب",
                        "al-khabab",
                        "al khabab",
                        "khabb"
                    ]
                },
                {
                    "id": 7,
                    "name_ar": "الخفيف",
                    "name_en": "el-khafif",
                    "aliases": [
                        "خفيف",
                        "بحر الخفيف",
                        "al-khafif",
                        "al khafif",
                        "bahr al-khafif"
                    ]
                },
                {
                    "id": 8,
                    "name_ar": "الدوبيت",
                    "name_en": "el-dobit",
                    "aliases": [
                        "دوبيت",
                        "بحر الدوبيت",
                        "al-dobait",
                        "al dobait",
                        "dubait"
                    ]
                },
                {
                    "id": 9,
                    "name_ar": "الرجز",
                    "name_en": "el-rijz",
                    "aliases": [
                        "رجز",
                        "بحر الرجز",
                        "al-rajaz",
                        "al rajaz",
                        "bahr al-rajaz"
                    ]
                },
                {
                    "id": 10,
                    "name_ar": "الرمل",
                    "name_en": "el-raml",
                    "aliases": [
                        "رمل",
                        "بحر الرمل",
                        "al-ramal",
                        "al ramal",
                        "bahr al-raml"
                    ]
                },
                {
                    "id": 11,
                    "name_ar": "السريع",
                    "name_en": "el-sari3",
                    "aliases": [
                        "سريع",
                        "بحر السريع",
                        "al-sari'",
                        "al sari",
                        "bahr al-sari"
                    ]
                },
                {
                    "id": 12,
                    "name_ar": "السلسلة",
                    "name_en": "el-silsila",
                    "aliases": [
                        "سلسلة",
                        "بحر السلسلة",
                        "al-silsilah",
                        "al silsila"
                    ]
                },
                {
                    "id": 13,
                    "name_ar": "الطويل",
                    "name_en": "el-tawil",
                    "aliases": [
                        "طويل",
                        "بحر الطويل",
                        "al-tawil",
                        "al tawil",
                        "bahr al-tawil"
                    ]
                },
                {
                    "id": 14,
                    "name_ar": "القوما",
                    "name_en": "el-gouma",
                    "aliases": [
                        "قوما",
                        "شعر القوما",
                        "al-quma",
                        "al quma"
                    ]
                },
                {
                    "id": 15,
                    "name_ar": "الكامل",
                    "name_en": "el-kamel",
                    "aliases": [
                        "كامل",
                        "بحر الكامل",
                        "al-kamil",
                        "al kamil",
                        "bahr al-kamil"
                    ]
                },
                {
                    "id": 16,
                    "name_ar": "الكامل المقطوع",
                    "name_en": "el-kamel-elma9tou3",
                    "aliases": [
                        "كامل مقطوع",
                        "الكامل المقطوع",
                        "al-kamil al-maqtu'",
                        "al kamil al maqtu"
                    ]
                },
                {
                    "id": 17,
                    "name_ar": "المتدارك",
                    "name_en": "el-motaderick",
                    "aliases": [
                        "متدارك",
                        "بحر المتدارك",
                        "al-mutadarik",
                        "al mutadarik",
                        "bahr al-mutadarak"
                    ]
                },
                {
                    "id": 18,
                    "name_ar": "المتدارك المنهوك",
                    "name_en": "el-motaderick-el-manhouk",
                    "aliases": [
                        "متدارك منهوك",
                        "المتدارك المنهوك",
                        "al-mutadarik al-manhuk",
                        "al mutadarik al manhuk"
                    ]
                },
                {
                    "id": 19,
                    "name_ar": "المتقارب",
                    "name_en": "el-mota9areb",
                    "aliases": [
                        "متقارب",
                        "بحر المتقارب",
                        "al-mutaqarib",
                        "al mutaqarib",
                        "bahr al-mutaqarib"
                    ]
                },
                {
                    "id": 20,
                    "name_ar": "المجتث",
                    "name_en": "el-mojateth",
                    "aliases": [
                        "مجتث",
                        "بحر المجتث",
                        "al-mujtath",
                        "al mujtath",
                        "bahr al-mujtath"
                    ]
                },
                {
                    "id": 21,
                    "name_ar": "المديد",
                    "name_en": "el-madid",
                    "aliases": [
                        "مديد",
                        "بحر المديد",
                        "al-madid",
                        "al madid",
                        "bahr al-madid"
                    ]
                },
                {
                    "id": 22,
                    "name_ar": "المضارع",
                    "name_en": "el-modare3",
                    "aliases": [
                        "مضارع",
                        "بحر المضارع",
                        "al-mudari'",
                        "al mudari",
                        "bahr al-mudari"
                    ]
                },
                {
                    "id": 23,
                    "name_ar": "المقتضب",
                    "name_en": "el-mo9tadeb",
                    "aliases": [
                        "مقتضب",
                        "بحر المقتضب",
                        "al-muqtadab",
                        "al muqtadab",
                        "bahr al-muqtadab"
                    ]
                },
                {
                    "id": 24,
                    "name_ar": "المنسرح",
                    "name_en": "el-monsareh",
                    "aliases": [
                        "منسرح",
                        "بحر المنسرح",
                        "al-munsarih",
                        "al munsarih",
                        "bahr al-munsarih"
                    ]
                },
                {
                    "id": 25,
                    "name_ar": "المواليا",
                    "name_en": "el-moualia",
                    "aliases": [
                        "مواليا",
                        "شعر المواليا",
                        "al-mawaliya",
                        "al mawaliya",
                        "mawalya"
                    ]
                },
                {
                    "id": 26,
                    "name_ar": "الهزج",
                    "name_en": "el-hazj",
                    "aliases": [
                        "هزج",
                        "بحر الهزج",
                        "al-hazaj",
                        "al hazaj",
                        "bahr al-hazaj"
                    ]
                },
                {
                    "id": 27,
                    "name_ar": "الوافر",
                    "name_en": "el-wafer",
                    "aliases": [
                        "وافر",
                        "بحر الوافر",
                        "al-wafir",
                        "al wafir",
                        "bahr al-wafir"
                    ]
                },
                {
                    "id": 28,
                    "name_ar": "تفعيلة الرجز",
                    "name_en": "taf3ila-el-rijz",
                    "aliases": [
                        "تفعيلة رجز",
                        "تفعيلية الرجز",
                        "taf'ilat al-rajaz",
                        "tafilat al rajaz"
                    ]
                },
                {
                    "id": 29,
                    "name_ar": "تفعيلة الرمل",
                    "name_en": "taf3ila-el-ramel",
                    "aliases": [
                        "تفعيلة رمل",
                        "تفعيلية الرمل",
                        "taf'ilat al-ramal",
                        "tafilat al ramal"
                    ]
                },
                {
                    "id": 30,
                    "name_ar": "تفعيلة الكامل",
                    "name_en": "taf3ila-el-kamel",
                    "aliases": [
                        "تفعيلة كامل",
                        "تفعيلية الكامل",
                        "taf'ilat al-kamil",
                        "tafilat al kamil"
                    ]
                },
                {
                    "id": 31,
                    "name_ar": "تفعيلة المتقارب",
                    "name_en": "taf3ila-el-mota9areb",
                    "aliases": [
                        "تفعيلة متقارب",
                        "تفعيلية المتقارب",
                        "taf'ilat al-mutaqarib",
                        "tafilat al mutaqarib"
                    ]
                },
                {
                    "id": 32,
                    "name_ar": "مجزوء البسيط",
                    "name_en": "majzoua-el-bassit",
                    "aliases": [
                        "مجزوء بسيط",
                        "majzu al-basit",
                        "majzu al-bassit",
                        "majzoo al basit"
                    ]
                },
                {
                    "id": 33,
                    "name_ar": "مجزوء الخفيف",
                    "name_en": "majzoua-el-khafif",
                    "aliases": [
                        "مجزوء خفيف",
                        "majzu al-khafif",
                        "majzoo al khafif"
                    ]
                },
                {
                    "id": 34,
                    "name_ar": "مجزوء الدوبيت",
                    "name_en": "majzoua-el-dobit",
                    "aliases": [
                        "مجزوء دوبيت",
                        "majzu al-dobait",
                        "majzoo al dobait"
                    ]
                },
                {
                    "id": 35,
                    "name_ar": "مجزوء الرجز",
                    "name_en": "majzoua-el-rijz",
                    "aliases": [
                        "مجزوء رجز",
                        "majzu al-rajaz",
                        "majzoo al rajaz"
                    ]
                },
                {
                    "id": 36,
                    "name_ar": "مجزوء الرمل",
                    "name_en": "majzoua-el-ramel",
                    "aliases": [
                        "مجزوء رمل",
                        "majzu al-ramal",
                        "majzoo al ramal"
                    ]
                },
                {
                    "id": 37,
                    "name_ar": "مجزوء السريع",
                    "name_en": "majzoua-el-sari3",
                    "aliases": [
                        "مجزوء سريع",
                        "majzu al-sari'",
                        "majzoo al sari"
                    ]
                },
                {
                    "id": 38,
                    "name_ar": "مجزوء الطويل",
                    "name_en": "majzoua-el-tawil",
                    "aliases": [
                        "مجزوء طويل",
                        "majzu al-tawil",
                        "majzoo al tawil"
                    ]
                },
                {
                    "id": 39,
                    "name_ar": "مجزوء الكامل",
                    "name_en": "majzoua-el-kamel",
                    "aliases": [
                        "مجزوء كامل",
                        "majzu al-kamil",
                        "majzoo al kamil"
                    ]
                },
                {
                    "id": 40,
                    "name_ar": "مجزوء المتدارك",
                    "name_en": "majzoua-el-motaderick",
                    "aliases": [
                        "مجزوء متدارك",
                        "majzu al-mutadarik",
                        "majzoo al mutadarik"
                    ]
                },
                {
                    "id": 41,
                    "name_ar": "مجزوء المتقارب",
                    "name_en": "majzoua-el-mota9areb",
                    "aliases": [
                        "مجزوء متقارب",
                        "majzu al-mutaqarib",
                        "majzoo al mutaqarib"
                    ]
                },
                {
                    "id": 42,
                    "name_ar": "مجزوء المجتث",
                    "name_en": "majzoua-el-mojateth",
                    "aliases": [
                        "مجزوء مجتث",
                        "majzu al-mujtath",
                        "majzoo al mujtath"
                    ]
                },
                {
                    "id": 43,
                    "name_ar": "مجزوء المديد",
                    "name_en": "majzoua-el-madid",
                    "aliases": [
                        "مجزوء مديد",
                        "majzu al-madid",
                        "majzoo al madid"
                    ]
                },
                {
                    "id": 44,
                    "name_ar": "مجزوء المقتضب",
                    "name_en": "majzoua-el-mo9tadeb",
                    "aliases": [
                        "مجزوء مقتضب",
                        "majzu al-muqtadab",
                        "majzoo al muqtadab"
                    ]
                },
                {
                    "id": 45,
                    "name_ar": "مجزوء المنسرح",
                    "name_en": "majzoua-el-monsareh",
                    "aliases": [
                        "مجزوء منسرح",
                        "majzu al-munsarih",
                        "majzoo al munsarih"
                    ]
                },
                {
                    "id": 46,
                    "name_ar": "مجزوء المواليا",
                    "name_en": "majzoua-el-moualia",
                    "aliases": [
                        "مجزوء موالية",
                        "majzu al-mawaliya",
                        "majzoo al mawaliya"
                    ]
                },
                {
                    "id": 47,
                    "name_ar": "مجزوء الهزج",
                    "name_en": "majzoua-el-hazj",
                    "aliases": [
                        "مجزوء هزج",
                        "majzu al-hazaj",
                        "majzoo al hazaj"
                    ]
                },
                {
                    "id": 48,
                    "name_ar": "مجزوء الوافر",
                    "name_en": "majzoua-el-wafer",
                    "aliases": [
                        "مجزوء وافر",
                        "majzu al-wafir",
                        "majzoo al wafir"
                    ]
                },
                {
                    "id": 49,
                    "name_ar": "مجزوء موشح",
                    "name_en": "majzoua-el-mouchah",
                    "aliases": [
                        "مجزوء الموشح",
                        "majzu al-muwashah",
                        "majzoo al muwashah"
                    ]
                },
                {
                    "id": 50,
                    "name_ar": "مخلع البسيط",
                    "name_en": "mkhla3-el-bassit",
                    "aliases": [
                        "مخلع بسيط",
                        "mukhalla' al-basit",
                        "mukhalla al basit"
                    ]
                },
                {
                    "id": 51,
                    "name_ar": "مخلع الرجز",
                    "name_en": "mkhla3-el-rijz",
                    "aliases": [
                        "مخلع رجز",
                        "mukhalla' al-rajaz",
                        "mukhalla al rajaz"
                    ]
                },
                {
                    "id": 52,
                    "name_ar": "مخلع الرمل",
                    "name_en": "mkhla3-el-ramel",
                    "aliases": [
                        "مخلع رمل",
                        "mukhalla' al-ramal",
                        "mukhalla al ramal"
                    ]
                },
                {
                    "id": 53,
                    "name_ar": "مخلع السريع",
                    "name_en": "mkhla3-el-sari3",
                    "aliases": [
                        "مخلع سريع",
                        "mukhalla' al-sari'",
                        "mukhalla al sari"
                    ]
                },
                {
                    "id": 54,
                    "name_ar": "مخلع الكامل",
                    "name_en": "mkhla3-el-kamel",
                    "aliases": [
                        "مخلع كامل",
                        "mukhalla' al-kamil",
                        "mukhalla al kamil"
                    ]
                },
                {
                    "id": 55,
                    "name_ar": "مخلع موشح",
                    "name_en": "mkhla3-el-mouchah",
                    "aliases": [
                        "مخلع الموشح",
                        "mukhalla' al-muwashah",
                        "mukhalla al muwashah"
                    ]
                },
                {
                    "id": 56,
                    "name_ar": "مربع البسيط",
                    "name_en": "morabe3-el-bassit",
                    "aliases": [
                        "مربع بسيط",
                        "murabba' al-basit",
                        "murabba al basit"
                    ]
                },
                {
                    "id": 57,
                    "name_ar": "مربع الرجز",
                    "name_en": "morabe3-el-rijz",
                    "aliases": [
                        "مربع رجز",
                        "murabba' al-rajaz",
                        "murabba al rajaz"
                    ]
                },
                {
                    "id": 58,
                    "name_ar": "مشطور الرجز",
                    "name_en": "machtour-el-rijz",
                    "aliases": [
                        "مشطور رجز",
                        "mashtur al-rajaz",
                        "mashtoor al rajaz"
                    ]
                },
                {
                    "id": 59,
                    "name_ar": "مشطور السريع",
                    "name_en": "machtour-el-sari3",
                    "aliases": [
                        "مشطور سريع",
                        "mashtur al-sari'",
                        "mashtoor al sari"
                    ]
                },
                {
                    "id": 60,
                    "name_ar": "مشطور الطويل",
                    "name_en": "machtour-el-tawil",
                    "aliases": [
                        "مشطور طويل",
                        "mashtur al-tawil",
                        "mashtoor al tawil"
                    ]
                },
                {
                    "id": 61,
                    "name_ar": "منهوك البسيط",
                    "name_en": "manhouk-el-bassit",
                    "aliases": [
                        "منهوك بسيط",
                        "manhuk al-basit",
                        "manhook al basit"
                    ]
                },
                {
                    "id": 62,
                    "name_ar": "منهوك الرجز",
                    "name_en": "manhouk-el-rijz",
                    "aliases": [
                        "منهوك رجز",
                        "manhuk al-rajaz",
                        "manhook al rajaz"
                    ]
                },
                {
                    "id": 63,
                    "name_ar": "منهوك الكامل",
                    "name_en": "manhouk-el-kamel",
                    "aliases": [
                        "منهوك كامل",
                        "manhuk al-kamil",
                        "manhook al kamil"
                    ]
                },
                {
                    "id": 64,
                    "name_ar": "منهوك المنسرح",
                    "name_en": "manhouk-el-monsareh",
                    "aliases": [
                        "منهوك منسرح",
                        "manhuk al-munsarih",
                        "manhook al munsarih"
                    ]
                },
                {
                    "id": 65,
                    "name_ar": "موشح",
                    "name_en": "mouchah",
                    "aliases": [
                        "الموشح",
                        "موشحات",
                        "al-muwashah",
                        "muwashah",
                        "muwashshah"
                    ]
                }
            ],
            "meta": {
                "collection": "seas",
                "count": 65
            },
            "links": {
                "self": "/v1/catalog/seas",
                "collection": "/v1/catalog"
            }
        }
    },
    {
        id: "catalog-endpoint-get-topics",
        title: "Get topics",
        method: "GET /v1/catalog/topics or /catalog/topics",
        optParams: "None.",
        exampleRequest: "/v1/catalog/topics or /catalog/topics",
        response: {
            "status": "success",
            "data": [
                {
                    "id": 1,
                    "name_ar": "ابتهال",
                    "name_en": "supplication",
                    "aliases": [
                        "ابتهال",
                        "إبتهال",
                        "دعاء",
                        "التماس",
                        "إلتماس",
                        "prayer",
                        "invocation",
                        "plea",
                        "entreaty",
                        "dua"
                    ]
                },
                {
                    "id": 2,
                    "name_ar": "اعتذار",
                    "name_en": "apology",
                    "aliases": [
                        "اعتذار",
                        "إعتذار",
                        "استعطاف",
                        "إستعطاف",
                        "ندم",
                        "طلب المسامحة",
                        "excuse",
                        "regret",
                        "contrition",
                        "forgiveness",
                        "penitence"
                    ]
                },
                {
                    "id": 3,
                    "name_ar": "الاناشيد",
                    "name_en": "anthems",
                    "aliases": [
                        "الاناشيد",
                        "الإناشيد",
                        "نشيد",
                        "إنشاد",
                        "أغنية",
                        "ترتيلة",
                        "hymns",
                        "chants",
                        "songs",
                        "marching songs",
                        "ballads"
                    ]
                },
                {
                    "id": 4,
                    "name_ar": "المعلقات",
                    "name_en": "mu'allaqat",
                    "aliases": [
                        "المعلقات",
                        "المعلّقات",
                        "معلقة",
                        "معلّقة",
                        "معلقة",
                        "hanging poems",
                        "pre-Islamic poetry",
                        "classical Arabic poems",
                        "Jahiliyyah poetry"
                    ]
                },
                {
                    "id": 5,
                    "name_ar": "جود وكرم",
                    "name_en": "generosity",
                    "aliases": [
                        "جود",
                        "كرم",
                        "سخاء",
                        "ندى",
                        "أندى",
                        "أكرم",
                        "charity",
                        "magnanimity",
                        "benevolence",
                        "munificence",
                        "liberality"
                    ]
                },
                {
                    "id": 6,
                    "name_ar": "حزينه",
                    "name_en": "sadness",
                    "aliases": [
                        "حزين",
                        "حزينة",
                        "كآبة",
                        "أسف",
                        "كدر",
                        "أسى",
                        "حزن",
                        "melancholy",
                        "sorrow",
                        "grief",
                        "depression",
                        "lament",
                        "mourning"
                    ]
                },
                {
                    "id": 7,
                    "name_ar": "حكمة",
                    "name_en": "wisdom",
                    "aliases": [
                        "حكمة",
                        "فلسفة",
                        "حكيم",
                        "معرفة",
                        "إفادة",
                        "أحكام",
                        "philosophy",
                        "prudence",
                        "insight",
                        "knowledge",
                        "aphorism"
                    ]
                },
                {
                    "id": 8,
                    "name_ar": "دينية",
                    "name_en": "religious",
                    "aliases": [
                        "دينية",
                        "روحاني",
                        "إسلامي",
                        "إيماني",
                        "تعبدي",
                        "أيماني",
                        "spiritual",
                        "sacred",
                        "devotional",
                        "Islamic",
                        "theological"
                    ]
                },
                {
                    "id": 9,
                    "name_ar": "ذم",
                    "name_en": "condemnation",
                    "aliases": [
                        "ذم",
                        "نقد",
                        "إنتقاد",
                        "انتقاد",
                        "استنكار",
                        "إستنكار",
                        "blame",
                        "criticism",
                        "denunciation",
                        "disparagement",
                        "censure"
                    ]
                },
                {
                    "id": 10,
                    "name_ar": "رثاء",
                    "name_en": "elegy",
                    "aliases": [
                        "رثاء",
                        "نعي",
                        "نعى",
                        "مراثي",
                        "حداء",
                        "رثية",
                        "lament",
                        "funeral poem",
                        "mourning",
                        "dirge",
                        "lamentation"
                    ]
                },
                {
                    "id": 11,
                    "name_ar": "رحمة",
                    "name_en": "mercy",
                    "aliases": [
                        "رحمة",
                        "عطف",
                        "شفقة",
                        "رقة",
                        "أرحام",
                        "عاطفة",
                        "compassion",
                        "kindness",
                        "sympathy",
                        "clemency",
                        "compassionate"
                    ]
                },
                {
                    "id": 12,
                    "name_ar": "رومنسيه",
                    "name_en": "romance",
                    "aliases": [
                        "رومنسي",
                        "رومنسية",
                        "حب",
                        "عاطفة",
                        "محبة",
                        "إعجاب",
                        "love",
                        "affection",
                        "courtship",
                        "romantic love",
                        "tender"
                    ]
                },
                {
                    "id": 13,
                    "name_ar": "سياسية",
                    "name_en": "political",
                    "aliases": [
                        "سياسية",
                        "سياسي",
                        "إدارة",
                        "حكم",
                        "أحكام",
                        "شؤون الدولة",
                        "governance",
                        "state affairs",
                        "political commentary",
                        "civic",
                        "statecraft"
                    ]
                },
                {
                    "id": 14,
                    "name_ar": "شوق",
                    "name_en": "longing",
                    "aliases": [
                        "شوق",
                        "حنين",
                        "إشتياق",
                        "اشتياق",
                        "ضنى",
                        "أحنان",
                        "yearning",
                        "nostalgia",
                        "desire",
                        "homesickness",
                        "wistfulness"
                    ]
                },
                {
                    "id": 15,
                    "name_ar": "صبر",
                    "name_en": "patience",
                    "aliases": [
                        "صبر",
                        "تحمل",
                        "إحتمال",
                        "احتمال",
                        "جلد",
                        "أناة",
                        "endurance",
                        "forbearance",
                        "perseverance",
                        "resignation",
                        "fortitude"
                    ]
                },
                {
                    "id": 16,
                    "name_ar": "عامه",
                    "name_en": "general",
                    "aliases": [
                        "عام",
                        "عامة",
                        "متنوع",
                        "مختلف",
                        "إختلاف",
                        "متعدد",
                        "miscellaneous",
                        "various",
                        "diverse",
                        "mixed",
                        "general purpose"
                    ]
                },
                {
                    "id": 17,
                    "name_ar": "عتاب",
                    "name_en": "reproach",
                    "aliases": [
                        "عتاب",
                        "لوم",
                        "ملامة",
                        "توبيخ",
                        "أنب",
                        "إنب",
                        "blame",
                        "censure",
                        "remonstrance",
                        "complaint",
                        "rebuke"
                    ]
                },
                {
                    "id": 18,
                    "name_ar": "عدل",
                    "name_en": "justice",
                    "aliases": [
                        "عدل",
                        "عادل",
                        "إنصاف",
                        "انصاف",
                        "حق",
                        "إستقامة",
                        "استقامة",
                        "fairness",
                        "equity",
                        "righteousness",
                        "law",
                        "impartiality"
                    ]
                },
                {
                    "id": 19,
                    "name_ar": "غزل",
                    "name_en": "ghazal",
                    "aliases": [
                        "غزل",
                        "غزلي",
                        "غزلية",
                        "هيام",
                        "نسيب",
                        "أنس",
                        "erotic poetry",
                        "love poetry",
                        "sensual poetry",
                        "amorous",
                        "flirtation"
                    ]
                },
                {
                    "id": 20,
                    "name_ar": "فراق",
                    "name_en": "parting",
                    "aliases": [
                        "فراق",
                        "إفتراق",
                        "افتراق",
                        "وداع",
                        "فراقية",
                        "توديع",
                        "separation",
                        "departure",
                        "farewell",
                        "goodbye",
                        "separation poetry"
                    ]
                },
                {
                    "id": 21,
                    "name_ar": "قصيره",
                    "name_en": "short",
                    "aliases": [
                        "قصيرة",
                        "مختصر",
                        "قليل الأبيات",
                        "موجز",
                        "أبيات",
                        "brief",
                        "concise",
                        "short form",
                        "condensed",
                        "abbreviated"
                    ]
                },
                {
                    "id": 22,
                    "name_ar": "مدح",
                    "name_en": "praise",
                    "aliases": [
                        "مدح",
                        "مديح",
                        "استحسان",
                        "إستحسان",
                        "تمجيد",
                        "أمداح",
                        "laudation",
                        "commendation",
                        "glorification",
                        "encomium",
                        "tribute"
                    ]
                },
                {
                    "id": 23,
                    "name_ar": "نصيحة",
                    "name_en": "advice",
                    "aliases": [
                        "نصيحة",
                        "موعظة",
                        "إرشاد",
                        "ارشاد",
                        "تعليم",
                        "إفادة",
                        "counsel",
                        "guidance",
                        "recommendation",
                        "exhortation",
                        "moral lesson"
                    ]
                },
                {
                    "id": 24,
                    "name_ar": "هجاء",
                    "name_en": "satire",
                    "aliases": [
                        "هجاء",
                        "هجائي",
                        "هجائية",
                        "سخرية",
                        "استهزاء",
                        "إستهزاء",
                        "mockery",
                        "ridicule",
                        "lampoon",
                        "sarcasm",
                        "invective"
                    ]
                },
                {
                    "id": 25,
                    "name_ar": "وطنيه",
                    "name_en": "patriotic",
                    "aliases": [
                        "وطني",
                        "وطنية",
                        "قومي",
                        "قومية",
                        "أوطان",
                        "حب الوطن",
                        "nationalist",
                        "patriotism",
                        "homeland",
                        "national pride",
                        "nationalism"
                    ]
                },
                {
                    "id": 26,
                    "name_ar": "فخر",
                    "name_en": "pride",
                    "aliases": [
                        "فخر",
                        "فخور",
                        "اعتزاز",
                        "إعتزاز",
                        "تفاخر",
                        "أفخار",
                        "boasting",
                        "self-glorification",
                        "arrogance",
                        "honor",
                        "nobility"
                    ]
                },
                {
                    "id": 27,
                    "name_ar": "وصف",
                    "name_en": "description",
                    "aliases": [
                        "وصف",
                        "وصفي",
                        "وصفية",
                        "تصوير",
                        "رسم",
                        "إبداع",
                        "portrayal",
                        "depiction",
                        "imagery",
                        "vivid description",
                        "descriptive"
                    ]
                },
                {
                    "id": 28,
                    "name_ar": "زهد",
                    "name_en": "asceticism",
                    "aliases": [
                        "زهد",
                        "زاهد",
                        "زاهدة",
                        "ورع",
                        "تقوى",
                        "أنسك",
                        "renunciation",
                        "piety",
                        "abstinence",
                        "monasticism",
                        "ascetic"
                    ]
                },
                {
                    "id": 29,
                    "name_ar": "حماسة",
                    "name_en": "enthusiasm",
                    "aliases": [
                        "حماسة",
                        "حماسي",
                        "حماسية",
                        "عزيمة",
                        "إقدام",
                        "أقدام",
                        "fervor",
                        "zeal",
                        "passion",
                        "excitement",
                        "ardor"
                    ]
                }
            ],
            "meta": {
                "collection": "topics",
                "count": 29
            },
            "links": {
                "self": "/v1/catalog/topics",
                "collection": "/v1/catalog"
            }
        }
    },
    {
        id: "catalog-endpoint-get-poems-types",
        title: "Get poems types",
        method: "GET /v1/catalog/poemsTypes or /catalog/poemsTypes",
        optParams: "None.",
        exampleRequest: "/v1/catalog/poemsTypes or /catalog/poemsTypes",
        response: {
            "status": "success",
            "data": [
                {
                    "id": 1,
                    "name_ar": "عمودية",
                    "name_en": "amudi",
                    "aliases": [
                        "عموديه",
                        "الشعر العمودي",
                        "شعر عمودي",
                        "العمودي",
                        "عمودي",
                        "classic",
                        "classical",
                        "traditional",
                        "al amudi",
                        "el amudi",
                        "monorhymed",
                        "vertical"
                    ]
                },
                {
                    "id": 2,
                    "name_ar": "نثرية",
                    "name_en": "prose",
                    "aliases": [
                        "النثر",
                        "نثريه",
                        "الشعر النثري",
                        "شعر نثري",
                        "النثر الشعري",
                        "نثر شعر",
                        "literary",
                        "literal"
                    ]
                },
                {
                    "id": 3,
                    "name_ar": "التفعيلة",
                    "name_en": "tafila",
                    "aliases": [
                        "تفعيله",
                        "الشعر التفعيلي",
                        "شعر التفعيلة",
                        "التفعيله",
                        "تفعيلي",
                        "free",
                        "new",
                        "modern",
                        "libre"
                    ]
                },
                {
                    "id": 4,
                    "name_ar": "مترجمة",
                    "name_en": "foreign",
                    "aliases": [
                        "المترجمة",
                        "المترجمه",
                        "مترجمه",
                        "المترجم",
                        "مترجم",
                        "translated",
                        "translation",
                        "west"
                    ]
                }
            ],
            "meta": {
                "collection": "poemsTypes",
                "count": 4
            },
            "links": {
                "self": "/v1/catalog/poemsTypes",
                "collection": "/v1/catalog"
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

export const generateCatalogHtml = () => {
    return `
        <div id="catalog-endpoint" class="max-w-5xl mx-auto p-4 md:p-6 font-sans text-slate-800">
            <h4 id="catalog-endpoint-title" class="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-2">Catalog Endpoints</h4>
            <p id="catalog-endpoint-explanation" class="text-sm text-slate-600 mb-6 leading-relaxed">
                Retrieve compact metadata taxonomies used for structured discovery and navigation. Provides unified access to 21 countries, 11 eras, 36 quawafi, 65 seas, 29 topics and 4 poems types to streamline client-side filtering.
            </p>
            <div class="space-y-3">
                ${endpointsConfig.map(config => generateEndpointHtml(config)).join('')}
            </div>
        </div>
    `;
};