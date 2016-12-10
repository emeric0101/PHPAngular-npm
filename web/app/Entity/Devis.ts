import { Model } from "phpangular/Entity/AEntity";
import {User } from "./User";
import {Reservation } from "./Reservation";
export class Devis extends Model {
	protected name = "Devis";
  		private devis :any;
		getDevis() : any {
			return this.devis;
		}
      setDevis(v : any)  {
          this.setValue('devis', v);
      }
  		private price :number;
		getPrice() : number {
			return this.price;
		}
      setPrice(v : number)  {
          this.setValue('price', v);
      }
  		private owner :User = null;
		getOwner() : User {
			return this.foreignKey('owner');
		}
      setOwner(v : User) {
          this.setValue('owner', v);
      }
  		private reservation :Reservation = null;
		getReservation() : Reservation {
			return this.foreignKeys('reservation');
		}
      setReservation(v : Reservation[]) {
          this.setValue('reservation', v);
      }

}
