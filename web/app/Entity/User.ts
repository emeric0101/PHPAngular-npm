import { Model } from "phpangular";
import { Groupe } from "./Groupe";
export class User extends Model {
	name = "User";
  		private firstName :string;
		getFirstName() : string {
			return this.firstName;
		}
      setFirstName(v : string)  {
          this.setValue('firstName', v);
      }
  		private lastName :string;
		getLastName() : string {
			return this.lastName;
		}
      setLastName(v : string)  {
          this.setValue('lastName', v);
      }
  		private password :string;
		getPassword() : string {
			return this.password;
		}
      setPassword(v : string)  {
          this.setValue('password', v);
      }
  		private address :string;
		getAddress() : string {
			return this.address;
		}
      setAddress(v : string)  {
          this.setValue('address', v);
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
  		private sex :any;
		getSex() : any {
			return this.sex;
		}
      setSex(v : any)  {
          this.setValue('sex', v);
      }
  		private mail :string;
		getMail() : string {
			return this.mail;
		}
      setMail(v : string)  {
          this.setValue('mail', v);
      }
  		private created :any;
		getCreated() : any {
			return this.created;
		}
      setCreated(v : any)  {
          this.setValue('created', v);
      }
  		private groupe :Groupe = null;
		getGroupe() : Groupe {
			return this.foreignKey('groupe');
		}
      setGroupe(v : Groupe) {
          this.setValue('groupe', v);
      }


}
