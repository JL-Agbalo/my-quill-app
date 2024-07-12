export function generateSlug(title) {
    const slug = title
      .toLowerCase() // Convert to lowercase
      .trim() // Remove leading and trailing whitespace
      .replace(/[^a-zA-Z0-9\s]/g, '') // Remove non-word characters
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .replace(/^-+|-+$/g, '') // Remove leading and trailing dashes
      .replace(/-+/g, '-'); // Replace multiple dashes with single dash
  
    return slug;
  }
  