import React from "react";
import { Country, State } from "country-state-city";

const Shipping = () => {
    return (
        <section className="shipping">
            <main>
                <h1>
                    Shipping Details
                </h1>
                <form>
                    <div>
                        <label>H.No.</label>
                        <input type="text" placeholder="House No."  />
                    </div>
                    <div>
                        <label>City</label>
                        <input type="text" placeholder="Enter City"  />
                    </div>
                    
                </form>
            </main>
        </section>
    )
}