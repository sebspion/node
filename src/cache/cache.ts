import LRU, {Options} from "lru-cache";
import IPinfo from "../model/ipinfo.model";
import ASNResponse from "../model/asnResponse.model";

const cacheOptions: Options = {
    max: 100, // The maximum number of items allowed in the cache (100 items max)
    maxAge: 1000 * 60 * 60 // The maximum life of a cached item in milliseconds (1 hr)
};

export default class Cache {
    private cache: any;

    constructor(){
        this.cache = new LRU(cacheOptions);
    }

    public getIp(ip: string): IPinfo {  
        return this.cache.get(ip);
    }

    public getAsn(asn: string): ASNResponse {  
        return this.cache.get(asn);
    }

    public setIp(ip: string, data: IPinfo) {
        this.cache.set(ip, data);
    }

    public setAsn(asn: string, data: ASNResponse) {
        this.cache.set(asn, data);
    }
    
}