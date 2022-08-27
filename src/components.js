 import React from "react";
 export const TextComponent = ({
    label,
    styleProps,
    children,
    CustomTag = "div",
  }) => (
    <CustomTag style={styleProps}>
      {label}
      {children}
    </CustomTag>
  );
  export const Dropdown = (props) => {
    return (
      <div >
        <select style={{
            background: "#FFFFFF",
            border: "1px solid #E8E8EA",
            borderRadius: "5px",
            width: "390px",
            height: "56px",
        }}>
          {props.options?.map((m) => (
            <option value={m}>{m}</option>
          ))}
        </select>
      </div>
    );
  };
  export const Dropdown1 = (props) => {
    return (
      <div >
        <select style={{
            background: "#FFFFFF",
            border: "1px solid #E8E8EA",
            borderRadius: "5px",
            width: "100%",
            height: "56px",
        }}>
          {props.options?.map((m) => (
            <option value={m}>{m}</option>
          ))}
        </select>
      </div>
    );
  };

  export const Dropdown2 = (props) => {
    return (
      <div >
        <select style={{
            background: "#FFFFFF",
            border: "1px solid #E8E8EA",
            borderRadius: "5px",
            width: "200px",
            height: "56px",
        }}>
          {props.options?.map((m) => (
            <option value={m}>{m}</option>
          ))}
        </select>
      </div>
    );
  };
export const FN=(props)=>{
  return (<div> <button  
    style={{
      border: "1px solid #5375E2",
      borderRadius: "5px",
      fontFamily: 'Nunito Sans',
         fontStyle: "normal",
         fontWeight: "400",
         fontSize: "16px",
         lineHeight: "22px",
         color: "#5375E2",
         padding:"20px",
         marginLeft:"150px"
            }} 
  onClick={()=>props.clickEvent(props.updateStateMethod,props.stateVariable)} >{props.label} 
  FN
  </button></div>
)}
export const AN=(props)=>{
  return ( <div><button
     style={{
  border: "1px solid #5375E2",
  borderRadius: "5px",
  fontFamily: 'Nunito Sans',
         fontStyle: "normal",
         fontWeight: "400",
         fontSize: "16px",
         lineHeight: "22px",
         color: "#5375E2",
         padding:"20px",
         marginLeft:"100px"
}}
onClick={()=>props.clickEvent(props.updateStateMethod,props.stateVariable)}>{props.label} 
AN
</button>
</div>
)}

  export const InputComponent = (props) => {
    return (
        <div
        style={{
          display: "flex",
          flexDirection: (props.type === "text"  || props.type === "number" )? "column" : "row",
        }}
      >
        {/* {props.type === "radio" && <input {...props}></input>} */}
        <TextComponent
          label={props.label}
          
          CustomTag={(props.type === "text" || props.type === "number")? "div" : "span"}
        />
        {(props.type === "text" || props.type === "number" )&& <input {...props}></input>}
      </div>
      );
    };
    export const DatePick=()=>
{   return <div>
            <input type="date"  style={{
              background: "#FFFFFF",
              borderRadius: "4px",
              marginLeft:"30px",
              width:"100%",
              padding:"19px"
            }}/>
            </div>
}
export const Subject = () => {
  return <div>
    <input type="text"
    style={{padding: "19px", borderRadius: "10px",width:"250px", marginLeft:"30px"}}/>
    </div>}
export const Box = (props) => (
    <>
      <TextComponent label={props.header} styleProps={{ fontSize: "24px", textAlign: "left", fontWeight: 700 ,margin:"10px"}}/>
      <div  style={{ width: "1196px",height: "1464px",left: "122px",top: "183px",marginLeft:"100px",
       background: "#FBFBFB",padding:"20px"}}>{props.children}</div>
    </>
  )

  export const Button=(props)=>{
    return <div><button  
    style={{width: "174px",
            height: "40px",
            
            background: "#5375E2",
            borderRadius: "5px",
            }}
  onClick={()=>props.clickEvent(props.updateStateMethod,props.stateVariable)} >{props.label} 
  
  </button></div>
  }