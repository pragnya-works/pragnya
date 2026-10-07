type JsonLdProps = {
  graph: readonly object[];
};

/** Server-rendered JSON-LD. `<` is escaped so content can never close the tag. */
export function JsonLd({ graph }: JsonLdProps) {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  }).replace(/</g, "\\u003c");

  return <script type="application/ld+json">{json}</script>;
}
