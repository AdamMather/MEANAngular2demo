import { Response } from '@angular/http';

export class Error {

    public code: number;
    public msg: String;
    public httpStatus: number;

    public static isResponseErrorModel(input: Response) {
        let isErrorModel = false;

        try {
            const json = input.json();
            if (json.code) {
                isErrorModel = true;
            }
        } catch (err) {
            isErrorModel = false;
        }

        return isErrorModel;
    }

    constructor(input, status) {
        this.code = input['code'];
        this.msg = input['msg'];
        this.httpStatus = status;
    }
}
