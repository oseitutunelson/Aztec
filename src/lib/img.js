// Helper to build optimized Unsplash URLs from a photo id.
export function unsplash(id, { w = 1200, q = 70 } = {}) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`
}
