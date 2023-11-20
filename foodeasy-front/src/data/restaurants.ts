export const restaurants = [
  {
    id: 1,
    name: "McDonald's",
    picture: "https://static.ifood-static.com.br/image/upload/t_medium/logosgde/e5624f57-0e5f-4710-8c6a-ce56daa5bcdb/202211041514_U6FM_i.jpg?imwidth=96",
    rating: 4.2,
    description: "A rede de fast food mais famosa do mundo, com um menu variado de hambúrgueres, batatas fritas e outros lanches.",
    deliveryFee: 10,
    categories: [
      {
        "id": 2,
        "name": "Fast food"
      }
    ],
    "cousines": [
      {
        "id": 1,
        "name": "Americana"
      }
    ],
    "menu": [
      {
        "id": 1,
        "name": "Big Mac",
        "description": "O clássico hambúrguer do McDonald's",
        "price": 22.99,
        "picture": "https://s2-extra.glbimg.com/9RDaaemyG8Lm-oqzQ3cUH7LZDqA=/0x0:640x360/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f551ea7087a47f39ead75f64041559a/internal_photos/bs/2023/R/L/2BblwbQJCklGUqcu9IVw/bicmac.jpg"
      },
      {
        "id": 2,
        "name": "Batatas Fritas",
        "description": "Deliciosas batatas fritas do McDonald's",
        "price": 12.99,
        "picture": "https://i0.wp.com/viivaassessoria.com/wp-content/uploads/2018/07/batatinhamc.png?fit=913%2C733&ssl=1"
      },
      {
        "id": 3,
        "name": "Coca-Cola",
        "description": "Refrigerante Coca-Cola do McDonald's",
        "price": 6.99,
        "picture": "https://gcmais.com.br/wp-content/uploads/2023/03/coca-mcdonalds-1024x624.png"
      }
    ]
  },
  {
    id: 2,
    name: "Burger King",
    picture: "https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/7baf6794-0023-4bc3-8cf6-982082c1f918/202310201721_SQSZ.png",
    rating: 4.5,
    description: "Uma das maiores redes de fast food do mundo, famosa por seus hambúrgueres suculentos.",
    deliveryFee: 6.99,
    categories: [
      {
        "id": 2,
        "name": "Fast food"
      }
    ],
    "cousines": [
      {
        "id": 1,
        "name": "Americana"
      }
    ],
    "menu": [
      {
        "id": 1,
        "name": "Whopper",
        "description": "Hambúrguer suculento com salada e molho especial",
        "price": 14.99,
        "picture": "https://gkpb.com.br/wp-content/uploads/2020/11/whopper-burger-king.png"
      },
      {
        "id": 2,
        "name": "Whopper Jr.",
        "description": "Hambúrguer suculento em tamanho reduzido com salada e molho especial",
        "price": 10.99,
        "picture": "https://d3sn2rlrwxy0ce.cloudfront.net/_800x600_crop_center-center_none/whopper_jr.png?mtime=20231010141029&focal=none&tmtime=20231010141257"
      },
      {
        "id": 3,
        "name": "Chicken Royale",
        "description": "Hambúrguer de frango com alface, tomate e molho especial",
        "price": 10.00,
        "picture": "https://www.hungryjacks.com.au/Upload/HJ/Media/Menu/Product/Main/Chicken-Royale-3-5.png"
      },
    ],
  },
  {
    id: 3,
    name: "Pizza Hut",
    picture: "https://yt3.googleusercontent.com/hrcL5ZEF4yvmbCprDRHNs1nLHBesBv0jAEaNtl3-5w2KrCC857EeLlgFf_vy65FxSyzHODT5ng=s900-c-k-c0x00ffffff-no-rj",
    rating: 4.3,
    description: "Uma das maiores redes de pizza do mundo, com um menu de pizzas tradicionais e inovadoras.",
    deliveryFee: 15,
    categories: [
      {
        "id": 1,
        "name": "Pizza"
      }
    ],
    "cousines": [
      {
        "id": 2,
        "name": "Italiana"
      }
    ],
    "menu": [
      {
        "id": 1,
        "name": "Pizza Margherita",
        "description": "Pizza tradicional italiana com molho de tomate, mussarela e manjericão.",
        "price": 59.99,
        "picture": "https://blog.praticabr.com/wp-content/uploads/2023/06/margherita-1024x682.jpg"
      },
      {
        "id": 2,
        "name": "Pizza Pepperoni",
        "description": "Pizza com molho de tomate, mussarela e pepperoni.",
        "price": 69.99,
        "picture": "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-pepperoni-0.jpg"
      },
      {
        "id": 3,
        "name": "Pizza Quatro Queijos",
        "description": "Pizza com molho de tomate, mussarela, gorgonzola, parmesão e provolone.",
        "price": 79.99,
        "picture": "https://claudia.abril.com.br/wp-content/uploads/2020/02/pizza-quatro-queijos-comitc3aa-umami.jpg"
      }
    ]
  },
  {
    id: 4,
    name: "Subway",
    picture: "https://manauarashopping.com.br/lojas_files/24429.jpg",
    rating: 4.1,
    description: "A maior cadeia de restaurantes de sanduíches do mundo, oferecendo uma variedade de subs frescos e personalizáveis.",
    deliveryFee: 8.99,
    categories: [
      {
        "id": 2,
        "name": "Sanduíches"
      }
    ],
    "cousines": [
      {
        "id": 1,
        "name": "Americana"
      }
    ],
    "menu": [
      {
        "id": 1,
        "name": "Frango Teriyaki",
        "description": "Sanduíche de frango teriyaki com vegetais frescos e molho teriyaki.",
        "price": 8.99,
        "picture": "https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/subway/8_601c55d90e75f.png"
      },
      {
        "id": 2,
        "name": "Subway Melt",
        "description": "Sanduíche de peru, presunto e bacon com queijo derretido.",
        "price": 9.99,
        "picture": "https://media-cdn.tripadvisor.com/media/photo-s/07/a2/a6/fd/subway.jpg"
      },
      {
        "id": 3,
        "name": "Veggie Delight",
        "description": "Sanduíche vegetariano com uma variedade de vegetais frescos e queijo.",
        "price": 7.99,
        "picture": "https://assets.change.org/photos/4/jh/mx/UmJHmXIRUPZBNpD-800x450-noPad.jpg?1525614455"
      }
    ]
  },
  {
    id: 5,
    name: "China in Box",
    picture: "https://upload.wikimedia.org/wikipedia/pt/7/7d/Logo-china_in_china.jpg",
    rating: 4.7,
    description: "Restaurante japonês que oferece uma variedade de sushis frescos e pratos asiáticos deliciosos.",
    deliveryFee: 12.99,
    categories: [
      {
        "id": 5,
        "name": "Sushi"
      }
    ],
    "cousines": [
      {
        "id": 2,
        "name": "Chinesa"
      }
    ],
    "menu": [
      {
        "id": 1,
        name: "Sushi Salmão",
        description: "Sushi de salmão fresco com arroz e alga nori.",
        price: 12.99,
        picture: "https://www.sabornamesa.com.br/media/k2/items/cache/7abf53d37910228532f1b4478f170c08_XL.jpg"
      },
      {
        "id": 2,
        name: "Temaki Camarão",
        description: "Temaki recheado com camarão, arroz e vegetais.",
        price: 14.99,
        picture: "https://img77.uenicdn.com/image/upload/v1611665862/service_images/shutterstock_1021362085.jpg"
      },
      {
        "id": 3,
        name: "Yakissoba de Frango",
        description: "Macarrão yakissoba com frango e legumes em molho especial.",
        price: 16.99,
        picture: "https://www.hojetemfrango.com.br/wp-content/uploads/2019/03/shutterstock_87957352.jpg"
      }
    ]
  }
];
