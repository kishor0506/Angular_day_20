export class Fraudulent {
    getfraud: any;
    constructor(banned_currency:string,  limitperday:number, Neft_timing:string, bank:string, blocked_acc:number){
        this.banned_currency ="";
        this.limitperday = 0;
        this.Neft_timing="";
        this.bank="";
        this.blocked_acc=0;
    }
    banned_currency: string;
    limitperday:number=0;
    Neft_timing:string;
    bank:string;
    blocked_acc:number=0;
}


