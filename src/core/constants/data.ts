import { Colors } from "./colors";

export const DataComponent = {
  cardDataHome: [
    [
      {
        img: "handshake-o",
        navigateRoute: "Home",
        nameLabel: "Clientes",
        size: 30,
      },
      { img: "shopping-cart", navigateRoute: "Stock", nameLabel: "Estoque" },
      { img: "barcode", navigateRoute: "Home", nameLabel: "Vendas", size: 35 },
    ],
    [
      {
        img: "line-chart",
        navigateRoute: "Lucros",
        nameLabel: "Lucros",
        size: 30,
      },
      { img: "cart-arrow-down", navigateRoute: "Home", nameLabel: "Prejuízos" },
      {
        img: "pie-chart",
        navigateRoute: "Home",
        nameLabel: "Relatórios",
        size: 32,
      },
    ],
  ],
  header: {
    primary: {
      height: 180,
      backgroundColor: Colors.blue,
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
      shadowColor: Colors.blue,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    secondary: {
      height: 130,
      shadowColor: Colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1,
    },
  },
  stockData: [
    {"productId": 1, "name": "Biscoito de Milho", "qtd": 100, "imageUrl": "https://cdn.awsli.com.br/1030/1030675/produto/12390315614c97b9451.jpg"},
    {"productId": 2, "name": "Bolacha de água e sal", "qtd": 150, "imageUrl": "https://cdn.awsli.com.br/1030/1030675/produto/12390315614c97b9451.jpg"},
    {"productId": 3, "name": "Biscoito de chocolate", "qtd": 120, "imageUrl": "https://cdn.awsli.com.br/1030/1030675/produto/12390315614c97b9451.jpg"},
    {"productId": 4, "name": "Biscoito recheado de morango", "qtd": 90, "imageUrl": "https://cdn.awsli.com.br/1030/1030675/produto/12390315614c97b9451.jpg"},
    {"productId": 5, "name": "Cookies de aveia", "qtd": 80, "imageUrl": "https://cdn.awsli.com.br/1030/1030675/produto/12390315614c97b9451.jpg"},
    {"productId": 6, "name": "Biscoito integral de mel", "qtd": 110, "imageUrl": "https://cdn.awsli.com.br/1030/1030675/produto/12390315614c97b9451.jpg"},
    {"productId": 7, "name": "Wafers de baunilha", "qtd": 130, "imageUrl": "https://cdn.awsli.com.br/1030/1030675/produto/12390315614c97b9451.jpg"},
    {"productId": 8, "name": "Biscoito de manteiga", "qtd": 100, "imageUrl": "https://cdn.awsli.com.br/1030/1030675/produto/12390315614c97b9451.jpg"},
    {"productId": 9, "name": "Biscoito amanteigado de limão", "qtd": 70, "imageUrl": "https://cdn.awsli.com.br/1030/1030675/produto/12390315614c97b9451.jpg"},
    {"productId": 10, "name": "Bolacha recheada de chocolate", "qtd": 95, "imageUrl": "https://cdn.awsli.com.br/1030/1030675/produto/12390315614c97b9451.jpg"},
    {"productId": 11, "name": "Biscoito de polvilho", "qtd": 200, "imageUrl": "https://cdn.awsli.com.br/1030/1030675/produto/12390315614c97b9451.jpg"},
    {"productId": 12, "name": "Biscoito de nata", "qtd": 85, "imageUrl": "https://cdn.awsli.com.br/1030/1030675/produto/12390315614c97b9451.jpg"},
    {"productId": 13, "name": "Bolacha de chocolate branco", "qtd": 60, "imageUrl": "https://cdn.awsli.com.br/1030/1030675/produto/12390315614c97b9451.jpg"},
    {"productId": 14, "name": "Biscoito de coco", "qtd": 140, "imageUrl": "https://cdn.awsli.com.br/1030/1030675/produto/12390315614c97b9451.jpg"},
    {"productId": 15, "name": "Biscoito de gengibre", "qtd": 50, "imageUrl": "https://cdn.awsli.com.br/1030/1030675/produto/12390315614c97b9451.jpg"},
    {"productId": 16, "name": "Bolacha maria", "qtd": 180, "imageUrl": "https://images-americanas.b2w.io/produtos/01/00/img3/195495/9/19549566_1GG.jpg"},
    {"productId": 17, "name": "Biscoito salgado de queijo", "qtd": 160, "imageUrl": "https://images-americanas.b2w.io/produtos/01/00/img3/195495/9/19549566_1GG.jpg"},
    {"productId": 18, "name": "Biscoito de leite maltado", "qtd": 75, "imageUrl": "https://images-americanas.b2w.io/produtos/01/00/img3/195495/9/19549566_1GG.jpg"},
    {"productId": 19, "name": "Wafers de chocolate", "qtd": 130, "imageUrl": "https://images-americanas.b2w.io/produtos/01/00/img3/195495/9/19549566_1GG.jpg"},
    {"productId": 20, "name": "Biscoito de amendoim", "qtd": 65, "imageUrl": "https://images-americanas.b2w.io/produtos/01/00/img3/195495/9/19549566_1GG.jpg"},
    {"productId": 21, "name": "Bolacha de manteiga escocesa", "qtd": 55, "imageUrl": "https://images-americanas.b2w.io/produtos/01/00/img3/195495/9/19549566_1GG.jpg"},
    {"productId": 22, "name": "Biscoito de canela", "qtd": 85, "imageUrl": "https://images-americanas.b2w.io/produtos/01/00/img3/195495/9/19549566_1GG.jpg"},
    {"productId": 23, "name": "Biscoito de baunilha", "qtd": 95, "imageUrl": "https://images-americanas.b2w.io/produtos/01/00/img3/195495/9/19549566_1GG.jpg"},
    {"productId": 24, "name": "Bolacha de mel", "qtd": 105, "imageUrl": "https://images-americanas.b2w.io/produtos/01/00/img3/195495/9/19549566_1GG.jpg"},
    {"productId": 25, "name": "Biscoito de café", "qtd": 120, "imageUrl": "https://images-americanas.b2w.io/produtos/01/00/img3/195495/9/19549566_1GG.jpg"},
    {"productId": 26, "name": "Bolacha de creme", "qtd": 90, "imageUrl": "https://images-americanas.b2w.io/produtos/01/00/img3/195495/9/19549566_1GG.jpg"},
    {"productId": 27, "name": "Biscoito de laranja", "qtd": 110, "imageUrl": "https://images-americanas.b2w.io/produtos/01/00/img3/195495/9/19549566_1GG.jpg"},
    {"productId": 28, "name": "Bolacha de morango", "qtd": 100, "imageUrl": "https://images-americanas.b2w.io/produtos/01/00/img3/195495/9/19549566_1GG.jpg"},
    {"productId": 29, "name": "Biscoito de aveia e chocolate", "qtd": 80, "imageUrl": "https://images-americanas.b2w.io/produtos/01/00/img3/195495/9/19549566_1GG.jpg"},
    {"productId": 30, "name": "Bolacha de limão", "qtd": 70, "imageUrl": "https://images-americanas.b2w.io/produtos/01/00/img3/195495/9/19549566_1GG.jpg"},
  ]
  
};
