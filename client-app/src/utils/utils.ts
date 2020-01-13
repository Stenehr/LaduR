import { isRequired } from 'revalidate';

export function customIsRequired(field: string) {
    return isRequired({ message: `${field} on kohustuslik`});
}

export function validationMessage(text: string): { message: string } {
    return { message: text };
}