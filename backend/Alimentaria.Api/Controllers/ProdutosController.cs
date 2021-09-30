using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Alimentaria.Api.Domain;
using Microsoft.AspNetCore.Mvc;

namespace Alimentaria.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutosController : ControllerBase
    {
        [HttpGet("obterProdutos")]
        public async Task<IActionResult> ObterProdutos()
        {
            var produtos = new List<Produto>
            {
                new Produto
                {
                    Titulo = "Leite sem lactose Piracanjuba",
                    Categoria = "Bebidas",
                    Endereco = "Av. Nordestina - São Miguel Paulista, SP, SP",
                    Local = "Mercado Doce Preço",
                    Preco = 6.0m,
                    Imagem = "https://static.paodeacucar.com/img/uploads/1/802/608802.png",
                    UrlEstabelecimento = "https://docepreco.com.br/"
                },

                 new Produto
                {
                    Titulo = "Pão de forma 100% integral Panco",
                    Categoria = "Pães",
                    Endereco = "Av. Nordestina - São Miguel Paulista, SP, SP",
                    Local = "Mercado Higas",
                    Preco = 7.50m,
                    Imagem = "https://araujo.vteximg.com.br/arquivos/ids/3972853-375-375/07896066301457.jpg?v=637408476261270000",
                    UrlEstabelecimento = "http://www.supermercadohigas.com.br/ofertas"
                },

                  new Produto
                {
                    Titulo = "Chocolate Only4",
                    Categoria = "Doces",
                    Endereco = "Av. Nordestina - São Miguel Paulista, SP, SP",
                    Local = "Mercado Doce Preço",
                    Preco = 15.00m,
                    Imagem = "https://images.tcdn.com.br/img/img_prod/818693/chocolate_70_cacau_cranberry_only4_80g_229_3_20200725164846.jpg",
                    UrlEstabelecimento = "https://docepreco.com.br/"
                },

                  new Produto
                {
                    Titulo = "Chocolate Only4",
                    Categoria = "Doces",
                    Endereco = "Av. Nordestina - São Miguel Paulista, SP, SP",
                    Local = "Mercado Doce Preço",
                    Preco = 15.00m,
                    Imagem = "https://images.tcdn.com.br/img/img_prod/818693/chocolate_70_cacau_cranberry_only4_80g_229_3_20200725164846.jpg",
                    UrlEstabelecimento = "https://docepreco.com.br/"
                },

                  new Produto
                {
                    Titulo = "Chocolate Only4",
                    Categoria = "Doces",
                    Endereco = "Av. Nordestina - São Miguel Paulista, SP, SP",
                    Local = "Mercado Doce Preço",
                    Preco = 15.00m,
                    Imagem = "https://images.tcdn.com.br/img/img_prod/818693/chocolate_70_cacau_cranberry_only4_80g_229_3_20200725164846.jpg",
                    UrlEstabelecimento = "https://docepreco.com.br/"
                },

                  new Produto
                {
                    Titulo = "Chocolate Only4",
                    Categoria = "Doces",
                    Endereco = "Av. Nordestina - São Miguel Paulista, SP, SP",
                    Local = "Mercado Doce Preço",
                    Preco = 15.00m,
                    Imagem = "https://images.tcdn.com.br/img/img_prod/818693/chocolate_70_cacau_cranberry_only4_80g_229_3_20200725164846.jpg",
                    UrlEstabelecimento = "https://docepreco.com.br/"
                },

                  new Produto
                {
                    Titulo = "Chocolate Only4",
                    Categoria = "Doces",
                    Endereco = "Av. Nordestina - São Miguel Paulista, SP, SP",
                    Local = "Mercado Doce Preço",
                    Preco = 15.00m,
                    Imagem = "https://images.tcdn.com.br/img/img_prod/818693/chocolate_70_cacau_cranberry_only4_80g_229_3_20200725164846.jpg",
                    UrlEstabelecimento = "https://docepreco.com.br/"
                },

                  new Produto
                {
                    Titulo = "Chocolate Only4",
                    Categoria = "Doces",
                    Endereco = "Av. Nordestina - São Miguel Paulista, SP, SP",
                    Local = "Mercado Doce Preço",
                    Preco = 15.00m,
                    Imagem = "https://images.tcdn.com.br/img/img_prod/818693/chocolate_70_cacau_cranberry_only4_80g_229_3_20200725164846.jpg",
                    UrlEstabelecimento = "https://docepreco.com.br/"
                },

                  new Produto
                {
                    Titulo = "Chocolate Only4",
                    Categoria = "Doces",
                    Endereco = "Av. Nordestina - São Miguel Paulista, SP, SP",
                    Local = "Mercado Doce Preço",
                    Preco = 15.00m,
                    Imagem = "https://images.tcdn.com.br/img/img_prod/818693/chocolate_70_cacau_cranberry_only4_80g_229_3_20200725164846.jpg",
                    UrlEstabelecimento = "https://docepreco.com.br/"
                },

                  new Produto
                {
                    Titulo = "Chocolate Only4",
                    Categoria = "Doces",
                    Endereco = "Av. Nordestina - São Miguel Paulista, SP, SP",
                    Local = "Mercado Doce Preço",
                    Preco = 15.00m,
                    Imagem = "https://images.tcdn.com.br/img/img_prod/818693/chocolate_70_cacau_cranberry_only4_80g_229_3_20200725164846.jpg",
                    UrlEstabelecimento = "https://docepreco.com.br/"
                }
            };

            return Ok(produtos);
        }
    }
}
