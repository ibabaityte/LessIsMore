const productListStyles = (theme) => ({
    productList: {
        margin: "20px auto 50px auto",
        width: "70%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    product: {
        boxShadow: "0px 0px 33px -11px black",
        width: "85%",
        height: "100%",
    },
    productTitle: {
        fontWeight: "bold",
        fontSize: "16px",
        marginBottom: "15px"
    },
    titleLink: {
        textDecoration: "none",
        color: "black"
    },
    searchDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom : "30px"
    },
    cardContent: {
        height: "50px",
        [theme.breakpoints.down('md')]: {
            height: "70px"
        }
    },
    cardButtons: {
        height: "80px",
        display: "flex",
        alignItems: "flex-end"
    },
    cartProductCard: {
        margin: "15px",
        [theme.breakpoints.down(900)]: {
            width: "60%",
            margin: "15px auto"
        }
    },
    buttonGroup: {
        width: "100%"
    },
    sizeButtons: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgba(227, 227, 227, 0.3)"
    },
    size: {
        padding: "5px 15px 5px 15px !important",
    },
    link: {
        textDecoration: "none",
        color: "rgb(51, 51, 50)"
    },
    icon: {
        margin: "0 15px 0 5px"
    },
    numberInput: {
        padding: "5px"
    },
    removeIcon: {
        padding: "5px"
    },
    infoName: {
        fontWeight: "bold"
    }
});

export default productListStyles;