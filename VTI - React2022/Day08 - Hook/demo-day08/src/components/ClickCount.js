import { useState } from "react"

export default function ClickCount(props) {
    const [count, setCount] = useState(0);
    let increaseByone = () => {
        setCount(count +1);
    }


    return (
        <div className="container pt-5">
            <span>{count}</span>
            <button onClick={increaseByone}>Increase by one</button>
        </div>
    )
}