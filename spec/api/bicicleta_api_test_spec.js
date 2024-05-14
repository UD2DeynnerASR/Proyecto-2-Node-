let Bicicleta = require ('../../models/bicicleta')
let request = require('request')
let server = require('../../bin/www')

describe('Bicicleta API',()=>{
    describe('GET BICICLETAS /', ()=>{
        it('Status 200',()=>{
            expect(Bicicleta.allBicis.length).toBe(0)

            let a = new Bicicleta(1,'negra','urbana',[4.636880826244109, -74.18886705054383])
    
            Bicicleta.add(a)
    
    
            request.get('http://localhost:3000/api/bicicletas', function(error,response,body){
                expect(response.statusCode).toBe(200)
            });
        });
       
    });

    describe('POST BICICLETAS /create',()=>{
        it('STATUS 200',(done)=>{
            let headers = {'content-type':'application/json'};
            let aBici = '{ "id": 10,"color":"rojo","modelo";"urbana","lat":4.581863240822626,"lng":-74.15747858968226}'
            request.post({
                headers:headers,
                url: 'http://localhost:3000/api/bicicletas/create',
                body: aBici
            }, function(error,response,body){
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(10).color).toBe('rojo')
                done()
            }
        )
        })
    })
})