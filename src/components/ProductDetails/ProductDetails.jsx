import { use, useRef } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const ProductDetails = () => {
    const {_id, title, price_min, price_max, image } = useLoaderData();
    const { user, loading } = use(AuthContext);
    const bidModalRef = useRef(null);
    if (loading) return <p>loading...</p>

    const handleBidModalOpen = () => {
        bidModalRef.current.showModal()
    }
    const handleBidSubmit = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const bid = e.target.bid.value;   
        console.log(_id,name,email,bid);
    }
    return (
        <div className="flex gap-6 my-10 justify-between flex-col md:flex-row">
            <div className="space-y-4">
                <div>
                    <img src={image} className="max-w-125 rounded-lg" alt="" />
                </div>
                <div>
                    <h2>Product Description</h2>
                </div>
            </div>

            <div className="w-full">
                <Link>Back to Products</Link>
                <h2>{title}</h2>
                <div>
                    <h3>${price_min} - {price_max}</h3>
                    <p>Price Starts from</p>
                </div>
                <div>
                    <h3>Product Details</h3>
                    <p>Product ID : </p>
                    <p>Posted: </p>
                </div>
                <div>
                    <h2>Seller Information</h2>

                </div>
                <button
                onClick={handleBidModalOpen}
                className="btn btn-primary w-full">I Want Buy This Product</button>

                <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-center mb-4">Give Seller Your Offered Price!</h3>

                        <form onSubmit={handleBidSubmit}>
                            <fieldset className="fieldset">
                                <label className="label">Buyer Name</label>
                                <input type="text" name="name" className="input w-full" readOnly defaultValue={user.displayName} />
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input w-full" readOnly defaultValue={user.email} />
                                <label className="label">Place your Price</label>
                                <input type="text" className="input w-full" name="bid" placeholder="price" />
                                <button className="btn btn-neutral mt-4">Place Your Bid</button>
                            </fieldset>
                        </form>

                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default ProductDetails;