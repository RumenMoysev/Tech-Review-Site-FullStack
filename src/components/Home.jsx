export default function Home() {
    return (
        <section id="homePage">
            <div className="row">
                <div className="col ">
                    <h1>Tech Review Site</h1>
                    <p>
                        This is the place where you can find all information
                        you're looking for in the latest tech word!
                    </p>
                    <button>Reviews</button>
                </div>
                <div className="col notTouching">
                    <div
                        className="card "
                        style={{
                            backgroundImage:
                                "url(https://images.samsung.com/is/image/samsung/p6pim/uk/feature/164370272/uk-feature-galaxy-s-535141640?$FB_TYPE_I_JPG$)",
                        }}>
                        <h4>S23 Ultra Review</h4>
                        <p>
                            In this article we will look at some categories and
                            see if the Galaxy S23 Ultra is worth buying.
                        </p>
                    </div>
                    <div
                        className="card "
                        style={{
                            backgroundImage:
                                "url(https://www.digitaltrends.com/wp-content/uploads/2023/09/apple-iphone-15-pro-max-vs-samsung-galaxy-s23-ultra.jpg?fit=720%2C479&p=1)",
                        }}>
                        <h4>S23 Ultra Review</h4>
                        <p>
                            In this article we will look at some categories and
                            see if the Galaxy S23 Ultra is worth buying.
                        </p>
                    </div>
                    <h2>No reviews yet!</h2>
                </div>
            </div>
        </section>
    );
}