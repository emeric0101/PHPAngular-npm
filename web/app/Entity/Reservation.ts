import { Model } from "phpangular/Entity/AEntity";
import {User } from "./User";
import {ReservationRessource } from "./ReservationRessource";
import {Devis } from "./Devis";
export class Reservation extends Model {
	protected name = "Reservation";
  		private owner :User = null;
		getOwner() : User {
			return this.foreignKey('owner');
		}
      setOwner(v : User) {
          this.setValue('owner', v);
      }
  		private reservationRessource :ReservationRessource = null;
		getReservationRessource() : ReservationRessource {
			return this.foreignKeys('reservationRessource');
		}
      setReservationRessource(v : ReservationRessource[]) {
          this.setValue('reservationRessource', v);
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
  		private title :string;
		getTitle() : string {
			return this.title;
		}
      setTitle(v : string)  {
          this.setValue('title', v);
      }
  		private created :any;
		getCreated() : any {
			return this.created;
		}
      setCreated(v : any)  {
          this.setValue('created', v);
      }
  		private updated :any;
		getUpdated() : any {
			return this.updated;
		}
      setUpdated(v : any)  {
          this.setValue('updated', v);
      }
  		private validationprovider :any;
		getValidationprovider() : any {
			return this.validationprovider;
		}
      setValidationprovider(v : any)  {
          this.setValue('validationprovider', v);
      }
  		private validationclient :any;
		getValidationclient() : any {
			return this.validationclient;
		}
      setValidationclient(v : any)  {
          this.setValue('validationclient', v);
      }
  		private devis :Devis = null;
		getDevis() : Devis {
			return this.foreignKey('devis');
		}
      setDevis(v : Devis) {
          this.setValue('devis', v);
      }
  		private comment :string;
		getComment() : string {
			return this.comment;
		}
      setComment(v : string)  {
          this.setValue('comment', v);
      }

}
