import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('loading')
export class loading extends Component {


    @property(Node)
    btnNode: Node = null;

    @property(Node)
    loadingNode: Node = null;

    start() {

    }

    update(deltaTime: number) {
        
    }

    LoadGame() {
       director.loadScene("Game");
    }

    ClickStartBtn() {
        this.loadingNode.active = true;
    }
}


