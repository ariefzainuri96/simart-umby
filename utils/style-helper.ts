export const textFieldStyles = () => ({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#BFBFBF",
            borderRadius: 2,
            paddingLeft: 3,
        },
        "&:hover fieldset": {
            borderColor: "#18469C",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#18469C",
            borderWidth: "1px",
        },
    },
    "& label": {
        "&": {
            color: "#BFBFBF",
            marginLeft: 2,
        },
        "&.Mui-focused": {
            color: "#18469C",
        },
    },
});

const filledStyle: React.CSSProperties = {
    borderColor: "#00000000",
    border: "1px solid",
    color: "#FFF",
    fontFamily: "poppins",
};
