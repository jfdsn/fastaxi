import { DriverModel } from "../models/driver"


export const populateDriver = async () => {
        await DriverModel.bulkCreate([
            {   
                id: 1,
                name: "Homer Simpson",
                description: "Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).",
                vehicle: "Plymouth Valiant 1973 rosa e enferrujado",
                avaliation: "2/5 Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.",
                tax_per_km: 2.50,
                min_distance: 1,
            },
            {
                id: 2,
                name: "Dominic Toretto",
                description: "Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist e sagrada.",
                vehicle: "Dodge Charger R/T 1970 modificado",
                avaliation: "4/5 Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!",
                tax_per_km: 5.00,
                min_distance: 5,
            },
            {
                id: 3,
                name: "James Bond",
                description: "Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.",
                vehicle: "Aston Martin DB5 clássico",
                avaliation: "5/5 Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.",
                tax_per_km: 10.00,
                min_distance: 10,
            },
        ])
}