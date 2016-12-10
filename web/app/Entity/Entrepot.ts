import { Model } from "phpangular/Entity/AEntity";
import {EntrepotRessource } from "./EntrepotRessource";
export class Entrepot extends Model {
	protected name = "Entrepot";
  		private title :string;
		getTitle() : string {
			return this.title;
		}
      setTitle(v : string)  {
          this.setValue('title', v);
      }
  		private adresse :string;
		getAdresse() : string {
			return this.adresse;
		}
      setAdresse(v : string)  {
          this.setValue('adresse', v);
      }
  		private cp :string;
		getCp() : string {
			return this.cp;
		}
      setCp(v : string)  {
          this.setValue('cp', v);
      }
  		private city :string;
		getCity() : string {
			return this.city;
		}
      setCity(v : string)  {
          this.setValue('city', v);
      }
  		private entrepotRessources :EntrepotRessource = null;
		getEntrepotRessources() : EntrepotRessource {
			return this.foreignKeys('entrepotRessources');
		}
      setEntrepotRessources(v : EntrepotRessource[]) {
          this.setValue('entrepotRessources', v);
      }

}
