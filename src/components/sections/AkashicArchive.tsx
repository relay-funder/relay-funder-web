const AkashicArchive = () => {
  return (
    <section className="py-20 mesh-bg">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-solar text-background rounded-xl mb-6">
            <div className="font-medium">Coming Soon</div>
          </div>

          <h2 className="text-section-title text-text-primary mb-6 font-display">
            Akashic Archive
          </h2>

          <p className="text-subhero text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
            Creators will enhance campaigns with{' '}
            <strong className="text-quantum">exclusive digital rewards</strong> (art, music,
            cultural artifacts) minted on <strong className="text-quantum">Akashic</strong> and
            preserved via{' '}
            <a href="https://ipfs.tech/" target="_blank" rel="noopener noreferrer">
              <strong className="text-bio hover:underline">IPFS</strong>
            </a>
            —deepening engagement and safeguarding cultural memory.
          </p>

          <div className="web3-card p-8 max-w-2xl mx-auto hover-solar">
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed">
                Campaign creators can offer <strong>exclusive digital rewards</strong> — art, music,
                cultural artifacts — to supporters. These digital assets are minted on Akashic and
                preserved via{' '}
                <a
                  href="https://ipfs.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bio hover:underline"
                >
                  IPFS
                </a>
                .
              </p>

              <div className="flex items-center justify-center space-x-3 text-sm">
                <span className="text-text-muted font-mono">Stored on</span>
                <a
                  href="https://ipfs.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-bio text-background rounded-lg font-mono font-medium hover:opacity-80 transition-opacity"
                >
                  IPFS
                </a>
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
