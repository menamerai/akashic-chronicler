import React from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import ConnectWalletButton from './ConnectWalletButton';

const ThirdwebWrapper = () => {
    return (
        <ThirdwebProvider client:only="react" clientId="9875e3366bd40304ebf564dd6f237a98" activeChain="goerli">
          <ConnectWalletButton />
        </ThirdwebProvider>
    );
}

export default ThirdwebWrapper;