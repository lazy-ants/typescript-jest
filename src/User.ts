interface AdditionalDataInterface {
    house: boolean;
    car: boolean;
}

export class User {
    _name: string;
    _age: number;
    _email: string;
    _additionalData: AdditionalDataInterface;

    constructor() {
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get additionalData() {
        return this._additionalData;
    }

    set additionalData(additionalData) {
        this._additionalData = additionalData;
    }
}

