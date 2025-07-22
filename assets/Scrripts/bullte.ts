import { _decorator, CCFloat, CCInteger, Component, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('bullte')
export class bullte extends Component {
   
    @property(CCInteger)
    speed: number = 200;

    update(deltaTime: number) {
        let bulletPos = this.node.getWorldPosition()    

        if(bulletPos.y > 1100) {
            this.node.destroy();
        }
        const offsetY = deltaTime * this.speed;
        this.node.setWorldPosition(bulletPos.x, bulletPos.y + offsetY, bulletPos.z);
    }
}


