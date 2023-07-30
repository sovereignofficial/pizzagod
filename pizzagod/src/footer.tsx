export const Footer = () => {
    const currTime = new Date().getHours();
    const openHour = 9;
    const closeHour = 23;
    let isOpen = currTime >= openHour && currTime <= closeHour;

    return (
        <footer className="footer">
            <p>{isOpen ? "We're currently open!" : "We're closed."} </p>
        </footer>
    )
}