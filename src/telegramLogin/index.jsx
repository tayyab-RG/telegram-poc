import React, { useEffect, useRef } from 'react';
import createScript from './createScript';

/**
 * It takes an object with a bunch of properties and assigns it to the global variable
 * `TelegramAuthLogin`
 *
 * @param {TTelegramAuthLogin} options - The options to set on the global variable.
 */
function initTelegramAuthLogin(options) {
  window.TelegramAuthLogin = options;
}

/**
 * A React component that renders a Telegram login button.
 *
 * @see https://core.telegram.org/widgets/login
 *
 * @param {LoginButtonProps} props The props to pass to the component.
 * @returns A React component that renders the Telegram login button.
 */
export default function LoginButton(props) {
  const hiddenDivRef = useRef(null);
  const scriptRef = useRef();
  const { onAuthCallback } = props;

  useEffect(() => {
    // destroy the existing script element
    scriptRef.current?.remove();

    // init the global variable
    initTelegramAuthLogin({ onAuthCallback });

    // create a new script element and save it
    scriptRef.current = createScript(props);

    // add the script element to the DOM
    hiddenDivRef.current?.after(scriptRef.current);
  }, [onAuthCallback, props]);

  return <div ref={hiddenDivRef} hidden />;
}
