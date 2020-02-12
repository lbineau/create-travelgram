import dotenv from 'dotenv'
import GitHub from 'github-api'

const gh = new GitHub({
  auth: 'c773b5f632fa4dd0aff80faf380772dd606e8b3a'
})


dotenv.config()

exports.handler = async (param, context) => {
  const repo = await gh.getRepo('lbineau', 'create-travelgram')
  return repo.createBranch('master', 'travelgram')
}
