var styles={
	root: {
	  backgroundColor: "blue",
	  height: "100vh",
	  display: "flex",
	  alignItems: "flex-start",
	  justifyContent: "center"
	},
	container: {
	  width: "51%",
	  display: "flex",
	  alignItems: "flex-start",
	  flexDirection: "column",
	  flexWrap: "wrap"
	},
	nav: {
	  display: "flex",
	  width: "100%",
	  justifyContent: "space-between",
	  alignItems:"center",
	  "& a": {
		color: "white"
	  }
	},
	palettes: {
			boxSizing: "border-box",
			width: "100%",
			height: "100%",
			display: "grid",
			gridTemplateColumns: "repeat(3, 30%)",
			gridGap: "3%"
	}
  };
  export default styles;