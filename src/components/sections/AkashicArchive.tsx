const AkashicArchive = () => {
  return (
    <section className="py-20">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-6 text-display-quirky">
            Coming Soon
          </div>
          
          <h2 className="text-section-title text-text-primary mb-6">
            <span className="text-display-quirky">Akashic Archive</span>
          </h2>
          
          <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto text-body-serif">
            Creators will enhance campaigns with <strong className="text-accent">exclusive digital rewards</strong> (art, music, cultural artifacts) 
            minted on <strong className="text-accent">Akashic</strong> and preserved via <strong className="text-accent">IPFS</strong>—deepening engagement 
            and safeguarding cultural memory.
          </p>

          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed">
                Campaign creators can offer <strong>exclusive digital rewards</strong> — art, music, cultural artifacts — 
                to supporters. These digital assets are minted on Akashic and preserved via IPFS.
              </p>
              
              <div className="flex items-center justify-center space-x-3 text-sm">
                <span className="text-text-muted">Preserved on</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded font-medium">IPFS</span>
                <span className="text-text-muted">for generations</span>
              </div>
            </div>
          </div>

          <a
            href="#"
            className="btn-minimal mt-6 inline-flex items-center"
          >
            Learn more about digital rewards
          </a>
        </div>
      </div>
    </section>
  );
};

export default AkashicArchive;