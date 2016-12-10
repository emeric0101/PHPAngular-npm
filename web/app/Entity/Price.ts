import { Model } from "phpangular/Entity/AEntity";
import {Ressource } from "./Ressource";
export class Price extends Model {
	protected name = "Price";
  		private ressource :Ressource = null;
		getRessource() : Ressource {
			return this.foreignKey('ressource');
		}
      setRessource(v : Ressource) {
          this.setValue('ressource', v);
      }
  		private created :any;
		getCreated() : any {
			return this.created;
		}
      setCreated(v : any)  {
          this.setValue('created', v);
      }
  		private tva :number;
		getTva() : number {
			return this.tva;
		}
      setTva(v : number)  {
          this.setValue('tva', v);
      }
  		private price :any;
		getPrice() : any {
			return this.price;
		}
      setPrice(v : any)  {
          this.setValue('price', v);
      }

}
