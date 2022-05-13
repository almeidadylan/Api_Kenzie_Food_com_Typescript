const panquecas = require("../imagens/panquecas.svg");
const mousseDeMorango = require("../imagens/mousse_de_morango");
const pastelVegano = require("../imagens/pastel_vegano");
const pizzaVegetal = require( "../imagens/pizza_vegetal");
const vinho = require("../imagens/vinho");
const laranja = require("../imagens/laranja");
import { IProduct } from  "../interfaces/products.interface";

export const products: IProduct[] = [
    {  
        id: 1,
        imagem: panquecas,
        nome: "Panqueca de banana com aveia",
        descricao: "Esta receita serve muito bem 2 pessoas, deixa a gente bem satisfeito.",
        categoria: "Panificadora",
        preco: 20.00,
    },
    {  
        id: 2,
        imagem: mousseDeMorango,
        nome: "Mousse de morango com a fruta",
        descricao: "Sobremesa fácil, rápida e muito saborosa: o mousse.",
        categoria: "Frutas",
        preco: 27.50,
    },
    {  
        id: 3,
        imagem: pastelVegano,
        nome: "Pastel de verduras vagano",
        descricao: "Que tal comer um delicioso pastel feito de vegetais cozidos no vapor.",
        categoria: "Panificadora",
        preco: 20.00,
    },
    {  
        id: 4,
        imagem: pizzaVegetal,
        nome: "Pizza vegetariana de palmito",
        descricao: "Uma saborosa pizza de massa fina feita de palmito ralado, com cebola, ovos cozidos, oregano e manjericão.",
        categoria: "Panificadora",
        preco: 20.00,
    },
    {  
        id: 5,
        imagem: vinho,
        nome: "Vinho suave",
        descricao: "O vinho tinto seco. De corpo médio cheio de sabores de frutas vermelhas maduras e delicadas notas de especiarias.",
        categoria: "Bebidas",
        preco: 20.00,
    },
    {  
        id: 6,
        imagem: laranja,
        nome: "Pizza vegetariana de palmito",
        descricao: "Bastante popular no Brasil, a laranja é uma das maiores representantes das frutas cítricas. Seu sabor costuma ser doce ou levemente ácido.",
        categoria: "Frutas",
        preco: 20.00,
    }
]

