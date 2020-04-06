import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input"
import AccountCircle from "@material-ui/icons/AccountCircle";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const StyledGrid = styled(Grid)`
  width: 487px;
  height: 72px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF 0% 0% no-repeat padding-box;
`
const StyledGridIcon = styled(Grid)`
  width: 36px;
  height: 36px;
  margin-right: 20px
`
const StyledGridInput = styled(Grid)`
  width: 350px;
  height: 72px;
  border-size: 0px;
  display: flex;
  align-items: center;
  .MuiInput-underline:before {
    border: none !important;
  };
  .MuiInput-underline:after {
    border: none !important;
  }
`

export default function InputWithIcon(props) {
  const classes = useStyles();

  const { title, type } = props;

  return (
      <div style={{width: '487px', margin: 'auto'}} className={classes.margin}>
        <StyledGrid >
          <StyledGridIcon item>
            <AccountCircle style={{fontSize: '36px'}} />
          </StyledGridIcon>
          <StyledGridInput item>
            <Input placeholder={title} style={{width:'350px', height:'50px', fontSize: '23px'}} type={type} />
          </StyledGridInput>
        </StyledGrid>
      </div>
  );
}
