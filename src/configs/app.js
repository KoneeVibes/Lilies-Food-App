import Logo from "../assets/Logo.svg"
import ProfilePhoto from "../assets/Dashboard/ProfilePhoto.svg"
import HomeIcon from "../assets/Dashboard/HomeIcon.svg"
import ProfileIcon from "../assets/Dashboard/ProfileIcon.svg"
import OrdersIcon from "../assets/Dashboard/OrdersIcon.svg"
import CartIcon from "../assets/Dashboard/CartIcon.svg"
import Hamburger from "../assets/Dashboard/Hamburger.svg"
import Pasta from "../assets/Dashboard/Pasta.svg"
import ProteinBalls from "../assets/Dashboard/ProteinBalls.svg"
import EggMeal from "../assets/Dashboard/EggMeal.svg"
import Sandwich from "../assets/Dashboard/Sandwich.svg"
import Stew from "../assets/Dashboard/Stew.svg"

export const foodImages = {
    hamburger: Hamburger,
    pasta: Pasta,
    proteinballs: ProteinBalls,
    eggmeal: EggMeal,
    sandwich: Sandwich,
    stew: Stew
}

export const foodInfo = [
    {
        name: 'Hamburger',
        image: foodImages.hamburger,
        introText: "This is the best Hamburger you would ever taste",
        price: 1000,
        mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        maxQuantity: 10
    },

    {
        name: 'Pasta',
        image: foodImages.pasta,
        introText: "This is the best Pasta you would ever taste",
        price: 1000,
        mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        maxQuantity: 10
    },

    {
        name: 'Protein Balls',
        image: foodImages.proteinballs,
        introText: "This is the best Protein Ball you would ever taste",
        price: 1000,
        mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        maxQuantity: 10
    },

    {
        name: 'Egg Meal',
        image: foodImages.eggmeal,
        introText: "This is the best Egg Meal you would ever taste",
        price: 1000,
        mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        maxQuantity: 10
    },

    {
        name: 'Sandwich',
        image: foodImages.sandwich,
        introText: "This is the best Sandwich you would ever taste",
        price: 1000, mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        maxQuantity: 10
    },

    {
        name: 'Stew',
        image: foodImages.stew,
        introText: "This is the best Stew you would ever taste",
        price: 1000,
        mainText: 'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        maxQuantity: 10
    },
]

export const icons = {
    logo: Logo,
    profilePhoto: ProfilePhoto,
    homeIcon: HomeIcon,
    profileIcon: ProfileIcon,
    ordersIcon: OrdersIcon,
    cartIcon: CartIcon,
}

export const theme = {
    colors: {
        base: "#00302E",
        disabled: "#C4C4C4",
        black: "#000000",
        offBlack: "#000000B0",
        white: "#FFFFFF",
        green: "#00302E",
        peach: "#F3C294",
        red: "#C92C33",
    },

    font: {
        sizes: {
            base: "0.8125rem",
            ss: "0.6875rem",
            md: "0.75rem",
            nm: "0.8125rem",
            ll: "1.0625rem",
            xl: "1.6875rem",
            xxl: "1.9375rem"
        },

        weight: {
            light: 400,
            normal: 500,
            medium: 600,
            bold: 700
        }
    }
}