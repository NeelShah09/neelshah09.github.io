const OpportunitiesCard = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-0 max-w-6xl">
        <div className="glass-card p-6 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold subsection-heading mb-1">Open to Opportunities</h3>
            <p className="text-sm text-muted-foreground">Actively exploring full-time roles in Data Science, ML Engineering, and AI.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">Data Scientist</span>
            <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">ML Engineer</span>
            <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">AI Engineer</span>
            <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">Data Engineer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesCard;


