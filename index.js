class Coder{
  name(val){
    console.log(val);
    return val;
  }
  skill(val){
    console.log(this.name('洪保金')+':'+'Skill'+val);
  }

  constructor(a, b){
    this.a = a;
    this.b = b;
  }

  add(){
    return this.a + this.b;
  }
}

class htmler extends Coder{

}

let hbj = new htmler;

hbj.name('洪保金');