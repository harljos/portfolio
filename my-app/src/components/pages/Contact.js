import React from "react";

function Contact() {
    return(
        <div className="container">
            <form>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input class="form-control"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Message</label>
                    <input class="form-control"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contact;