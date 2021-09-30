using System;
namespace Alimentaria.Api.Domain
{
    public class Produto
    {
        public string Titulo { get; set; }
        public string Categoria { get; set; }
        public decimal Preco { get; set; }
        public string Local { get; set; }
        public string Endereco { get; set; }
        public string Imagem { get; set; }
        public string UrlEstabelecimento { get; set; }
    }
}
