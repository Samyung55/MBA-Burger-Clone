import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.webp";

const About = () => {
    return (
        <section className="about">
            <main>
                <h1>
                    About Us
                </h1>
                <article>
                    <h4>MBA Burger Wala</h4>
                    <p>We are MBA Burger Wala. The place for most tasy burgers
                        on the earth.
                    </p>

                    <p>
                        Explore the vaious type of food and burgers. Click below to 
                        see the menu
                    </p>

                    <Link to="/">
                        <RiFindReplaceLine />
                    </Link>
                </article>

                <div>
                    <h2>Founder</h2>
                    <article>
                        <div>
                            <img src={me} alt="Founder" />
                            <h3>Abhishek Singh</h3>
                        </div>

                        <p>
                            I am Abishek Singh, the founder
                            of MBA Burger Wala. Afflicted to God taste...
                        </p>
                    </article>
                </div>
            </main>
        </section>
    )
}

export default About