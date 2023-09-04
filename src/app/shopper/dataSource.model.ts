import { Shopper } from "./shopper.model";

export class dataSource{
    private shoppers: Shopper[]

    constructor(){
        //shoppers list
        this.shoppers = new Array<Shopper>(
            new Shopper(1,'Weifeng','weifeng@gmail.com',1,69.99)
        )
    }

    getShopper():Shopper[]{
        return this.shoppers
    }
        
    
}