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
        width: "450px"
    },
    filter: {
        marginTop: "30px",
        width: "95%"
    },
    categoryButtons: {
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column"
        },
        backgroundColor: "rgba(227, 227, 227, 0.6)"
    },
    category: {
        padding: "5px 15px !important",
        width: "100%"
    },
    markedCategory: {
        padding: "5px 15px !important",
        width: "100%",
        backgroundColor: "rgb(220, 220, 220)"
    },
    categories: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        },
    }
});

export default searchStyles;