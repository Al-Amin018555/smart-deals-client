const Product = ({ product }) => {
    const { title, price_min, price_max, image } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm h-100">
                <figure className="p-4">
                    <img
                        src={image}
                        alt={title}
                        className="rounded-xl object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: {price_min} - {price_max}</p>
                    <div className="card-actions">
                        <button className="btn w-full btn-primary btn-outline">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;