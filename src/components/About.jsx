import React from 'react'

const About = () => {
    return (
        <div>
            <div className="container py-5 mx-auto">
                <div className="row">
                    <div className="col-12 text-center" >
                        <h1>Apple Repair</h1>
                        <p style={{paddingTop:7,paddingLeft:50,paddingRight:50,paddingBottom:7}}>We’re here to help. Apple-certified repairs are performed by trusted experts who use genuine Apple parts. Only Apple-certified repairs are backed by Apple. Whichever option you choose, you’ll get your product back working exactly the way it should.</p>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                <div class="card my-5 py-4" style={{width: "20rem"}}>
                    <img src="/assets/images/sp1.png" alt="support" />
            <div class="card-body text-center">
              <h5 class="card-title">Send your product to Apple</h5>
              <p className="lead" style={{fontSize:'16px'}}>Online or over the phone, we'll arrange shipment for your product to an Apple Repair Center — all on your schedule and without an appointment. This service is available for most Apple products.</p>
            </div>
          </div>
                <div class="card my-5 py-4" style={{width: "20rem"}}>
                    <img src="/assets/images/sp2.png" alt="support" />
            <div class="card-body text-center">
              <h5 class="card-title">Find an Apple Authorized Service Provider</h5>
              <p className="lead" style={{fontSize:'16px'}}>Our network of Apple Authorized Service Providers give you lots of convenient locations for Apple repairs. In some areas, you can even schedule a technician to perform an iPhone screen repair at your home or office. 

</p>
            </div>
          </div>
                    <div class="card my-5 py-4" style={{width: "20rem"}}>
                        <img src="/assets/images/sp3.png" alt="support" />
                <div class="card-body text-center">
                <h5 class="card-title">Send your product to Apple</h5>
                <p className="lead" style={{fontSize:'16px'}}>You can do more than shop and learn in an Apple Store. Start a repair request below to make a reservation with a Genius to get help with a hardware repair.

</p>
                </div>
            </div>
               
                </div>
            </div>

 
            
        </div>
    )
}

export default About
