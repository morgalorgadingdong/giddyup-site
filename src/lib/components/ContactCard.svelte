<form method="POST" netlify>
    <div class="mb-4">
      <input name="name" type="text" class="form-control" placeholder="Your Name" required>
    </div>
    <div class="mb-4">
      <input name="email" type="email" class="form-control" placeholder="Your Email" required>
    </div>
    <div class="mb-4">
      <select name="subject" type="text" class="form-control" placeholder="Subject" required>
        <option value="">- Inquiry type -</option>
        <option value="Consultation request (free)">Free consultation request</option>
        <option value="General question">General question</option>
        <!-- <option value="Jobs"></option>
        <option value=""></option> -->

      </select>
    </div>
    <div class="mb-4">
      <textarea name="message" class="form-control" placeholder="Optional Message" rows="4"></textarea>
    </div>
    <div class="d-grid pt-3">
      <button type="submit" class="btn btn-primary">Send Message</button>
    </div>
  </form>