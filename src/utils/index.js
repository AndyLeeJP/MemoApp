import { format } from 'date-fns';

export function dataToString(date) {
    if( !date) { return '';}
    return format(date, 'yyyy-MM-dd HH:mm');
}
