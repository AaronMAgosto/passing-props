
export default function GreetingCard(props) {
    const { firstName } = props
    return (
        <div className="GreetingCard"> 
        <h3> Hello {firstName}! </h3>
        </div>
    )
}


