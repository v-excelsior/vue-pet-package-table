export const preparePackageInfo = packageInfo => {
  if(!packageInfo){
    return {
      error: "We could not find info about this package"
    }
  }

  if (packageInfo._highlightResult) {
    delete packageInfo._highlightResult
  }

  packageInfo.owner = packageInfo.owner.link
  packageInfo.repository = packageInfo.owner.url

  packageInfo.githubUser = packageInfo.githubRepo?.user
  delete packageInfo.githubRepo

  packageInfo.created = new Date(packageInfo.created).toLocaleDateString()

  for (const property in packageInfo) {
    if (!packageInfo[property]) {
      delete packageInfo[property]
    }
  }

  return packageInfo
}