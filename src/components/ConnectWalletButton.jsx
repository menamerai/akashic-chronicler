import React, { useEffect } from 'react';
import { ThirdwebProvider, ConnectWallet, useAddress } from '@thirdweb-dev/react';

const ConnectWalletButton = () => {
    const address = useAddress();

    useEffect(() => {
        if (address) {
            const event = new CustomEvent("walletConnected", { 
                detail: { wallet: address } 
            });
            window.dispatchEvent(event);
        }
    }, [address]);

    return (
        <ConnectWallet client:only="react" theme="light" switchToActiveChain={true} />
    );
}

export default ConnectWalletButton;