export const staticOptions = {
  page: 1,
  hitsPerPage: 10,
  attributesToRetrieve: [
    'name',
    'description',
    'version',
    'githubRepo.user',
    'homepage'
  ],
  analyticsTags: ['jsdelivr']
}

export const extendedAttributes = [
  ...staticOptions.attributesToRetrieve,
  'downloadsLast30Days',
  'repository.url',
  'owner.link',
  'license',
  'created'
]
