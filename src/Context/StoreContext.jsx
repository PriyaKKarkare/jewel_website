import { createContext, useEffect, useState } from "react";
import { jewel_list } from "../assets/assets.js";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

	const [cardItems, setCardItems] = useState({})

	const addToCart = (itemId, quantity = 1) => {
		setCardItems((prev) => {
			const prevQty = prev[itemId] || 0;
			return { ...prev, [itemId]: prevQty + quantity };
		});
	};


	const removeFromCart = (itemId) => {
		setCardItems((prev) => {
			const currentQty = prev[itemId];
			if (!currentQty) return prev;

			if (currentQty === 1) {
				const updatedCart = { ...prev };
				delete updatedCart[itemId];
				return updatedCart;
			} else {
				return { ...prev, [itemId]: currentQty - 1 };
			}
		});
	};

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cardItems) {
			if (cardItems[item] > 0) {
				let itemInfo = jewel_list.find((product) => product._id === item);
				// console.log("itemInfo----------------", itemInfo, cardItems, item);

				if (itemInfo) totalAmount += itemInfo.price * cardItems[item];
				// console.log("carditems------", cardItems[item]);

			}
		}
		return totalAmount;
	};

	// console.log("carditems, ----------------", cardItems);


	const contextValue = {
		jewel_list, cardItems, setCardItems, addToCart, removeFromCart, getTotalCartAmount
	}
	return (
		<StoreContext.Provider value={contextValue}>
			{props.children}
		</StoreContext.Provider>

	)
}
export default StoreContextProvider;