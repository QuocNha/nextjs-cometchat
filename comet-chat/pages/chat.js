import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// const CometChatNoSSR = dynamic(() => import('../pages/CometChatNoSSR'), { ssr: false });
const LoginNoSSR = dynamic(() => import('../pages/Login'), { ssr: false });

function Chat() {
  useEffect(() => {
    window.CometChat = require('@cometchat-pro/chat').CometChat;
  });

  return (
    <div>
      {/* <CometChatNoSSR /> */}
      <LoginNoSSR />
    </div>
  );
}

export { Chat };
