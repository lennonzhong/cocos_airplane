import { _decorator, CCFloat, Component, instantiate, math, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('enemyManager')
export class enemyManager extends Component {

    @property(CCFloat)
    enemy1Rate:number = 1;
    @property(Prefab)
    enemy1Prefab: Prefab;


    @property(CCFloat)
    enemy2Rate:number = 2;
    @property(Prefab)
    enemy2Prefab: Prefab;


    @property(CCFloat)
    enemy3Rate:number = 5;
    @property(Prefab)
    enemy3Prefab: Prefab;
    


    start() {
        this.schedule(this.generateEnemy1, this.enemy1Rate);
        this.schedule(this.generateEnemy2, this.enemy2Rate)
        this.schedule(this.generateEnemy3, this.enemy3Rate)
    }

    protected onDestroy(): void {
        this.unschedule(this.generateEnemy1)
    }

    update(deltaTime: number) {
        
    }

    generateEnemy1() {
        const enemy = instantiate(this.enemy1Prefab)
        const randomX = math.randomRangeInt(-215, 215)
        const offsetY = 455
        enemy.setPosition(randomX, offsetY, 0)
        this.node.addChild(enemy)
    }

    generateEnemy2() {
        const enemy = instantiate(this.enemy2Prefab)
        const randomX = math.randomRangeInt(-200, 200)
        const offsetY = 455
        enemy.setPosition(randomX, offsetY, 0)
        this.node.addChild(enemy)
    }

    generateEnemy3() {
        const enemy = instantiate(this.enemy3Prefab)
        const randomX = math.randomRangeInt(-166, 166)
        const offsetY = 555
        enemy.setPosition(randomX, offsetY, 0)
        this.node.addChild(enemy)
    }
}


