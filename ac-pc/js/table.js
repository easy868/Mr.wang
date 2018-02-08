// Tab
class Tab{
  constructor(id){
    if(id=="tab"){
      this.oBox=document.getElementById(id);
      this.aBtn=this.oBox.getElementsByClassName("navlist");
      this.aDiv=this.oBox.getElementsByClassName("list-conter");
      this.init();
      this.class="navstyle";
    }else{
      this.oBox=document.getElementById(id);
      this.aBtn=this.oBox.getElementsByClassName("navlista");
      this.aDiv=this.oBox.getElementsByClassName("list-contera");
      this.init();
      this.class="overlayhover";
    }
  }
  init(){
    for(let i=0;i<this.aBtn.length;i++){
      this.aBtn[i].onclick=function(){
        this.hide();
        this.show(i);
      }.bind(this);
    }
  }
  hide(){
    for(let i=0;i<this.aDiv.length;i++){
      this.aBtn[i].classList.remove(this.class);
      this.aDiv[i].style.display="none";
    }
  }
  show(index){
    this.aBtn[index].classList.add(this.class);
    this.aDiv[index].style.display='block';
  }
}
class Taba extends Tab{

}
