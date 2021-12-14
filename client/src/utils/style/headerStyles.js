const headerStyles = (theme) => ({
    header: {
        '&.css-hip9hq-MuiPaper-root-MuiAppBar-root': {
            backgroundColor: "rgba(247, 247, 247)",
        },
        padding: "5px 40px 5px 40px",
        fontFamily: "'Zilla Slab', serif"
    },
    link: {
        textDecoration: "none",
        color: "rgb(15, 64, 49)"
    },
    name: {
        width: "auto",
        display: "inline-block",
        marginRight: "10px",
        color: "rgb(15, 64, 49)",
        [theme.breakpoints.down('xs')]: {
            display: "none"
        },
    },
    iconDiv: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    icon: {
        margin: "0 10px 0 10px"
    }
});

export default headerStyles;