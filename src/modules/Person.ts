export default class Person {

    constructor(public name:string, public surname:string){

    }

    public getInstance():this{
        return this;

    }

}