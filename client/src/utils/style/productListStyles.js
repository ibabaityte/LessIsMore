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
    searchDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom : "30px"
    },
    cardContent: {
        height: "50px"
    },
    cardButtons: {
        height: "80px",
        display: "flex",
        alignItems: "flex-end"
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
        padding: "5px 5px 5px 5px !important",
    },
    link: {
        textDecoration: "none",
        color: "rgb(51, 51, 50)"
    },
    icon: {
        margin: "0 15px 0 5px"
    }
});

export default productListStyles;