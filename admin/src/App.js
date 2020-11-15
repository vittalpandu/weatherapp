import react from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import popt,{villageopt,dis} from "./Data";

import request from "superagent";

class App extends react.Component{
 
  constructor(props) {
    super(props);
    this.state = {
      district:'',
      village:'',
      purpose:'',
      message:'',
      time:'',
    };
    
    this.districtEvent = this.districtEvent.bind(this);
    this.villageEvent=this.villageEvent.bind(this);
    this.purposeEvent=this.purposeEvent.bind(this);
    this.messageEvent=this.messageEvent.bind(this);
    this.timeEvent = this.timeEvent.bind(this);
    
    this.formSubmit=this.formSubmit.bind(this);
  }
    
  
  districtEvent(e) {
    this.setState({
      district: e.target.value,
     });
  }
  villageEvent(e){
    this.setState({
      village:e.target.value,
    })
  }
  purposeEvent(e){
    this.setState({
      purpose:e.target.value,
    })
  }
  messageEvent(e){
    this.setState({
      message:e.target.value,
    })
  }
  
  timeEvent(e) {
   
    this.setState({
       time:e.target.value,
      });
  }


  formSubmit(ev) {
   ev.preventDefault();
   console.log(this.state);
   
   request
   .post('http://localhost:5000/sendmsg')
   .send(this.state)
   .set('Accept', 'application/json')
   .end((err, res) => {
     if (err || !res.ok) {
       console.log('Oh no! error');
     } else {
       console.log('Success');
     }
   });      

  }
 render(){
  return (
    <>  
    <div className='whole'>
      <div className="container">
        <div className="row ">
          <div className="col-md-5 col-10 mx-auto res">
         
      <form onSubmit={this.formSubmit}>
           <div className="lab">
           <label className="my-3 ">Gramin Digital Bandhu</label><br/>
           
           </div>
          <div className="mb-3 mx-5">
            <label className="form-label colo" >Purpose <span style={{color:"red",fontSize:"20px"}}>*</span></label>
            <select required className="form-control" value={this.state.purpose} onChange={this.purposeEvent}>
            <option value="" disabled selected>Choose option</option>
            {popt.map((popt) => (
              <option value={popt}>{popt}</option>
            ))}
             </select>
          </div>

                <div className="mb-3 mx-5"> 
              <label className="form-label colo">District <span style={{color:"red",fontSize:"20px"}}>*</span></label>
              <select required className="form-control" value={this.state.district} onChange={this.districtEvent}>
              <option value="" disabled selected>Choose option</option>
                {dis.map((dis) => (
              <option value={dis}>{dis}</option>
                 ))}
                </select>
              </div>

              <div className="mb-3 mx-5">
                <label className="form-label colo">Village <span style={{color:"red",fontSize:"20px"}}>*</span></label>
                <select required className="form-control" value={this.state.village} onChange={this.villageEvent}>
                <option value="" disabled selected>Choose option</option>
                {villageopt.map((villageopt) => (
              <option value={villageopt}>{villageopt}</option>
                 ))}
                </select>
              </div>


              <div className="mb-3 mx-5">
                <label className="form-label colo">Time <span style={{color:"red",fontSize:"20px"}}>*</span></label>
                <input
                required
                  className="form-control"
                  type="time"
                  name="time"
                  
                  onChange={this.timeEvent}
                  value={this.state.time}
                />
              
              </div>
              
              <div className="mb-3 mx-5">
                <label className="form-label colo">Message</label>
                <textarea
                  className="form-control"
                  type="text"
                  name="villagename"
                  onChange={this.messageEvent}
                  value={this.state.message}
                  placeholder="Enter message"
                />
              </div>
 
              <div className="mt-4 bma">
                
                <button type="submit" className="perb">
                  Send Message
                </button></div>
              
            </form>
            </div>
            </div>
            </div>
            </div>
    </>
  );}
};
 
export default App;