export let robot = new Entity(); robot.set(new Transform()); robot.get(Transform).position.set(0, 0, 0); robot.get(Transform).rotation.setEuler(0, 0, 0); robot.get(Transform).scale.setAll(0.35); robot.set(new GLTFShape("models/Robot.gltf")); engine.addEntity(robot); robot.get(GLTFShape).addClip(new AnimationClip("walk", { loop: true, speed: 1, weight: 0.2})); robot.get(GLTFShape).getClip("walk").play();

// Coordinates of path to patrol
const point1 = new Vector3(2, 16.7, 2)
const point2 = new Vector3(8, 16.7, 2)
const point3 = new Vector3(8, 16.7, 13)
const point4 = new Vector3(2, 16.7, 18)
const path: Vector3[] = [point1, point2, point3, point4]

// LerpData component
@Component("lerpData")
export class LerpData {
  array: Vector3[] = path
  origin: number = 0
  target: number = 1
  fraction: number = 0
}

// Add LerpData component to Knight
robot.add(new LerpData())

// Walk System
export class robotWalk {
  update(dt: number) {
    let transform = robot.get(Transform)
    let path = robot.get(LerpData)
    path.fraction += dt/6
    if (path.fraction < 1) {
      transform.position = Vector3.Lerp(
        path.array[path.origin],
        path.array[path.target],
		path.fraction
      );
     
    } else {
      path.origin = path.target
      path.target += 1
      if (path.target >= path.array.length) {
        path.target = 0
      }
      path.fraction = 0
      transform.lookAt(path.array[path.target])
    }
  }
}

engine.addSystem(new robotWalk())

