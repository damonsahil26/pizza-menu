export const Footer = () => {
    const hours = new Date().getHours();
    const openHours = 12;
    const closedHours = 22;

    const isOpen = (hours >= openHours && hours <= closedHours);

    return (
        <div>
            <footer className="footer">
                {isOpen ? "We're open!!" : "Sorry !! We're are open till 22:00."}
            </footer>
        </div>
    );
}