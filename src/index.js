import React from "react";
import ReactDOM from "react-dom";
import {
  TextComponent,
  Dropdown,
  Dropdown1,
  InputComponent,
  DatePick,
  Box,
  Button,
  Subject,
  Dropdown2,
  FN,
  AN
} from "./components";
import { Popup1 } from "./popup1";
import styled from "styled-components";
//import logo from "./img/logo.png";

const HeaderStyle = styled.div`
  color: #ffffff;
  background-color: #5375e2;
  width: 1440px;
  padding: 20px;
  font-family: Nunito Sans;
  paddingleft: 120px;
`;

const HeadStyle = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

const TimeStyle = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 5px;
  height: 68.53px;
  width: 56px;
  display: flex;
  flex-direction: row;
`;
const TextCom = styled.div`
  display: flex;
  flex-direction: row;
`;
// const Heading=styled.header`
//       font-family: Nunito;
//       font-style: normal;
//       font-weight: 600;
//       font-size: 24px;
//       line-height: 33px;
//       color: #000000;
//       padding-left:80px;
//       margin-top:35px;
// `


const Header = () => {
  return (
    <>
      {/* <div>
      <img src="https://ibb.co/kqwJ0Tf" alt="logo"/>
    
    </div> */}

      <HeaderStyle>
        <TextComponent
          label="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY"
          styleProps={{
            fontSize: "16px",
          }}
        />
        <TextComponent
          label="Exam Scheduler"
          styleProps={{
            fontSize: "32px",
            fontFamily: "Nunito",
          }}
        />
          <TextComponent
          label="Waseem"
          styleProps={{
            fontSize: "20px",
            fontWeight: "700",
            paddingLeft: "1200px",
            //textAlign: "right",
          }}
        />
      </HeaderStyle>
    </>
  );
};

export const App = ({data}) => {
  // const [sem, setSem] = useState("");
  // const [subjects, setSubjects] = useState("");
  // const[labs,setLabs]=useState("");
  return (
    <>
      <Header />
      <header
        style={{
          fontFamily: "Nunito",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "24px",
          color: "#000000",
          paddingLeft: "110px",
          marginTop: "35px",
        }}
      >
        Create New Schedule
      </header>
      <Box>
        <form >
        <HeadStyle>
          <div>
            <TextCom>
              <table>
                <th>Branch</th>
                <tr>
                  <Dropdown options={[data.branches]}/>
                </tr>
              </table>
              <table>
                <th>Department</th>
                <tr>
                  <Dropdown />
                </tr>
              </table>
              <table>
                <th>Semester</th>
                <tr>
                  <InputComponent
                    type="text"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #E8E8EA",
                      borderRadius: "5px",
                      width: "390px",
                      height: "56px",
                    }}
                />
                </tr>
              </table>
            </TextCom>
          </div>
          <div>
            <TextComponent label="ExamType" />
            <Dropdown1 />
          </div>
          
          <span style={{
                fontFamily: 'Nunito Sans',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "22px",
                color: "#000000",
              }}>Time Range</span>
          <div>
            <header style={{
               fontFamily: 'Nunito Sans',
               fontStyle: "normal",
               fontWeight: "700",
               fontSize: "16px",
               lineHeight: "22px",
               padding:"25px",
               color: "#000000"
            }}>FN</header>
              
              <InputComponent
                type="number"
                min="0"
                max="12"
                styleProps={{
                  display:"flex",
                  flexDirection:"row",
                  }}/>
            <InputComponent
                type="number"
                min="0"
                max="59"
                styleProps={{
                  display:"flex",
                  flexDirection:"row",
                  }}/>
              <TimeStyle>
              <InputComponent
                type="number"
                min="0"
                max="59"
                label={<TextComponent  />}
              />
            </TimeStyle>
        </div>

          {/* <InputComponent
     type="text"
     value={subjects}
     label={<TextComponent label="Subject"/>}
     onChange={(a)=>{
      console.log(a.target.value);
      setSubjects(a.target.value);
     }}
 /> */}    <span style={{
  fontFamily: 'Nunito Sans',
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "22px",
  color: "#000000",
}}>Subject1</span>
          <div style={{display:"flex",flexDirection:"row",padding:"10px"}}>
            <Dropdown2 />
            <Subject/>
            <DatePick />
            <FN/>
            <AN/>
          </div>
          <span style={{
                fontFamily: 'Nunito Sans',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "22px",
                color: "#000000",
              }}>Subject2</span>
          <div style={{display:"flex",flexDirection:"row",padding:"10px"}}>
            
            <Dropdown2 />
            <Subject/>
            <DatePick />
            <FN/>
            <AN/>
          </div>
          <span style={{
                fontFamily: 'Nunito Sans',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "22px",
                color: "#000000",
              }}>Subject3</span>
          <div style={{display:"flex",flexDirection:"row",padding:"10px"}}>
            <Dropdown2 />
            <Subject/>
            <DatePick />
            <FN/>
            <AN/>
          </div>
          <span style={{
                fontFamily: 'Nunito Sans',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "22px",
                color: "#000000",
              }}>Subject4</span>
          <div style={{display:"flex",flexDirection:"row",padding:"10px"}}>
            <Dropdown2 />
            <Subject/>
            <DatePick />
            <FN/>
            <AN/>
          </div>
          <span style={{
                fontFamily: 'Nunito Sans',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "22px",
                color: "#000000",
              }}>Subject5</span>
          <div style={{display:"flex",flexDirection:"row",padding:"10px"}}>
            <Dropdown2 />
            <Subject/>
            <DatePick />
            <FN/>
            <AN/>
          </div>
          <span style={{
                fontFamily: 'Nunito Sans',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "22px",
                color: "#000000",
              }}>Lab1</span>
          <div style={{display:"flex",flexDirection:"row",padding:"10px"}}>
            <Dropdown2 />
            <Subject/>
            <DatePick />
            <FN/>
            <AN/>
          </div>
          <span style={{
                fontFamily: 'Nunito Sans',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "22px",
                color: "#000000",
              }}>Lab2</span>
          <div style={{display:"flex",flexDirection:"row",padding:"10px"}}>
            <Dropdown2 />
            <Subject/>
            <DatePick />
            <FN/>
            <AN/>
          </div>
        </HeadStyle>

        <Button style={{padding:"10px"}}>
        <TextComponent label="SAVE" styleProps={{color:"red"}} />
        </Button>
        <Popup1/>
        </form>
      </Box>
    
    </>
  );
};
//export default App;
//ReactDOM.render(<App />, document.getElementById("app"));
