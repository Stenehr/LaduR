import { isRequired, createValidator } from 'revalidate';

export function customIsRequired(field: string) {
    return isRequired({ message: `${field} on kohustuslik`});
}

export function validationMessage(text: string): { message: string } {
    return { message: text };
}

export const decimalValidator = createValidator((message) => (p) => {
        if (isNaN(p)) {
            return message;
        }
    },
    (field) => `${field} peab olema arv`
)

export function inputToDate(value: string | Date | null | undefined): Date | null | undefined {
    if (typeof value === "string") {
        return new Date(value);
    }
    debugger;
    if (!value) {
        return new Date();
    }

    return value;
}