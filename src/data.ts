import { Group, Person, Link, Node } from './graphMaker';

const Bureau = "Bureau";

const Prez = "Bocquier";
const VP = "Perrier";
const SecGen = "Nguyen"
const Trez = "Delaroquie";


const Tech = "Tech";
const Commercial = "Commercial";
const RH = "RH";
const Qual = "Qual";
const Comm = "Comm";
const Trezo = "Trézo";


// export const Jisep2019 = new Group('Bureau', 0)
//     .has(new Person('Bocquier', 0)
//         .has(new Group('Communication', 1)
//             .has('Millot')
//             .has('Baloche')
//             .has('Mez')
//         )
//         .has(new Group('RH', 5)
//             .has('Rannou')
//             .has('Bancal')
//         )
//     )
//     .has(new Person('Nguyen', 0)
//         .has(new Group('Tech', 2)
//             .has('Leveau')
//             .has('Marquis')
//             .has('Pouret')
//             .has('Masha')
//             .has('Favole')
//             .has('Progent')
//         )
//     )
//     .has(new Person('Perrier', 0)
//         .has(new Group('Qual', 3)
//             .has('Gorge Bernat')
//             .has('Leping')
//         )
//         .has(new Group('Commercial', 4)
//             .has('Léon')
//             .has('Dégot')
//             .has('De Villermont')
//         )
//     )
//     .has(new Person('Delaroquie', 0)
//         .has(new Group('Tréso', 6)
//             .has('Cornellius')
//         )
//     )
//     .toGraph();

export const Jisep2020 = new Group('Bureau', 0)
    .has(new Person('Desmazieres', 0)
        .has(new Group('Communication', 1)
            .has('Remi')
            .has('Alice')
            .has('Emilie')
        )
        .has(new Group('RH', 5)
            .has('Berthet')
        )
    )
    .has(new Person('Veillon', 0)
        .has(new Group('Tech', 2)
            .has('Chemilier')
            .has('Philippe')
            .has('Tonneau')
            .has('Laurioz')
            .has('Venard')
        )
    )
    .has(new Person('Borelly', 0)
        .has(new Group('Qual', 3)
            .has('PDG')
            .has('Leonore')
            .has('Tim')
        )
        .has(new Group('Commercial', 4)
            .has('Payen')
            .has('Roure')
        )
    )
    .has(new Person('Weber', 0)
        .has(new Group('Tréso', 6)
            .has('Liu')
        )
    )
    .toGraph();

const data: {
    links: Link[],
    nodes: Node[],
} = {
    nodes: [
        { id: Bureau, group: 1 },
        { id: Tech, group: 2 },
        { id: Commercial, group: 3 },
        { id: RH, group: 4 },
        { id: Qual, group: 5 },
        { id: Comm, group: 6 },
        { id: Trezo, group: 7 },


        // bureau
        { id: Prez, group: 1 },
        { id: VP, group: 1 },
        { id: SecGen, group: 1 },
        { id: Trez, group: 1 },
        // tech
        { id: "Marquis", group: 2 },
        { id: "Pouret", group: 2 },
        { id: "Mascha", group: 2 },
        { id: "Leveau", group: 2 },
        { id: "Progent", group: 2 },
        { id: "Favole", group: 2 },
        // commercial
        { id: "Léon", group: 3 },
        { id: "Dégot", group: 3 },
        { id: "De Villermont", group: 3 },
        // RH
        { id: "Bancal", group: 4 },
        { id: "Rannou", group: 4 },

        // Qualité
        { id: "Gorge Bernat", group: 5 },
        { id: "Lépine", group: 5 },

        // Comm
        { id: "Millot", group: 6 },
        { id: "Baloche", group: 6 },
        { id: "Mez", group: 6 },

        // tréso
        { id: "Cornellius", group: 7 },

    ],
    links: [
        { source: Prez, target: Bureau, value: 0 },
        { source: VP, target: Bureau, value: 0 },
        { source: Trez, target: Bureau, value: 0 },
        { source: SecGen, target: Bureau, value: 0 },

        { source: Prez, target: RH, value: 2 },
        { source: Prez, target: Comm, value: 2 },

        { source: VP, target: Commercial, value: 2 },
        { source: VP, target: Qual, value: 2 },

        { source: SecGen, target: Tech, value: 2 },
        { source: Trez, target: Trezo, value: 2 },

        { source: "Cornellius", target: Trezo, value: 2 },

        { source: "Marquis", target: "Pouret", value: 2 },
        { source: "Marquis", target: "Mascha", value: 2 },
        { source: "Marquis", target: "Leveau", value: 2 },


        { source: "Marquis", target: Tech, value: 2 },
        { source: "Pouret", target: Tech, value: 2 },
        { source: "Mascha", target: Tech, value: 2 },
        { source: "Leveau", target: Tech, value: 2 },
        { source: "Progent", target: Tech, value: 2 },
        { source: "Favole", target: Tech, value: 2 },

        { source: "Millot", target: Comm, value: 2 },
        { source: "Baloche", target: Comm, value: 2 },
        { source: "Mez", target: Comm, value: 2 },

        { source: "Léon", target: Commercial, value: 2 },
        { source: "Dégot", target: Commercial, value: 2 },
        { source: "De Villermont", target: Commercial, value: 2 },

        { source: "Bancal", target: RH, value: 2 },
        { source: "Rannou", target: RH, value: 2 },

        { source: "Gorge Bernat", target: Qual, value: 2 },
        { source: "Lépine", target: Qual, value: 2 },


    ]
}

export default data;