import { isRequired } from 'revalidate';

export function customIsRequired(field: string) {
    return isRequired({ message: `${field} on kohustuslik`});
}

export function validationMessage(text: string): { message: string } {
    return { message: text };
}

export function dateToString(value: string | Date | null | undefined) {
    let dateString = "";

    if (value === undefined) {
        return value;
    }

    if (value === null) {
        return undefined;
    }

    if (typeof value === "string") {
        value = new Date(value);
    }

    return value.toISOString();
}