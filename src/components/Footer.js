export const Footer = () => {
    const hours = new Date().getHours();
    const openHours = 12;
    const closedHours = 22;

    const isOpen = (hours >= openHours && hours <= closedHours);

    return (
        <div>
            <footer className="footer">
                {
                    isOpen && (<div className="order">
                        <p>We're open until {closedHours}:00. Come visit us now or order online.</p>
                        <button className="btn">Order Now</button>
                    </div>)
                }
            </footer>
        </div>
    );
}