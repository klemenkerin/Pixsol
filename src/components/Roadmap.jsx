import React from "react";

function Roadmap() {
    return (
        <div className="roadmap" id="roadmap">
            <div className="container">
                <h2 class="text-center width-50 margin-bottom-50">Roadmap</h2>
                <div className="RoadmapRow">
                    <div className="RoadmapCard-Root">
                        <div><h3>Open Community - 18th of October, 4pm UTC</h3></div>
                        <div><p>Open our community server with contest opportunities for an early mint pass.</p></div>
                    </div>
                    <div className="RoadmapLine">
                        <div className="RoadmapLineCenter">
                            <div className="RoadmapLineDot filled"></div>
                        </div>
                    </div>
                    <div className="RoadmapEmpty"></div>
                </div>

                <div className="RoadmapRow RoadmapRowFlip">
                    <div className="RoadmapCard-Root">
                        <div><h3>Minting session - 23rd of October, 4pm UTC</h3></div>
                        <div><p>Launch of our art sale with a fair minting process.</p></div>
                    </div>
                    <div className="RoadmapLine">
                        <div className="RoadmapLineCenter">
                            <div className="RoadmapLineDot filled"></div>
                        </div>
                    </div>
                    <div className="RoadmapEmpty"></div>
                </div>

                <div className="RoadmapRow">
                    <div className="RoadmapCard-Root">
                        <div><h3>Marketplace integration</h3></div>
                        <div><p>List our project on popular Solana NFT marketplaces.</p></div>
                    </div>
                    <div className="RoadmapLine">
                        <div className="RoadmapLineCenter">
                            <div className="RoadmapLineDot filled"></div>
                        </div>
                    </div>
                    <div className="RoadmapEmpty"></div>
                </div>

                <div className="RoadmapRow RoadmapRowFlip">
                    <div className="RoadmapCard-Root">
                        <div><h3>Rarity calculator</h3></div>
                        <div><p>We want to tell you just how rare your pixsol is with a rarity calculator integrated in our website.</p></div>
                    </div>
                    <div className="RoadmapLine">
                        <div className="RoadmapLineCenter">
                            <div className="RoadmapLineDot"></div>
                        </div>
                    </div>
                    <div className="RoadmapEmpty"></div>
                </div>

                <div className="RoadmapRow">
                    <div className="RoadmapCard-Root">
                        <div><h3>Community Outreach</h3></div>
                        <div><p>10% of all initial sales will be put into a community fund and used for a greater cause past the NFT community.</p></div>
                    </div>
                    <div className="RoadmapLine">
                        <div className="RoadmapLineCenter">
                            <div className="RoadmapLineDot"></div>
                        </div>
                    </div>
                    <div className="RoadmapEmpty"></div>
                </div>

                <div className="RoadmapRow RoadmapRowFlip">
                    <div className="RoadmapCard-Root">
                        <div><h3>Roadmap 1.0</h3></div>
                        <div><p>Release our post mint roadmap and the future purpose of Pixsol art!</p></div>
                    </div>
                    <div className="RoadmapLine">
                        <div className="RoadmapLineCenter">
                            <div className="RoadmapLineDot"></div>
                        </div>
                    </div>
                    <div className="RoadmapEmpty"></div>
                </div>
            </div>
        </div>

    );
}

export default Roadmap;