
import './TypePage.css'



function TypePage(props : any) { 
    return (
      <div className="typestable_page">
        <h1>{props.title}</h1>
        <div className='typestable_ctn'>
        <img id="tabletype" src="/typestable.png" alt="" />

        </div>
      </div>
    )
  }
  
  export default TypePage
  