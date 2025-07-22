import { _decorator, CCInteger, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    @property(Node)
    bgNode1: Node = null;

    @property(Node)
    bgNode2: Node = null;

    @property(CCInteger)
    speed: number = 100;

    start() {

    }

    update(deltaTime: number) {
        let node1Pos = this.bgNode1.position;
        let node2Pos = this.bgNode2.position;

        const moveY = this.speed * deltaTime;
        this.bgNode1.setPosition(node1Pos.x, node1Pos.y - moveY, node1Pos.z);
        this.bgNode2.setPosition(node2Pos.x, node2Pos.y - moveY, node2Pos.z);

        if (node1Pos.y < -852) {
            this.bgNode1.setPosition(node1Pos.x, 852 - moveY - 2, node1Pos.z);
        }
        if (node2Pos.y < -852) {
            this.bgNode2.setPosition(node2Pos.x, 852 - moveY - 2, node2Pos.z);
        }
    }
}


