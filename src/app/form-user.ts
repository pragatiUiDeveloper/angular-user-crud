export class FormUser {
    constructor (
        public name:string,
        public email: string,
        public phone: number,
        public topic : string,
        public gender: string,
        public morningPreference :boolean,
        public eveningPreference :boolean,
        public comment: string
    ) {}
}
