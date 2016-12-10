import { Model } from "phpangular/Entity/AEntity";
import {RessourceType } from "./RessourceType";
import {EntrepotRessource } from "./EntrepotRessource";
import {Price } from "./Price";
export class Ressource extends Model {
	protected name = "Ressource";
  		private title :string;
		getTitle() : string {
			return this.title;
		}
      setTitle(v : string)  {
          this.setValue('title', v);
      }
  		private description :string;
		getDescription() : string {
			return this.description;
		}
      setDescription(v : string)  {
          this.setValue('description', v);
      }
  		private ressourceType :RessourceType = null;
		getRessourceType() : RessourceType {
			return this.foreignKey('ressourceType');
		}
      setRessourceType(v : RessourceType) {
          this.setValue('ressourceType', v);
      }
  		private delais :number;
		getDelais() : number {
			return this.delais;
		}
      setDelais(v : number)  {
          this.setValue('delais', v);
      }
  		private entrepotRessources :EntrepotRessource = null;
		getEntrepotRessources() : EntrepotRessource {
			return this.foreignKeys('entrepotRessources');
		}
      setEntrepotRessources(v : EntrepotRessource[]) {
          this.setValue('entrepotRessources', v);
      }
  		private price :Price = null;
		getPrice() : Price {
			return this.foreignKeys('price');
		}
      setPrice(v : Price[]) {
          this.setValue('price', v);
      }
  		private isLieu :any;
		getIsLieu() : any {
			return this.isLieu;
		}
      setIsLieu(v : any)  {
          this.setValue('isLieu', v);
      }
  		private active :any;
		getActive() : any {
			return this.active;
		}
      setActive(v : any)  {
          this.setValue('active', v);
      }
  		private color :string;
		getColor() : string {
			return this.color;
		}
      setColor(v : string)  {
          this.setValue('color', v);
      }

}
