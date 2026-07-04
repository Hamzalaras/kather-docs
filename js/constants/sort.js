

const BASIC_SORT = ['id', '-id', 'created_at', '-created_at'];
const ORDER_SORT = ['order', '-order'];

export const POETS_SORT = [...BASIC_SORT, 'name_en', '-name_en', 'name_ar', '-name_ar'];
export const POEMS_SORT = [...BASIC_SORT, ...ORDER_SORT, 'poet_id', '-poet_id'];
export const LINES_SORT = [...BASIC_SORT, ...ORDER_SORT, 'poem_id', 'poem_id'];