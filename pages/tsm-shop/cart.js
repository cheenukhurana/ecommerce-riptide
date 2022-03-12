import TsmShopLayout from "../../components/tsmShopLayout"
import {useAppContext} from '../../context/AppContextProvider'

const TsmShopCart = () => {

    const {cartItems} = useAppContext()
    console.log(cartItems)

    return (
        <TsmShopLayout cart>
            <div className="max-w-xl mx-auto px-2">
                <div className="border-1 border-1-[#DDDDDD] pb-2">My Cart</div>
                <div className="flex">
                    Hello World
                    {Object.keys(cartItems).map((cartItem) => (
                        <div key={cartItem}>
                            {cartItems[cartItem]}
                        </div>
                    ))}
                </div>
            </div>
            
        </TsmShopLayout>
    )
}

export default TsmShopCart