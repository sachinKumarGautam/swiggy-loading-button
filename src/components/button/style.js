const styles = theme => ({
    "@keyframes slider": {
        "0%": { width: "0" },
        "100%": { width: "90%" }
    },
    buttonWrapper: {
        color: "#fff",
        width: "fit-content",
        padding: "10px 20px",
        position: "absolute",
        cursor: "pointer",
        borderRadius: 8,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#7cbb0f",
        boxShadow: "0px 11px 34px 10px rgba(0,0,0,0.3)",
        fontSize: 70,
        padding: "20px 60px",
        "&:before": {
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            zIndex: "-1",
            content: '""'
        }
    },
    buttonSliderAnimation: {
        "&:after": {
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.1)",
            WebkitTransform: "translateZ(0)",
            transform: "translateZ(0)",
            WebkitAnimation: "slider 2s ease-out",
            animation: "slider 2s ease-out",
            width: "90%",
            zIndex: "-1",
            content: '""'
        }
    }
});

export default styles;
