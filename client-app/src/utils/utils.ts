import { isRequired } from 'revalidate';

export function customIsRequired(field: string) {
    return isRequired({ message: `${field} on kohustuslik`});
}

export function validationMessage(text: string): { message: string } {
    return { message: text };
}

export function inputToDate(value: string | Date | null | undefined): Date | null | undefined {
    if (typeof value === "string") {
        return new Date(value);
    }

    return value;
}