const adminSubscriberStyle = (theme) => ({
    grid: {
        width: "30%",
        [theme.breakpoints.down('sm')]: {
            width: "50%",
        },
        margin: "10px auto 50px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        boxShadow: "0px 0px 33px -11px black",
        backgroundColor: "rgb(240,240,240)",
        padding: "80px"
    },
    heading: {
        textAlign: "center",
        margin: "50px",
        fontFamily: "'Zilla Slab', serif"
    },
    emailWrapper: {
        textAlign: "center",
        margin: "auto"
    },
    email: {
        margin: "15px auto",
    },
    emailNumber: {
        fontWeight: "bold",
        margin: "5px"
    }
});

export default adminSubscriberStyle;