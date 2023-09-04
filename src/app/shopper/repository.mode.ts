import { Shopper } from "./shopper.model";
import { dataSource } from "./dataSource.model";

export class ShopperRepository{
    private dataSource:dataSource
    private shoppers: Shopper[]

    constructor(){
        this.dataSource = new dataSource()
        this.shoppers = new Array<Shopper>()
        this.dataSource.getShopper().forEach(s=>this.shoppers.push(s))
    }

    getShopper(){
        return this.shoppers
    }

    addShopper(shopper:Shopper){
        this.shoppers.push(shopper)
    }
}