'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { ToastContext } from '../../../../components/ToastProvider';

function ContactPage() {
  let { createToast } = React.useContext(ToastContext);
  const navigate = useRouter();

  function handleSendMessage(e) {
    e.preventDefault();

    createToast(
      "Your message was received. We'll get back to you shortly!",
      "success"
    )
    navigate.push('/exercises/02-flash-messages')
  }

  return (
    <main>
      <form onSubmit={handleSendMessage}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
