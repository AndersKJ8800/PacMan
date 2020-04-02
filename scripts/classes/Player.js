class Player {
    constructor(){
        this.x=resX/2;
        this.y=resY/2;
        this.width=20;
        this.height=20;
        this.start=0;
        this.stop=0;
        this.degree=0;
        this.dir = 3;
        this.velocity = 2;
        this.open = true;
    }

    changeDirection() {
      print(downKey);
      if (downKey.up) {
        this.dir = 1;
      }
      if (downKey.down) {
        this.dir = 2;
      }
      if (downKey.left) {
        this.dir = 3;
      }
      if (downKey.right) {
        this.dir = 4;
      }
    }

    update(){
        //oppen and close the mouth
        if(this.degree<1){
            this.open=true;
        }else if(this.degree>80){
            this.open = false;
        }

        if(this.open===true){
            this.degree=this.degree+5;
        }else{
            this.degree=this.degree-5;
        }

        //updates the new cordinats 1=up 2=down 3=left 4=right
        if(this.dir===1){
            this.y=this.y-this.velocity;
            this.start=270+this.degree;
            this.stop=270-this.degree;
        }else if(this.dir===2){
            this.y=this.y+this.velocity;
            this.start=90+this.degree;
            this.stop=90-this.degree;
        }else if(this.dir===3){
            this.x=this.x-this.velocity;
            this.start=180+this.degree;
            this.stop=180-this.degree;
        }else if(this.dir===4){
            this.x=this.x+this.velocity;
            this.start=0+this.degree;
            this.stop=0-this.degree;
        }

        if(this.x>width){
            this.x=0;
        }else if(this.x<0){
            this.x=width;
        }else if(this.y>height){
            this.y=0;
        }else if(this.y<0){
            this.y=height;
        }

    }

    show(){
        arc(this.x, this.y, this.width, this.height, this.start, this.stop);
    }
}
