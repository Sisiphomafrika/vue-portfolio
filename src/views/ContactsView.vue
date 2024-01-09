<template>
    <div class="contacts">
      <section class="contact-section flex-1 d-flex align-content-center justify-center">
                <h1 class="section-title">CONTACTS</h1>
                <div class="form-container">
                    <form action="https://formspree.io/f/mdorjkae" method="POST" class="contact-form">
                        <div class="form-group">
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label for="country">Country</label>
                            <select id="country" name="country" class="form-input" required>
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                <option value="lesotho">Lesotho</option>
                                <option value="RSA">RSA</option>
                                <option value="china">CHINA</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." class="form-textarea" style="height:200px" required></textarea>
                        </div>
                        <button type="submit" class="form-button">Submit</button>
                    </form>
                </div>
            </section>   
    </div>
  </template>
   <style>
   .contact-section {
    
    padding: 40px;
    text-align: center;
}

.section-title {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
}

.form-container {
    max-width: 400px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
    text-align: left;
}

.form-label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
}

.form-input,
.form-textarea,
.form-select {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.form-button:hover {
    background-color: #45a049;
}
  </style>
  
 