export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-accent-gold/20 border-t-accent-gold rounded-full animate-spin" />
        <p className="text-white/50 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}
