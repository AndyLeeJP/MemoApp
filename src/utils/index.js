import { format } from 'date-fns';

export function dataToString(date) {
    if( !date) { return '';}
    return format(date, 'yyyy-MM-dd HH:mm');
}

export function translateErrors(code) {
    const error = { title: 'Error', description: 'Try again later' };
    switch (code){
        case 'auth/invalid-email':
            error.description = 'the email address is not valid.'
            break;
        case 'auth/user-disabled':
            error.description = 'the user corresponding to the given email has been disabled.'
            break;
        case 'auth/user-not-found':
            error.description = 'there is no user corresponding to the given email.'
            break;
        case 'auth/wrong-password':
            error.description = 'the password is invalid for the given email, or the account corresponding to the email does not have a password set.'
            break;
        case 'auth/email-already-in-use':
            error.description = 'there already exists an account with the given email address.'
            break;
        case 'auth/operation-not-allowed':
            error.description = 'Please contact us'
            break;
        case 'auth/weak-password':
            error.description = 'the password is not strong enough.'
            break;

        default:
    }
    return error;
}


