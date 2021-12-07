const adminCouponsStyles = (theme) => ({
    coupons: {
        width: "70%",
        margin: "0 auto 50px auto",
        backgroundColor: "rgb(240,240,240)",
        boxShadow: "0px 0px 33px -11px black",
        padding: "20px",
    },
    couponNames: {
        [theme.breakpoints.down('md')]: {
            width: "70%",
            margin: "0 auto"
        }
    },
    heading: {
        textAlign: "center",
        margin: "50px",
    },
    createHeading: {
        textAlign: "center",
        margin: "0"
    },
    form: {
        width: "70%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        margin: "25px auto",
        [theme.breakpoints.down('md')]: {
            margin: "10px auto",
            flexDirection: "column"
        }
    },
    input: {
        margin: "15px 15px"
    },
    couponInfo: {
        margin: "10px"
    },
    deleteIcon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    couponCreateButton: {
        height: "50px",
        margin: "10px",
        backgroundColor: "rgba(210, 210, 210, 0.5)"
    }
});

export default adminCouponsStyles;