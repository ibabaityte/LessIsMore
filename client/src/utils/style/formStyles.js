const formStyles = (theme) => ({
    formGrid: {
        maxWidth: "70%",
        margin: "0 auto 50px auto",
        backgroundColor: "rgb(240,240,240)",
        boxShadow: "0px 0px 33px -11px black",
        padding: "20px",
    },
    heading: {
        textAlign: "center",
        margin: "50px",
        fontFamily: "'Zilla Slab', serif"
    },
    form: {
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    input: {
        width: "50%",
        margin: "15px auto",
    },
    userInput: {
        width: "50%",
        margin: "5px auto;"
    },
    button: {
        margin: "25px",
        width: "20%",
        backgroundColor: "rgba(210, 210, 210, 0.5)",
        [theme.breakpoints.down('sm')]: {
            width: "40%",
        }
    }
});

export default formStyles;