import { Model } from "phpangular/Entity/AEntity";
export class RessourceType extends Model {
	protected name = "RessourceType";
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

}
