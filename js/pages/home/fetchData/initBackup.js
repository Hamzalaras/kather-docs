const BACKUP_LINES = [
    {
        key: 1,
        content: "أَمُرُّ عَلى الدِيارِ دِيارِ لَيلى",
        content_nd: "أمر على الديار ديار ليلى",
    },
    {
        key: 2,
        content: "أُقَبِّلُ ذا الجِدارَ وَذا الجِدارَ",
        content_nd: "أقبل ذا الجدار وذا الجدار",
    },
    {
        key: 3,
        content: "إِنَّ العُيونَ الَّتي في طَرفِها حَوَرٌ",
        content_nd: "إن العيون التي في طرفها حور",
    },
    {
        key: 4,
        content: "قَتَلنَنا ثُمَّ لَم يُحيينَ قَتلانا",
        content_nd: "قتلننا ثم لم يحيين قتلانا",
    },
    {
        key: 5,
        content: "الخَيلُ وَاللَيلُ وَالبَيداءُ تَعرِفُني",
        content_nd: "الخيل والليل والبيداء تعرفني",
    },
    {
        key: 6,
        content: "وَالسَيفُ وَالرُمحُ وَالقِرطاسُ وَالقَلَمُ",
        content_nd: "والسيف والرمح والقرطاس والقلم",
    },
    {
        key: 7,
        content: "وَلَقَد ذَكَرتُكِ وَالرِماحُ نَواهِلٌ",
        content_nd: "ولقد ذكرتك والرماح نواهل",
    },
    {
        key: 8,
        content: "مِنّي وَبِيضُ الهِندِ تَقطُرُ مِن دَمي",
        content_nd: "مني وبيض الهند تقطر من دمي",
    },
    {
        key: 9,
        content: "مِكَرٍّ مِفَرٍّ مُقبِلٍ مُدبِرٍ مَعاً",
        content_nd: "مكر مفر مقبل مدبر معا",
    },
    {
        key: 10,
        content: "كَجُلمودِ صَخرٍ حَطَّهُ السَيلُ مِن عَلِ",
        content_nd: "كجلمود صخر حطه السيل من عل",
    }
];



export const initFetchedDataObj = ({ routeVal }) => {

    routeVal.depot.fetchedData = {
        usedLines: new Map(),
        unusedLines: new Map(),
        fetchId: null,
        clearOnClose: true,
    };
};


export const initBackup = ({ routeVal }) => {

    const tempArr = [...BACKUP_LINES];

    while (tempArr.length > 0) {
        const [line] = tempArr.splice(Math.floor(Math.random() * tempArr.length), 1);
        routeVal.depot.fetchedData.unusedLines.set(line.key, line);
    }
};