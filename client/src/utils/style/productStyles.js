const productStyles = (theme) => ({
    product: {
        width: "65%",
        margin: "70px auto"
    },
    productInfo: {
        width: "50$%",
        [theme.breakpoints.down(900)]: {
           textAlign: "center"
        },
    },
    imageCard: {
        width: "80%",
        margin: "0 auto",
        textAlign: "center"
    },
    price: {
        fontWeight: "bold"
    },
    productButtons: {
        marginTop: "50px"
    }
});

export default productStyles;