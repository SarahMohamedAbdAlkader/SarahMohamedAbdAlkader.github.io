export default class minionCharacter {

    constructor(canvas) {
        this.width = 100;
        this.height = 100;

        this.position = {
            x: 10,
            y: canvas.height - this.height - 10

        }
    }
    draw (ctx){
        let minion = document.getElementById("minion");
        ctx.drawImage( minion , this.position.x, this.position.y );
    }
    test(){
        console.log("hiiiii");
        
    }

}
