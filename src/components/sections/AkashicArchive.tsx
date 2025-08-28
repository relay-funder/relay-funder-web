const AkashicArchive = () => {
  return (
    <section className="py-20">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-6">
            Coming Soon
          </div>
          
          <h2 className="text-section-title text-text-primary mb-6">
            Akashic Archive
          </h2>
          
          <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
            Creators will enhance campaigns with <strong>exclusive digital rewards</strong> (art, music, cultural artifacts) 
            minted on <strong>Akashic</strong> and preserved via <strong>IPFS</strong>—deepening engagement 
            and safeguarding cultural memory.
          </p>

          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-6 mb-6">
              {['Art', 'Music', 'Stories'].map((type, index) => (
                <div
                  key={type}
                  className="bg-surface rounded-lg p-4 kinetic-wobble"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="w-8 h-8 bg-accent/20 rounded-lg mb-2 mx-auto"></div>
                  <p className="text-sm text-text-muted">{type}</p>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-text-muted">
              <span>Preserved on</span>
              <span className="px-2 py-1 bg-accent/10 text-accent rounded font-medium">IPFS</span>
              <span>for generations</span>
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