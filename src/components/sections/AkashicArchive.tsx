const AkashicArchive = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-solar text-background rounded-xl mb-6">
            <div className="font-medium">Coming Soon</div>
          </div>
          
          <h2 className="text-section-title text-text-primary mb-6 font-display">
            Akashic Archive
          </h2>
          
          <p className="text-subhero text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
            Creators will enhance campaigns with <strong className="text-quantum">exclusive digital rewards</strong> (art, music, cultural artifacts) 
            minted on <strong className="text-quantum">Akashic</strong> and preserved via <strong className="text-bio">IPFS</strong>—deepening engagement 
            and safeguarding cultural memory.
          </p>

          <div className="web3-card p-8 max-w-2xl mx-auto hover-solar">
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed">
                Campaign creators can offer <strong>exclusive digital rewards</strong> — art, music, cultural artifacts — 
                to supporters. These digital assets are minted on Akashic and preserved via IPFS.
              </p>
              
              <div className="flex items-center justify-center space-x-3 text-sm">
                <span className="text-text-muted font-mono">Stored on</span>
                <span className="px-3 py-1 bg-bio text-background rounded-lg font-mono font-medium">IPFS</span>
                <span className="text-text-muted font-mono">Permanent Storage</span>
              </div>
            </div>
          </div>

          {/* <a
            href="#"
            className="btn-ghost mt-6 inline-flex items-center"
            
          >
            Learn more about digital rewards
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default AkashicArchive;