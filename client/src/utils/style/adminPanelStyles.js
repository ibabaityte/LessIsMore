const adminPanelStyles = () => ({
    adminPanel: {
        width: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    link: {
        textDecoration: "none",
        color: "black"
    },
    categoryButtons: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "rgba(227, 227, 227, 0.6)",
    },
    category: {
        padding: "5px 15px !important",
        '&.css-ueukts-MuiButtonBase-root-MuiToggleButton-root': {
            border: "none !important"
        }
    },
    addButton: {
        color: "black",
        backgroundColor: "rgba(210, 210, 210)",
        marginTop: "30px",
        padding: "8px 15px"
    }
});

export default adminPanelStyles;