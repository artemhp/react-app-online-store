import { useSelector } from "react-redux";

export default function ItemsList() {
  const products = useSelector((state) => state.products.value);
  console.log(products);
  return (
    <section className="category" data-name="Boat">
      <h2>List</h2>
      <div className="category__container">
        {products.map((item) => (
          <div className="product">
            <button className="product__favourite">
              <img
                src={
                  item.isFavourite
                    ? "images/product__favourite--true.png"
                    : "images/product__favourite.png"
                }
                alt="favourite"
                height="20"
              />
            </button>
            <img
              src={"images/products/" + item.img + ".png"}
              className="product__img"
              alt={item.title}
              height="80"
            />
            <p className="product__title">{item.title}</p>
            {item.sale && (
              <div className="product__sale">
                <span className="product__sale--old">${item.price}</span>
                <span className="product__sale--percent">
                  -{item.salePercent}%
                </span>
              </div>
            )}

            <div className="product__info">
              <span className="product__price">
                ${item.price - (item.price * (item.salePercent || 0)) / 100}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
