import { Model } from "phpangular/Entity/AEntity";
import {Ressource } from "./Ressource";
import {Entrepot } from "./Entrepot";
export class EntrepotRessource extends Model {
	protected name = "EntrepotRessource";
  		private ressource :Ressource = null;
		getRessource() : Ressource {
			return this.foreignKey('ressource');
		}
      setRessource(v : Ressource) {
          this.setValue('ressource', v);
      }
  		private entrepot :Entrepot = null;
		getEntrepot() : Entrepot {
			return this.foreignKey('entrepot');
		}
      setEntrepot(v : Entrepot) {
          this.setValue('entrepot', v);
      }
  		private quantity :number;
		getQuantity() : number {
			return this.quantity;
		}
      setQuantity(v : number)  {
          this.setValue('quantity', v);
      }

}
