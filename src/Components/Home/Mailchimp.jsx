import React, { useState } from 'react';
import axios from 'axios';

// website URL = https://cors-anywhere.herokuapp.com/corsdemo


const Mailchimp = () => {
  // States to manage the email input, success, and error messages
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');


  // Replace with your actual Mailchimp API Key and Audience ID
  const apiKey = import.meta.env.MAILCHIMP_API_KEY;  // Your Mailchimp API Key
  const audienceId = import.meta.env.AUDIENCE_ID;  // Your Mailchimp Audience ID
  const datacenter = 'us22';  // Replace with your Mailchimp datacenter (e.g., us19, us20)

  // The Mailchimp API endpoint
  const mailchimpEndpoint = `https://${datacenter}.api.mailchimp.com/3.0/lists/${audienceId}/members/`;

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setStatus('');
    setError('');

    // Basic email validation
    if (!email) {
      setError('Please provide a valid email address.');
      return;
    }

    const data = {
      email_address: email,
      status: 'subscribed',  // Subscribe the user
    };

    // CORS proxy URL
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    try {
      // Making the POST request to the CORS proxy + Mailchimp API endpoint
      const response = await axios.post(
        `${proxyUrl}${mailchimpEndpoint}`,
        data,
        {
          headers: {
            'Authorization': `Basic ${btoa('anystring:' + apiKey)}`,
          },
        }
      );

      // If the response is successful, show a success message
      if (response.status === 200) {
        setStatus('Thank you for subscribing!');
        setEmail('');  // Clear the email input field
      }
    } catch (err) {
      setError('There was an error subscribing. Please try again later.');
      console.error('Error:', err);
    }
  };

  return (
    <div className='mt-56'>
      <h3 class="pricing-heading text-xl text-center">SomChat</h3>
      <p class="pricing-subheading text-sm text-center">Join SomChat Team any latest Features to our web App.</p>
      <div className='flex flex-wrap bg-secondary sm:rounded-lg px-6 sm:px-10 lg:px-14 my-20 md:mx-56'>
        {/* left side  */}
        <div className='flex-1 py-8 sm:py-10 lg:py-14 lg:pl-5'>
          <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
            <h2 className='sm:text-sm text-xl'>Our Newsletter</h2>
            <form onSubmit={handleSubmit} className='flex flex-wrap gap-5 py-2'>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className='text-sm text-slate-500 px-5 py-3 sm:w-[300px] w-[200px] rounded-full ml-10'
              />
              <button type="submit" className='bg-white text-sm text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Subscribe</button>
            </form>
            {status && <p style={{ color: 'green' }} className='text-sm'>{status}</p>}
            {error && <p style={{ color: 'red' }} className='text-sm'>{error}</p>}
          </div>
        </div>
        {/* right-side */}
        <div className='hidden md:block -mt-32'>
          <div>
            <iframe className='w-[30rem] h-[30rem]' src="https://lottie.host/embed/f2e2257f-6949-4e1a-a41b-1cdc1617a9cc/JrIV0lufxe.lottie"></iframe>
          </div>
          {/* <download:-> https://app.lottiefiles.com/animation/10f4271e-0d39-4ec1-a5c7-7725e1f90d2e?channel=web&source=public-animation&panel=download</download:-> */}
        </div>
      </div>


   
    </div>
  );
};

export default Mailchimp;
