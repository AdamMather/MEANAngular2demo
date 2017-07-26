export class User {

    public _id: String;
    public firstName: String;
    public surname: String;
    public username: String;

    constructor(input: Object) {
        this._id = input['_id'];
        this.firstName = input['firstName'];
        this.surname = input['surname'];
        this.username = input['username'];
    }
}
