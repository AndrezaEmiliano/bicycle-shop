import { getProducts } from '../mocks/products.js';
import { setListener } from '../utils/dom.js';
import { formatToBRL } from '../utils/currency.js';

class Main {
  constructor() {
    this.products = [];
    this.filters = {
      category: 'all',
      search: '',
      price: 'asc',
    };
    this.renderElement = this.getRenderElement();

    this.init();
  }

  init() {
    this.setCategoryFieldListener();
    this.setSearchFieldListener();
    this.setPriceFieldListener();

    this.products = getProducts();

    this.renderProducts(this.products);
  }

  getRenderElement() {
    return document.querySelector('#product-list');
  }

  setCategoryFieldListener() {
    setListener(
      '#category-field',
      'change',
      this.handleCategoryFilter.bind(this)
    );
  }

  handleCategoryFilter(event) {
    this.filters.category = event.target.value;

    this.applyFilters();
  }

  filterByCategory(product) {
    if (this.filters.category === 'all') {
      return true;
    }

    return product.category === this.filters.category;
  }

  setSearchFieldListener() {
    setListener(
      '#search-field',
      'input',
      this.handleSearchFilter.bind(this)
      );
  }

  handleSearchFilter(event) {
    const search = event.target.value.trim();
    const searchLength = search.length;

    if (searchLength === 0 || searchLength > 1) {
      this.filters.search = search;

      this.applyFilters();
    }
  }

  filterBySearch(product) {
      return product.description
        .toLowerCase()
        .includes(this.filters.search.toLowerCase());
  }

  setPriceFieldListener() {
    setListener(
      '#sort-field',
      'change',
      this.handlePriceFilter.bind(this)
    );
  }

  handlePriceFilter(event){
    this.filters.price = event.target.value;

    this.applyFilters();
  }

  sortByPrice(firstProduct, secondProduct){
    if (this.filters.price === 'asc'){
      return firstProduct.price - secondProduct.price;
    }
    return secondProduct.price - firstProduct.price;
  }

  applyFilters() {
    const filteredProducts = this.products
      .filter(this.filterByCategory.bind(this))
      .filter(this.filterBySearch.bind(this))
      .sort(this.sortByPrice.bind(this));

    this.renderProducts(filteredProducts);
  }

  renderProducts(products) {
    this.renderElement.innerHTML = products.reduce((accumulator, product) => {
      return (accumulator += `
        <li class="card">
          <img
            class="card__image"
            src = ${product.image}
            alt= Imagem do produto ${product.description}
          />

          <div class="card__info">
            <p class="card__text">
              ${product.description}
              <span class="display--block font--size-1">
                ${formatToBRL(product.price)}</span>
            </p>

            <button class="button">Adicionar ao carrinho</button>
          </div>
        </li>
      `);
    }, '');
  }
}

new Main();
