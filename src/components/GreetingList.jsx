import GreetingCard from "./GreetingCard"


export default function GreetingList(){
    return (
        <section className="GreetingList">
            <h2> Greeting List</h2>
            <GreetingCard firstName="Aaron"/>
            <GreetingCard firstName="Jiho"/>
            <GreetingCard firstName="Hermenengildo"/>
        </section>
    )
}

