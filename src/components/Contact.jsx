import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container py-5 mx-auto">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Contact Us</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container py-5 mx-auto">
            <div className="col-12">
                        <form >
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder=""/>
</div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                                <button type="submit" class="btn btn-outline-primary">submit</button>
                        </form>
                    </div>
                    </div>
        </div>
    )
}

export default Contact
