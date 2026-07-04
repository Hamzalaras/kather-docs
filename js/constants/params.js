import countries from '../meta/countries.json' with { type: 'json' };
import eras from '../meta/eras.json' with { type: 'json' };
import poemsTypes from '../meta/poemsTypes.json' with { type: 'json' };
import quawafi from '../meta/quawafi.json' with { type: 'json' };
import seas from '../meta/seas.json' with { type: 'json' };
import topics from '../meta/topics.json' with { type: 'json' };


const BASIC_SORT = ['id', '-id', 'created_at', '-created_at'];
const ORDER_SORT = ['order', '-order'];
const POETS_SORT = [...BASIC_SORT, 'name_en', '-name_en', 'name_ar', '-name_ar'];
const POEMS_SORT = [...BASIC_SORT, ...ORDER_SORT, 'poet_id', '-poet_id'];
const LINES_SORT = [...BASIC_SORT, ...ORDER_SORT, 'poem_id', '-poem_id'];

const GENDERS = ['male', 'female'];
const LINE_TYPES = [1, 2, 3];

const BASIC_POETS_FILTERS = [['sort', POETS_SORT], ['gender', GENDERS], ['country', countries], ['era', eras]];
const BASIC_POEMS_FILTERS = [['sort', POEMS_SORT], ['topic', topics], ['sea', seas], ['poemType', poemsTypes], ['quafia', quawafi]];
const POEMS_FILTERS = [...BASIC_POETS_FILTERS, ...BASIC_POEMS_FILTERS];
const BASIC_LINES_FILTERS = [['sort', LINES_SORT], ['lineType', LINE_TYPES]];
const LINES_FILTERS = [...POEMS_FILTERS, ...BASIC_LINES_FILTERS];



const POETS_PARAMS = new Map([
    ['/', new Map(BASIC_POETS_FILTERS)],
    ['/:id', new Map()],
    ['/:id/poems', new Map(BASIC_POEMS_FILTERS)],
    ['/:id/lines', new Map(BASIC_LINES_FILTERS)],
    ['/:id/stats', new Map()],
    ['/random', new Map(BASIC_POETS_FILTERS)],
]);

const POEMS_PARAMS = new Map([
    ['/', new Map(POEMS_FILTERS)],
    ['/:id', new Map()],
    ['/:id/lines', new Map(BASIC_LINES_FILTERS)],
    ['/:id/context', new Map()],
    ['/random', new Map(POEMS_FILTERS)],
]);

const LINES_PARAMS = new Map([
    ['/', new Map(LINES_FILTERS)],
    ['/:id', new Map()],
    ['/random', new Map(LINES_FILTERS)],
]);


export const ENDPOINTS_PARAMS = {
    POETS: POETS_PARAMS,
    POEMS: POEMS_PARAMS,
    LINES: LINES_PARAMS,
};