const subscribeStyles = (theme) => ({
    modalBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "45%",
        minHeight: "45%",
        backgroundColor: 'rgb(242, 241, 237)',
        border: '2px solid #000',
        boxShadow: "3px 3px 5px rgba(51, 51, 50, 0.5)",
        borderRadius: "10px",
        padding: "20px",
    },
    iconDiv: {
        display: "flex",
        justifyContent: "flex-end"
    },
    modalHeading: {
        textAlign: "center",
        [theme.breakpoints.down(900)]: {
            fontSize: "20px"
        },
    },
    modalIcon: {
        width: "100%"
    },
    modalForm: {
        height: "60%",
        marginBottom: "30px",
    },
    form: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px"
    },
    input: {
        width: "50%",
        margin: "30px"
    },
    button: {
        // marginTop: "30px",
        padding: "10px 30px 10px 30px",
        backgroundColor: "rgba(51, 51, 50, 0.1)"
    }
});

export default subscribeStyles;