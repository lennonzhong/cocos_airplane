import { _decorator, CCFloat, Component, Enum, EventTouch, input, Input, instantiate, Node, Prefab, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

export enum ShootType {
    oneShoot,
    twoShoot
}

@ccclass('player')
export class player extends Component {

    @property(CCFloat)
    buttle1Interval = 3

    buttle1Timer = 0

    @property(CCFloat)
    buttle1Speed = 200

    @property(Prefab)
    bulltPrefab: Prefab

    @property(Prefab)
    bulltPrefab2: Prefab

    @property(Node)
    bulltStartPos: Node = null

    @property(Node)
    builtStartPos2LeftNode

    @property(Node)
    builtStartPos2RightNode

    @property(Node)
    bulltParentNode:Node = null

    @property({
        type: Enum(ShootType)
    })
    shootType:ShootType = ShootType.oneShoot

    protected onLoad(): void {
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    onTouchMove(event: EventTouch) {
        let playerPos = this.node.position;
        let offsetPos = new Vec3(playerPos.x + event.getDeltaX(), playerPos.y + event.getDeltaY(), 0);

        if(offsetPos.x > 230) {
            offsetPos.x = 230;
        }
        if(offsetPos.x < -230) {
            offsetPos.x = -230;
        }
        if(offsetPos.y > 380) { 
            offsetPos.y = 380;
        }
        if(offsetPos.y < -380) {
            offsetPos.y = -380;
        }
        this.node.setPosition(offsetPos);
    }

    protected onDestroy(): void {
        input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    update(deltaTime: number) {
       switch (this.shootType) {
        case ShootType.oneShoot:
            this.handleOneShoot(deltaTime)
            break;
       case ShootType.twoShoot:
        this.handleTwoShoot(deltaTime)
            break;
        default:
            break;
       }
        
    }
    handleOneShoot(deltaTime: number) {
        this.buttle1Timer += deltaTime;
        if(this.buttle1Timer > this.buttle1Interval) {
            this.buttle1Timer = 0;
            const node = instantiate(this.bulltPrefab)
            const pos = this.bulltStartPos.getWorldPosition();
            node.setPosition(pos);
            node.setParent(this.bulltParentNode)
        }
    }

    handleTwoShoot(deltaTime) {
        this.buttle1Timer += deltaTime;
        if(this.buttle1Timer > this.buttle1Interval) {
            this.buttle1Timer = 0;
            const node1 = instantiate(this.bulltPrefab2)
            const node2 = instantiate(this.bulltPrefab2)
            let pos1 = this.builtStartPos2LeftNode.getWorldPosition();
            let pos2 = this.builtStartPos2RightNode.getWorldPosition();
            node1.setWorldPosition(pos1)
            node2.setWorldPosition(pos2)

            node1.setParent(this.bulltParentNode)
            node2.setParent(this.bulltParentNode)
        }
    }

}


