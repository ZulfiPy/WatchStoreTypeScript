type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = ({ viewCart, setViewCart }: PropsType) => {
    const button: JSX.Element = viewCart
        ? <button onClick={() => setViewCart(false)}>View Products</button>
        : <button onClick={() => setViewCart(true)}>View Cart</button>

    const content: JSX.Element = (
        <nav className="nav">
            {button}
        </nav>
    )

    return content;
}

export default Nav;