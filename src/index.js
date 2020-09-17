var productsElement = document.querySelector(".product-list");

var cardProductList = "";
productList.forEach(function (product) {
  cardProductList += `<li class="card">
                        <img
                          class="card__image"
                          src = ${product.image} 
                          alt= Imagem do produto ${product.description}
                        />

                        <div class="card__info">
                          <p class="card__text">
                            ${product.description}
                            <span class="display--block font--size-1">R$ ${product.price
                              .toFixed(2)
                              .toString()
                              .replace(".", ",")}</span>
                          </p>

                          <button class="button">Adicionar ao carrinho</button>
                        </div>
                      </li>`;
});

productsElement.innerHTML = cardProductList;
