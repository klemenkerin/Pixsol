import React from "react";

function FAQ() {

    return (
        <div className="faq" id="faq">
            <div className="container">
                <h2 class="text-center width-50">FAQ</h2>
                <div class="flex-container margin-top-50">
                    <div class="question">
                        <h3>What is Pixsol?</h3>
                        <p>Pixsol is generative abstract art collection with 128 pieces stored as an NFT on the Solana blockchain.</p>
                    </div>
                    <div class="question">
                        <h3>When is the mint date?</h3>
                        <p>Pixsol will launch on 23rd of October, 4pm UTC.</p>
                    </div>
                    <div class="question">
                        <h3>Which Solana wallets can I use to mint?</h3>
                        <p>You can use Phantom, Sollet or Solflare wallet. We recommend using Phantom wallet.</p>
                    </div>
                    <div class="question">
                        <h3>How much will it cost to mint a Pixsol?</h3>
                        <p>1 SOL</p>
                    </div>
                    <div class="question">
                        <h3>Is there a limit on how many we can get?</h3>
                        <p>You can only mint one Pixsol per wallet.</p>
                    </div>
                    <div class="question">
                        <h3>Is a Pixsol more than abstract art?</h3>
                        <p>Join our discord for future updates on our arts utility.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FAQ;