import { Model } from "phpangular/Entity/AEntity";
import {User } from "./User";
export class Fichier extends Model {
	protected name = "Fichier";
  		private owner :User = null;
		getOwner() : User {
			return this.foreignKey('owner');
		}
      setOwner(v : User) {
          this.setValue('owner', v);
      }
  		private created :any;
		getCreated() : any {
			return this.created;
		}
      setCreated(v : any)  {
          this.setValue('created', v);
      }
  		private type :any;
		getType() : any {
			return this.type;
		}
      setType(v : any)  {
          this.setValue('type', v);
      }

}
