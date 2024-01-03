import Swal from "sweetalert2";
import { contact__form } from "./contact.module.css";
const Contact = () => {
  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const subject = e.target.subject.value.trim();
    const message = e.target.message.value.trim();

    // form validation
    if (name.length < 3) {
      Swal.fire({
        icon: "warning",
        title: "Name must be at least 3 characters.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        showCloseButton: true,
      });
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid email address",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        showCloseButton: true,
      });
      return false;
    }
    if (subject.length < 5) {
      Swal.fire({
        icon: "warning",
        title: "Subject must be at least 5 characters.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        showCloseButton: true,
      });
      return false;
    }
    if (message.length < 10) {
      Swal.fire({
        icon: "warning",
        title: "Message must be at least 3 characters.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        showCloseButton: true,
      });
      return false;
    }

    Swal.fire({
      icon: "success",
      title: "Message Sent Successfully",
      toast: true,
      position: "top center",
      showConfirmButton: false,
      timer: 2000,
      showCloseButton: true,
    });

    e.target.name.value = "";
    e.target.email.value = "";
    e.target.subject.value = "";
    e.target.message.value = "";
  };
  return (
    <section>
      <div className="container">
        <div style={{ paddingTop: "30px" }} className="section__title">
          <span>CONTACT US</span>
          <h2>CONTACT US</h2>
          <p>
            Reach Out to Our Team for Job-Related Inquiries and Assistance
            Today!
          </p>
        </div>
        <div className="contact_info_form_container">
          <div className="contact__form">
            <div className="container">
              <div></div>
              <div style={{ padding: "50px 0" }}>
                <div className={contact__form}>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name">Name:</label>
                      <input autoFocus type="text" name="name" id="name" />
                    </div>
                    <div>
                      <label htmlFor="email">Email Address:</label>
                      <input type="email" name="email" id="email" />
                    </div>
                    <div>
                      <label htmlFor="subject">Subject:</label>
                      <input type="text" name="subject" id="subject" />
                    </div>
                    <div>
                      <label htmlFor="message">Message:</label>
                      <textarea name="message" id="message" rows="5"></textarea>
                    </div>

                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
