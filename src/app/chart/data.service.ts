import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData(): Array<number> {
    return [1,2,3,4,5,6,7]
  }
  getData2(): Array<number> {
    return [7,6,5,4,3,2,1]
  }
}
