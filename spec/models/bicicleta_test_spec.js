let mongoose = require('mongoose')
let Bicicleta = require('../../models/bicicleta')

describe('Testing Bicicletas', function(){
    
  beforeEach(function(){
    const mongoDB = "mongodb://localhost/testdb"
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error'))
    db.once('open', function(){
      console.log('We are connected to test database')
      done()
    })
  })

  afterEach(function(){
    Bicicleta.deleteMany({}, function(err, success) {
      if (err) console.log(err)
    })
  })

  describe('Bicicleta.createInstance', () => {
    it('crea una instancia de Bicicleta', () => {
      let bici = Bicicleta.createInstance(1,'rojo','urbana',[4.581863240822626, -74.15747858968226])

      expect(bici.code).toBe(1)
      expect(bici.color).toBe("rojo")
      expect(bici.modelo).toBe("urbana")
      expect(bici.ubicacion[0]).toEqual(4.581863240822626)
      expect(bici.ubicacion[1]).toEqual(-74.15747858968226)
    })
  })

    describe('Bicicleta.allBicis',()=>{
        it('comienza vacia', ()=>{
            Bicicleta.allBicis(function(err,bicis){
                expect(bicis.length).toBe(0)            
            })
        })
    })

    describe('Bicicleta.add',()=>{
        it('agrega solo una bici',()=>{
            const aBici = new Bicicleta({code: 1, color:"verde", modelo: "cross"})
            Bicicleta.add(aBici,function(err,newBici){
                if(err) console.log(err)
                Bicicleta.allBicis((err,bicis)=>{
                    expect(bicis.length).toEqual(1);
                    expect(bicis[0].code).toEqual(aBici.code);

                })
            })
        })
    })

    describe('Bicicleta.findByCode', ()=>{
        it('debe devolver la bici con code 1', ()=>{
            Bicicleta.allBicis(function(err,bicis){
                expect(bicis.length).toBe(0)

                const aBici = new Bicicleta({code:1, color:"verde",modelo:"urbana"});
                Bicicleta.add(aBici,(err,newBici)=>{
                    if(err) console.log(err)

                    const aBici2 = new Bicicleta({code:2,color:"roja",modelo:"urbana"})
                    Bicicleta.add(aBici2, (err, newBici)=>{
                        if(err) console.log(err);

                        Bicicleta.findByCode(1, (err,targetBici)=>{
                            expect(targetBici.code).toBe(aBici.code)
                            expect(targetBici.color).toBe(aBici.color)
                            expect(targetBici.modelo).toBe(aBici.modelo)

                            done();
                        })
                    })

                })
            })
        })
    })

})

