import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  link: {
    textDecoration: "none",
    backgroundColor: "#444",
    color: "#eee",
    "&:hover, &:focus": {
      // backgroundColor: theme.palette.background.dark,
      backgroundColor: "#999",
      color: "#2097bb",
    },
  },
  linkActive: {
    // backgroundColor: theme.palette.background.dark,
    backgroundColor: "#2097bb",
    color: "#fff",
  },
  linkNested: {
    paddingLeft: 0,
    backgroundColor: "#444",
    color: "#eee",
    "&:hover, &:focus": {
      backgroundColor: "#999",
    },
  },
  linkIcon: {
    marginRight: theme.spacing(1),
    // color: theme.palette.text.secondary + "99",
    color: "eee",
    transition: theme.transitions.create("color"),
    width: 24,
    display: "flex",
    justifyContent: "center",
  },
  linkIconActive: {
    // color: theme.palette.primary.main,
    color: "#fff",
  },
  linkText: {
    padding: 0,
    // color: theme.palette.text.secondary + "CC",
    color: "#eee",
    transition: theme.transitions.create(["opacity", "color"]),
    fontSize: 16,    
  },
  linkTextActive: {
    // color: theme.palette.text.primary,
    color: "#eee",
  },
  linkTextHidden: {
    opacity: 0,
  },
  nestedList: {
    paddingLeft: theme.spacing(2) + 30,
  },
  sectionTitle: {
    marginLeft: theme.spacing(4.5),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    height: 1,
    backgroundColor: "#D8D8D880",
  },
}));
