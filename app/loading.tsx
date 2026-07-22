export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink">
      <div className="flex flex-col items-center gap-4">
        <div className="size-12 motion-safe:animate-spin rounded-full border-2 border-accent/20 border-t-accent" />
        <p className="text-sm font-medium text-paper/50">Loading&hellip;</p>
      </div>
    </div>
  );
}
