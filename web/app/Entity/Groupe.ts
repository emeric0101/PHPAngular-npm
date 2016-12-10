import { Model } from "phpangular/Entity/AEntity";
export class Groupe extends Model {
	protected name = "Groupe";
  		private title :string;
		getTitle() : string {
			return this.title;
		}
      setTitle(v : string)  {
          this.setValue('title', v);
      }
  		private flag :string;
		getFlag() : string {
			return this.flag;
		}
      setFlag(v : string)  {
          this.setValue('flag', v);
      }
  		private color :string;
		getColor() : string {
			return this.color;
		}
      setColor(v : string)  {
          this.setValue('color', v);
      }

}
