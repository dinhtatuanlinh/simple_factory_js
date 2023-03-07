function ServiceLogictics(doors, price, name){
    this.doors = !doors ? 6 : doors
    this.price = !price ? '100 000vnd' : price
    this.name = !name ? 'truck 10' : name
}
ServiceLogictics.getTransport = function(cargoVolume){
    switch (cargoVolume) {
        case '10':
            return new ServiceLogictics()
        case '20':
            return new ServiceLogictics(16, '1000 000 vnd', 'truck 20')
    }
}

console.log(ServiceLogictics.getTransport('20'))

let SL = (d, p, n)=>{
    let doors = !d ? 6 : d
    let price = !p ? '100 000vnd' : p
    let name = !n ? 'truck 10' : n
    return {
        doors,
        price,
        name
    }
}

SL.getTransport = function(cargoVolume){
    switch (cargoVolume) {
        case '10':
            return SL()
        case '20':
            return SL(16, '1000 000 vnd', 'truck 20')
    }
}

console.log(SL.getTransport('10'))

class SerLog {
    constructor(doors = 6, price = '100 000vnd', name= 'truck 10'){
        this.doors = doors
        this.price = price
        this.name = name
    }
    static getTransport = (cargoVolume) =>{
        switch (cargoVolume){
            case '10':
                return new SerLog()
            case '20':
                return new SerLog(16, '1000 000vnd', 'truck 20')
        }
    }
}

console.log(SerLog.getTransport('20'))

