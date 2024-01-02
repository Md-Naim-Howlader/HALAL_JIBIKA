const Contact = () => {
  return (
    <section>
      <div className="container">
        <div style={{ paddingTop: "50px" }} className="section__title">
          <span>CONTACT US</span>
          <h2>CONTACT US</h2>
          <p>
            Reach Out to Our Team for Job-Related Inquiries and Assistance
            Today!
          </p>
        </div>
        <div className="contact_info_form_container">
          <div className="contact__form">
            <form>
              <div>
                <div>
                  <label htmlFor="name">First Name:</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" name="lastName" id="lastName" />
                </div>
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
              </div>
              <div>
                <label htmlFor="subject">Subject:</label>
                <textarea name="" id="subject"></textarea>
              </div>
              <div>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
