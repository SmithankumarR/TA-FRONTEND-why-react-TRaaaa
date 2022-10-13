function disableBtn(status = false){
    return status === true ?  alert('Enabled') :  alert('Disabled')
}
function ButtonDesign() {
  return (
    <>
      <button className="btn btn-pri" value= "Button1 "label="Button1" onClick={(disableBtn)}> |  Button | </button> 
      <button className="btn btn-pri" value= "Button1 "label="Button1" onClick={(disableBtn)}> |  Button | </button> 
      <button className="btn btn-sec" value= "|| Button "size="small" onClick={() => alert('my bg color is gray')} label="Button2" type="secondary"> || Button ||</button>
      <button className="btn btn-tri"
        size="large"
        value= "Button1 "
        label="Button3"
        type="tertiary"
        onClick={() => alert('my border color is gray')}
        
    >||| Button |||</button> 
      <button className="btn btn-blue"
        size="large"
        value= "Button1 "
        label="Button3"
        type="tertiary"
        onClick={() => alert('my border color is blue')}
        
    >||| Button |||</button> 
       <button className="btn btn-blue btn-noBorder"
        size="large"
        value= "Button1 "
        label="Button3"
        type="tertiary"
        onClick={() => alert('my color is blue')}
        
    >||| Button |||</button> 
      <button className="btn btn-tri btn-noBorder"
        size="large"
        value= "Button1 "
        label="Button3"
        type="tertiary"
        onClick={() => alert('my color is gray')}
        
    >||| Button |||</button> 
      <button className="btn btn-pri" value= "Button1 "label="Button1" onClick={(disableBtn)}> |  Button | </button> 
      <button className="btn btn-pri btn-large" value= "Button1 "label="Button1" onClick={(disableBtn)}> |  Button | </button> 
      <button className="btn btn-blue btn-large"
        size="large"
        value= "Button1 "
        label="Button3"
        type="tertiary"
        onClick={() => alert('my border color is blue')}>||| Button |||</button>
    </>
  );
}
export default ButtonDesign;