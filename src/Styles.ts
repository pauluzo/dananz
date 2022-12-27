import {makeStyles} from "@mui/styles";
import { Theme } from '@mui/material/styles';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const useStyles = makeStyles(theme => ({
  App : {
    
  },
  Container : {
    padding : "2em 0px",
    maxWidth : "unset"
  },
  Header : {
    display : "flex",
    justifyContent : "space-between",
    alignItems : "center",
    padding : "0em 3.5em",
  },
  Button : {
    marginLeft : "10px",
    color : "#333333",
    fontSize : "17px",
    padding : "10px 25px"
  },
  TeamsBtn : {
    fontWeight : "600"
  },
  ContactBtn : {
    backgroundColor : "#2C3878",
    color : "#fff",
    border : "1px solid #3C3C3C",
    borderRadius : "0px",
    marginLeft : "20px",
    fontSize : "15px",
    '&:hover' : {
      backgroundColor : "#2C3878",
      color : "#fff",
    }
  },
  ContactBtn2 : {
    width: "142px",
    height: "49px",
    color : "black",
    backgroundColor : "white",
    marginTop : "20px",
    borderRadius : "0px",
    '&:hover' : {
      backgroundColor : "#fff",
      color : "#000",
    }
  },
  Intro : {
    margin : "30px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding : "0em 3.5em",
  },
  IntroTitle : {
    fontWeight : "700",
    textAlign : "center",
  },
  IntroText : {
    maxWidth : "450px",
    textAlign : "center",
    marginTop : "20px",
  },
  IntroImage : {
    marginTop : "30px",
    width : "100%"
  },
  GridBody : {
    padding : "0em 3.5em",
  },
  GridBodyTitle : {
    fontWeight : "600",
    marginBottom : "10px"
  },
  GridBodyText : {
    color : "#9C9C9C"
  },
  GridBoxContainer : {
    marginBottom : "20px"
  },
  GridBoxContainer1 : {
    marginRight : "15px",
    marginBottom : "20px",
    [theme.breakpoints.down('sm')]: {
      marginRight : "0px",
    }
  },
  GridBoxContainer2 : {
    marginLeft : "15px",
    marginBottom : "20px",
    [theme.breakpoints.down('sm')]: {
      marginLeft : "0px",
    }
  },
  Banner : {
    minHeight : "200px",
    backgroundColor : "#2C3878",
    padding : "0em 3.5em"
  },
  BannerGrid1 : {
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
    minHeight : "200px",
    color : "white"
  },
  BannerText1 : {
    fontWeight: "600",
    lineHeight: "170%",
  },
  BannerGrid2 : {
    paddingLeft : "20%",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    minHeight : "200px",
    color : "white",
    [theme.breakpoints.down('sm')]: {
      paddingLeft : "0px",
    }
  },
  BannerText2 : {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "160%",
    color : "#D9D9D9"
  },
  Footer : {
    padding : "4em 3.5em",
  },
  FooterText1 : {
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "170%",
    color : "#333",
    maxWidth : "450px"
  },
  FooterGrid2 : {
    paddingLeft : "20%",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    height : "100%",
    [theme.breakpoints.down('sm')]: {
      paddingLeft : "0px",
      marginTop : "25px"
    }
  },
  FooterText2 : {
    fontSize: "18px",
    lineHeight: "160%",
    color : "#333"
  },
  FooterGrid2Box : {
    display : "flex",
    alignItems : "center"
  },
  FooterGrid2Span : {
    height: "14px",
    width: "14px",
    borderRadius: "50%",
    backgroundColor: "#333",
    marginRight: "10px",
  },
  FooterGrid2Input : {
    marginTop : "30px"
  },
  Socials : {
    marginLeft : "50%",
    marginTop : "30px",
    color : "#333",
  },
  SocialsImgs : {
    display : "flex",
    alignItems : "center",
    justifyContent : "space-between",
    marginTop : "10px"
  },
  SocialsSpan : {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "gainsboro",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}))

export {useStyles};