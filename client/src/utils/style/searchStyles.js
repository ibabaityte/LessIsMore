const searchStyles = (theme) => ({
    search: {
        width: "100%"
    },
    form: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    searchBar: {
        width: "50%"
    },
    filter: {
        marginTop: "30px",
        width: "65%"
    },
    categoryButtons: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgba(227, 227, 227, 0.6)"
    },
    category: {
        width: "20%",
        padding: "5px !important",
        // margin: "10px"
    }
});

export default searchStyles;