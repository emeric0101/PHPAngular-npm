import { Model } from "phpangular/Entity/AEntity";
import {User } from "./User";
import {Fichier } from "./Fichier";
export class Notification extends Model {
	protected name = "Notification";
  		private title :string;
		getTitle() : string {
			return this.title;
		}
      setTitle(v : string)  {
          this.setValue('title', v);
      }
  		private owner :User = null;
		getOwner() : User {
			return this.foreignKey('owner');
		}
      setOwner(v : User) {
          this.setValue('owner', v);
      }
  		private file :Fichier = null;
		getFile() : Fichier {
			return this.foreignKey('file');
		}
      setFile(v : Fichier) {
          this.setValue('file', v);
      }
  		private created :any;
		getCreated() : any {
			return this.created;
		}
      setCreated(v : any)  {
          this.setValue('created', v);
      }

}
