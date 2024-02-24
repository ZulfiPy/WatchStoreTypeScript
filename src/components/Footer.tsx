import useCart from "../hooks/useCart";
type PropsType = {
    viewCart: boolean,
}

const Footer = ({ viewCart }: PropsType) => {
    const { totalItems, totalPrice } = useCart();

    const year: number = new Date().getFullYear();

    const pageContent: JSX.Element = viewCart
        ? <p>Shopping Cart  &copy; {year}</p>
        : (
            <>
                <p>Total Items: {totalItems}</p>
                <p>Total Price: {totalPrice}</p>
                <p>Shopping Cart &copy; {year}</p>
            </>
        )

    const content: JSX.Element = (
        <footer className="footer">
            {pageContent}
        </footer>
    )

    return content;
}

export default Footer;