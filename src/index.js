class dadosHeroi{
    constructor (name, age, type){
        this.name = name
        this.age = age
        this.type = type
    
    }

    heroAction(){
        console.log(`${this.name} Action:`)
        console.log(`----------------------`)
    }

    attack(){
        switch (this.type){


            case "Mago":
                case "mago":
              console.log(`o ${this.type} atacou usando magia!!!`)
              break
             
              case "Guerreiro":
                case "guerreiro":
              console.log(`o ${this.type} atacou usando espada!!!`)
              break
             
              case "Monge":
                case "monge":
              console.log(`o ${this.type} atacou usando artes marciais!!!`)
              break

              case "Ninja":
                case "ninja":
              console.log(`o ${this.type} atacou usando shuriken!!!`)
              break
             
              default:
              console.log("Classe inserida incorretamente")
        }
          
    }
}

let heroi1 = new dadosHeroi("Moisés","28", "monge")
let heroi2 = new dadosHeroi("Carlos","20", "ninja")

heroi2.heroAction()
heroi2.attack() 