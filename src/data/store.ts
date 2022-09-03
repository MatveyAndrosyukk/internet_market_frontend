import {IDish, IRole, ITable, IUser} from "../types/types";

export const rolesMock: IRole[] = [
    {id: 1, name: 'USER'},
    {id: 2, name: 'ADMIN'}
]

export const usersMock: IUser[] = [
    {id: 1, name: 'user', email: 'user@gmail.com', password: 'user', phone: '+375256197464', roles: [rolesMock[0]]},
    {id: 2, name: 'admin', email: 'admin@gmail.com', password: 'admin', phone: '+375254368232', roles: [rolesMock[0], rolesMock[1]]}
]
export const cartMock: IDish[] = []

export const tablesMock: ITable[] = []

export const dishesMock: IDish[] = [
    {
        id: 1,
        count: 1,
        image: '/images/bif-burger.PNG',
        title: 'Биф-бургер',
        description: 'Рваная говядина, трюфельный майонез, маринованные огурчики, салат Коул Слоу, бекон  (275 гр)',
        price: 7,
        totalPrice: 7,
        category: 'Еда'
    },
    {
        id: 2,
        count: 1,
        image: '/images/chickenburger_new.PNG',
        title: 'Чикенбургер',
        description: 'Котлета из цыпленка, жаренный сыр, азиатский соус, маринованный огурец, бекон  (310 гр)',
        price: 6,
        totalPrice: 6,
        category: 'Еда'
    },
    {
        id: 3,
        count: 1,
        image: '/images/burger_rib_row.PNG',
        title: 'Бургер RIB RAW',
        description: 'Говяжья котлета, томат, Чеддер, вишневый BBQ, Халапеньо, маринованный огурец, бекон  (360 гр)',
        price: 9,
        totalPrice: 9,
        category: 'Еда'
    },
    {
        id: 4,
        count: 1,
        image: '/images/pastarami_sandwich.PNG',
        title: 'Пастрами сэндвич',
        description: 'Квашеная капуста, Чеддер, пастрами соус, серый хлеб и огурцы на бурбоне (350 гр)',
        price: 6,
        totalPrice: 6,
        category: 'Еда'
    },
    {
        id: 5,
        count: 1,
        image: '/images/vegetarianskiy_burger.PNG',
        title: 'Вегетарианский бургер',
        description: 'Вегетарианская котлета со вкусом говядины, луковый конфитюр, томат, Чеддер по вашему желанию, вишневый BBQ, Халапеньо, маринованный огурец (360 гр)',
        price: 5,
        totalPrice: 5,
        category: 'Еда'
    },
    {
        id: 6,
        count: 1,
        image: '/images/ribay_stake.PNG',
        title: 'Рибай стейк',
        description: 'Самый вкусный отруб бычка. Локальная говядина, травяной откорм (215/50 гр)',
        price: 20,
        totalPrice: 20,
        category: 'Еда'
    },
    {
        id: 7,
        count: 1,
        image: '/images/losos_gril.PNG',
        title: 'Лосось-гриль',
        description: 'Филе лосося на гриле со сливочным соусом и припущенным шпинатом (210 гр)',
        price: 23,
        totalPrice: 23,
        category: 'Еда'
    },
    {
        id: 8,
        count: 1,
        image: '/images/sibas_na_grile.PNG',
        title: 'Сибас на гриле',
        description: 'Приготовленный на гриле сибас с легким салатом и соусом Алабама (420 гр)',
        price: 25,
        totalPrice: 25,
        category: 'Еда'
    },
    {
        id: 9,
        count: 1,
        image: '/images/kopcheniy_kamamber.PNG',
        title: 'Копченый камамбер',
        description: '40 минут в коптильне. Классический сыр в белой плесени, подается с картофельным паем (160 гр)',
        price: 15,
        totalPrice: 15,
        category: 'Еда'
    },
    {
        id: 10,
        count: 1,
        image: '/images/stake_iz_tsvetnoy_kapusty.PNG',
        title: 'Стейк из цветной капусты',
        description: 'Цветная капуста Су-вид с трюфельным майонезом, ароматным маслом и огурцами на бурбоне (245 гр)',
        price: 10,
        totalPrice: 10,
        category: 'Еда'
    },
    {
        id: 11,
        count: 1,
        image: '/images/aziatsky_kuriny_bulion.PNG',
        title: 'Азиатский куриный бульон',
        description: 'Куриный бульон с лапшой Удон, цыпленком Су-вид и яйцом (360 гр)',
        price: 10,
        totalPrice: 10,
        category: 'Еда'
    },

    {
        id: 12,
        count: 1,
        image: '/images/limonad_mohito.PNG',
        title: 'Лимонад Мохито',
        description: 'Маленький 300 мл, Средний 470 мл',
        price: 4,
        totalPrice: 4,
        category: 'Напитки'
    },
    {
        id: 13,
        count: 1,
        image: '/images/ice_cofe_caramel.PNG',
        title: 'Айс-кофе Карамель',
        description: 'Маленький 300 мл, Средний 470 мл',
        price: 5,
        totalPrice: 5,
        category: 'Напитки'
    },
    {
        id: 14,
        count: 1,
        image: '/images/kofe_dvoinoi_espresso.PNG',
        title: 'Кофе Двойной Эспрессо',
        description: 'Маленький 300 мл, Средний 470 мл',
        price: 5,
        totalPrice: 5,
        category: 'Напитки'
    },
    {
        id: 15,
        count: 1,
        image: '/images/kofe_gliase.PNG',
        title: 'Кофе Глясе',
        description: 'Маленький 300 мл, Средний 470 мл',
        price: 5,
        totalPrice: 5,
        category: 'Напитки'
    },
    {
        id: 16,
        count: 1,
        image: '/images/kofe-amerikano.PNG',
        title: 'Кофе Американо',
        description: 'Маленький 300 мл, Средний 470 мл',
        price: 5,
        totalPrice: 5,
        category: 'Напитки'
    },
    {
        id: 17,
        count: 1,
        image: '/images/kofe_kapuchino.PNG',
        title: 'Кофе Капучино',
        description: 'Маленький 300 мл, Средний 470 мл',
        price: 5,
        totalPrice: 5,
        category: 'Напитки'
    },
    {
        id: 18,
        count: 1,
        image: '/images/coca_cola.PNG',
        title: 'Coca-Cola',
        description: 'Маленькая порция, Средняя порция, Большая порция',
        price: 5,
        totalPrice: 5,
        category: 'Напитки'
    },
    {
        id: 19,
        count: 1,
        image: '/images/milkshake_klubnika.PNG',
        title: 'Милкшейк Клубника',
        description: 'Маленькая порция, Средняя порция, Большая порция',
        price: 6,
        totalPrice: 6,
        category: 'Напитки'
    },
    {
        id: 20,
        count: 1,
        image: '/images/milk_shake_popkorn.PNG',
        title: 'Милкшейк Попкорн',
        description: 'Маленькая порция, Средняя порция, Большая порция',
        price: 6,
        totalPrice: 6,
        category: 'Напитки'
    },
    {
        id: 21,
        count: 1,
        image: '/images/tomaty_so_stracheloy.PNG',
        title: 'Томаты со страчетеллой и персиком',
        description: 'Узбекские сладкие томаты, страчателла, тартар из персика и домашнее Песто (260 гр)',
        price: 6,
        totalPrice: 6,
        category: 'Закуски'
    },
    {
        id: 22,
        count: 1,
        image: '/images/kartofel_po_tehasski.PNG',
        title: 'Картофель по-техасски',
        description: 'Картофель фри с сырным и чесночным соусами и острым перцем Халапеньо  (250 гр)',
        price: 4,
        totalPrice: 4,
        category: 'Закуски'
    },
    {
        id: 23,
        count: 1,
        image: '/images/losos_i_persikoviy_tartar.PNG',
        title: 'Лосось и персиковый тартар',
        description: 'Гравлакс из лосося, цитрусовый соус, тартар из персиков и сладкого лука (140 гр)',
        price: 10,
        totalPrice: 10,
        category: 'Закуски'
    },
    {
        id: 24,
        count: 1,
        image: '/images/vitello_tonato.PNG',
        title: 'Вителло Тоннато',
        description: 'Копченый говяжий язык и оригинальный соус с тунцом и каперсами (165 гр)',
        price: 15,
        totalPrice: 15,
        category: 'Закуски'
    },
    {
        id: 25,
        count: 1,
        image: '/images/krivetki_free.PNG',
        title: 'Креветки-фри',
        description: 'Тигровые креветки в темпуре с кисло-сладким соусом (230 гр)',
        price: 10,
        totalPrice: 10,
        category: 'Закуски'
    },
    {
        id: 26,
        count: 1,
        image: '/images/batat_free.PNG',
        title: 'Батат-фри с соусом Алабама',
        description: 'Сладкий картофель подается с белым барбекю соусом (200 гр)',
        price: 15,
        totalPrice: 15,
        category: 'Закуски'
    },
    {
        id: 27,
        count: 1,
        image: '/images/legkiy_salat.PNG',
        title: 'Легкий салат',
        description: 'Салат со свежими овощами и руколой  (220 гр)',
        price: 7,
        totalPrice: 7,
        category: 'Закуски'
    },
    {
        id: 28,
        count: 1,
        image: '/images/cezar.PNG',
        title: 'Цезарь',
        description: 'Салат, сыр, яйцо, сладкие томаты, гренки с традиционным соусом Цезарь (160 гр)',
        price: 8,
        totalPrice: 8,
        category: 'Закуски'
    },
    {
        id: 29,
        count: 1,
        image: '/images/cezar_s_lososem.PNG',
        title: 'Цезарь с лососем',
        description: 'Салат Ромен, яйцо, сладкие томаты, гренки, малосольным лососем с традиционным соусом Цезарь (200гр)',
        price: 10,
        totalPrice: 10,
        category: 'Закуски'
    },
    {
        id: 30,
        count: 1,
        image: '/images/cezar_s_ciplenkom.PNG',
        title: 'Цезарь с цыпленком',
        description: 'Салат Ромен, яйцо, сладкие томаты, гренки, цыпленок Су-вид, традиционный соус Цезарь (220 гр)',
        price: 8,
        totalPrice: 8,
        category: 'Закуски'
    }
]