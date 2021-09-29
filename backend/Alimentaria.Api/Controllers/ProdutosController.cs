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
                    Titulo = "Leite sem lactose",
                    Categoria = "Bebidas",
                    Endereco = "Av. Nordestina - São Miguel Paulista, SP, SP",
                    Local = "Mercado Doce Preço",
                    Preco = 6.0m,
                    Imagem = "https://static.paodeacucar.com/img/uploads/1/802/608802.png"
                },

                 new Produto
                {
                    Titulo = "Leite sem lactose",
                    Categoria = "Bebidas",
                    Endereco = "Av. Nordestina - São Miguel Paulista, SP, SP",
                    Local = "Mercado Doce Preço",
                    Preco = 6.0m,
                    Imagem = "https://static.paodeacucar.com/img/uploads/1/802/608802.png"
                },

                  new Produto
                {
                    Titulo = "Leite sem lactose",
                    Categoria = "Bebidas",
                    Endereco = "Av. Nordestina - São Miguel Paulista, SP, SP",
                    Local = "Mercado Doce Preço",
                    Preco = 6.0m,
                    Imagem = "https://static.paodeacucar.com/img/uploads/1/802/608802.png"
                }
            };

            return Ok(produtos);
        }
    }
}
