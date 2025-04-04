"use client";
import Image from "next/image";
import Header from "../../src/components/header";
import Nav from "../../src/components/nav";
import pokeball from "../assets/pokeball.png";
import pokemon from "../assets/pokemon.jpg"

export default function About() {
    return (
        <>
            <div>
                <Header>
                    <Nav />
                </Header>
            </div>
            <div style={{ backgroundColor: "#6f98d1", padding: "2rem", minHeight: "100vh" }}>
                <h1 style={{textAlign: "center", fontSize: "2rem", color: "#FFCB05FF"}}>Welcome To My Pokémon Card App!</h1>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem"}}>
                    <Image src={pokeball} alt="Pokéball picture" width={250} />
                    <p style={{width: "25%", marginLeft: "2rem"}}>
                        Welcome Trainer! If you love all things Pokémon like me, especially collecting cards, you're going to love the ability to find
                        every card that has been made for the specific pokemon you search. Make sure when you input their name that it is spelled correctly.
                        To see my favorite pokemon click on Home and search for Exploud, Garchomp, and Reshiram!
                    </p>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem", flexDirection: "column"}}>
                    <p style={{textAlign: "center", fontSize: "1.5rem"}}>
                        Yes we also work with trainer cards! Try looking up <b>Cynthia</b>
                    </p>
                    <p style={{textAlign: "center", fontSize: "1.5rem"}}>
                        Yes you can also look up a little more general such as <b> EX </b>
                    </p>
                    <Image src={pokemon} alt="picture of pikachu and charizard" width={900}/>
                </div>
            </div>
        </>
    );
}
