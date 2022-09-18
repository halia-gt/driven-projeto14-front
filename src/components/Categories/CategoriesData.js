export class CategoryModel {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }
  getCategories() {
    return categoryRepository;
  }
}

const categoryRepository = [
  new CategoryModel("Summer Collection", "../assets/img/summer_collection.png"),
  new CategoryModel("Winter Collection", "../assets/img/winter_collection.png"),
  new CategoryModel("Shoes", "../assets/img/shoes.png"),
  new CategoryModel("Accesories", "../assets/img/accesories.png"),
];
