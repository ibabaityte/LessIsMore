const userProfileStyles = (theme) => ({
    grid: {
        width: "60%",
        minHeight: "20vh",
        margin: "10px auto 50px auto",
        display: "flex",
        alignItems: "flex-start"
    },
    userInfoDiv: {
        boxShadow: "0px 0px 33px -11px black",
        backgroundColor: "rgb(240,240,240)",
        padding: "40px",
    },
    heading: {
        margin: "20px auto 20px auto",
        textAlign: "center"
    },
    info: {
        margin: "10px 0 10px 0"
    },
    infoGrid: {
        padding: "15px"
    },
    infoName: {
        fontWeight: "bold"
    },
    button: {
        width: "50%",
        backgroundColor: "rgba(227, 227, 227)",
        color: "black",
    },
    link: {
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
        marginTop: "20px"
    }
});

export default userProfileStyles;