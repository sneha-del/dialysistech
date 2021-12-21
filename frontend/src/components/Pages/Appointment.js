import React,{useState} from "react";


const Appointment = () => {



  const [data, setData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    message: "",
  })

  const { date, time, name,  phone, message } = data; 

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch( "https://v1.nocodeapi.com/vikasnarwariya/google_sheets/mawZghuqeJsNDxky?tabId=Sheet2",
      {
                          method: "post",
                           body: JSON.stringify([[ date, time, name,  phone, message, new Date().toLocaleString()]]),
                           headers: {
                               "Content-Type": "application/json"
                           }
                       }
        
      );
      await response.json();
      setData({ ...data, date: "", time: "", name: "", phone: "", message: ""});
    } catch (err) {
      console.log(err)
    }
  }


    return (
        <div>
      <section className="page-title bg-1">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Book Bed</span>
                <h1 className="text-capitalize mb-5 text-lg">Book Appointment</h1>
                
              </div>
            </div>
          </div>
        </div>
      </section>
     

<section className="appoinment section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mt-3">
                <div className="feature-icon mb-3">
                  <i className="icofont-support text-lg" />
                </div>
                <span className="h3">Call for an Emergency Service!</span>
                <h2 className="text-color mt-3">+919644705777 </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                <h2 className="mb-2 title-color">Book an appoinment</h2>
                <p className="mb-4">Assisting Our Patients And Their Families In Getting Back To What Really Matters.</p>
                <form id="#" className="appoinment-form" method="post" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        {/* <select className="form-control" id="exampleFormControlSelect1">
                          <option>Choose Department</option>
                          <option>Dialysis</option> */}
                          {/* <option>Development cycle</option>
                          <option>Software Development</option>
                          <option>Maintenance</option>
                          <option>Process Query</option>
                          <option>Cost and Duration</option>
                          <option>Modal Delivery</option> */}
                        {/* </select> */}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        {/* <select className="form-control" id="exampleFormControlSelect2">
                          <option>Select Doctors</option>
                          <option>Dr. Abhinay Singh</option> */}
                          {/* <option>Development cycle</option>
                          <option>Software Development</option>
                          <option>Maintenance</option>
                          <option>Process Query</option>
                          <option>Cost and Duration</option>
                          <option>Modal Delivery</option> */}
                        {/* </select> */}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group" >
                        <input name="date" id="date" type="date" className="form-control" placeholder="Dialysis Date" onChange={handleChange} value={date} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="time" id="time" type="time" className="form-control" placeholder="Dialysis Time" onChange={handleChange} value={time}/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="name" id="name" type="text" className="form-control" placeholder="Patient Name" onChange={handleChange} value={name}/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="phone" id="phone" type="Number" className="form-control" placeholder="Phone Number" onChange={handleChange} value={phone}/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group-2 mb-4">
                    <textarea name="message" id="message" className="form-control" rows={6} placeholder="Your Message" defaultValue={""} onChange={handleChange} value={message} />
                  </div>
                  <button className="btn btn-main btn-round-full" name="submit" type="submit" 
                  defaultValue="Send Messege">Make Appoinment</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
    )
}

export default Appointment
