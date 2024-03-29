enum CoffeeTypes {
    EXPRESSO_TRADICIONAL ,
    EXPRESSO_AMERICANO,
    EXPRESSO_CREMOSO,
    EXPRESSO_GELADO,
    CAFE_COM_LEITE  ,
    LATTE,
    CAPUCCINO,
    MACCHIATO,
    MOCACCINO,
    CHOCOLATE_QUENTE,
    CUBANO,
    HAVAIANO,
    ARABE,
    IRLANDES
}

export const coffees = [
    {
        id: CoffeeTypes.EXPRESSO_TRADICIONAL,
        image: 'expresso',
        type: [
            'Tradicional'
        ],
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.9
    }, {
        id: CoffeeTypes.EXPRESSO_AMERICANO,
        image: 'americano',
        type: [
            'Tradicional'
        ],
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional\n',
        price: 9.9
    }, {
        id: CoffeeTypes.EXPRESSO_CREMOSO,
        image: 'expresso-cremoso',
        type: [
            'Tradicional'
        ],
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.9
    }, {
        id: CoffeeTypes.EXPRESSO_GELADO,
        image: 'cafe-gelado',
        type: [
            'Tradicional',
            'Gelado'
        ],
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.9
    }, {
        id: CoffeeTypes.CAFE_COM_LEITE,
        image: 'cafe-com-leite',
        type: [
            'Tradicional',
            'Com Leite'
        ],
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.9
    }, {
        id: CoffeeTypes.LATTE,
        image: 'latte',
        type: [
            'Tradicional',
            'Com Leite'
        ],
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.9
    }, {
        id: CoffeeTypes.CAPUCCINO,
        image: 'capuccino',
        type: [
            'Tradicional',
            'Com Leite'
        ],
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.9
    }, {
        id: CoffeeTypes.MACCHIATO,
        image: 'macchiato',
        type: [
            'Tradicional',
            'Com Leite'
        ],
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.9
    }, {
        id: CoffeeTypes.MOCACCINO,
        image: 'mocaccino',
        type: [
            'Tradicional',
            'Com Leite'
        ],
        title: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.9
    }, {
        id: CoffeeTypes.CHOCOLATE_QUENTE,
        image: 'chocolate-quente',
        type: [
            'Especial',
            'Com Leite'
        ],
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.9
    }, {
        id: CoffeeTypes.CUBANO,
        image: 'cubano',
        type: [
            'Especial',
            'Alcoólico',
            'Gelado'
        ],
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.9
    }, {
        id: CoffeeTypes.HAVAIANO,
        image: 'havaiano',
        type: [
            'Especial'
        ],
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.9
    }, {
        id: CoffeeTypes.ARABE,
        image: 'arabe',
        type: [
            'Especial'
        ],
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.9
    }, {
        id: CoffeeTypes.IRLANDES,
        image: 'irlandes',
        type: [
            'Especial',
            'Alcoólico'
        ],
        title: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.9
    }
]