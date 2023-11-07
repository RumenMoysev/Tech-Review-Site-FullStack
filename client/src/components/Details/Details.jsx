import './Details.css'

export default function Details() {
    return (
        <section id="details" className="hidden">
            <div className="detailsContainer">
                <h2>Should you buy the Galaxy S23 Ultra?</h2>
                <img
                    src="https://images.samsung.com/is/image/samsung/p6pim/uk/feature/164370272/uk-feature-galaxy-s-535141640?$FB_TYPE_I_JPG$"
                    alt="picture"
                />

                <div className="pBtnContainer">
                    <p>
                        In this article we will look at some categories and
                        seeif the Galaxy S23 Ultra is worth buying.
                    </p>

                    <div className="detailsBtns">
                        <button>
                            <a href="/S23Ultra">Edit</a>
                        </button>
                        <button>
                            <a href="/ada">Delete</a>
                        </button>
                        <button>
                            <a href="/dada">Like</a>
                        </button>
                    </div>
                </div>

                <p className="likes">No likes yet</p>
            </div>
        </section>
    );
}