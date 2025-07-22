import { _decorator, Animation, CCInteger, Collider, Collider2D, Component, Contact2DType, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('enemy')
export class enemy extends Component {


    @property(CCInteger)
    speed: number = 300

    @property(Animation)
    anim = null

    hp: number = 1;

    collider:Collider2D = null


    start() {
        this.collider = this.getComponent(Collider2D);
        if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    update(deltaTime: number) {
        if (this.hp > 0) {
            this.move(deltaTime)
        }
    }

    move(deltaTime: number) {
        let offsetY = deltaTime * this.speed
        const pos = this.node.getWorldPosition()

        this.node.setWorldPosition(pos.x, pos.y - offsetY, pos.z)
        if (pos.y - offsetY < -20) {
            this.node.parent.destroy();
            return
        }
    }
    protected onDestroy(): void {
        if(this.collider) {
            this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact(self, otherCollider) {
        this.hp -= 1;
        if(this.hp === 0) {
            console.log(self)
            this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            this.anim.play()
            otherCollider.node.destroy()
            setTimeout(() => {
                self.node.parent.destroy()
            }, 500)
        }
    }
}


