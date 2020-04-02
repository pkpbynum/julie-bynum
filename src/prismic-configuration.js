export const linkResolver = doc => {
  // URL for a category type

  if (doc.type === 'Research_proposal') {
    return `/category/${doc.uid}`
  }

  // Backup for all other types
  return '/'
}
