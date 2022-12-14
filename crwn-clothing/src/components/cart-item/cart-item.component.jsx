import "./cart-item.styles.jsx"
import { CartItemContainer, Img, ItemDetails, Name } from "./cart-item.styles.jsx"

const CartItem = ({ cartItem }) => {

    const { name, imageUrl, price, quantity } = cartItem
    return (
        <CartItemContainer>
            <Img src={imageUrl} />
            <ItemDetails>
                <Name>{name}</Name>
                <span className="price">{quantity}  x ${price}</span>
            </ItemDetails>

        </CartItemContainer>
    )
}

export default CartItem