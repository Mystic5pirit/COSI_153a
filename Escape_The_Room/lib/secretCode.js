class SecretCode{
    constructor(codeLength){
        this.codelength = codeLength;
        this.code = [];
    }

    addItem(item){
        if(this.codelength == this.code.length){
            this.code.shift();
        }
        this.code.push(item);
    }

    getCode(){
        return([...this.code])
    }
}