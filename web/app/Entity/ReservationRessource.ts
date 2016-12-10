import { Model } from "phpangular/Entity/AEntity";
import {Ressource } from "./Ressource";
import {Reservation } from "./Reservation";
export class ReservationRessource extends Model {
	protected name = "ReservationRessource";
  		private reservation :Ressource = null;
		getReservation() : Ressource {
			return this.foreignKey('reservation');
		}
      setReservation(v : Ressource) {
          this.setValue('reservation', v);
      }
  		private ressource :Reservation = null;
		getRessource() : Reservation {
			return this.foreignKey('ressource');
		}
      setRessource(v : Reservation) {
          this.setValue('ressource', v);
      }
  		private quantity :number;
		getQuantity() : number {
			return this.quantity;
		}
      setQuantity(v : number)  {
          this.setValue('quantity', v);
      }
  		private start :any;
		getStart() : any {
			return this.start;
		}
      setStart(v : any)  {
          this.setValue('start', v);
      }
  		private end :any;
		getEnd() : any {
			return this.end;
		}
      setEnd(v : any)  {
          this.setValue('end', v);
      }

}
