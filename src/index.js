var products = document.querySelector(".product-list");

var list = "";
productList.forEach(function (product) {
  list += `<li class="card">
            <img
              class="card__image"
              src = ${product.image} 
              alt= ${product.alt}
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

products.innerHTML = list;
